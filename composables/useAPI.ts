import { AsyncData, UseFetchOptions } from 'nuxt/dist/app';
import { FetchOptions } from 'ofetch';

// CORE
const defaultRequest = () => {
  const config = useRuntimeConfig();

  return {
    baseURL: config.public.api_url,
    credentials: 'include' as RequestCredentials,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-antelopejs-namespace': config.public.datatable_namespace,
      'x-antelopejs-webauth': useCookie(config.public.cookie_name).value || '',
    },
    body: {},
  };
};
export type Options<T = any> = UseFetchOptions<T> | FetchOptions<any>;

interface UseFetchParams<T, U extends any[]> {
  prefix?: (url: string, opts: Options<T>, ...args: U) => any;
}

class UseFetch<T, U extends any[] = []> {
  useFetch = 0;
  prefix?: any;

  constructor(opts?: UseFetchParams<T, U>) {
    if (opts?.prefix) {
      this.prefix = opts!.prefix;
    }
  }

  async func(url: string, opts: UseFetchOptions<T>, ...args: any) {
    let request = { url, ...defaultRequest(), ...opts, ...args };
    if (this.prefix) {
      request = await this.prefix(request.url, request);
    }
    return await useFetch(request.url, { ...request });
  }
}

interface UseLazyFetchParams<T, U extends any[]> {
  prefix?: (url: string, opts: Options<T>, ...args: U) => any;
}

class UseLazyFetch<T, U extends any[] = []> {
  useFetch = 0;
  prefix?: any;

  constructor(opts?: UseLazyFetchParams<T, U>) {
    if (opts?.prefix) {
      this.prefix = opts!.prefix;
    }
  }

  async func(url: string, opts: UseFetchOptions<T>, ...args: any) {
    let request = { url, ...defaultRequest(), ...opts, ...args };
    if (this.prefix) {
      request = await this.prefix(request.url, request);
    }
    return await useLazyFetch(request.url, { ...request });
  }
}

interface FetchParams<T, U extends any[]> {
  prefix?: (url: string, opts: Options<T>, ...args: U) => any;
  postfix?: (opts: Options<T>, ...args: U) => any;
}
class Fetch<T, U extends any[] = []> {
  $fetch = 0;
  prefix?: any;
  postfix?: any;

  constructor(opts?: FetchParams<T, U>) {
    if (opts?.prefix) {
      this.prefix = opts!.prefix;
      this.postfix = opts!.postfix;
    }
  }

  async func(url: string, opts: UseFetchOptions<T>, ...args: any) {
    const request = { url, ...defaultRequest(), ...opts, ...args };

    if (this.prefix) {
      await this.prefix(request.url, request, ...args);
    }
    request.response = await $fetch(request.url, { ...request });
    if (this.postfix) {
      await this.postfix(request);
    }
    return request.response;
  }
}

type Convert<T> = T extends UseFetch<infer U>
  ? (opts: FetchOptions) => Promise<U>
  : T extends Fetch<infer U2, infer P>
  ? (opts: FetchOptions, ...params: P extends any[] ? P : never) => Promise<U2>
  : {
      [K in keyof T]: Convert<T[K]>;
    };

const makeAPI: (url: string, target: any) => any = (url: string, target) => {
  return new Proxy(
    (opts: any) => {
      return target.func(url, opts);
    },
    {
      get: function (_, key, receiver) {
        return makeAPI(`${url}/${key as string}`, target[key]);
      },
    },
  );
};

// ROUTES
const routes = {
  exemple: {
    fetch: new Fetch<any>({}),
    fetchPrefixPostfix: new Fetch<any>({
      prefix: (url: string, opts: any) => getAuthorization(url, opts, 'image/'),
      postfix: (opts: any) => opts,
    }),
    lazyFetch: new UseLazyFetch<AsyncData<any, Error>>({}),
  },
  custom: {
    fetch: new Fetch<any>({
      prefix: (_, opts: any) => useCustomMethod(opts),
    }),
  },
};

// METHODS
const getAuthorization = async (url: string, params: any, mimetype: string) => {
  if (!params.body.data.file) return { ...params, url };

  const config = useRuntimeConfig();

  const data = await $fetch<any>(url, { ...params });
  params.url = data.ticket || data;
  params.data = data;
  params.baseURL = config.public.cdn_url;
  params.headers = { ...defaultRequest().headers, 'Content-Type': mimetype };
  params.body = params.body.data.file;
};

const useCustomMethod = (params: any) => {
  params.url = params.body.url;
  params.headers = { ...defaultRequest().headers };
};

// EXPORTS
export const useAPI = () => makeAPI('', routes) as Convert<typeof routes>;

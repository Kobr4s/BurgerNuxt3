import svgLoader from 'vite-svg-loader';
import { config } from './core';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // https://v3.nuxtjs.org/api/configuration/nuxt.config#app
  app: {
    head: {
      title: 'Antelope Nuxt 3 Tailwind Tempalte',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: 'AntelopeJS Nuxt 3 Tailwind Template',
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      api_url: config.api_url,
      cdn_url: config.cdn_url,
      cookie_name: config.cookie_name,
      datatable_namespace: config.datatable_namespace,
    },
  },

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#components
  components: {
    dirs: [
      {
        path: '@/components',
        global: false,
        pathPrefix: false,
        watch: true,
      },
      {
        path: '@/components/global',
        global: true,
      },
    ],
  },

  css: ['@/assets/scss/main.scss'],

  // https://v3.nuxtjs.org/api/configuration/nuxt.config#modules
  modules: [
    '@nuxt/devtools',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-icon',
  ],

  build: {
    transpile: ['@headlessui/vue'],
  },

  // vite config https://v3.nuxtjs.org/api/configuration/nuxt-config#vite
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
        defaultImport: 'component',
      }),
    ],
  },

  // Config I18n https://v8.i18n.nuxtjs.org
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    lazy: true,
    langDir: 'lang',
    locales: [
      {
        code: 'fr',
        file: 'fr-FR.json',
        name: 'Français',
        iso: 'fr',
        flag: 'flagpack:fr',
      },
      {
        code: 'en',
        file: 'en-US.json',
        name: 'English',
        iso: 'us',
        flag: 'flagpack:us',
      },
    ],
    vueI18n: {
      legacy: false,
      fallbackLocale: 'en',
    },
  },

  // Config Color Mode https://color-mode.nuxtjs.org/
  colorMode: {
    preference: 'system', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },

  // Config Google Font https://google-fonts.nuxtjs.org
  googleFonts: {
    families: {
      Inter: true,
    },
  },
});

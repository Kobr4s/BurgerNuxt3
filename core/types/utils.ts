import { RouteLocationRaw } from 'vue-router';

export interface Config {
  url: string;
  api_url: string;
  cdn_url: string;
  datatable_namespace: string;
  cookie_name: string;
}

export interface DataTable<T = any> {
  results: T[];
  total: number;
  offset: number;
  count: number;
}

// Input formats Type
export interface SelectOption {
  value: any;
  label: string;
  disabled?: boolean;
}
export interface Phone {
  dialCode?: string;
  iso2?: string;
  name?: string;
  value: any;
}
export interface TimePicker {
  hours: number;
  minutes: number;
  seconds: number;
}
export interface FileModelValue {
  files: File[];
  data: {
    name?: string;
    size?: number;
    type?: string;
    preview: string;
  }[];
}

// Others
export interface BreadcrumbItem {
  label: string;
  to: RouteLocationRaw;
  current?: boolean;
}

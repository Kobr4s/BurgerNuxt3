// Composables

export interface NotifyOptions {
  message: string;
  title?: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
  timeout?: number;
  position?:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
  showCloseButton?: boolean;
  showIcon?: boolean;
}

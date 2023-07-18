export interface AlertOptions {
  text: string;
  title?: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'default';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: boolean;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
}

export interface AlertOptionsOptional extends Omit<AlertOptions, 'text'> {
  text?: string;
}

export interface AlertResult {
  isConfirmed: boolean;
  isDismissed: boolean;
  value: boolean;
}

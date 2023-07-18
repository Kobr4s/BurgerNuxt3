import { h, render } from 'vue';
import { AlertOptions, AlertOptionsOptional, AlertResult } from '@/core';
import AlertComponent from '@/components/layout/Alert.vue';

export const useAlert = () => {
  const DEFAULT_OPTIONS: AlertOptions = {
    text: 'This is an alert',
    type: 'default',
    icon: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    showCancelButton: true,
    showConfirmButton: true,
    size: 'md',
  };

  /**
   * Render a component to a given element
   *
   * @param component a Vue component to render
   * @param props props to pass to the component
   * @returns promise that resolves to the result of the alert
   */
  const createComponent = (
    component: any,
    props: AlertOptions,
  ): Promise<AlertResult> => {
    return new Promise((resolve) => {
      const wrapper = document.querySelector('body');
      const container = document.createElement('div');
      container.classList.add('v-alert');

      const vNode = h(component, {
        ...props,
        onConfirm: (e: any) => resolve(e),
      });
      wrapper!.appendChild(container);
      render(vNode, container);
    });
  };

  /**
   * Show an alert
   *
   * @param options alert options
   * @returns promise that resolves to the result of the alert
   */
  const open = (rawOptions: AlertOptions) => {
    const options = {
      ...DEFAULT_OPTIONS,
      ...rawOptions,
    };
    return createComponent(AlertComponent, options);
  };

  /**
   * Show a success alert with
   *
   * @param message message to show in the alert
   * @param options alert options
   * @returns promise that resolves to the result of the alert
   */
  const success = (message: string, options?: AlertOptionsOptional) => {
    return open({
      ...options,
      text: message,
      type: 'success',
    });
  };

  /**
   * Show an error alert with
   *
   * @param message message to show in the alert
   * @param options alert options
   * @returns promise that resolves to the result of the alert
   */
  const error = (message: string, options?: AlertOptionsOptional) => {
    return open({
      ...options,
      text: message,
      type: 'error',
    });
  };

  /**
   * Show a warning alert with
   *
   * @param message message to show in the alert
   * @param options alert options
   * @returns promise that resolves to the result of the alert
   */
  const warning = (message: string, options?: AlertOptionsOptional) => {
    return open({
      ...options,
      text: message,
      type: 'warning',
    });
  };

  /**
   * Show an info alert with
   *
   * @param message message to show in the alert
   * @param options alert options
   * @returns promise that resolves to the result of the alert
   */
  const info = (message: string, options?: AlertOptionsOptional) => {
    return open({
      ...options,
      text: message,
      type: 'info',
    });
  };

  return { open, success, error, warning, info };
};

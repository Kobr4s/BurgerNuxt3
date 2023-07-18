import { h, render } from 'vue';
import { NotifyOptions } from '@/core';
import NotifComponent from '@/components/layout/Notification.vue';

export const useNotify = () => {
  const DEFAULT_OPTIONS: NotifyOptions = {
    message: 'Hello World',
    type: 'default',
    timeout: 5000,
    position: 'bottom-right',
    showCloseButton: false,
    showIcon: false,
  };

  /**
   * Render a component to a given element
   *
   * @param component a Vue component to render
   * @param props props to pass to the component
   * @param position the container possition "bottom - top"
   * @param slots slots to pass to the component
   */
  const createComponent = (
    component: any,
    props: any,
    position: string,
    slots = {},
  ) => {
    let parentNode = document.querySelector('.v-notify.v-notify--' + position);
    if (!parentNode) {
      parentNode = document.createElement('div');
      parentNode.classList.add('v-notify', 'v-notify--' + position);
      const childContainerNode = document.createElement('div');
      childContainerNode.classList.add('v-notify__container');
      parentNode.appendChild(childContainerNode);
      document.body.appendChild(parentNode);
    }

    const vNode = h(component, props, slots);
    const wrapper = parentNode.firstElementChild;
    const container = document.createElement('div');

    container.classList.add('v-notify--pending');
    wrapper!.appendChild(container);
    render(vNode, container);

    return vNode.component;
  };

  /**
   * Create a notification
   *
   * @param options Notification options
   */
  const fire = (options: NotifyOptions) => {
    const propsData = {
      ...DEFAULT_OPTIONS,
      ...options,
    };

    createComponent(
      NotifComponent,
      propsData,
      propsData.position!.includes('top') ? 'top' : 'bottom',
    );
  };

  /**
   * Create an error notification
   *
   * @param message Message to display
   * @param options Notification options
   */
  const error = (message: string, options?: Omit<NotifyOptions, 'message'>) => {
    fire({
      type: 'error',
      showIcon: true,
      ...options,
      message,
    });
  };

  /**
   * Create a success notification
   *
   * @param message Message to display
   * @param options Notification options
   */
  const success = (
    message: string,
    options?: Omit<NotifyOptions, 'message'>,
  ) => {
    fire({
      type: 'success',
      showIcon: true,
      ...options,
      message,
    });
  };

  /**
   * Create a warning notification
   *
   * @param message Message to display
   * @param options Notification options
   */
  const warning = (
    message: string,
    options?: Omit<NotifyOptions, 'message'>,
  ) => {
    fire({
      type: 'warning',
      showIcon: true,
      ...options,
      message,
    });
  };

  /**
   * Create an info notification
   *
   * @param message Message to display
   * @param options Notification options
   */
  const info = (message: string, options?: Omit<NotifyOptions, 'message'>) => {
    fire({
      type: 'info',
      showIcon: true,
      ...options,
      message,
    });
  };

  return { fire, error, success, warning, info };
};

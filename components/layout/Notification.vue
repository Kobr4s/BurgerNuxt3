<template lang="pug">
transition(
  enter-active-class='transition duration-300 ease-out transform'
  enter-from-class='translate-y-2 opacity-0 sm_translate-y-0 sm_translate-x-2'
  enter-to-class='translate-y-0 opacity-100 sm_translate-x-0'
  leave-active-class='transition duration-100 ease-in'
  leave-from-class='opacity-100'
  leave-to-class='opacity-0'
)
  .pointer-events-auto.w-full.max-w-sm.overflow-hidden.rounded-lg.bg-notify-bg.border.shadow-lg.ring-1.ring-black.ring-opacity-5.mb-4(
    v-show='isActive'
    :class='classes'
    ref='notificationRef'
    role='alert'
  )
    .p-4
      .flex.items-center
        .flex.flex-shrink-0(v-if='showIcon')
          Suspense
            Icon.w-6.h-6(
              :name='type ? icon[type] : icon.default'
              :style='`color: var(--${type})`'
            )
        .w-0.flex-1.justify-between(:class='{ "ml-3": showIcon }')
          p.text-sm.font-semibold {{ title }}
          p.text-sm {{ message }}
        .ml-4.flex.flex-shrink-0
          button.inline-flex.rounded-md.text-gray-400.hover_text-gray-500(
            v-if='showCloseButton'
            type='button'
            @click='dismiss'
          )
            span.sr-only Close
            Icon.w-6.h-6.mr-2(name='heroicons:x-mark')
</template>

<script setup lang="ts">
interface Props {
  message: string;
  title?: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'default';
  timeout: number;
  position:
    | 'top-left'
    | 'top-right'
    | 'top-center'
    | 'bottom-left'
    | 'bottom-right'
    | 'bottom-center';
  showCloseButton: boolean;
  showIcon: boolean;
}

const props = defineProps<Props>();

const isActive = ref(false);
const notificationRef = ref<Element | null>();
const container = ref<Element | null>();
const interval = ref();

const icon = {
  error: 'heroicons:exclamation-circle',
  success: 'heroicons:check-circle',
  warning: 'heroicons:exclamation-triangle',
  info: 'heroicons:information-circle',
  default: 'heroicons:information-circle',
};

const classes = {
  'self-start': props.position.includes('left'),
  'self-center': props.position.includes('center'),
  'self-end': props.position.includes('right'),
};

onBeforeMount(() => {
  setupContainer();
});

onMounted(() => {
  showNotice();
});

const setupContainer = () => {
  // Get the container element
  const position = props.position.includes('top') ? 'top' : 'bottom';
  container.value = document.querySelector(
    '.v-notify.v-notify--' + position + ' .v-notify__container',
  );
};

const showNotice = () => {
  // Remove the temp wrapper (need for multiple notifications)
  if (!notificationRef.value || !container.value) return;
  const wrapper = notificationRef.value.parentElement;
  container.value.insertAdjacentElement('afterbegin', notificationRef.value);
  wrapper!.remove();

  isActive.value = true;
  interval.value = setTimeout(() => {
    dismiss();
  }, props.timeout);
};

const dismiss = () => {
  isActive.value = false;
  clearTimeout(interval.value);

  // Timeout for the animation complete before destroying
  setTimeout(() => {
    notificationRef.value!.remove();
  }, 100);
};
</script>

<style lang="scss">
.v-notify {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem 1rem;
  pointer-events: none;
  @apply sm_items-start;
  @apply sm_p-6;
  &__container {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    &--left {
      @apply sm_items-start;
    }
    &--right {
      @apply sm_items-end;
    }
    &--center {
      @apply sm_items-center;
    }
  }
  &--bottom {
    .v-notify__container {
      @apply sm_justify-end;
    }
  }
}
</style>

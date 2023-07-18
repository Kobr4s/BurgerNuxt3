<template lang="pug">
TransitionRoot(:show='modelValue' appear as='template')
  Dialog.relative.z-10(as='div' @close='toggleModal(false)')
    TransitionChild(
      as='template'
      enter='ease-out duration-300'
      enter-from='opacity-0'
      enter-to='opacity-100'
      leave='ease-in duration-200'
      leave-from='opacity-100'
      leave-to='opacity-0'
    )
      .fixed.inset-0.transition-opacity.bg-black.bg-opacity-50.backdrop-blur-sm(
        @click='toggleModal(false)'
      ).
    .fixed.inset-0.z-10.overflow-y-auto
      .flex.items-center.justify-center.min-h-full.p-4.text-center.sm_p-0
        TransitionChild(
          as='template'
          enter='ease-out duration-300'
          enter-from='opacity-0 translate-y-4 sm_translate-y-0 sm_scale-95'
          enter-to='opacity-100 translate-y-0 sm_scale-100'
          leave='ease-in duration-200'
          leave-from='opacity-100 translate-y-0 sm_scale-100'
          leave-to='opacity-0 translate-y-4 sm_translate-y-0 sm_scale-95'
        )
          DialogPanel.relative.px-4.pt-5.pb-4.text-left.transition-all.transform.bg-background.rounded-lg.shadow-xl.sm_my-8.sm_w-full.sm_p-6(
            :class='classes'
          )
            slot
</template>

<script lang="ts" setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';

interface Props {
  modelValue: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

interface Emits {
  (e: 'update:modelValue', value: boolean): void;
  (e: 'close'): void;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
});
const emits = defineEmits<Emits>();

const classes = {
  'sm_max-w-sm': props.size === 'sm',
  'sm_max-w-md': props.size === 'md',
  'sm_max-w-lg': props.size === 'lg',
  'sm_max-w-xl': props.size === 'xl',
};

const toggleModal = (event: boolean) => {
  emits('update:modelValue', event);
  if (!event) {
    emits('close');
  }
};
</script>

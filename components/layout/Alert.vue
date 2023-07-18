<template lang="pug">
AModal.z-40(v-model='isActive' :size='size' @close='handleResult("dismissed")')
  .sm_flex.sm_items-start
    .mx-auto.flex.h-12.w-12.flex-shrink-0.items-center.justify-center.rounded-full.sm_mx-0.sm_h-10.sm_w-10(
      v-if='icon'
      :class='classes'
    )
      Suspense
        Icon.w-8.h-8(:name='icon[type]')
    .mt-3.text-center.sm_mt-0.sm_ml-4.sm_text-left
      h3.text-lg.font-bold.leading-60 {{ title }}
      .mt-2
        p.text-sm {{ text }}
  .mt-5.sm_mt-4.sm_flex.sm_flex-row-reverse
    AButton.sm_ml-3.sm_w-auto.sm_text-sm(
      v-if='showConfirmButton'
      :variant='type === "default" ? "primary" : type'
      block
      @click='handleResult("confirm")'
    ) {{ confirmButtonText }}
    AButton.mt-3.sm_mt-0.sm_w-auto.sm_text-sm(
      v-if='showCancelButton'
      variant='accent'
      block
      @click='handleResult("dismissed")'
    ) {{ cancelButtonText }}
</template>

<script setup lang="ts">
interface Props {
  text: string;
  title?: string;
  type: 'success' | 'error' | 'warning' | 'info' | 'default';
  size: 'sm' | 'md' | 'lg' | 'xl';
  icon: boolean;
  confirmButtonText: string;
  cancelButtonText: string;
  showCancelButton: boolean;
  showConfirmButton: boolean;
}

const props = defineProps<Props>();
const emits = defineEmits(['confirm']);

const isActive = ref(false);

const classes = {
  'bg-primary-light text-primary': props.type === 'default',
  'bg-error-light  text-error': props.type === 'error',
  'bg-info-light  text-info': props.type === 'info',
  'bg-warning-light  text-warning': props.type === 'warning',
  'bg-success-light  text-success': props.type === 'success',
};

const icon = {
  default: 'heroicons:information-circle',
  error: 'heroicons:exclamation-circle',
  info: 'heroicons:information-circle',
  warning: 'heroicons:exclamation-triangle',
  success: 'heroicons:check-circle',
};

onMounted(() => {
  const wrapper = document.querySelector('.v-alert');
  if (!wrapper) return;
  wrapper.remove();
  isActive.value = true;
});

const handleResult = (eventType: 'confirm' | 'dismissed') => {
  const result = {
    isConfirmed: eventType === 'confirm',
    isDismissed: eventType === 'dismissed',
    value: eventType === 'confirm',
  };
  isActive.value = false;
  emits('confirm', result);
};
</script>

<style lang="scss" scoped></style>

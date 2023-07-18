<template lang="pug">
component.Abtn(
  :is='is'
  :href='href'
  :to='to'
  :class='classes'
  type='button'
  @click='handleClick'
)
  span.transition-opacity(:class='{ "opacity-0": loading }')
    slot
  .absolute.inset-0.flex.justify-center.items-center(v-if='loading')
    Icon.animate-spin(name='gg:spinner')
</template>

<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

interface Props {
  variant:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error'
    | string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  to?: RouteLocationRaw;
  block?: boolean;
  loading?: boolean;
}
interface Emits {
  (e: 'click', data: MouseEvent): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const is = computed(() => {
  return props.href ? 'a' : props.to ? resolveComponent('NuxtLink') : 'button';
});
const classes = computed(() => ({
  'bg-primary text-white focus_ring-primary': props.variant === 'primary',
  'bg-white !text-text-color !border-border-light focus_ring-primary':
    props.variant === 'secondary',
  'bg-accent-faded text-accent focus_ring-accent ': props.variant === 'accent',
  'bg-info focus_ring-info ': props.variant === 'info',
  'bg-success focus_ring-success': props.variant === 'success',
  'bg-warning text-text-color focus_ring-warning': props.variant === 'warning',
  'bg-error text-white focus_ring-error ': props.variant === 'error',
  'px-2.5 py-1.5': props.size === 'xs',
  'px-3 py-2': props.size === 'sm',
  'px-4 py-2': props.size === 'md' || props.size === 'lg' || !props.size,
  'px-6 py-3': props.size === 'xl',
  'text-xs': props.size === 'xs',
  'text-sm': props.size === 'sm' || props.size === 'md' || !props.size,
  'text-base': props.size === 'lg' || props.size === 'xl',
  'leading-4': props.size === 'sm',
  'w-full': props.block,
  'cursor-wait': props.loading,
}));

const handleClick = (e: MouseEvent) => {
  if (props.loading) {
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  emits('click', e);
};
</script>

<style lang="scss" scoped>
.Abtn {
  @apply inline-flex;
  @apply justify-center;
  @apply items-center;
  @apply items-center;
  @apply rounded-md;
  @apply border;
  @apply border-transparent;
  @apply font-medium;
  @apply shadow-sm;
  @apply relative;
  @apply transition-all;
  @apply hover_brightness-105;
  @apply focus_outline-none;
  @apply focus_ring-2;
  @apply focus_ring-offset-2;
  @apply focus_brightness-100;
}
</style>

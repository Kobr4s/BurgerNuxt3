<template lang="pug">
a.flex.bg-background.rounded-xl.p-8.relative.featureCard(
  :href='feature.url'
  target='_blank'
)
  div
    component.mb-2.w-8.h-8(:is='icons[feature.icon]')
    h3.mb-2.text-lg.font-semibold.flex.items-center.gap-2
      | {{ feature.title }}
      span.ml-2.text-xs.leading-5.rounded-full.bg-opacity-10.px-2.py-0dot5(
        :class='featureStateClass'
      ) {{ feature.state }}
    p.inline.text-sm.font-medium {{ feature.description }}
  Icon.w-6.h-6.absolute.top-4.right-4.rotate-45.opacity-0.transition-all.featureCard__arrow(
    name='heroicons:arrow-up-right'
  )
</template>

<script lang="ts" setup>
interface Props {
  feature: {
    title: string;
    description: string;
    url: string;
    state: string;
    icon: string;
  };
}

const props = defineProps<Props>();

const icons = {
  nuxt: defineAsyncComponent(() => import('@/assets/icons/brands/nuxt.svg')),
  antelope: defineAsyncComponent(
    () => import('@/assets/icons/brands/antelope.svg'),
  ),
  tailwind: defineAsyncComponent(
    () => import('@/assets/icons/brands/tailwind.svg'),
  ),
  typescript: defineAsyncComponent(
    () => import('@/assets/icons/brands/typescript.svg'),
  ),
  i18n: defineAsyncComponent(() => import('@/assets/icons/brands/i18n.svg')),
  gear: defineAsyncComponent(() => import('@/assets/icons/brands/gear.svg')),
  vueuse: defineAsyncComponent(
    () => import('@/assets/icons/brands/vueuse.svg'),
  ),
  pinia: defineAsyncComponent(() => import('@/assets/icons/brands/pinia.svg')),
  colormode: defineAsyncComponent(
    () => import('@/assets/icons/brands/colorMode.svg'),
  ),
};

const featureStateClass = {
  'text-green-500 bg-green-400': props.feature.state === 'Ready',
  'text-sky-400 bg-sky-400': props.feature.state === 'Available',
  'text-yellow-400 bg-yellow-400': props.feature.state === 'WIP',
  'text-red-400 bg-red-400': props.feature.state === 'Not available',
};
</script>

<style lang="scss" scoped>
.featureCard {
  &:hover .featureCard__arrow {
    @apply rotate-0;
    @apply opacity-100;
  }
}
</style>

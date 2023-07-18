<template lang="pug">
div
  #head.h-90vh.flex.items-center.justify-center.flex-col
    h1.text-center.text-4xl.md_text-7xl.font-bold.mb-8.whitespace-pre-line {{ $t('page.home.title') }}
    p.text-lg.text-gray-400.mb-12.text-center {{ $t('page.home.subtitle_1') }}
      span.text-primary {{ $t('page.home.subtitle_2') }}
    Counter
  #features.pb-12
    h2.text-3xl.font-bold.mb-10 {{ $t('page.home.main_features') }}
    .grid.gap-4.font-semibold.text-left.u-text-gray-900.sm_grid-cols-2.lg_grid-cols-3.2xl_gap-8
      FeatureCard(
        v-for='(feature, index) in features'
        :key='`feature-${index}`'
        :feature='feature'
      )
  #sub-features.pb-12
    h3.text-2xl.font-bold.mb-10 {{ $t('page.home.sub_features') }}
    .grid.gap-4.font-semibold.text-left.u-text-gray-900.sm_grid-cols-2.lg_grid-cols-3.2xl_gap-8
      FeatureCard(
        v-for='(feature, index) in subFeatures'
        :key='`feature-${index}`'
        :feature='feature'
      )
</template>

<script setup lang="ts">
import FeatureCard from '@/components/pages/home/FeatureCard.vue';
import Counter from '@/components/pages/home/Counter.vue';

const features = [
  {
    title: 'Nuxt 3',
    description: 'The Hybrid Vue Framework',
    url: 'https://v3.nuxtjs.org/',
    state: 'Ready',
    icon: 'nuxt',
  },
  {
    title: 'Antelope JS',
    description: 'The new way to build backend apps',
    url: 'https://antelopejs.com/',
    state: 'Ready',
    icon: 'antelope',
  },
  {
    title: 'Tailwind CSS',
    description: 'A utility-first CSS framework',
    url: 'https://tailwindcss.com/',
    state: 'Ready',
    icon: 'tailwind',
  },
  {
    title: 'TypeScript',
    description: 'Typed JavaScript at Any Scale',
    url: 'https://www.typescriptlang.org/',
    state: 'Ready',
    icon: 'typescript',
  },
  {
    title: 'Pinia',
    description: 'The Vue Store that you will enjoy using',
    url: 'https://pinia.vuejs.org/',
    state: 'Ready',
    icon: 'pinia',
  },
  {
    title: 'Vue Use',
    description: 'Collection of Vue Composition Utilities',
    url: 'https://vueuse.org/',
    state: 'Ready',
    icon: 'vueuse',
  },
];

const subFeatures = [
  {
    title: 'Vite SVG Loader',
    description: 'SVG loader for vite',
    url: 'https://github.com/jpkleemans/vite-svg-loader',
    state: 'Ready',
    icon: 'gear',
  },
  {
    title: 'Google font',
    description: 'Google font loader',
    url: 'https://google-fonts.nuxtjs.org/',
    state: 'Ready',
    icon: 'gear',
  },
  {
    title: 'Vuelidate',
    description: 'Simple, lightweight model-based validation',
    url: 'https://vuelidate-next.netlify.app/',
    state: 'WIP',
    icon: 'gear',
  },
  {
    title: 'Nuxt Robots',
    description: 'Robot.txt generator module for Nuxt',
    url: 'https://github.com/nuxt-community/robots-module#readme',
    state: 'Available',
    icon: 'gear',
  },
  {
    title: 'Pug',
    description: 'Pug template engine',
    url: 'https://pugjs.org/api/getting-started.html',
    state: 'Ready',
    icon: 'gear',
  },
  {
    title: 'Color Mode',
    description: 'Dark mode for your Nuxt app',
    url: 'https://color-mode.nuxtjs.org/',
    state: 'Ready',
    icon: 'colormode',
  },
  {
    title: 'I18n',
    description: 'Internationalization made easy',
    url: 'https://v8.i18n.nuxtjs.org/',
    state: 'Not available',
    icon: 'i18n',
  },
  {
    title: 'Unlighthouse',
    description: 'Scan your entire website with Google Lighthouse',
    url: 'https://unlighthouse.dev/',
    state: 'Available',
    icon: 'gear',
  },
  {
    title: 'Daisy UI',
    description:
      'The most popular, free and open-source Tailwind CSS component library',
    url: 'https://daisyui.com/',
    state: 'Ready',
    icon: 'gear',
  },
  {
    title: 'Html validator',
    description: 'Validate Nuxt server-rendered HTML',
    url: 'https://html-validator.nuxtjs.org/',
    state: 'Available',
    icon: 'gear',
  },
  {
    title: 'Nuxt icons',
    description: 'All icons ready to use',
    url: 'https://github.com/nuxt-modules/icon',
    state: 'Available',
    icon: 'gear',
  },
];
</script>

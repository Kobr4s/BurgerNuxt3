<template lang="pug">
.h-screen.px-4.py-16.sm_px-6.sm_py-24.md_grid.md_place-items-center.lg_px-8
  .mx-auto.max-w-max
    main.sm_flex
      p.text-4xl.font-bold.tracking-tight.text-primary.sm_text-5xl {{ error.statusCode }}
      .sm_ml-6
        .sm_border-l.sm_border-gray-200.sm_pl-6
          h1.text-4xl.font-bold.tracking-tight.sm_text-5xl {{ $t(error.message) }}
          p.mt-1.text-base {{ $t(`error.${error.statusCode}`) }}
        .mt-10.flex.space-x-3.sm_border-l.sm_border-transparent.sm_pl-6
          AButton(:to='{ name: "home" }' variant='primary') {{ $t('button.home') }}
</template>

<script setup lang="ts">
interface Props {
  error: {
    url: string;
    statusCode: string;
    message: string;
    statusMessage: string;
    stack: any;
    data: any;
  };
}
defineProps<Props>();
</script>

<style lang="scss" scoped></style>

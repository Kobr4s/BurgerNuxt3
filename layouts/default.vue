<template lang="pug">
#app.container.mx-auto.px-2
  Header
  main
    slot
  Footer
</template>

<script lang="ts" setup>
import Header from '@/components/layout/Header.vue';
import Footer from '@/components/layout/Footer.vue';

const i18nHead = useLocaleHead();
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
});
</script>

<style lang="scss" scoped></style>

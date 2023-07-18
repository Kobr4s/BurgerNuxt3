<template lang="pug">
header.flex.items-center.justify-between.py-5
  nuxt-link(to='/' aria-label='Back to homepage')
    LogoAltab
  NavDesktop
  NavMobile
</template>

<script lang="ts" setup>
import NavDesktop from './NavDesktop.vue';
import NavMobile from './NavMobile.vue';

import LogoAltab from '@/assets/svg/logoAltab.svg';
</script>

<style lang="scss" scoped></style>

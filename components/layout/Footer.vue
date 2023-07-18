<template lang="pug">
footer
  .px-4.py-12.mx-auto.max-w-7xl.sm_px-6.md_flex.md_items-center.md_justify-between.lg_px-8
    .flex.justify-center.space-x-6.md_order-2
      a.text-gray-400.hover_text-gray-500(
        v-for='(item, index) in navigation'
        :key='`navigation-${index}`'
        :href='item.href'
      )
        span.sr-only {{ item.name }}
        component.w-6.h-6(:is='item.icon' aria-hidden='true').
    .mt-8.md_order-1.md_mt-0
      p.text-base.text-center.text-gray-400 © {{ new Date().getFullYear() }} Altab. All rights reserved.
</template>

<script setup lang="ts">
import IconFacebook from '@/assets/icons/socials/facebook.svg';
import IconGithub from '@/assets/icons/socials/github.svg';
import IconInstagram from '@/assets/icons/socials/instagram.svg';
import IconTiktok from '@/assets/icons/socials/tiktok.svg';
import IconTwitter from '@/assets/icons/socials/twitter.svg';

const navigation = [
  {
    name: 'Facebook',
    href: '#',
    icon: IconFacebook,
  },
  {
    name: 'Github',
    href: '#',
    icon: IconGithub,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: IconInstagram,
  },
  {
    name: 'TikTok',
    href: '#',
    icon: IconTiktok,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: IconTwitter,
  },
];
</script>

<style lang="scss" scoped></style>

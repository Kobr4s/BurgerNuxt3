<template lang="pug">
nav.hidden.sm_block
  ul.flex.items-center.gap-5
    li.text-lg.cursor-pointer.hover_text-primary.transition-colors
      a.font-medium(
        href='https://icones.js.org/collection/all'
        target='_blank'
      ) Icons
    li.text-lg.cursor-pointer.hover_text-primary.transition-colors
      a.font-medium(href='https://tailwindui.com/components' target='_blank') Components
    li.text-lg.cursor-pointer.hover_text-primary.transition-colors
      a.flex.items-center.font-medium(href='/_tailwind/' target='_blank')
        | Tailwind
        span.ml-2.text-xs.leading-5.rounded-full.text-sky-500.bg-sky-400.bg-opacity-10.px-2.py-0dot5 Docs
    li
      .h-6.border.border-gray-500.rounded-lg
    li.flex.items-center
      Menu.relative.inline-block.text-left(as='div')
        MenuButton.text-gray-500.cursor-pointer.hover_text-primary.transition-colors.flex.items-center(
          aria-label='translation menu'
        )
          Icon.w-6.h-6(name='heroicons:globe-alt')
        transition(
          enter-active-class='transition duration-100 ease-out'
          enter-from-class='transform scale-95 opacity-0'
          enter-to-class='transform scale-100 opacity-100'
          leave-active-class='transition duration-75 ease-in'
          leave-from-class='transform scale-100 opacity-100'
          leave-to-class='transform scale-95 opacity-0'
        )
          MenuItems.absolute.right-0.z-10.mt-2.w-56.origin-top-right.rounded-md.bg-background.shadow-lg.ring-1.ring-black.ring-opacity-5.focus_outline-none
            .p-1
              MenuItem(
                v-for='locale in availablesLocales'
                :key='`locale-${locale}`'
              )
                button.w-full.block.px-4.py-2.text-sm.rounded-md.hover_bg-neutral
                  NuxtLink.flex.items-center(
                    :to='switchLocalePath(locale.code)'
                  )
                    FlagUsa.mr-2(v-if='locale.code === "en"')
                    FlagFrance.mr-2(v-else)
                    | {{ locale.name }}
    li.flex.items-center
      Menu.relative.inline-block.text-left(as='div')
        MenuButton.text-gray-500.cursor-pointer.hover_text-primary.transition-colors.flex.items-center(
          aria-label='theme menu'
        )
          Icon.w-6.h-6.cursor-pointer(
            v-if='$colorMode.preference === "light"'
            name='heroicons:sun'
          )
          Icon.w-6.h-6.cursor-pointer(v-else name='heroicons:moon')
        transition(
          enter-active-class='transition duration-100 ease-out'
          enter-from-class='transform scale-95 opacity-0'
          enter-to-class='transform scale-100 opacity-100'
          leave-active-class='transition duration-75 ease-in'
          leave-from-class='transform scale-100 opacity-100'
          leave-to-class='transform scale-95 opacity-0'
        )
          MenuItems.absolute.right-0.z-10.mt-2.w-56.origin-top-right.rounded-md.bg-background.shadow-lg.ring-1.ring-black.ring-opacity-5.focus_outline-none
            .p-1
              MenuItem(v-slot='{ active }')
                button.flex.items-center.w-full.block.px-4.py-2.text-sm.rounded-md(
                  :class='{ "bg-neutral": active }'
                  @click='$colorMode.preference = "light"'
                )
                  Icon.w-6.h-6.mr-2(name='heroicons:sun')
                  | Light
              MenuItem(v-slot='{ active }')
                button.flex.items-center.w-full.block.px-4.py-2.text-sm.rounded-md(
                  :class='{ "bg-neutral": active }'
                  @click='$colorMode.preference = "dark"'
                )
                  Icon.w-6.h-6.mr-2(name='heroicons:moon')
                  | Dark
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

import FlagFrance from '@/assets/icons/flags/france.svg';
import FlagUsa from '@/assets/icons/flags/usa.svg';

const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availablesLocales = computed(() => {
  if (!Array.isArray(locales.value)) return [];
  return locales.value as any[];
});
</script>

<style lang="scss" scoped></style>

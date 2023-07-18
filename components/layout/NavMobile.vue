<template lang="pug">
.sm_hidden
  Icon.w-8.h-8.block(name='heroicons:bars-3' @click='isOpen = true')
  TransitionRoot(:show='isOpen' as='template')
    Dialog.relative.z-10(as='div' @close='isOpen = false')
      TransitionChild(
        as='template'
        enter='ease-out duration-300'
        enter-from='opacity-0'
        enter-to='opacity-100'
        leave='ease-in duration-200'
        leave-from='opacity-100'
        leave-to='opacity-0'
      )
        .fixed.inset-0.transition-opacity.bg-gray-500.bg-opacity-75(
          @click='isOpen = false'
        ).
      .fixed.inset-0.overflow-hidden
        .absolute.inset-0.overflow-hidden
          .pointer-events-none.fixed.inset-y-0.right-0.flex.max-w-full.pl-10
            TransitionChild(
              as='template'
              enter='transform transition ease-in-out duration-500 sm_duration-700'
              enter-from='translate-x-full'
              enter-to='translate-x-0'
              leave='transform transition ease-in-out duration-500 sm_duration-700'
              leave-from='translate-x-0'
              leave-to='translate-x-full'
            )
              DialogPanel.pointer-events-auto.w-screen.max-w-md
                .flex.h-full.flex-col.overflow-y-scroll.bg-background.py-6.shadow-xl
                  .px-4.sm_px-6
                    .flex.items-start.justify-end
                      .ml-3.flex.h-7.items-center
                        button.rounded-md.focus_outline-none.focus_ring-2.focus_ring-indigo-500.focus_ring-offset-2(
                          type='button'
                          @click='isOpen = false'
                        )
                          span.sr-only Close panel
                          Icon.w-8.h-8.block(name='heroicons:x-mark')
                  .relative.mt-6.flex-1.px-6.sm_px-6
                    .flex.items-center.justify-center.gap-5.mb-4.relative
                      li.flex.items-center
                        Menu.inline-block.text-left(as='div')
                          MenuButton.text-gray-500.cursor-pointer.hover_text-primary.transition-colors.flex.items-center(
                            aria-label='translation menu'
                          )
                            Icon.w-8.h-8(name='heroicons:globe-alt')
                          transition(
                            enter-active-class='transition duration-100 ease-out'
                            enter-from-class='transform scale-95 opacity-0'
                            enter-to-class='transform scale-100 opacity-100'
                            leave-active-class='transition duration-75 ease-in'
                            leave-from-class='transform scale-100 opacity-100'
                            leave-to-class='transform scale-95 opacity-0'
                          )
                            MenuItems.absolute.right-0.left-0.mx-auto.z-10.mt-2.w-56.origin-top-right.rounded-md.bg-neutral.shadow-lg.ring-1.ring-black.ring-opacity-5.focus_outline-none
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
                        Menu.inline-block.text-left(as='div')
                          MenuButton.text-gray-500.cursor-pointer.hover_text-primary.transition-colors.flex.items-center(
                            aria-label='theme menu'
                          )
                            Icon.w-8.h-8.cursor-pointer(
                              v-if='$colorMode.preference === "light"'
                              name='heroicons:sun'
                            )
                            Icon.w-8.h-8.cursor-pointer(
                              v-else
                              name='heroicons:moon'
                            )
                          transition(
                            enter-active-class='transition duration-100 ease-out'
                            enter-from-class='transform scale-95 opacity-0'
                            enter-to-class='transform scale-100 opacity-100'
                            leave-active-class='transition duration-75 ease-in'
                            leave-from-class='transform scale-100 opacity-100'
                            leave-to-class='transform scale-95 opacity-0'
                          )
                            MenuItems.absolute.right-0.left-0.mx-auto.z-10.mt-2.w-56.origin-top-right.rounded-md.bg-neutral.shadow-lg.ring-1.ring-black.ring-opacity-5.focus_outline-none
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
                    ul
                      li.text-xl.transition-colors.mb-4
                        a.font-medium(
                          href='https://icones.js.org/collection/all'
                          target='_blank'
                        ) Icons
                      li.text-xl.transition-colors.mb-4
                        a.font-medium(
                          href='https://tailwindui.com/components'
                          target='_blank'
                        ) Components
                      li.text-xl.transition-colors.mb-4
                        a.flex.items-center.font-medium(
                          href='/_tailwind/'
                          target='_blank'
                        )
                          | Tailwind
                          span.ml-2.text-xs.leading-5.rounded-full.text-sky-500.bg-sky-400.bg-opacity-10.px-2.py-0dot5 Docs
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';

import FlagFrance from '@/assets/icons/flags/france.svg';
import FlagUsa from '@/assets/icons/flags/usa.svg';

const isOpen = ref(false);

const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const availablesLocales = computed(() => {
  if (!Array.isArray(locales.value)) return [];
  return locales.value as any[];
});
</script>

<style lang="scss" scoped></style>

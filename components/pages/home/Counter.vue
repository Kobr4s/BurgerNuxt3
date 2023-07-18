<template lang="pug">
AButton(variant='primary' size='xl' @click='increment')
  | {{ 'Oh look ! a counter : ' }}
  span &nbsp;{{ store.count }}
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/store/counter';

const store = useCounterStore();

const increment = () => {
  store.count >= 10 ? store.increment(10) : store.count++;
};
</script>

<style lang="scss" scoped></style>

<template>
  <RouterLink
    :active="active"
    class="rounded-md px-3 py-2 text-sm font-semibold"
    :class="{
      'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white':
        !active,
      'bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-white': active
    }"
  >
    <slot />
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  active: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped></style>

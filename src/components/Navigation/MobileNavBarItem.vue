<template>
  <RouterLink
    class="block rounded-md px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300"
    :class="{
      'hover:bg-gray-300 dark:hover:bg-gray-900': !active,
      'bg-gray-300 dark:bg-gray-900': active
    }"
    ><slot
  /></RouterLink>
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

<style scoped></style>

<script setup>
import MobileNavBarItem from '@/Components/Navigation/MobileNavBarItem.vue';
import ThemeSwitcher from '@/Components/Navigation/ThemeSwitcher.vue';

defineEmits(['toggle']);
</script>

<template>
  <div
    class="absolute right-2 top-16 w-64 border-l border-b border-r border-gray-400 dark:border-gray-600"
  >
    <div class="lg:hidden bg-gray-100 dark:bg-gray-800">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <MobileNavBarItem to="/">Home</MobileNavBarItem>
        <ThemeSwitcher class="block lg:hidden" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>

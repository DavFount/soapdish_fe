<template>
  <div class="hidden lg:ml-4 lg:block">
    <div class="flex items-center">
      <div class="relative ml-4 flex-shrink-0">
        <div>
          <NavBarItem to="/login">Login</NavBarItem>
          <NavBarItem to="/register">Register</NavBarItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBarItem from '@/Components/Navigation/NavBarItem.vue';
</script>

<style lang="scss" scoped></style>

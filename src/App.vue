<template>
  <header>
    <div class="wrapper">
      <nav>
        <NavBar></NavBar>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import NavBar from '@/components/Navigation/NavBar.vue';
</script>

<style scoped></style>

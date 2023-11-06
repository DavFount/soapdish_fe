<template>
  <div
    class="divider"
    :class="{
      'mb-0': lastItem
    }"
  />
</template>

<script setup>
defineProps({
  lastItem: {
    type: Boolean,
    default: false
  }
});
</script>

<style lang="scss" scoped>
.divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow:
    inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
</style>

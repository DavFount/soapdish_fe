<template>
  <div>
    <label
      :for="id"
      v-if="label"
      class="block text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200"
    >
      {{ label }}
    </label>
    <div class="mt-2">
      <input
        :id="id"
        v-bind="$attrs"
        :placeholder="label"
        class="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
        :class="{ 'ring-2 ring-red-600 dark:ring-red-400': error }"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <span v-if="error" class="text-sm text-red-600 dark:text-red-400">{{ error }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true
  },
  error: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  }
});
</script>

<style lang="scss" scoped></style>

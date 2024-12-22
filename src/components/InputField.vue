<template>
  <div class="input-field">
    <label :for="name">{{ label }}</label>
    <input :type="type" :id="name" :name="name" v-model="modelValue" @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string; name: string; type?: string; modelValue: string }>();
defineEmits(['update:modelValue']);
</script>

<style scoped>
.input-field { margin-bottom: 10px; }
</style>
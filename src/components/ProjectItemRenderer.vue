<template>
  <div class="item">
    <h3>{{ item.title }}</h3>
    <p v-if="item.description">{{ item.description }}</p>
    <p v-if="item.technologies">Technologies: {{ item.technologies }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ProjectItem } from '../types';
defineProps<{ item: ProjectItem }>();
</script>
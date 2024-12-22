<template>
  <div class="experience-item">
    <h3>{{ item.title }}</h3>
    <h4>{{ item.company }} | {{ item.dates }}</h4>
    <p v-html="item.description"></p>
    <div v-if="item.responsibilities" v-html="formattedResponsibilities"></div>
  </div>
</template>

<script setup lang="ts">
import type { ExperienceItem } from '../types';
import { formatResponsibilities } from '../utils/formatters';
import { computed } from 'vue';
const props = defineProps<{ item: ExperienceItem }>();

const formattedResponsibilities = computed(() => {
  return formatResponsibilities(props.item.responsibilities); // Use the formatter function
});

</script>


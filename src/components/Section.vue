<template>
  <section :id="section.title.toLowerCase()">
    <h2>{{ section.title }}</h2>
    <div v-if="section.type === 'text'" v-html="formatSummary(section.content)"></div>
    <ul v-else-if="section.items">
      <li v-for="item in section.items" :key="generateKey(item)">
        <ItemRenderer :item="item" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Section, ExperienceItem, ProjectItem, ListItem } from '../types';
import { formatSummary } from '../utils/formatters';
import ItemRenderer from './ItemRenderer.vue';

defineProps<{ section: Section }>(); // This line is still necessary to define the props type

const generateKey = (item: ExperienceItem | ProjectItem | ListItem): string => {
  if ('company' in item) return item.company + item.title;
  if ('title' in item) return item.title;
  if ('content' in item) return item.content;
  return JSON.stringify(item);
};
</script>
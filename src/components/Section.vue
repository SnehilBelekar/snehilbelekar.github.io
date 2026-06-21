<template>
  <section :id="section.title.toLowerCase()">
    <h2>{{ section.title }}</h2>
    <div v-if="section.type === 'text'">
      <div v-for="(group, groupIndex) in summaryGroups" :key="`${group.heading || 'group'}-${groupIndex}`">
        <h3 v-if="group.heading">{{ group.heading }}</h3>
        <ul>
          <li v-for="(point, pointIndex) in group.points" :key="`${point}-${pointIndex}`">
            {{ point }}
          </li>
        </ul>
      </div>
    </div>
    <ul v-else-if="section.items">
      <li v-for="item in section.items" :key="generateKey(item)">
        <ItemRenderer :item="item" />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Section, ExperienceItem, ProjectItem, ListItem } from '../types';
import ItemRenderer from './ItemRenderer.vue';

const props = defineProps<{ section: Section }>();

type SummaryGroup = {
  heading: string;
  points: string[];
};

const summaryGroups = computed<SummaryGroup[]>(() => {
  if (props.section.type !== 'text' || !props.section.content) return [];

  const lines = props.section.content
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) return [];

  const groups: SummaryGroup[] = [];
  let activeGroup: SummaryGroup = { heading: '', points: [] };

  for (const line of lines) {
    if (line.endsWith(':')) {
      if (activeGroup.heading || activeGroup.points.length > 0) {
        groups.push(activeGroup);
      }
      activeGroup = { heading: line.slice(0, -1), points: [] };
      continue;
    }

    activeGroup.points.push(line);
  }

  if (activeGroup.heading || activeGroup.points.length > 0) {
    groups.push(activeGroup);
  }

  return groups;
});

const generateKey = (item: ExperienceItem | ProjectItem | ListItem): string => {
  if ('company' in item) return item.company + item.title;
  if ('title' in item) return item.title;
  if ('content' in item) return item.content;
  return JSON.stringify(item);
};
</script>
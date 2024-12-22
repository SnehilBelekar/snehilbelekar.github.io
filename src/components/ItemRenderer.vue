<template>
  <template v-if="isExperienceItem(item)">
    <ExperienceItemRenderer :item="item" :key="item.title + item.company" />
  </template>
  <template v-else-if="isProjectItem(item)">
    <ProjectItemRenderer :item="item" :key="item.title" />
  </template>
    <template v-else-if="isListItem(item)">
        <ListItemRenderer :item="item" :key="item.content"/>
    </template>
  <template v-else>
    <div>Unknown Item Type</div>
  </template>
</template>

<script setup lang="ts">
import type { ExperienceItem, ProjectItem, ListItem } from '../types';
import ExperienceItemRenderer from './ExperienceItemRenderer.vue';
import ProjectItemRenderer from './ProjectItemRenderer.vue';
import ListItemRenderer from './ListItemRenderer.vue';
import { computed } from 'vue'; // Import computed

type ItemType = ExperienceItem | ProjectItem | ListItem;
const props = defineProps<{ item: ItemType }>();
const item = computed(() => props.item);

const isExperienceItem = (item: any): item is ExperienceItem => 'company' in item;
const isProjectItem = (item: any): item is ProjectItem => 'technologies' in item;
const isListItem = (item: any): item is ListItem => 'content' in item;
</script>
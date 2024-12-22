<template>
  <div class="item">
    <p>{{ item.content }}</p>
  </div>
</template>

<script setup lang="ts">
import type { ListItem } from '../types';
defineProps<{ item: ListItem }>();
</script>
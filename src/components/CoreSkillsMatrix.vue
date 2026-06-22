<template>
  <section class="core-skills" aria-labelledby="core-skills-title">
    <h2 id="core-skills-title">Core Skills</h2>

    <table class="core-skills__table">
      <caption class="sr-only">Core skills by category and tools</caption>
      <thead>
        <tr>
          <th scope="col">Category</th>
          <th scope="col">Tools</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in skillsMatrix" :key="item.category">
          <th scope="row">{{ item.category }}</th>
          <td>{{ item.tools.join(' · ') }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup lang="ts">
import type { SkillsMatrixItem } from '../types';

defineProps<{
  skillsMatrix: SkillsMatrixItem[];
}>();
</script>

<style scoped>
.core-skills {
  background: var(--hero-bg, #2b2d42);
  color: var(--hero-text, #ffffff);
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.95rem 1.05rem 1.2rem;
}

.core-skills h2 {
  margin: 0 0 0.7rem;
  font-family: var(--font-display, sans-serif);
  font-size: clamp(1rem, 3.2vw, 1.25rem);
  line-height: 1.2;
}

.core-skills__table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: var(--font-body, sans-serif);
  font-size: clamp(0.86rem, 2.5vw, 0.95rem);
}

.core-skills__table thead th {
  text-align: left;
  color: var(--brand-turquoise, #00aaaa);
  font-weight: 700;
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  padding: 0.42rem 0.45rem;
}

.core-skills__table tbody th,
.core-skills__table tbody td {
  text-align: left;
  vertical-align: top;
  padding: 0.45rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.14);
}

.core-skills__table tbody th {
  width: 34%;
  font-weight: 700;
  color: #ffffff;
}

.core-skills__table tbody td {
  width: 66%;
  color: rgba(255, 255, 255, 0.92);
  overflow-wrap: anywhere;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (min-width: 768px) {
  .core-skills {
    padding: 1.05rem 2rem 1.35rem;
  }

  .core-skills__table {
    font-size: 0.94rem;
  }
}
</style>

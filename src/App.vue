<template>
  <div id="app">
    <nav class="sticky-nav">
      <ul style="display: flex; align-items: center;">
        <li v-for="section in resumeData.sections" :key="section.title">
          <a :href="'#' + section.title.toLowerCase()" @click.prevent="scrollToSection(section.title)">{{ section.title }}</a>
        </li>
        <li style="margin-left: auto; display: flex; align-items: center;">
          <!-- Language Switcher -->
          <select v-model="currentLang" class="lang-switcher" @change="changeLang" style="margin-right: 10px;">
            <option value="EN">EN</option>
            <option value="FR">FR</option>
            <option value="NL">NL</option>
          </select>
          <!-- Print Button -->
          <button class="print-btn" @click="printPage" title="Print Resume">
            🖨️ 
          </button>
        </li>     
      </ul>
    </nav>
    <div class="content-wrapper">
      <header class="header-container">
        <div class="header-content">
          <div class="image-container">
            <img src="/profile.jpg" alt="Profile Picture" class="profile-image" />
          </div>
          <div class="personal-details">
            <h1>{{ resumeData.personalInfo.name }}</h1>
            <h2>{{ resumeData.personalInfo.title }}</h2>
            <div class="contacts">
              <p v-if="resumeData.personalInfo.email">Email: {{ resumeData.personalInfo.email }}</p>
              <p v-if="resumeData.personalInfo.phone">Phone: {{ resumeData.personalInfo.phone }}</p>
              <p v-if="resumeData.personalInfo.location">Location: {{ resumeData.personalInfo.location }}</p>
              <div class="social">
                <a v-if="resumeData.personalInfo.linkedin" :href="resumeData.personalInfo.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a v-if="resumeData.personalInfo.github" :href="resumeData.personalInfo.github" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <!-- Summary Section Below Header -->
      <section class="summary-section" v-if="summarySection">
        <Section :section="summarySection" />
      </section>
      <!-- Panels Below Summary -->
      <div class="panel-wrapper">
        <aside class="left-panel">
          <section
            v-for="panelSection in leftPanelSections"
            :key="panelSection.title"
            :id="panelSection.title.toLowerCase().replace(/\s+/g, '-')"
          >
            <h2>
              <a
                href="#"
                @click.prevent="scrollToSection(panelSection.title)"
                style="cursor:pointer; color:inherit; text-decoration:underline;"
              >
                {{ panelSection.title }}
              </a>
            </h2>
            <ul v-if="panelSection.type === 'list'">
              <li
                v-for="item in panelSection.items"
                :key="(item as any).content"
              >
                {{ (item as any).content }}
              </li>
            </ul>
            <div v-else-if="panelSection.type === 'text'">
              {{ panelSection.content }}
            </div>
          </section>
        </aside>
        <div class="right-panel">
          <Section
            v-for="section in rightPanelSections"
            :key="section.title"
            :section="section"
          />
        </div>
      </div>
      <footer class="footer">
        <div class="icons">
          <a href="https://www.linkedin.com/in/snehilbelekar/">
            <img class="icon" src="/linkedIn.svg" alt="LinkedIn">
          </a>
          <a href="https://github.com/Snehil03">
            <img class="icon" src="/github.svg" alt="GitHub">
          </a>
          <a href="mailto:snehil.belekar@yahoo.com">
            <img class="icon" src="/email.svg" alt="Email">
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, computed } from 'vue';
import resumeDataEN from './data/resumeData';
import resumeDataFR from './data/resumeDataFr';
import resumeDataNL from './data/resumeDataNl';
import Section from './components/Section.vue';

const currentLang = ref('EN');

const resumeData = computed(() => {
  if (currentLang.value === 'FR') return resumeDataFR;
  if (currentLang.value === 'NL') return resumeDataNL;
  return resumeDataEN;
});

// Always use computed for personalInfo and summarySection
// const personalInfo = computed(() => resumeData.value.personalInfo);

const summarySection = computed(() => {
  // Support all possible summary titles in all languages
  const summaryTitles = ['Summary', 'Résumé', 'Samenvatting'];
  return resumeData.value.sections.find(section => summaryTitles.includes(section.title));
});

const leftPanelSections = computed(() =>
  resumeData.value.sections.filter(section =>
    [
      'Skills', 'Languages', 'Soft Skills', 'Certifications', 'Education',
      'Compétences', 'Langues', 'Compétences douces', 'Certifications', 'Formation',
      'Vaardigheden', 'Talen', 'Soft Skills', 'Certificeringen', 'Opleiding'
    ].includes(section.title)
  )
);

const rightPanelSections = computed(() =>
  resumeData.value.sections.filter(
    section =>
      ![
        'Skills', 'Languages', 'Soft Skills', 'Certifications', 'Education', 'Summary',
        'Compétences', 'Langues', 'Compétences douces', 'Certifications', 'Formation', 'Résumé',
        'Vaardigheden', 'Talen', 'Soft Skills', 'Certificeringen', 'Opleiding', 'Samenvatting'
      ].includes(section.title)
  )
);

const changeLang = () => {
  // No extra logic needed, computed properties will update automatically
};

const scrollToSection = (sectionTitle: string) => {
  const id = sectionTitle.toLowerCase().replace(/\s+/g, '-');
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const printPage = () => {
  window.print();
};
</script>

<template>
  <div id="app">
    <nav class="sticky-nav">
      <ul>
        <li v-for="section in resumeData.sections" :key="section.title">
          <a :href="'#' + section.title.toLowerCase()" @click.prevent="scrollToSection(section.title)">{{ section.title }}</a>
        </li>
        <li>
          <!-- Print Button -->
          <button class="print-btn" @click="printPage" title="Print Resume">
            🖨️ 
          </button>
        </li>      </ul>
      
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
import resumeData from './data/resumeData';
import Section from './components/Section.vue';

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

const summarySection = resumeData.sections.find(section => section.title === 'Summary');

const leftPanelSections = resumeData.sections.filter(section =>
  ['Skills', 'Languages', 'Soft Skills', 'Certifications', 'Education'].includes(section.title)
);

const rightPanelSections = resumeData.sections.filter(
  section => !['Skills', 'Languages', 'Soft Skills', 'Certifications', 'Education', 'Summary'].includes(section.title)
);
</script>

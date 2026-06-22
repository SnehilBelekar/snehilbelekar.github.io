<template>
  <div id="app">
    <nav class="sticky-nav">
      <ul style="display: flex; align-items: center;">
        <li v-for="section in resumeData.sections" :key="section.title">
          <a :href="'#' + section.title.toLowerCase()" @click.prevent="scrollToSection(section.title)">{{ section.title }}</a>
        </li>
        <li style="margin-left: auto; display: flex; align-items: center;">
          <!-- Language Switcher -->
          <select v-model="currentLang" class="lang-switcher" @change="changeLang" style="margin-right: 10px;" aria-label="Language selection">
            <option value="FR">French 🇫🇷</option>
            <option value="NL">Dutch 🇳🇱</option>
            <option value="EN">English 🇬🇧</option>
          </select>
        </li>     
      </ul>
    </nav>
    <div class="content-wrapper">
      <HeroSection
        :cv-url="currentResumePdf"
        :email="resumeData.personalInfo.email || ''"
        :phone="resumeData.personalInfo.phone || ''"
        :location="resumeData.personalInfo.location || ''"
        profile-image="/profile.jpg"
      />
      <CoreSkillsMatrix
        v-if="currentSkillsMatrix.length"
        :skills-matrix="currentSkillsMatrix"
      />
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
import { ref, computed, onMounted } from 'vue';
import resumeDataEN from './data/resumeData';
import resumeDataFR from './data/resumeDataFr';
import resumeDataNL from './data/resumeDataNl';
import Section from './components/Section.vue';
import HeroSection from './components/HeroSection.vue';
import CoreSkillsMatrix from './components/CoreSkillsMatrix.vue';

const currentLang = ref('EN');

const META_TITLE = 'Snehil Belekar | Senior Technical Architect';
const META_DESCRIPTION =
  'Senior Technical Architect in multi-cloud, DevSecOps, security compliance, FinOps, and digital twin delivery across Azure, AWS, and Kubernetes.';

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

const currentSkillsMatrix = computed(() => {
  if (resumeData.value.skillsMatrix?.length) {
    return resumeData.value.skillsMatrix;
  }

  return resumeDataEN.skillsMatrix || [];
});

const changeLang = () => {
  // No extra logic needed, computed properties will update automatically
};

const EN_RESUME_PDF_PATH = '/resume/Snehil_Belekar_CV.pdf';
const FR_RESUME_PDF_PATH = '/resume/Snehil_Belekar_CV_FR.pdf';
const NL_RESUME_PDF_PATH = '/resume/Snehil_Belekar_CV_NL.pdf';

const currentResumePdf = computed(() => {
  const resumePdfByLang: Record<string, string> = {
    EN: EN_RESUME_PDF_PATH,
    FR: FR_RESUME_PDF_PATH,
    NL: NL_RESUME_PDF_PATH,
  };

  return resumePdfByLang[currentLang.value] || EN_RESUME_PDF_PATH;
});

const scrollToSection = (sectionTitle: string) => {
  const id = sectionTitle.toLowerCase().replace(/\s+/g, '-');
  const element = document.getElementById(id);
  if (element) {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }
};

const upsertMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

const upsertPersonJsonLd = () => {
  const person = resumeDataEN.personalInfo;
  const sameAs = [person.linkedin, person.github].filter((value): value is string => Boolean(value));

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: person.name,
    jobTitle: person.title,
    sameAs,
  };

  const scriptId = 'person-schema';
  let script = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement('script');
    script.id = scriptId;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.text = JSON.stringify(schema);
};

onMounted(() => {
  document.title = META_TITLE;

  const ogImage = new URL('/profile.jpg', window.location.origin).toString();

  upsertMetaTag('name', 'description', META_DESCRIPTION);
  upsertMetaTag('property', 'og:title', META_TITLE);
  upsertMetaTag('property', 'og:description', META_DESCRIPTION);
  upsertMetaTag('property', 'og:image', ogImage);

  upsertPersonJsonLd();
});
</script>

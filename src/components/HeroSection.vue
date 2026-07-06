<template>
  <header class="hero" aria-labelledby="hero-name">
    <div class="hero__mesh" aria-hidden="true">
      <svg viewBox="0 0 1200 600" preserveAspectRatio="none" role="presentation" focusable="false">
        <g>
          <path d="M80 430 L240 320 L420 360 L610 250 L780 300 L930 210 L1110 280" />
          <path d="M140 180 L320 140 L490 230 L680 170 L860 250 L1040 190" />
          <path d="M60 520 L230 470 L410 520 L590 450 L780 500 L1000 430" />
          <path d="M210 90 L340 240 L530 140 L720 270 L900 150 L1120 220" />
        </g>

        <g>
          <circle cx="80" cy="430" r="4" />
          <circle cx="240" cy="320" r="4" />
          <circle cx="420" cy="360" r="4" />
          <circle cx="610" cy="250" r="4" />
          <circle cx="780" cy="300" r="4" />
          <circle cx="930" cy="210" r="4" />
          <circle cx="1110" cy="280" r="4" />
          <circle cx="320" cy="140" r="3.6" />
          <circle cx="680" cy="170" r="3.8" />
          <circle cx="860" cy="250" r="3.8" />
          <circle cx="230" cy="470" r="3.8" />
          <circle cx="590" cy="450" r="3.8" />
          <circle cx="780" cy="500" r="3.6" />
        </g>
      </svg>
    </div>

    <div class="hero__layout">
      <div class="hero__photo-wrap">
        <img :src="profileImage" alt="Snehil Belekar profile photo" class="hero__photo">
      </div>

      <div class="hero__content">
        <h1 id="hero-name" class="hero__name">
          <span class="hero__first">Snehil</span>
          <span class="hero__last">Belekar</span>
        </h1>

        <p class="hero__headline">
          Senior Technical Architect — DevSecOps · Security Architecture · Multi-Cloud ·
          IoT · FinOps
        </p>

        <p class="hero__subline">
          Turning compliance obligations (NIS2 · ISO 27001 · OWASP) into engineering-ready
          controls across Azure, AWS &amp; Kubernetes
        </p>

        <div class="hero__accent" aria-hidden="true"></div>

        <nav class="hero__actions" aria-label="Primary actions">
          <a :href="cvUrl" target="_blank" rel="noopener noreferrer">
            Download CV (PDF)
          </a>
          <a href="/blogs/">
            Read My Blog ✍️
          </a>
        </nav>

        <div class="hero__meta" aria-label="Contact information">
          <a v-if="email" :href="`mailto:${email}`">Email: {{ email }}</a>
          <a v-if="phone" :href="`tel:${phone.replace(/\s+/g, '')}`">Phone: {{ phone }}</a>
          <span v-if="location">Location: {{ location }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  cvUrl: string;
  email: string;
  phone: string;
  location: string;
  profileImage: string;
}>();
</script>

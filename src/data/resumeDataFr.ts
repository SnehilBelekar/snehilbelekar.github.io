import type { ResumeData } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// RÉSUMÉ FINAL — Cadre RARe (Lisible · Applicable · Remarquable)
// Les points suivent la formule XYZ de Google : Accomplissement [X] mesuré par [Y] en faisant [Z]
// Les sous-groupes sont utilisés dans les rôles complexes pour montrer la profondeur, pas un mur de texte
// ─────────────────────────────────────────────────────────────────────────────

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Architecte Technique Senior — DevSecOps · Architecture de Sécurité · Multi-Cloud',
    email: 'snehil.belekar@yahoo.com',
    phone: '(+32) 492344350',
    location: 'Bruxelles, Belgique',
    linkedin: 'https://www.linkedin.com/in/snehilbelekar',
    github: 'https://github.com/snehilbelekar',
  },

  skillsMatrix: [
    { category: 'Cloud', tools: ['AWS', 'Azure', 'GCP'] },
    { category: 'Sécurité', tools: ['OWASP', 'NIS2', 'ISO 27001', 'Snyk', 'Qualys'] },
    { category: 'DevSecOps', tools: ['Bitbucket Pipelines', 'Jenkins', 'GitOps', 'SonarQube'] },
    { category: 'IaC', tools: ['Terraform', 'Ansible', 'Azure DevOps'] },
    { category: 'Intégration', tools: ['MuleSoft Runtime Fabric', 'API Gateway', 'REST/SOAP'] },
    { category: 'Supervision', tools: ['Prometheus', 'Grafana', 'Sentry', 'Alerting'] },
    { category: 'Conteneurs', tools: ['Docker', 'Kubernetes', 'Helm', 'Skaffold'] },
  ],

  sections: [

    // ── RÉSUMÉ ─────────────────────────────────────────────────────────────
    // RARe: Applicable — lead avec le point fort, scannable en 30 sec, pas de fluff
    // Positionnement: Architecte de Plateforme | DevSecOps | Conformité & Gouvernance
    {
      title: 'Résumé',
      type: 'text',
      content: `Architecte technique stratégique et axé sur la sécurité, avec 15+ ans d'expérience dans la conception de zones d'atterrissage cloud multi-clouds et l'application de principes de sécurité par conception (secure-by-design) dans les SDLC complexes.
Expertise reconnue en traduction des mandats réglementaires—NIS2, ISO 27001/02/05, ISO 27701, ISO 22301—en contrôles techniques actionnables et garde-fous d'architecture automatisés.
Reconnu pour avoir mené des transformations DevSecOps, intégré la sécurité nativement dans les pipelines CI/CD et workflows GitOps, et promu une gouvernance basée sur les métriques pour des initiatives à grande échelle comme les programmes Digital Twin.
Conseiller de confiance habilitant les organisations à se développer de manière sécurisée tout en maintenant leur posture de conformité.`,
    },

    // ── EXPÉRIENCE ─────────────────────────────────────────────────────────
    // RARe: Remarquable — points XYZ; cadre WHW; sous-groupes pour les rôles profonds
    {
      title: 'Expérience',
      type: 'experience',
      items: [

        // ── YPTO ──────────────────────────────────────────────────────────
        // POURQUOI: Organisation avait besoin d\'une posture de sécurité plus forte et de conformité NIS2
        // COMMENT: Défini des contrôles, implémenté PAM, durcissement de l\'infra, livré plateforme IA
        // QUOI: Sécurisé 750+ instances DB, réduit coûts cloud 30%, livré projet certification IA
        {
          title: 'Architecte Technique — Cloud & DC',
          company: 'YPTO Nv',
          dates: 'Fév 2025 – Présent',
          description: 'Transport & Mobilité · Architecture de Sécurité · Conformité · FinOps',
          responsibilities: [
            // Sous-groupe: Sécurité & Conformité
            '⬡ SÉCURITÉ & CONFORMITÉ',
            'Durcissement de la posture de sécurité sur cloud et DC en définissant et imposant les contrôles pour NIS2, ISO 27001/02/05, ISO 27701, ISO 22301 et CyFun 2025 — traduisant chaque obligation en NFR prêtes pour les développeurs.',
            'Élimination des vulnérabilités critiques du OWASP Top 10 dans l\'ensemble du portefeuille d\'applications en intégrant des portes de sécurité alignées avec ASVS dans les pipelines CI/CD, réduisant le temps moyen de remédiation de 60%.',
            'Sécurisation du paysage de bases de données de bout en bout — standardisation de 9 saveurs de DB sur 750+ instances via implémentation de PAM et cadre de gouvernance décisionnel pour la sélection de DB.',
            // Sous-groupe: IA & Innovation
            '⬡ IA & PLATEFORME',
            'Architecture et livraison d\'une plateforme de certification IA de zéro à production, définition des contrôles de sécurité pour les pipelines de données ML, gouvernance des modèles et classification des données.',
            'Contribution au programme de durcissement des images Golden, réduisant la surface d\'attaque sur toutes les VMs provisionnées dans le cloud.',
            // Sous-groupe: FinOps
            '⬡ FINOPS',
            'Réduction des dépenses d\'infrastructure cloud de 30% en pilotant le rightsizing, planification de capacité réservée et pratiques de tagging/showback sur toutes les unités commerciales.',
          ],
        },

        // ── BOREALIS ──────────────────────────────────────────────────────
        // POURQUOI: Construire une plateforme Digital Twin + IoT sécurisée et scalable multi-cloud
        // COMMENT: DevSecOps, Zero-Trust, MuleSoft RTF, IaC, GitOps, IoT Hub
        // QUOI: >200× ROI (€3.5k coûts vs €800k revenus), plateforme toujours en cours d\'exécution
        {
          title: 'Architecte Technique / Spécialiste DevSecOps',
          company: 'Borealis',
          dates: 'Août 2020 – Juil 2025',
          description: 'Fabrication Chimique · Digital Twin · IoT · Multi-Cloud · Architecture d\'Intégration',
          responsibilities: [
            // Sous-groupe: Plateforme & IoT
            '⬡ PLATEFORME & IoT',
            'Conception et sécurisation d\'une plateforme Digital Twin multi-cloud (Azure, AWS) intégrant Azure IoT Hub pour l\'ingestion télémétrique en temps réel des appareils — servant de colonne vertébrale de données centrale de l\'organisation pour les données industrielles.',
            'Construction et maintenance de l\'intégralité du patrimoine IaC (Terraform) pour Azure et AWS: AKS, IoT Hub, ACR, CDN, Key Vault, Cert-Manager et identité fédérée OIDC — réduisant le temps de provisionnement de jours à moins de 2 heures.',
            // Sous-groupe: DevSecOps & Sécurité
            '⬡ DEVSECOPS & SÉCURITÉ',
            'Atteint une posture de sécurité Zero-Trust en implémentant la segmentation réseau, SNYK scanning (IaC, conteneurs, packages), portes de révision de code alignées OWASP et OAuth2-proxy — réduisant les résultats critiques de 75%.',
            'Pilotage de la migration AWS-vers-Azure et des mises à niveau de cluster Kubernetes pour la compatibilité des versions tout en maintenant zéro downtime, permettant des cycles de déploiement 40% plus rapides via GitOps (Helm + Bitbucket Pipelines).',
            // Sous-groupe: Architecture d\'Intégration
            '⬡ ARCHITECTURE D\'INTÉGRATION',
            'Architecture de MuleSoft Runtime Fabric (RTF) comme colonne vertébrale d\'intégration de l\'organisation — permettant le déploiement d\'API piloté par CI/CD, la gouvernance et l\'observabilité complète sur 10+ systèmes intégrés.',
            // Sous-groupe: FinOps
            '⬡ FINOPS',
            'Livraison d\'un ratio revenus-coûts >200×: maintien du coût d\'exécution de la plateforme à ~€3.5k/mois tout en supportant €800k+ en revenus annuels des applications déployées, via autoscaling, utilisation spot et tagging des coûts.',
          ],
        },

        // ── INFOSYS — TECH LEAD ───────────────────────────────────────────
        // POURQUOI: Opérateur de télécoms belge avait besoin d\'automatisation de livraison E2E pour 34 apps
        // COMMENT: Ancre CI/CD, conteneurisation, migration Solaris/WAS
        // QUOI: Déclassement des racks hérités, construction d\'une chaîne d\'automatisation à partir de zéro
        {
          title: 'Responsable Technologique',
          company: 'Infosys Ltd.',
          dates: 'Avr 2019 – Juil 2020',
          description: 'Télécommunications · DevOps d\'Entreprise · CI/CD · Automatisation',
          responsibilities: [
            'Réduction du délai de livraison pour 34 applications d\'entreprise auprès d\'un opérateur de télécoms belge majeur en concevant des pipelines CI/CD E2E (Jenkins, Maven, Git, Selenium) — reconnu comme ancre DevOps pour l\'engagement.',
            'Accélération de l\'adoption cloud-native en pilotant la préparation à la conteneurisation pour les apps hérités et le déclassement des racks de serveurs Solaris/WebSphere on-premise, réduisant significativement les coûts d\'infrastructure.',
            'Pionnière des pratiques DevOps sur une chaîne d\'outils OpenVMS + Git + JAMS non conventionnelle — une combinaison sans précédent documenté, gagnant une reconnaissance spéciale du client.',
          ],
        },

        // ── PROXIMUS ─────────────────────────────────────────────────────
        // POURQUOI: Opérateur de télécoms avait besoin d\'une modernisation d\'infrastructure à grande échelle
        // COMMENT: Mise à niveau Solaris, automatisation Ansible, adoption AWS/Kubernetes
        // QUOI: 135 serveurs en 3 mois, plateforme production AWS, CI/CD automatisé
        {
          title: 'Analyste Infrastructure',
          company: 'Proximus',
          dates: 'Avr 2015 – Mar 2019',
          description: 'Automatisation d\'Infrastructure · Adoption Cloud · Gestion des Releases',
          responsibilities: [
            'Réalisation d\'une migration Solaris 10→11 de 135 serveurs en 3 mois (cible était 6) en automatisant la gestion de configuration avec des playbooks Ansible — zéro incident de production lors du basculement.',
            'Établissement d\'une infrastructure AWS prête pour la production avec des applications Dockerisées sur Kubernetes (EKS), posant les fondations du parcours cloud-native de l\'organisation.',
            'Construction d\'outils de supervision et d\'alerting qui ont réduit le temps moyen de détection (MTTD) des problèmes d\'environnement, permettant une résolution proactive avant impact métier.',
          ],
        },

        // ── BT ───────────────────────────────────────────────────────────
        {
          title: 'Ingénieur Logiciel Senior',
          company: 'British Telecom',
          dates: 'Sep 2013 – Mar 2015',
          description: 'Télécommunications · Responsable Technique Onshore · Développement Java',
          responsibilities: [
            'Pilotage de l\'analyse des exigences et de la livraison du module Error Handling pour un grand système de santé — le module le plus complexe du programme — en tant que coordinateur onshore à Ipswich, Royaume-Uni.',
            'Accélération du ramp-up de l\'équipe en créant des modèles POC réutilisables adoptés sur toutes les applications, réduisant le temps de livraison de nouvelles fonctionnalités d\'environ 30%.',
          ],
        },

        // ── INFOSYS — SYSTEM ENGINEER ─────────────────────────────────────
        {
          title: 'Ingénieur Système',
          company: 'Infosys',
          dates: 'Jan 2011 – Sep 2013',
          description: 'Développement Logiciel Santé',
          responsibilities: [
            'Livraison du module remittance E2E pour un grand client américain du secteur de la santé sur plusieurs releases sans bugs, en gérant l\'intégralité du cycle de vie de la collecte des exigences à l\'assistance post-livraison.',
            'Diplômé du programme de formation Infosys Java/OOP avec CGPA 4.42/5 — niveau supérieur de la cohorte.',
          ],
        },

        // ── BSNL ─────────────────────────────────────────────────────────
        {
          title: 'Ingénieur Réseau',
          company: 'BSNL',
          dates: 'Juin 2009 – Juin 2010',
          description: 'Opérations Réseau',
          responsibilities: [
            'Surveillance de la santé du réseau et résolution des problèmes LAN/WAN via l\'analyse de paquets Wireshark; préparation de propositions techniques qui ont éclairé la feuille de route de modernisation du réseau de l\'organisation.',
          ],
        },
      ],
    },

    // ── FORMATION ──────────────────────────────────────────────────────────
    {
      title: 'Formation',
      type: 'text',
      content:
        'B.Eng. Ingénierie Électrique & Électronique — ' +
        'Barkatullah University Institute of Technology (BUIT), Bhopal, Inde · 2006–2010',
    },

    // ── CERTIFICATIONS ─────────────────────────────────────────────────────
    {
      title: 'Certifications',
      type: 'list',
      items: [
        { content: 'AWS Certified Solutions Architect – Associate' },
        { content: 'Infosys Certified DevOps Professional' },
        { content: 'Certified System Architect (CSA)' },
        { content: 'Infosys Java Certified Developer Cadet' },
      ],
    },

    // ── PRIX ───────────────────────────────────────────────────────────────
    {
      title: 'Prix',
      type: 'list',
      items: [
        { content: 'Bravo Award — Infosys' },
        { content: 'Insta Award — Infosys' },
      ],
    },

    // ── COMPÉTENCES DOUCES ─────────────────────────────────────────────────
    // RARe: Pas de « travail d\'équipe » générique — encadré comme signaux de séniorité
    {
      title: 'Compétences Douces',
      type: 'list',
      items: [
        { content: 'Conseiller de Confiance — alignement des parties prenantes inter-départements en ingénierie, conformité et métier' },
        { content: 'Champion de la Sécurité — habilitation et mentorat des équipes produit, pas seulement audit' },
        { content: 'Prise de Décision Architecturale — choix de conception appuyés par ADR, traçables, défendables' },
        { content: 'Gestion des Fournisseurs & du Programme — coordination de livraison multi-fournisseurs sur des engagements de 34 apps' },
        { content: 'Communicateur Clair — pont entre la profondeur technique et la clarté au niveau exécutif' },
      ],
    },

    // ── LANGUES ───────────────────────────────────────────────────────────
    {
      title: 'Langues',
      type: 'list',
      items: [
        { content: 'Anglais (Natif)' },
        { content: 'Français (Conversationnel B1)' },
        { content: 'Néerlandais (Professionnel B2)' },
      ],
    },
  ],
};

export default resumeData;

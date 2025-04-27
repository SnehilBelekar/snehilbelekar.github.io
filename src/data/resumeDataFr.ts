import type { ResumeData } from '../types';

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Architecte Solutions / Architecte Technique - Plateforme Digital Twin',
    email: 'snehil.belekar@yahoo.com',
    phone: '(+32) 478841486',
    location: 'Malines, Belgique',
    linkedin: 'https://www.linkedin.com/in/snehilbelekar',
    github: 'https://github.com/snehil03',
  },
  sections: [
    {
      title: 'Résumé',
      type: 'text',
      content: `
      Conception, définition et stratégie d'évolution de la plateforme pour le programme Digital Twin.
      Direction de la zone d’atterrissage AWS vers une stratégie multi-cloud.
      Direction de la zone d’atterrissage AZURE vers une stratégie multi-cloud.
      Mise en œuvre d’un cadre de gouvernance et de conformité intégré à l’écosystème pour renforcer la sécurité.
      Implémentation des contrôles de sécurité dans les processus opérationnels via GITOPS.
      Bonne connaissance des normes ISO27001, ISO23247, ISO27002, ISO27005, ISO27701, ISO22301, NIS2.
      Mise en œuvre de la méthode FinOps.
      Méthodologie GitOps pour le programme Digital Twin.
      Conception et définition de la stratégie pour Mulesoft dans le cadre du tissu RTF, déploiement et gestion des applications.
      Gestion des fournisseurs externes et rôle de conseiller de confiance.
      Promotion de la prise de décision basée sur les métriques.
      Plan de continuité d’activité et de reprise après sinistre.
      Standardisation et maintenabilité de la plateforme globale.
      Professionnel IT avec une excellente expérience en DevOps et pratiques Agile.
      Individu proactif et confiant avec d’excellentes compétences techniques, de communication et de résolution de problèmes.
      Expérience sur des technologies variées avec de solides connaissances en programmation.
      `,
    },
    {
      title: 'Expérience',
      type: 'experience',
      items: [
        {
          title: 'Architecte Technique - Digital Twin',
          company: 'Borealis Polymer Nv',
          dates: 'Sept 2023 - Présent',
          description: `Architecte pour le programme Digital Twin`,
          responsibilities: [
            `Conception, définition et mise en œuvre d'une solution de stockage évolutive dans l'infrastructure cloud.`,
            `Conception et mise en œuvre d'une plateforme pour les applications futures permettant la réutilisation de la plateforme existante et la livraison rapide de solutions sécurisées de pointe.`,
            `Définition et conception de feuilles de route techniques et accompagnement des organisations dans leur transformation digitale.`,
            `Co-implémentation de solutions Blueprints.`,
            `Promotion de la culture DevOps.`,
            `Conseiller de confiance pour plusieurs départements de l'organisation.`,
          ],
        },
        // Ajoutez d'autres expériences ici si nécessaire
      ],
    },
    {
      title: 'Compétences',
      type: 'list',
      items: [
        { content: 'Plateformes Cloud (AWS, Azure, GCP)' },
        { content: 'Outils Agile : Jira, Confluence, DevOps Tasks, Kanban' },
        { content: 'IAC : Terraform, Azure DevOps' },
        { content: 'Outils d’analyse de sécurité : Snyk, Qualys' },
        { content: 'Sentry' },
        { content: 'CI : Bitbucket, Jenkins' },
        { content: 'Supervision : Prometheus, Grafana, Alerting' },
        { content: 'Virtualisation : Docker, Kubernetes, Helm, Skaffold' },
        { content: 'Chiffrement et déchiffrement : SOPS' },
        { content: 'Authentification : Cognito, Microsoft AD, Auth0' },
        { content: 'Autorisation : Auth0' },
        { content: 'TLS, mTLS : Cert-Manager, DigiCert' },
        { content: 'Data Science / Analyse : Pandas' },
      ],
    },
    {
      title: 'Formation',
      type: 'text',
      content: 'Bachelor en technologie, Inde',
    },
    {
      title: 'Compétences douces',
      type: 'list',
      items: [
        { content: 'Travail d’équipe' },
        { content: 'Communication' },
        { content: 'Résolution de problèmes' },
        { content: 'Adaptabilité' },
        { content: 'Gestion du temps' },
      ],
    },
    {
      title: 'Certifications',
      type: 'list',
      items: [
        { content: 'AWS Certified Solutions Architect – Associate' },
      ],
    },
    {
      title: 'Langues',
      type: 'list',
      items: [
        { content: 'Anglais (Courant)' },
        { content: 'Néerlandais (Conversationnel)' },
        { content: 'Français (Conversationnel)' },
      ],
    }
  ],
};

export default resumeData;
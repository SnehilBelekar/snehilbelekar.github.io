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
          title: 'Technical Architect - Digital Twin',
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
        {
          title: 'DevSecOps Specialist',
          company: 'Borealis Digital Studio',
          dates: 'Août 2020 - Août 2023',
          description: `Spécialiste DevSecOps`,
          responsibilities: [
            `Co-implémentation d'une plateforme CI/CD sur Bitbucket.`,
            `Mise en œuvre d'une stratégie multi-cloud pour l'organisation.`,
            `Abstraction de la complexité de l'infrastructure via IaC et création d'une infrastructure robuste sur AWS, AZURE.`,
            `Amélioration de la posture de sécurité en appliquant les recommandations d'outils reconnus.`,
            `Réduction du fossé entre les développeurs et les opérations pour accélérer la livraison globale.`,
            `Responsable et implémenteur de la stratégie DevOps.`,
            `Documentation et ajout d'ADR (Architectural Decision Review).`,
            `Optimisation des coûts et achats pour réduire les dépenses.`,
            `Le coût actuel pour l'ensemble de l'écosystème est d'environ 3,5k et nous générons 800k de revenus grâce aux applications déployées.`,
            `Migration AWS vers Azure.`,
            `Mise à niveau du cluster Kubernetes et adoption pour rendre les applications compatibles avec les nouvelles versions.`,
            `Ajout de changements de sécurité Zero Trust à l'infrastructure.`,
            `Conformité de sécurité SNYK sur l'infrastructure, les images, les packages.`,
            `Mise en place d'Oauth2-proxy et migration vers un nouveau hub d'artéfacts automatisée via Terraform.`,
            `Publication de projet Helm zero to hero (template public).`,
            `Configuration Redis en mode cluster.`,
            `Mise en place de la stack Prometheus et Grafana pour la supervision et le système d'alerte.`,
            `Programmation Python pour l'analyse de données et le ML avec Pandas, Numpy.`,
            `Configuration et mise à jour de Cert-Manager via Let's Encrypt et gestion par Terraform.`,
            `Provisionnement de l'infrastructure via un flux CI/CD automatisé (Bitbucket Pipelines).`,
            `Sécurisation de la configuration Azure avec LDAP et politiques supplémentaires.`,
            `Automatisation complète de l'infrastructure avec Terraform pour l'architecture Azure, création de IOT hub, Azure CDN et base de données pgsql.`,
            `Utilisation de Helm charts pour gérer les packages K8s.`,
            `Sentry pour le suivi des erreurs.`,
            `SonarQube pour l'analyse de code.`,
            `AZURE : Configuration AKS, ACR, IOT hub, réseaux, stockage blob, gestion des coûts Azure, politique RBAC, configuration Azure Key Vault.`,
            `AWS : EKS, ECR, EC2, Lambda, PostgreSql, Auth0, Cognito, fournisseur OIDC, AutoScaler.`,
          ],
        },
        {
          title: 'Technology Lead',
          company: 'Infosys Ltd.',
          dates: 'Avril 2019 - Juil 2020',
          description: `Responsable Technologique`,
          responsibilities: [
            `Direction d'un programme d'automatisation à l'échelle de l'organisation pour un géant belge des télécoms, agissant comme référent CI/CD pour 34 applications, fournissant des solutions techniques et des implémentations pour l'intégration et la livraison continues E2E.`,
            `Planification, livraison et exécution du programme.`,
            `Promotion de l'automatisation et de l'agilité, mentorat des responsables.`,
            `Définition, conception et mise en œuvre des meilleures pratiques pour Solaris, migration WAS (suppression de racks de datacenter et réduction des coûts avec des systèmes plus efficaces).`,
            `Adoption précoce de la conteneurisation et du cloud native.`,
            `Expérience en gestion des releases et installation de livrables multi-fournisseurs et applications.`,
            `Création d'un outil de support commercial pour optimiser et automatiser le processus de release.`,
            `Coordination avec l'équipe Hotline sur les problèmes de production après release.`,
            `Référent CI/CD pour 34 applications, fourniture de solutions techniques pour les problèmes rencontrés sur PEGA, OpenVMS, GIT, Java, Jenkins, Maven, Selenium, Cloud Sense, GuardRails, Security CSRF, Salesforce.`,
            `Bonne connaissance des méthodologies agiles et des produits Atlassian comme JIRA, Confluence.`,
            `Mention spéciale pour la mise en œuvre des pratiques DevOps avec OpenVMS+GIT+JAMS.`,
          ],
        },
        {
          title: 'Infrastructure Analyst',
          company: 'Proximus',
          dates: 'Avril 2015 - Mars 2019',
          description: `Analyste Technologique`,
          responsibilities: [
            `Mise à niveau de plus de 135 serveurs de Solaris 10 à Solaris 11 en 3 mois.`,
            `Automatisation de la gestion de configuration avec des playbooks Ansible.`,
            `Mise à niveau de 37 serveurs de WAS 8 à WAS 9.`,
            `Mise en place de l'infrastructure pour Websphere Application Server et automatisation du flux CI/CD.`,
            `Mise en place d'une infrastructure cloud AWS prête pour la production et utilisation d'applications Dockerisées avec Kubernetes comme orchestrateur.`,
            `Utilisation d'Ansible pour simplifier la configuration et l'automatisation des serveurs.`,
            `Excellente expérience en gestion des releases, gestion des incidents et des problèmes côté client.`,
            `Gestion des releases et installation de livrables multi-fournisseurs et applications.`,
            `Support technique et activités de release sur tous les environnements de production et de test.`,
            `Développement de divers outils pour la supervision des paramètres techniques, résolution proactive des problèmes.`,
            `Création d'outils pour optimiser et automatiser la procédure de release, reconnus par l'équipe.`,
          ],
        },
        {
          title: 'Senior Software Engineer',
          company: 'British Telecom',
          dates: 'Sept 2013 - Mars 2015',
          description: `Ingénieur Logiciel Senior`,
          responsibilities: [
            `Rôles : Coordinateur sur site, Chef de module, Mentor.`,
            `Coordinateur sur site à Ipswich, UK : élaboration des exigences avec le client, mise en œuvre des solutions, proposition de différentes approches, accompagnement de l'équipe offshore.`,
            `Chef de module : responsable de la livraison du module le plus complexe "Gestion des erreurs" pour un projet de santé, mentorat de l'équipe, création de template POC, support étendu.`,
            `Mentor : accompagnement des nouveaux collaborateurs pour répondre aux exigences du client et livrer des produits innovants.`,
          ],
        },
        {
          title: 'System Engineer',
          company: 'Infosys',
          dates: 'Jan 2011 - Sept 2013',
          description: `Ingénieur Système`,
          responsibilities: [
            `Travail autonome sur un module pour un grand client américain du secteur de la santé.`,
            `Développement de l'architecture E2E selon les exigences du client.`,
            `Collecte des exigences du client jusqu'au support applicatif après la mise en production.`,
            `Livraison de code sans bug pour plusieurs releases.`,
            `POC pour l'implémentation de Spring 3.1.`,
            `Formation sur les bases de la programmation, systèmes d'exploitation, programmation en C, bases de données relationnelles, POO.`,
            `Formation Java avec expérience pratique.`,
            `Projet de fin de formation sur une application web.`,
            `Obtention d'une note de 4,42 (sur 5) au CGPA.`,
          ],
        },
        {
          title: 'Network Engineer',
          company: 'BSNL',
          dates: 'Juin 2009 - Juin 2010',
          description: `Ingénieur Réseau`,
          responsibilities: [
            `Surveillance et analyse des performances réseau, rapports sur les flux de données pour détecter les problèmes, identifier l'utilisation inefficace des ressources et planifier la capacité.`,
            `Résolution des problèmes de connectivité LAN et WAN via l'analyse de paquets avec Wireshark.`,
            `Préparation de propositions techniques pour la direction afin d'ajouter des technologies modernes au réseau.`,
            `Estimation du temps et des matériaux nécessaires aux projets.`,
            `Résolution de problèmes simples ou complexes à l'aide de documentation.`,
            `Décodage, micro-puces, semi-conducteurs.`,
          ],
        },
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
      title: 'Langues',
      type: 'list',
      items: [
        { content: 'Anglais (Courant)' },
        { content: 'Néerlandais (Conversationnel)' },
        { content: 'Français (Conversationnel)' },
      ],
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
      title: 'Formation',
      type: 'text',
      content: 'Bachelor en technologie, Inde',
    }
  ],
};

export default resumeData;
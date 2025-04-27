import type { ResumeData } from '../types';

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Oplossingen / Technisch Architect - Digital Twin Platform',
    email: 'snehil.belekar@yahoo.com',
    phone: '(+32) 478841486',
    location: 'Mechelen, België',
    linkedin: 'https://www.linkedin.com/in/snehilbelekar',
    github: 'https://github.com/snehil03',
  },
  sections: [
    {
      title: 'Samenvatting',
      type: 'text',
      content: `
      Ontwerp, definitie en evolutiestrategie voor het Digital Twin-programma.
      Leiding over AWS landing zone richting een multi-cloudstrategie.
      Leiding over AZURE landing zone richting een multi-cloudstrategie.
      Implementatie van governance- en compliancekader geïntegreerd in het ecosysteem zodat beveiliging hiervan profiteert.
      Implementatie van beveiligingscontroles in operationele processen via GITOPS.
      Goed bekend met ISO27001, ISO23247, ISO27002, ISO27005, ISO27701, ISO22301, NIS2.
      Implementatie van FinOps-werkwijze.
      GitOps-werkwijze voor het Digital Twin-programma.
      Ontwerp en strategie voor Mulesoft als onderdeel van RTF-fabric en het uitrollen en beheren van applicaties.
      Beheer van externe leveranciers en optreden als Trusted Advisor.
      Stimuleren van metriek-gebaseerde besluitvorming.
      Business continuity en disaster recovery plan.
      Standaardisatie en onderhoudbaarheid van het gehele platform.
      IT-professional met uitstekende ervaring in DevOps en Agile praktijken.
      Proactief en zelfverzekerd met uitstekende technische, communicatieve en probleemoplossende vaardigheden.
      Ervaring met diverse technologieën en een goede mix van programmeerkennis.
      `,
    },
    {
      title: 'Ervaring',
      type: 'experience',
      items: [
        {
          title: 'Technisch Architect - Digital Twin',
          company: 'Borealis Polymer Nv',
          dates: 'sept 2023 - heden',
          description: `Architect voor het Digital Twin-programma`,
          responsibilities: [
            `Ontwerp, definitie en implementatie van toekomstbestendige opslagoplossingen in cloudinfrastructuur.`,
            `Ontwerp en implementatie van een platform voor toekomstige applicaties waarbij het bestaande platform kan worden hergebruikt en snelle, veilige oplossingen kunnen worden geleverd.`,
            `Definiëren en ontwerpen van technische roadmaps en organisaties begeleiden in hun digitale transformatie.`,
            `Co-implementatie van Blueprints-oplossingen.`,
            `Bevorderen van de DevOps-cultuur.`,
            `Trusted advisor voor meerdere afdelingen binnen de organisatie.`,
          ],
        },
        {
          title: 'DevSecOps Specialist',
          company: 'Borealis Digital Studio',
          dates: 'aug 2020 - aug 2023',
          description: `DevSecOps Specialist`,
          responsibilities: [
            `Co-geïmplementeerd CI/CD-platform op Bitbucket.`,
            `Implementatie van multi-cloudstrategie voor de organisatie.`,
            `Complexiteit van infrastructuur abstraheren in IaC en robuuste infrastructuur creëren in AWS, AZURE.`,
            `Verbeterde beveiligingspositie door aanbevelingen van toonaangevende tools te implementeren.`,
            `De kloof tussen Developers en Operations overbruggen om de algehele levering te versnellen.`,
            `Eigenaar en implementator van DevOps-strategie.`,
            `Documentatie en toevoegen van ADR (Architectural Decision Review).`,
            `Kostenoptimalisatie en inkoop om extra kosten te verminderen.`,
            `Huidige kosten voor het volledige ecosysteem zijn ongeveer 3,5k en we genereren 800k aan inkomsten uit de gedeployde applicaties.`,
            `AWS naar Azure migratie.`,
            `Kubernetes cluster upgrade en verdere adoptie om huidige applicaties compatibel te maken met nieuwere Kubernetes-versies.`,
            `Zero trust beveiligingswijzigingen toevoegen aan infrastructuur.`,
            `SNYK-beveiligingsnaleving op infrastructuur, images, pakketten.`,
            `Oauth2-proxy instellen en migratie naar nieuwe artifact hub geautomatiseerd via Terraform.`,
            `Helm zero to hero (template project publicatie).`,
            `Redis-configuratie in cluster-modus.`,
            `Prometheus en Grafana stack opzetten voor monitoring en een waarschuwingssysteem eromheen.`,
            `Python-programmering voor data-analyse en ML-programmering met Pandas, Numpy.`,
            `Cert-Manager instellen en upgraden via Let's Encrypt en beheerd door Terraform.`,
            `Infrastructuurvoorziening via geautomatiseerde CI/CD-flow (Bitbucket Pipelines).`,
            `Azure-setup beveiligen met LDAP en extra beveiliging en beleidsregels.`,
            `Volledige infrastructuur geautomatiseerd met Terraform voor Azure-architectuur, IOT-hub, Azure CDN en pgsql-db.`,
            `Helm-charts om K8s-pakketten te beheren.`,
            `Sentry voor foutopsporing.`,
            `SonarQube voor code-analyse.`,
            `AZURE: AKS-setup, ACR-setup, IOT-hub, netwerken, blobopslag, Azure-kostenbeheer, RBAC-beleid, Azure Key Vault-setup.`,
            `AWS: EKS, ECR, EC2, Lambda, PostgreSql, Auth0, Cognito, OIDC-provider, AutoScaler.`,
          ],
        },
        {
          title: 'Technology Lead',
          company: 'Infosys Ltd.',
          dates: 'apr 2019 - jul 2020',
          description: `Technology Lead`,
          responsibilities: [
            `Leidde organisatiebrede automatiseringsprogramma voor Belgische telecomgigant, fungeerde als CI/CD-anker voor 34 applicaties, inclusief technische oplossingen en implementaties voor E2E continuous integration en continuous delivery.`,
            `Programmaplanning, levering en uitvoering.`,
            `Bevorderen van een automatiserings- en agile-mentaliteit, mentoren van verantwoordelijke eigenaren.`,
            `Definiëren, ontwerpen en implementeren van best practices voor Solaris, WAS-migratie (datacenter racks verwijderen en kosten verlagen met efficiëntere systemen).`,
            `Vroege adoptie van containerisatie en cloud-native werken.`,
            `Ervaring met release management en installatie van leveringen van meerdere leveranciers en applicaties.`,
            `Sales support tool gemaakt om het releaseproces te optimaliseren en automatiseren.`,
            `Tijdige coördinatie met het Hotline-team over productieproblemen na release.`,
            `CI/CD-anker voor 34 applicaties, technische oplossingen bieden voor problemen met PEGA, OpenVMS, GIT, Java, Jenkins, Maven, Selenium, Cloud Sense, GuardRails, Security CSRF, Salesforce.`,
            `Goede kennis van agile-methodologieën en Atlassian-producten zoals JIRA, Confluence.`,
            `Bijzondere vermelding voor het implementeren van DevOps-praktijken met OpenVMS+GIT+JAMS.`,
          ],
        },
        {
          title: 'Infrastructure Analyst',
          company: 'Proximus',
          dates: 'apr 2015 - mrt 2019',
          description: `Technology Analyst`,
          responsibilities: [
            `Upgrade van 135+ servers van Solaris 10 naar Solaris 11 binnen 3 maanden.`,
            `Automatisering van configuratiebeheer met Ansible-playbooks.`,
            `Upgrade van 37 servers van WAS 8 naar WAS 9.`,
            `Infrastructuur opzetten voor Websphere Application Server en CI/CD-workflow implementeren.`,
            `Productieklaar AWS-cloudinfrastructuur opgezet en Dockerized applicaties gebruikt met Kubernetes als orchestrator.`,
            `Ansible gebruikt om serverconfiguratie en automatisering te vereenvoudigen.`,
            `Uitstekende ervaring in release management, incident- en probleembeheer bij de klant.`,
            `Beheer van release en installatie van leveringen van meerdere leveranciers en applicaties.`,
            `Technische ondersteuning en releaseactiviteiten uitgevoerd op alle productie- en testomgevingen.`,
            `Diverse tools ontwikkeld voor monitoring van technische parameters, proactieve probleemoplossing.`,
            `Tools gemaakt om releaseprocedures te optimaliseren en automatiseren, erkend door het team.`,
          ],
        },
        {
          title: 'Senior Software Engineer',
          company: 'British Telecom',
          dates: 'sept 2013 - mrt 2015',
          description: `Senior Software Engineer`,
          responsibilities: [
            `Functies: Onshore coördinator, Module Lead, Mentor.`,
            `Onshore coördinator in UK Ipswich: eisen opstellen met klant, oplossingen implementeren, verschillende implementatiebenaderingen voorstellen, offshore begeleiden.`,
            `Module Lead: verantwoordelijk voor het leveren van het moeilijkste module 'Error Handling' voor een gezondheidszorgproject, teamleden begeleiden, POC-template gemaakt, uitgebreide ondersteuning geboden.`,
            `Mentor: nieuwe medewerkers begeleiden zodat ze voldoen aan de klantvereisten en innovatieve producten kunnen leveren.`,
          ],
        },
        {
          title: 'System Engineer',
          company: 'Infosys',
          dates: 'jan 2011 - sept 2013',
          description: `System Engineer`,
          responsibilities: [
            `Zelfstandig gewerkt aan een module voor een grote Amerikaanse zorgklant.`,
            `Ontwikkeling van E2E-architectuur volgens de eisen van het zorgbedrijf.`,
            `Vereisten verzamelen van klant tot applicatieondersteuning na release.`,
            `Foutloze code geleverd voor meerdere releases.`,
            `POC voor Spring 3.1-implementatie.`,
            `Training gevolgd in programmeerbasics, besturingssystemen, programmeren in C, relationele databases, OOP.`,
            `Java-training met praktijkervaring.`,
            `Training afgerond met een project over webgebaseerde applicatie.`,
            `Behaalde 4,42 (van 5) CGPA.`,
          ],
        },
        {
          title: 'Network Engineer',
          company: 'BSNL',
          dates: 'jun 2009 - jun 2010',
          description: `Network Engineer`,
          responsibilities: [
            `Netwerkprestaties gemonitord en geanalyseerd, rapporten over data-invoer en -uitvoer om problemen te detecteren, inefficiënt gebruik van computerbronnen te identificeren en capaciteitsplanning uit te voeren.`,
            `LAN- en WAN-connectiviteitsproblemen opgelost door pakketopnames te analyseren met Wireshark.`,
            `Technische voorstellen voorbereid voor het management om moderne technologieën toe te voegen aan het netwerk.`,
            `Tijd en materialen ingeschat voor projecten.`,
            `Eenvoudige of complexe problemen opgelost met behulp van referentiemateriaal.`,
            `Decoder, microchips, halfgeleiders.`,
          ],
        },
      ],
    },
    {
      title: 'Vaardigheden',
      type: 'list',
      items: [
        { content: 'Cloudplatforms (AWS, Azure, GCP)' },
        { content: 'Agile tools: Jira, Confluence, DevOps Tasks, Kanban' },
        { content: 'IAC: Terraform, Azure DevOps' },
        { content: 'Beveiligingsanalysetools: Snyk, Qualys' },
        { content: 'Sentry' },
        { content: 'CI: Bitbucket, Jenkins' },
        { content: 'Monitoring: Prometheus, Grafana, Alerting' },
        { content: 'Virtualisatie: Docker, Kubernetes, Helm, Skaffold' },
        { content: 'Encryptie en decryptie: SOPS' },
        { content: 'Authenticatie: Cognito, Microsoft AD, Auth0' },
        { content: 'Autorisatie: Auth0' },
        { content: 'TLS, mTLS: Cert-Manager, DigiCert' },
        { content: 'Data Science / Analyse: Pandas' },
      ],
    },
    {
      title: 'Opleiding',
      type: 'text',
      content: 'Bachelor of Technology, India',
    },
    {
      title: 'Talen',
      type: 'list',
      items: [
        { content: 'Engels (Vloeiend)' },
        { content: 'Nederlands (Conversatie)' },
        { content: 'Frans (Conversatie)' },
      ],
    },
    {
      title: 'Soft Skills',
      type: 'list',
      items: [
        { content: 'Teamwerk' },
        { content: 'Communicatie' },
        { content: 'Probleemoplossend vermogen' },
        { content: 'Aanpassingsvermogen' },
        { content: 'Tijdmanagement' },
      ],
    },
    {
      title: 'Certificeringen',
      type: 'list',
      items: [
        { content: 'AWS Certified Solutions Architect – Associate' },
      ],
    }
  ],
};

export default resumeData;
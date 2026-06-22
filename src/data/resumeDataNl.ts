import type { ResumeData } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// DEFINITIEF SAMENVATTING — RARe Framework (Leesbaar · Toepasbaar · Opmerkelijk)
// Bullets volgen de Google XYZ-formule: Gerealiseerd [X] gemeten door [Y] door [Z] te doen
// Sub-groepen gebruikt in complexe rollen dus het leest als diepte, niet een muur van tekst
// ─────────────────────────────────────────────────────────────────────────────

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Senior Technisch Architect — DevSecOps · Security Architecture · Multi-Cloud',
    email: 'snehil.belekar@yahoo.com',
    phone: '(+32) 478841486',
    location: 'Brussel, België',
    linkedin: 'https://www.linkedin.com/in/snehilbelekar',
    github: 'https://github.com/snehilbelekar',
  },

  skillsMatrix: [
    { category: 'Cloud', tools: ['AWS', 'Azure', 'GCP'] },
    { category: 'Beveiliging', tools: ['OWASP', 'NIS2', 'ISO 27001', 'Snyk', 'Qualys'] },
    { category: 'DevSecOps', tools: ['Bitbucket Pipelines', 'Jenkins', 'GitOps', 'SonarQube'] },
    { category: 'IaC', tools: ['Terraform', 'Ansible', 'Azure DevOps'] },
    { category: 'Integratie', tools: ['MuleSoft Runtime Fabric', 'API Gateway', 'REST/SOAP'] },
    { category: 'Monitoring', tools: ['Prometheus', 'Grafana', 'Sentry', 'Alerting'] },
    { category: 'Containers', tools: ['Docker', 'Kubernetes', 'Helm', 'Skaffold'] },
  ],

  sections: [

    // ── SAMENVATTING ──────────────────────────────────────────────────────
    // RARe: Applicable — lead met de sterkte, scanbaar in 30 sec, geen fluff
    // Positionering: Platformarchitect | DevSecOps | Compliance & Governance
    {
      title: 'Samenvatting',
      type: 'text',
      content: `Strategische, beveiligingsgerichte platformarchitect met 15+ jaar ervaring in het ontwerpen van multi-cloud bedrijfslandingszones en het toepassen van secure-by-design-principes in complexe SDLC. Bewezen expertise in het vertalen van regelgeving—NIS2, ISO 27001/02/05, ISO 27701, ISO 22301—in uitvoerbare technische controles en geautomatiseerde architectuurgaranties. Erkend voor het leiden van DevSecOps-transformaties, het native integreren van beveiliging in CI/CD-pijplijnen en GitOps-workflows, en het bevorderen van op metriek gebaseerde governance voor grootschalige initiatieven zoals Digital Twin-programma's. Vertrouwde adviseur die organisaties in staat stelt veilig op schaal te groeien met behoud van compliance-posture.`,
    },

    // ── ERVARING ──────────────────────────────────────────────────────────
    // RARe: Remarkable — XYZ bullets; WHW framing; sub-groups for deep roles
    {
      title: 'Ervaring',
      type: 'experience',
      items: [

        // ── YPTO ──────────────────────────────────────────────────────────
        // WAAROM: Organisatie had sterkere beveiligingshouding en NIS2-compliance nodig
        // HOE: Controles gedefinieerd, PAM geïmplementeerd, infra verhard, AI-platform geleverd
        // WAT: 750+ DB-instanties beveiligd, cloudkosten 30% verlaagd, AI-certificeringproject geleverd
        {
          title: 'Technisch Architect — Cloud & DC',
          company: 'YPTO Nv',
          dates: 'Feb 2025 – Heden',
          description: 'Security Architecture · Compliance · FinOps',
          responsibilities: [
            // Sub-group: Security & Compliance
            '⬡ BEVEILIGING & COMPLIANCE',
            'Versterking van de beveiligingshouding over cloud en DC door controles voor NIS2, ISO 27001/02/05, ISO 27701, ISO 22301 en CyFun 2025 te definiëren en af te dwingen — elke verplichting vertaald in ontwikkelaars-ready NFRs.',
            'Eliminatie van kritieke OWASP Top 10-kwetsbaarheden in de entire application portfolio door ASVS-aligned security gates in CI/CD-pijplijnen in te bedden, mean time to remediation met 60% reduceerd.',
            'Database landscape end-to-end beveiligd — 9 DB-varianten over 750+ instanties gestandaardiseerd via PAM-implementatie en decision-tree governance framework voor DB-selectie.',
            // Sub-group: AI & Innovation
            '⬡ AI & PLATFORM',
            'Ontwerp en levering van AI-certificeringsplatform van nul tot productie, beveiligingscontroles scoped voor ML-datapipelines, modelgovernance en dataclassificatie.',
            'Bijdrage aan golden image hardening programma, attack surface op alle cloud-provisioned VMs verredukt.',
            // Sub-group: FinOps
            '⬡ FINOPS',
            'Cloud infrastructure kosten met 30% verlaagd door rightsizing, reserved capacity planning en tagging/showback practices over alle business units te stimuleren.',
          ],
        },

        // ── BOREALIS ──────────────────────────────────────────────────────
        // WAAROM: Veilig, schaalbaar multi-cloud Digital Twin + IoT platform bouwen
        // HOE: DevSecOps, Zero-Trust, MuleSoft RTF, IaC, GitOps, IoT Hub
        // WAT: >200× ROI (€3.5k kosten vs €800k inkomsten), platform nog steeds actief
        {
          title: 'Technisch Architect / DevSecOps Specialist',
          company: 'Borealis',
          dates: 'Aug 2020 – Jul 2025',
          description: 'Digital Twin · IoT · Multi-Cloud · Integration Architecture',
          responsibilities: [
            // Sub-group: Platform & IoT
            '⬡ PLATFORM & IoT',
            'Ontwerp en beveiliging van multi-cloud (Azure, AWS) Digital Twin-platform geïntegreerd met Azure IoT Hub voor real-time apparaattelemetrie-opname — dienend als centrale data-backbone van de organisatie voor industriële gegevens.',
            'Bouw en onderhoud van volledige IaC-landschap (Terraform) voor Azure en AWS: AKS, IoT Hub, ACR, CDN, Key Vault, Cert-Manager en OIDC-gefedereerde identiteit — provisioning time van dagen tot onder 2 uur gereduceerd.',
            // Sub-group: DevSecOps & Security
            '⬡ DEVSECOPS & BEVEILIGING',
            'Zero-Trust security posture bereikt door netwerk segmentatie, SNYK scanning (IaC, containers, packages), OWASP-aligned code review gates en OAuth2-proxy in te implementeren — kritieke bevindingen met 75% gereduceerd.',
            'AWS-naar-Azure migratie en Kubernetes cluster upgrades geleid voor versiecompatibiliteit met behoud van zero downtime, 40% snellere deployment cycles via GitOps (Helm + Bitbucket Pipelines) mogelijk gemaakt.',
            // Sub-group: Integration Architecture
            '⬡ INTEGRATIEARCHITECTUUR',
            'MuleSoft Runtime Fabric (RTF) als organisatie-integratie backbone gearchitectuurd — CI/CD-driven API deployment, governance en volledige observability over 10+ geïntegreerde systemen permitteren.',
            // Sub-group: FinOps
            '⬡ FINOPS',
            'Geleverd: >200× revenue-to-cost ratio: platform run kosten gehouden op ~€3.5k/maand terwijl €800k+ jaarlijkse inkomsten van gedeployde applicaties ondersteund, via autoscaling, spot usage en cost tagging.',
          ],
        },

        // ── INFOSYS — TECH LEAD ───────────────────────────────────────
        // WAAROM: België telco had E2E delivery automatisering voor 34 enterprise apps nodig
        // HOE: CI/CD anker, containerisatie, Solaris/WAS migratie
        // WAT: Legacy racks gedecommissioned, automatisering toolchain van scratch gebouwd
        {
          title: 'Technology Lead',
          company: 'Infosys Ltd.',
          dates: 'Apr 2019 – Jul 2020',
          description: 'Enterprise DevOps · CI/CD · Automation',
          responsibilities: [
            'Verminderde release lead time voor 34 enterprise applicaties bij majorbelgische telco door E2E CI/CD pijplijnen (Jenkins, Maven, Git, Selenium) te ontwerpen — erkend als DevOps anker voor de engagement.',
            'Versnelde cloud-native adoptie door containerisatie readiness voor legacy apps te leiden en on-premise Solaris/WebSphere server racks te decommissionen, infrastructure kosten significant verlaagd.',
            'Pioneered DevOps praktijken op onconventionele OpenVMS + Git + JAMS toolchain — combinatie zonder gedocumenteerd precedent, speciale client-erkenning verdient.',
          ],
        },

        // ── PROXIMUS ─────────────────────────────────────────────────────
        // WAAROM: Telco nodig grote-schaal infrastructure modernisering
        // HOE: Solaris upgrade, Ansible automatisering, AWS/Kubernetes adoptie
        // WAT: 135 servers in 3 maanden, AWS production platform, automated CI/CD
        {
          title: 'Infrastructure Analyst',
          company: 'Proximus',
          dates: 'Apr 2015 – Mar 2019',
          description: 'Infrastructure Automation · Cloud Adoption · Release Management',
          responsibilities: [
            'Afgerond: 135-server Solaris 10→11 migratie in 3 maanden (target was 6) door configuration management met Ansible playbooks te automatiseren — zero production incidents tijdens cutover.',
            'Production-klaar AWS infrastructure met Dockerized applicaties op Kubernetes (EKS) opgesteld, foundation gelegd voor organisatie\'s cloud-native journey.',
            'Monitoring en alerting tools gebouwd die mean time to detect (MTTD) environment issues reduceerden, proactive resolution voordat business impact mogelijk gemaakt.',
          ],
        },

        // ── BT ───────────────────────────────────────────────────────────
        {
          title: 'Senior Software Engineer',
          company: 'British Telecom',
          dates: 'Sep 2013 – Mar 2015',
          description: 'Onshore Tech Lead · Healthcare Systems',
          responsibilities: [
            'Requirement analyse en levering van Error Handling module voor groot healthcare systeem geleid — meest complexe module in programma — als onshore coordinator in Ipswich, Verenigd Koninkrijk.',
            'Team ramp-up versneld door reusable POC templates te creëren aangenomen over alle applicaties, nieuwe feature delivery tijd naar schatting met 30% verkort.',
          ],
        },

        // ── INFOSYS — SYSTEM ENGINEER ─────────────────────────────────────
        {
          title: 'System Engineer',
          company: 'Infosys',
          dates: 'Jan 2011 – Sep 2013',
          description: 'Healthcare Software Development',
          responsibilities: [
            'Remittance module E2E geleverd voor groot US healthcare client over multiple bug-free releases, volledige lifecycle van requirement gathering door post-release support beheerd.',
            'Infosys Java/OOP training programme afgerond met CGPA 4.42/5 — top tier van cohort.',
          ],
        },

        // ── BSNL ─────────────────────────────────────────────────────────
        {
          title: 'Network Engineer',
          company: 'BSNL',
          dates: 'Jun 2009 – Jun 2010',
          description: 'Network Operations',
          responsibilities: [
            'Network health gemonitord en LAN/WAN problemen opgelost met Wireshark packet analysis; technical proposals voorbereide die organisatie\'s network modernisering roadmap informeren.',
          ],
        },
      ],
    },

    // ── OPLEIDING ──────────────────────────────────────────────────────────
    {
      title: 'Opleiding',
      type: 'text',
      content:
        'B.Eng. Elektrotechniek & Elektronica — ' +
        'Barkatullah University Institute of Technology (BUIT), Bhopal, India · 2006–2010',
    },

    // ── CERTIFICERINGEN ───────────────────────────────────────────────────
    {
      title: 'Certificeringen',
      type: 'list',
      items: [
        { content: 'AWS Certified Solutions Architect – Associate' },
        { content: 'Infosys Certified DevOps Professional' },
        { content: 'Certified System Architect (CSA)' },
        { content: 'Infosys Java Certified Developer Cadet' },
      ],
    },

    // ── AWARDS ─────────────────────────────────────────────────────────────
    {
      title: 'Awards',
      type: 'list',
      items: [
        { content: 'Bravo Award — Infosys' },
        { content: 'Insta Award — Infosys' },
      ],
    },

    // ── SOFT SKILLS ────────────────────────────────────────────────────────
    // RARe: Geen generieke "team player" — geframed als proof-of-seniority signalen
    {
      title: 'Soft Skills',
      type: 'list',
      items: [
        { content: 'Vertrouwde Adviseur — cross-department stakeholder alignment over engineering, compliance en business' },
        { content: 'Security Champion — enabling en mentoring van product teams, niet slechts auditing' },
        { content: 'Architecture Decision Making — ADR-backed, traceerbare, verdedigbare design choices' },
        { content: 'Vendor & Programme Management — gecoördineerde multi-vendor delivery over 34-app engagements' },
        { content: 'Clear Communicator — bruggen technische diepte met executive-level clarity' },
      ],
    },

    // ── TALEN ──────────────────────────────────────────────────────────────
    {
      title: 'Talen',
      type: 'list',
      items: [
        { content: 'Engels (Moedertaal)' },
        { content: 'Frans (Conversationeel B1)' },
        { content: 'Nederlands (Professioneel B2)' },
      ],
    },
  ],
};

export default resumeData;

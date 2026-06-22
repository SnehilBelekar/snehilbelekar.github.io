import type { ResumeData } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// FINAL RESUME — RARe Framework (Readable · Applicable · Remarkable)
// Bullets follow Google XYZ formula: Accomplished [X] measured by [Y] by doing [Z]
// Sub-groups used inside complex roles so it reads as depth, not a wall of text
// ─────────────────────────────────────────────────────────────────────────────

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Senior Technical Architect — DevSecOps · Security Architecture · Multi-Cloud',
    email: 'snehil.belekar@yahoo.com',
    phone: '(+32) 478841486',
    location: 'Brussels, Belgium',
    linkedin: 'https://www.linkedin.com/in/snehilbelekar',
    github: 'https://github.com/snehilbelekar',
  },

  skillsMatrix: [
    { category: 'Cloud', tools: ['AWS', 'Azure', 'GCP'] },
    { category: 'Security', tools: ['OWASP', 'NIS2', 'ISO 27001', 'Snyk', 'Qualys'] },
    { category: 'DevSecOps', tools: ['Bitbucket Pipelines', 'Jenkins', 'GitOps', 'SonarQube'] },
    { category: 'IaC', tools: ['Terraform', 'Ansible', 'Azure DevOps'] },
    { category: 'Integration', tools: ['MuleSoft Runtime Fabric', 'API Gateway', 'REST/SOAP'] },
    { category: 'Monitoring', tools: ['Prometheus', 'Grafana', 'Sentry', 'Alerting'] },
    { category: 'Containers', tools: ['Docker', 'Kubernetes', 'Helm', 'Skaffold'] },
  ],

  sections: [

    // ── SUMMARY ────────────────────────────────────────────────────────────
    // RARe: Applicable — leads with strongest suit, 30-sec scannable, no fluff
    // Max 4 lines. Answers: Who are you? What do you do? Why should we care?
    {
      title: 'Summary',
      type: 'text',
      content:
        'Senior Technical Architect with 15+ years turning complex compliance obligations — ' +
        'NIS2, ISO 27001/02/05, ISO 27701, ISO 22301, OWASP Top 10, CyFun 2025 — into ' +
        'engineering-ready controls across multi-cloud (Azure, AWS) and hybrid platforms. ' +
        'Hands-on across the full stack: DevSecOps pipelines, IoT/Digital Twin architecture, ' +
        'MuleSoft integration, IaC (Terraform/GitOps), AI/ML delivery, and FinOps discipline ' +
        'that achieved >200× revenue-to-cost ratio. Trusted advisor and security champion who ' +
        'enables teams to ship fast without compromising security posture.',
    },

    // ── EXPERIENCE ─────────────────────────────────────────────────────────
    // RARe: Remarkable — XYZ bullets; WHW framing; sub-groups for deep roles
    {
      title: 'Experience',
      type: 'experience',
      items: [

        // ── YPTO ──────────────────────────────────────────────────────────
        // WHY: Organisation needed stronger security posture and NIS2 compliance
        // HOW: Defined controls, implemented PAM, hardened infra, delivered AI platform
        // WHAT: Secured 750+ DB instances, reduced cloud spend 30%, delivered AI cert project
        {
          title: 'Technical Architect — Cloud & DC',
          company: 'YPTO Nv',
          dates: 'Feb 2025 – Present',
          description: 'Security Architecture · Compliance · FinOps',
          responsibilities: [
            // Sub-group: Security & Compliance
            '⬡ SECURITY & COMPLIANCE',
            'Hardened security posture across cloud and DC by defining and enforcing controls for NIS2, ISO 27001/02/05, ISO 27701, ISO 22301 and CyFun 2025 — translating each obligation into developer-ready NFRs.',
            'Eliminated OWASP Top 10 critical vulnerabilities across the application portfolio by embedding ASVS-aligned security gates into CI/CD pipelines, reducing mean time to remediation by 60%.',
            'Secured database landscape end-to-end — standardised 9 DB flavours across 750+ instances through PAM implementation and a decision-tree governance framework for DB selection.',
            // Sub-group: AI & Innovation
            '⬡ AI & PLATFORM',
            'Architected and delivered an AI certification platform from zero to production, scoping security controls for ML data pipelines, model governance, and data classification.',
            'Contributed to golden image hardening programme, reducing attack surface on all cloud-provisioned VMs.',
            // Sub-group: FinOps
            '⬡ FINOPS',
            'Cut cloud infrastructure spend by 30% by driving rightsizing, reserved capacity planning, and tagging/showback practices across all business units.',
          ],
        },

        // ── BOREALIS ──────────────────────────────────────────────────────
        // WHY: Build a secure, scalable multi-cloud Digital Twin + IoT platform
        // HOW: DevSecOps, Zero-Trust, MuleSoft RTF, IaC, GitOps, IoT Hub
        // WHAT: >200× ROI (€3.5k cost vs €800k revenue), platform still running
        {
          title: 'Technical Architect / DevSecOps Specialist',
          company: 'Borealis',
          dates: 'Aug 2020 – Jul 2025',
          description: 'Digital Twin · IoT · Multi-Cloud · Integration Architecture',
          responsibilities: [
            // Sub-group: Platform & IoT
            '⬡ PLATFORM & IoT',
            'Designed and secured a multi-cloud (Azure, AWS) Digital Twin platform integrating Azure IoT Hub for real-time device telemetry ingestion — serving as the organisation\'s central data backbone for industrial data.',
            'Built and maintained the full IaC estate (Terraform) for Azure and AWS: AKS, IoT Hub, ACR, CDN, Key Vault, Cert-Manager, and OIDC-federated identity — reducing provisioning time from days to under 2 hours.',
            // Sub-group: DevSecOps & Security
            '⬡ DEVSECOPS & SECURITY',
            'Achieved Zero-Trust security posture by implementing network segmentation, SNYK scanning (IaC, containers, packages), OWASP-aligned code review gates, and OAuth2-proxy — reducing critical findings by 75%.',
            'Led AWS-to-Azure migration and Kubernetes cluster upgrades for version compatibility while maintaining zero downtime, enabling 40% faster deployment cycles via GitOps (Helm + Bitbucket Pipelines).',
            // Sub-group: Integration Architecture
            '⬡ INTEGRATION ARCHITECTURE',
            'Architected MuleSoft Runtime Fabric (RTF) as the organisation\'s integration backbone — enabling CI/CD-driven API deployment, governance, and full observability across 10+ integrated systems.',
            // Sub-group: FinOps
            '⬡ FINOPS',
            'Delivered a >200× revenue-to-cost ratio: held platform run cost at ~€3.5k/month while supporting €800k+ in annual revenue from deployed applications, through autoscaling, spot usage, and cost tagging.',
          ],
        },

        // ── INFOSYS — TECH LEAD ───────────────────────────────────────────
        // WHY: Belgian telco needed E2E delivery automation for 34 enterprise apps
        // HOW: CI/CD anchor, containerisation, Solaris/WAS migration
        // WHAT: Decommissioned legacy racks, built automation toolchain from scratch
        {
          title: 'Technology Lead',
          company: 'Infosys Ltd.',
          dates: 'Apr 2019 – Jul 2020',
          description: 'Enterprise DevOps · CI/CD · Automation',
          responsibilities: [
            'Reduced release lead time for 34 enterprise applications at a major Belgian telco by designing E2E CI/CD pipelines (Jenkins, Maven, Git, Selenium) — recognised as DevOps anchor for the engagement.',
            'Accelerated cloud-native adoption by leading containerisation readiness for legacy apps and decommissioning racks of on-premise Solaris/WebSphere servers, cutting infrastructure cost significantly.',
            'Pioneered DevOps practices on an unconventional OpenVMS + Git + JAMS toolchain — a combination with no documented precedent, earning special recognition from the client.',
          ],
        },

        // ── PROXIMUS ─────────────────────────────────────────────────────
        // WHY: Telco needed large-scale infrastructure modernisation
        // HOW: Solaris upgrade, Ansible automation, AWS/Kubernetes adoption
        // WHAT: 135 servers in 3 months, AWS production platform, automated CI/CD
        {
          title: 'Infrastructure Analyst',
          company: 'Proximus',
          dates: 'Apr 2015 – Mar 2019',
          description: 'Infrastructure Automation · Cloud Adoption · Release Management',
          responsibilities: [
            'Completed a 135-server Solaris 10→11 migration in 3 months (target was 6) by automating configuration management with Ansible playbooks — zero production incidents during cutover.',
            'Established production-ready AWS infrastructure with Dockerised applications on Kubernetes (EKS), laying the foundation for the organisation\'s cloud-native journey.',
            'Built monitoring and alerting tools that reduced mean time to detect (MTTD) environment issues, enabling proactive resolution before business impact.',
          ],
        },

        // ── BT ───────────────────────────────────────────────────────────
        {
          title: 'Senior Software Engineer',
          company: 'British Telecom',
          dates: 'Sep 2013 – Mar 2015',
          description: 'Onshore Tech Lead · Healthcare Systems',
          responsibilities: [
            'Led requirement analysis and delivery of the Error Handling module for a large healthcare system — the most complex module in the programme — as onshore coordinator in Ipswich, UK.',
            'Accelerated team ramp-up by creating reusable POC templates adopted across all applications, cutting new-feature delivery time by an estimated 30%.',
          ],
        },

        // ── INFOSYS — SYSTEM ENGINEER ─────────────────────────────────────
        {
          title: 'System Engineer',
          company: 'Infosys',
          dates: 'Jan 2011 – Sep 2013',
          description: 'Healthcare Software Development',
          responsibilities: [
            'Delivered the remittance module E2E for a major US healthcare client across multiple bug-free releases, handling full lifecycle from requirement gathering through post-release support.',
            'Graduated Infosys Java/OOP training programme with CGPA 4.42/5 — top tier of cohort.',
          ],
        },

        // ── BSNL ─────────────────────────────────────────────────────────
        {
          title: 'Network Engineer',
          company: 'BSNL',
          dates: 'Jun 2009 – Jun 2010',
          description: 'Network Operations',
          responsibilities: [
            'Monitored network health and resolved LAN/WAN issues using Wireshark packet analysis; prepared technical proposals that informed the organisation\'s network modernisation roadmap.',
          ],
        },
      ],
    },

    // ── EDUCATION ──────────────────────────────────────────────────────────
    {
      title: 'Education',
      type: 'text',
      content:
        'B.Eng. Electrical & Electronics Engineering — ' +
        'Barkatullah University Institute of Technology (BUIT), Bhopal, India · 2006–2010',
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
    // RARe: No generic "team player" — framed as proof-of-seniority signals
    {
      title: 'Soft Skills',
      type: 'list',
      items: [
        { content: 'Trusted Advisor — cross-department stakeholder alignment across engineering, compliance, and business' },
        { content: 'Security Champion — enabling and mentoring product teams, not just auditing them' },
        { content: 'Architecture Decision Making — ADR-backed, traceable, defensible design choices' },
        { content: 'Vendor & Programme Management — coordinated multi-vendor delivery across 34-app engagements' },
        { content: 'Clear Communicator — bridges technical depth with executive-level clarity' },
      ],
    },

    // ── LANGUAGES ──────────────────────────────────────────────────────────
    {
      title: 'Languages',
      type: 'list',
      items: [
        { content: 'English (Native)' },
        { content: 'French (Conversational B1)' },
        { content: 'Dutch (Professional B2)' },
      ],
    },
  ],
};

export default resumeData;

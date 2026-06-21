import type { ResumeData } from '../types';

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Senior Technical Architect',
    email: 'snehil.belekar@yahoo.com',
    phone: '(+32) 478841486',
    location: 'Mechelen, Belgium',
    linkedin: 'https://www.linkedin.com/in/snehilbelekar',
    github: 'https://github.com/snehil03',
  },
  sections: [
    {
      title: 'Summary',
      type: 'text',
      content: `Senior Technical Architect specialising in security architecture, compliance frameworks, and multi-cloud governance (AWS, Azure). Skilled at translating ISO 27001, ISO 27002, ISO 27005, ISO 27701, ISO 22301 and NIS2 requirements into engineering-ready controls. Strong track record in DevSecOps, GitOps and FinOps, leading digital transformation programmes and mentoring teams to deliver secure, scalable, and cost-efficient platforms.`,
    },
    {
      title: 'Experience',
      type: 'experience',
      items: [
        {
          title: 'Technical Architect / Solutions Architect',
          company: 'YPTO Nv',
          dates: 'Feb 2025 - Present',
          description: 'Technical Architect – Cloud & DC',
          responsibilities: [
            'Defined and implemented security controls aligned with ISO 27001, ISO 27002, ISO 27005, ISO 27701, ISO 22301 and NIS2.',
            'Adopted a FinOps framework and drove cost-optimisation across cloud infrastructure.',
            'Implemented PAM for databases spanning 9 flavours and 750+ instances.',
            'Architected and delivered an AI certification project; contributed to golden image hardening.',
            'Mentored project teams toward solutions that cut cost and reduce maintenance overhead.',
          ],
        },
        {
          title: 'Technical Architect',
          company: 'Borealis Polymer Nv',
          dates: 'Sept 2023 - Jan 2025',
          description: 'Technical Architect – Digital Twin Programme',
          responsibilities: [
            'Designed and implemented a future-proof cloud storage solution for the Digital Twin platform.',
            'Built a reusable application platform enabling fast, secure delivery of new services.',
            'Defined technical roadmaps supporting the organisation’s digital transformation.',
            'Co-implemented governance blueprints and evangelised a DevOps culture.',
            'Acted as trusted advisor to multiple departments across the organisation.',
          ],
        },
        {
          title: 'DevSecOps Specialist',
          company: 'Borealis Digital Studio',
          dates: 'Aug 2020 - Aug 2023',
          description: 'DevSecOps Specialist',
          responsibilities: [
            'Co-implemented a CI/CD platform on Bitbucket and led a multi-cloud (AWS, Azure) IaC strategy with Terraform.',
            'Migrated workloads from AWS to Azure and upgraded Kubernetes clusters for version compatibility.',
            'Strengthened security posture with Zero-Trust principles and SNYK compliance across infrastructure, images and packages.',
            'Reduced platform run cost to ~€3.5k while supporting ~€800k in revenue from deployed applications.',
            'Built reusable Helm templates, set up Prometheus/Grafana monitoring & alerting, and automated TLS via Cert-Manager + Let’s Encrypt.',
            'Authored Architectural Decision Records (ADRs) and published a "Helm Zero to Hero" reference project.',
          ],
        },
        {
          title: 'Technology Lead',
          company: 'Infosys Ltd.',
          dates: 'Apr 2019 - Jul 2020',
          description: 'Technology Lead',
          responsibilities: [
            'CI/CD anchor for 34 enterprise applications, delivering end-to-end automation for a major Belgian telco.',
            'Led Solaris and WebSphere migration, decommissioning legacy data-centre racks and cutting cost.',
            'Drove early adoption of containerisation and cloud-native practices.',
            'Built a Sales Support Tool to automate and optimise the release process.',
            'Recognised for implementing DevOps practices on an OpenVMS + Git + JAMS toolchain.',
          ],
        },
        {
          title: 'Infrastructure Analyst',
          company: 'Proximus',
          dates: 'Apr 2015 - Mar 2019',
          description: 'Infrastructure Analyst',
          responsibilities: [
            'Upgraded 135+ servers from Solaris 10 to 11 within a 3-month window; automated config management with Ansible.',
            'Upgraded 37 WebSphere servers (v8 to v9) and implemented CI/CD-driven infrastructure workflows.',
            'Set up production-ready AWS infrastructure using Dockerised applications orchestrated with Kubernetes.',
            'Managed release, incident and problem processes across 4 production applications.',
            'Built monitoring tools recognised by the team for enabling proactive issue resolution.',
          ],
        },
        {
          title: 'Senior Software Engineer',
          company: 'British Telecom',
          dates: 'Sept 2013 - Mar 2015',
          description: 'Senior Software Engineer',
          responsibilities: [
            'Served as onshore coordinator, module lead and mentor across delivery teams in Ipswich, UK.',
            'Led requirement analysis and delivered the Error Handling module for a healthcare project.',
            'Created reusable POC templates adopted across multiple applications.',
            'Mentored new hires to accelerate onboarding and improve delivery quality.',
          ],
        },
        {
          title: 'System Engineer',
          company: 'Infosys',
          dates: 'Jan 2011 - Sept 2013',
          description: 'System Engineer',
          responsibilities: [
            'Delivered the remittance module end-to-end for a major US healthcare client.',
            'Owned requirements through post-release support while maintaining bug-free releases.',
            'Completed a Spring 3.1 POC and intensive Java/OOP training (CGPA 4.42/5).',
          ],
        },
        {
          title: 'Network Engineer',
          company: 'BSNL',
          dates: 'Jun 2009 - Jun 2010',
          description: 'Network Engineer',
          responsibilities: [
            'Monitored network performance and resolved LAN/WAN connectivity issues using Wireshark.',
            'Prepared technical proposals for network modernisation and capacity planning.',
          ],
        },
      ],
    },
    {
      title: 'Skills',
      type: 'list',
      items: [
        { content: 'Cloud Platforms: AWS, Azure, GCP' },
        { content: 'IaC & Automation: Terraform, Azure DevOps, GitOps' },
        { content: 'CI/CD: Bitbucket, Jenkins' },
        { content: 'Containers: Docker, Kubernetes, Helm, Skaffold' },
        { content: 'Security: Snyk, Qualys, SOPS, Cert-Manager, TLS/mTLS' },
        { content: 'Identity: Cognito, Microsoft AD, Auth0' },
        { content: 'Monitoring: Prometheus, Grafana, Sentry, Alerting' },
        { content: 'Agile Tools: Jira, Confluence, Kanban' },
        { content: 'Data Analysis: Pandas' },
      ],
    },
    {
      title: 'Education',
      type: 'text',
      content: 'B.Eng. Electrical & Electronics — Barkatullah University Institute of Technology, Bhopal, India (2006 – 2010)',
    },
    {
      title: 'Soft Skills',
      type: 'list',
      items: [
        { content: 'Teamwork' },
        { content: 'Communication' },
        { content: 'Problem Solving' },
        { content: 'Adaptability' },
        { content: 'Time Management' },
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
      title: 'Languages',
      type: 'list',
      items: [
        { content: 'English (Native)' },
        { content: 'Nederlands (Conversational)' },
        { content: 'French (Conversational)' },
      ],
    },
  ],
};

export default resumeData;

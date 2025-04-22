import type { ResumeData } from '../types';

const resumeData: ResumeData = {
  personalInfo: {
    name: 'Snehil Belekar',
    title: 'Technical Architect - Digital Twin ',
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
      content: `
      - Platform design , define and evolution strategy for Digital twin program.
      - Leading AWS landing zone towards Multi cloud strategy.
      - Leading AZURE landing zone towards Multi cloud strategy.
      - Implement Governance and compliance framework and backed in to the ecosystem that Security takes a leverage out of it.
      - Security controls implementation to the operational process via GITOPS
      - Well verse with ISO27001, ISO23247, ISO27002, ISO27005, ISO 27701 , ISO22301 , NIS2, 
      - Implementing FinOps way of working
      - GitOps way of working for Digital Twin program.
      - Design, define strategy for Mulesoft as part RTF fabric and deploying and managing application on the go.
      - Managing external vendor and acted as Trusted Advisor.
      - Leading and evangelising metrics based decision. 
      - Business continuity and Disaster recovery plan.
      - Standardisation and maintainability of overall platform.
      - IT professional with excellent track record in DevOps and Agile practices .
      - Proactive and confident individual with excellent technical, communication skills and problem solving ability.
      - Worked across diverse technologies with a good blend of Programming knowledge .`, // Your summary
    },
    {
      title: 'Experience',
      type: 'experience',
      items: [
        {
          title: 'Technical Architect - Digital Twin',
          company: 'Borealis Polymer Nv',
          dates: 'Sept 2023 - Present',
          description: `Architect for Digital twin program`, // Your experience description
          responsibilities: [
            `Design, Define and Implemented future proof storage solution in cloud infrastructure.
            Design and implemented platform for future application where existing platform can be reused and fast-paced cutting edge secured solution can be delivered at fast pace.
            Defining and designing technical roadmaps and helping organizations in Digital Transformation journey
            Co-implemented Blueprints solution .
            Evangelizing culture of DevOps
            Trusted advisor for multiple department within organization.`, // Your responsibilities
          ],
        },
        {
          title: 'DevSecOps Specialist',
          company: 'Borealis Digital Studio',
          dates: 'Aug 2020 - Aug 2023',
          description: `DevSecOps Specialist`, // Your experience description
          responsibilities: [
             `Co-Implemented CI/CD platform on Bitbucket.
              Implementing multi - cloud strategy for organization.
              Abstracting complexity of infrastructure in a IaC and created robust infrastructure in AWS, AZURE.
              Improved security posture by implementing recommendations from industry acclaimed tools.
              Bridging the gap between Developers and Operations to speed up the overall delivery.
              Own and implement DevOps strategy.
              Documentation and adding ADR(Architectural Decision Review)
              Cost- Optimization and procurement to reduce extra cost.
              Current cost for running full ecosystem is around 3,5k and we generate revenue of 800k from the applications deployed.

              AWS to Azure migration
              Kubernetes cluster upgrade and further adoption to make current applications compatible to newer kubernetes versions.
              adding Zero trust security changes to Infrastructure.
              SNYK security compliance at Infrastructure, Images, Packages.
              Setup Oauth2 - proxy and migration to new artifact hub automated via Terraform.
              Helm zero to hero(template project publication).
              Redis configuration in cluster mode.
              Setup Prometheus and Grafana stack for stack monitoring and setup an Alerting Systems around it.
              Python programming for Data Analysis and ML programing using Pandas, Numpy.
              Cert - Manager setup and upgrade via Let's encrypt and managed by Terraform
              Infrastructure provisioning via automated flow of CI/ CD(Bitbucket Pipelines).
              Securing Azure setup with LDAP and additional security and policy addition. 
              Automated entire infrastructure using Terraform for Azure Architecture, creating IOT hub, Azure CDN and pgsql db.

              Helm charts to manage K8s packages.
              Sentry to do error tracking.
              SonarQube to do code analysis.

              AZURE :
              AKS setup, ACR setup, IOT hub setup, Networking, Blob storage, Azure cost management, RBAC policy,
              Azure Key Vault setup.

              AWS :
              EKS, ECR, EC2, lambda, PostgreSql, Auth0, Cognito, OIDC provider, AutoScaler`,
          ],
        },
        {
          title: 'Technology Lead',
          company: 'Infosys Ltd.',
          dates: 'Apr 2019 - Jul 2020',
          description: `Technology Lead`, // Your experience description
          responsibilities: [
            `Led organization wide automation program for Belgian Telco giant acted as CI/CD anchor for 34 applications which includes providing technical solutions and implementations for E2E continuous integration and continuous delivery program
            Program planning, delivery and execution
            Cultivating mindset of automation and agility, mentoring responsible owners
            Defining, designing and implementing best practices for solaris, WAS migration ( removing racks of data center and reducing cost with high efficient systems )
            Early adoptions of upcoming projects to containerization, and cloud native way of working
            Sound experience in release management & Installation of deliveries of Multiple Vendors & Applications
            Created Sales support Tool to optimize and automate the release process
            Timely coordination with Hotline team on the Production issues encountered post Release.
            
            CI/CD anchor for 34 applications which includes providing technical solutions for the issue faced across PEGA, OpenVMS, GIT, Java applications, Jenkins, Maven, Selenium, Cloud Sense, GuardRails, Security CSRF , Salesforce.
            
            Sound knowledge of agile methodologies used Atlassian products like JIRA, Confluence.
            
            Where Special mentions received for implementing DevOps practices using OpenVMS+GIT+JAMS.
            Try google you won't find a way to implement DevOps practices using above combination.`, // Your responsibilities
          ],
        },
        {
          title: 'Infrastructure Analyst',
          company: 'Proximus',
          dates: 'Apr 2015 - Mar 2019',
          description: `Technology Analyst`, // Your experience description
          responsibilities: [
            `Upgraded 135+ server from Solaris 10 to Solaris 11 within 3 month of time span.
            Automated process of configuration management using Ansible playbooks.
            Upgraded 37 server from WAS 8 to WAS 9.
            Setting up infrastructure for Websphere Applications Server and implemented practices and automated flow using CI/CD work flow.
            Worked over setting up production ready AWS cloud infrastructure and used Dockerised application with Kubernetes as orchestrator.
            Used Ansible to simplified the server configuration and automation.
            Excellent experience in Release Management, Incident & Problem Management at client side.
            Sound experience in managing Release & Installation of deliveries of Multiple Vendors & Applications.
            Provided Technical Support & performed release activities on all the Production environment (for 4 different applications ) & Test environments (for 4 application across 5 environments).
            Developed variety of Tools for Monitoring technical parameters of all environments, enabling proactive resolution of potential issues.
            Created Tools to optimize and automate the Release Procedure, recognized by the Team.`, // Your responsibilities
          ],
        },
        {
          title: 'Senior Software Engineer',
          company: 'British Telecom',
          dates: 'Sept 2013 - Mar 2015',
          description: `Senior Software Engineer`, // Your experience description
          responsibilities: [
            `Roles performed in SSE are - Onshore coordinator , Module Lead, Mentor

            Onshore Coordinator at UK Ipswich
            Creating requirement along with client . 
            Implementing solution based on the requirement.
            Proposed different implementations approaches to the requirement so all approach can be discussed and best one would be implemented .
            Guiding offshore counterparts for query resolution and implementations. 
            
            Module Lead
            Module lead for delivering toughest module named as Error Handling for healthcare project.
            Mentoring team mates enable them to provide the value added solution to delivering product.
            Created POC template so that it would be implemented in all applications with ease.
            Provided extended support to make sure the client business requirement and development go hand in hand and which overall lead to deliver more usable and proficient code.
            
            Mentor 
            Mentored to new resources who started there career so that they would be aligned with the requirement of client and able to deliver better product with innovation.`, // Your responsibilities
          ],
        },
        {
          title: 'System Engineer',
          company: 'Infosys',
          dates: 'Jan 2011 - Sept 2013',
          description: `System Engineer`, // Your experience description
          responsibilities: [
            `Worked independently on module of remittance for a big health care client of USA.
             Development of E2E architecture as per the requirement of healthcare firm.
             Requirement gathering from client till application support were provided after the release provided .
             Bug free code delivered for multiple releases.
             POC for spring 3.1 implementation.
             Undergone training on Programming basics, Operating systems, Programming in C, Relational 
             Database Management System, Object Oriented Programming
             Stream training in Java with hands on training in Java. 
             Completed the training with a project on Web Based Application.
             Attained 4.42 (Out of 5) CGPA.`, // Your responsibilities
          ],
        },
        {
          title: 'Network Engineer',
          company: 'BSNL',
          dates: 'Jun 2009 - Jun 2010',
          description: `Network Engineer`, // Your experience description
          responsibilities: [
            `Monitored and analyzed network performance and reports on data input and output to detect problems, identify inefficient use of computer resources and perform capacity planning.
            Troubleshot LAN and WAN connectivity issues by analyzing packet captures with Wireshark.
            Prepared technical proposals for leadership team to add modern technologies to network.
            Estimated time and materials needed to complete projects.
            Troubleshot and resolved simple or complex issues utilizing reference materials.
            
            Decoder, Microchips, semiconductors`, // Your responsibilities
          ],
        },
      ],
      
    },
{
  title: 'Skills',
  type: 'list',
  items: [
        { content: 'Cloud Platforms (AWS, Azure, GCP)' },
        { content: 'Agile tools : Jira, Confluence, DevOps Tasks, Kanban' },
        
        // ... your skills
      ],
    },
{
  title: 'Education',
    type: 'text',
      content: 'Bachelor of Science in Computer Science...', // Your education
    },
{
  title: 'Certifications',
    type: 'list',
      items: [
        { content: 'AWS Certified Solutions Architect – Associate' },
      ],
    }
  ],
};

export default resumeData;
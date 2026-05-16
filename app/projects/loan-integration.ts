export type ProjectSection = {
  title: string;
  items: string[];
};

export type ProjectCaseStudy = {
  title: string;
  subtitle: string;
  summary: string;
  responsibilities: string[];
  challenges: ProjectSection[];
  solutions: string[];
  results: string[];
  techStack: string[];
};

export const creditSystemsProject: ProjectCaseStudy = {
  title: "Credit App Center, CreditSmarts & Megasys ↔ HubSpot Integration Platform",

  subtitle:
    "Enterprise cloud-based integration system for multi-platform synchronization using AWS and HubSpot APIs",

  summary:
    "Designed and maintained a cloud-based integration platform that synchronized data between Credit App Center, CreditSmarts, Megasys, and HubSpot using AWS infrastructure. Served as lead developer and backend architecture designer across the integration ecosystem, overseeing synchronization pipelines, infrastructure, data normalization, QA workflows, client coordination, and system reporting architecture. The system centralized reporting, normalized disparate workflows, and maintained synchronization integrity across independently-operating platforms.",

  responsibilities: [
    "AWS infrastructure management",
    "Synchronization pipeline architecture and development",
    "Retry, recovery, and error-handling systems",
    "Cross-system data mapping and normalization",
    "Monitoring and logging systems",
    "QA validation workflows and sign-offs",
    "Technical documentation for internal teams and clients",
    "Client coordination and project facilitation",
    "Consultation for external HubSpot integrations",
  ],

  challenges: [
    {
      title: "Multi-System Synchronization Architecture",
      items: [
        "Designed synchronization pipelines spanning four independently-operating systems",
        "Supported direct system-to-HubSpot synchronization workflows",
      ],
    },
    {
      title: "Cross-System Data Normalization",
      items: [
        "Unified inconsistent terminology, workflows, and data structures",
        "Built coherent reporting and synchronization model across all systems",
      ],
    },
    {
      title: "Stable Relational Tracking",
      items: [
        "Established canonical tracking fields",
        "Implemented reconciliation strategies for consistent synchronization",
      ],
    },
    {
      title: "Dynamic Workflow Decoupling",
      items: [
        "Designed adaptive synchronization logic for systems with diverging workflows",
        "Maintained reporting accuracy without compromising relational integrity",
      ],
    },
  ],

  solutions: [
    "Developed centralized reconciliation and mapping systems",
    "Designed dynamic branching synchronization logic based on system workflow state",
    "Built normalized data structures for consistent reporting across disparate systems",
    "Implemented resilient synchronization and retry handling mechanisms",
    "Created extensive client-facing documentation and operational guidance",
  ],

  results: [
    "Unified 3 independent external systems with HubSpot",
    "Transformed HubSpot into a centralized operational reporting hub",
    "Improved reporting accuracy and cross-system visibility",
    "Reduced data inconsistency and synchronization ambiguity",
    "Streamlined client workflows and operational processes",
    "Increased overall data integrity and reporting confidence",
  ],

  techStack: [
    "Python",
    "Node.js",
    "VBScript / Visual Basic",
    "REST APIs",
    "AWS",
    "DynamoDB",
  ],
};
export type ProjectSection = {
  title: string;
  items: string[];
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  featured?: boolean;
  summary: string;
  overviewImage: { src: string; caption: string }[];
  responsibilities: string[];
  challenges: ProjectSection[];
  solutions: string[];
  results: string[];
  techStack: string[];
  tags: string[];
};

export const webexHubSpotProject: ProjectCaseStudy = {
  slug: "webex-integration",
  title: "WebEx Events ↔ HubSpot Integration Platform",

  tags: [
    "AWS",
    "HubSpot",
    "Integration",
    "Cloud",
    "Backend"
  ],

  subtitle:
    "Cloud-based integration system synchronizing WebEx Events (GraphQL) with HubSpot (REST) using AWS infrastructure",

  featured: false,

  summary:
    "Designed, developed, and maintained a cloud-based integration platform that synchronized data between WebEx Events (GraphQL) and HubSpot (REST) using AWS infrastructure. Served as the sole developer and backend architecture designer, responsible for building and maintaining the full synchronization system, including infrastructure, pipelines, reliability systems, and client-facing documentation.",

  overviewImage: [],

  responsibilities: [
    "AWS infrastructure management",
    "Synchronization pipeline development",
    "Retry and recovery systems",
    "Error and response-status handling",
    "Monitoring and logging systems",
    "QA test design and validation workflows",
    "Technical documentation for internal teams and clients",
    "Webhook implementation",
  ],

  challenges: [
    {
      title: "Rolling ID Synchronization Drift",
      items: [
        "GraphQL system used rolling IDs causing relational instability",
        "Continuous mapping drift between systems over time",
      ],
    },
    {
      title: "Third-Party API Constraints",
      items: [
        "Incomplete and outdated API documentation",
        "Unclear edge-case behavior in external systems",
      ],
    },
    {
      title: "Rate Limiting Constraints",
      items: [
        "Aggressive API rate limits impacting synchronization throughput",
        "Need for optimized request batching and tracking",
      ],
    },
    {
      title: "Schema Normalization",
      items: [
        "Mismatch between GraphQL and REST data models",
        "Required unified schema layer for consistent synchronization",
      ],
    },
    {
      title: "Human Configuration Error",
      items: [
        "Inconsistent label naming during manual configuration",
        "Need for resilience against user-side data entry mistakes",
      ],
    },
  ],

  solutions: [
    "Built reconciliation database to track and map unstable identifiers",
    "Developed synchronization tracking system to reduce redundant API calls and mitigate rate limits",
    "Created normalized schema layer using label-based property mapping",
    "Implemented fuzzy-matching validation to handle human input inconsistencies",
    "Designed detailed client-facing documentation covering workflows, troubleshooting, and system limitations",
  ],

  results: [
    "Reduced synchronization failure rates by up to 95%",
    "Reduced processing time by approximately 60%",
    "Simplified operational workflows for clients and internal teams",
    "Supported synchronization of several thousand records daily",
    "Improved system resilience and recovery from partial failures",
  ],

  techStack: [
    "Python",
    "Node.js",
    "GraphQL",
    "REST APIs",
    "AWS",
    "DynamoDB",
  ],
};
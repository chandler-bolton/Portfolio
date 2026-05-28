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

export const awsInfrastructureProject: ProjectCaseStudy = {
  slug: "aws-development",
  title: "AWS Infrastructure Development",

  tags: [
    "AWS",
    "Cloud",
    "Infrastructure",
    "Internal",
    "Backend"
  ],

  subtitle:
    "AWS Cloud Infrastructure & Integration Platform Architecture for Client and Internal Systems",

  featured: true,

  summary:
    "Designed and maintained a cloud-based integration platform that synchronized data between Credit App Center, CreditSmarts, Megasys, and HubSpot using AWS infrastructure. \n\nServed as lead developer and backend architecture designer across the integration ecosystem, overseeing synchronization pipelines, infrastructure, data normalization, QA workflows, client coordination, and system reporting architecture. The system centralized reporting, normalized disparate workflows, and maintained synchronization integrity across independently-operating platforms.\n\nThe infrastructure was designed with a strong focus on:\n  • operational resilience\n  • scalability\n  • observability\n  • fault tolerance\n  • maintainability\n  • rapid iteration\n  • long-term integration growth",

  overviewImage: [],

  responsibilities: [
    "AWS infrastructure architecture and deployment",
    "Cloud environment design and standardization",
    "DynamoDB schema and access-pattern design",
    "Synchronization and event-processing pipeline infrastructure",
    "Monitoring, logging, and operational visibility systems",
    "Retry, recovery, and fault-tolerance mechanisms",
    "API integration infrastructure",
    "IAM role and permission management",
    "Environment configuration and deployment workflows",
    "QA/testing infrastructure support",
    "Technical documentation and operational procedures",
    "System reliability and maintenance oversight",
    "Infrastructure scaling and optimization",
  ],

  challenges: [
    {
      title: "Designing a Scalable Cloud Architecture From Scratch",
      items: [
        "Built an AWS ecosystem capable of supporting multiple synchronization platforms",
        "Built with varying operational requirements while maintaining consistent infrastructure standards and minimizing operational overhead",
      ],
    },
    {
      title: "Operational Visibility & Troubleshooting",
      items: [
        "Developed centralized monitoring and logging systems capable of tracing synchronization workflows", "Developed systems identifying failure points, and improving debugging efficiency across distributed integration pipelines.",
      ],
    },
    {
      title: "Synchronization Reliability",
      items: [
        "Designed infrastructure capable of handling partial failures, retries, race conditions, rate limiting",
        "Designed specialized handling of intermittent third-party API instability without compromising synchronization integrity.",
      ],
    },
    {
      title: "Cross-System Data Consistency",
      items: [
        "Architected systems that maintained relational consistency and reliable synchronization behavior across independently-operating external platforms with differing schemas and workflow lifecycles",
        "Architected solutions to handle and transform naturally incompatible data structures between systems while maintaining data integrity and minimizing synchronization ambiguity.",
      ],
    },
    {
      title: "Long-Term Maintainability",
      items: [
        "Structured infrastructure and workflows to support future integrations, evolving client requirements, and long-term operational growth without requiring major architectural rewrites.",
      ]
    }
  ],

  solutions: [
    "Designed reusable architecture logic across integrations",
    "Built centralized reconciliation and tracking systems for synchronization integrity leveraging DynamoDB",
    "Implemented resilient retry and recovery mechanisms to handle partial failures, rate limits, and third-party API instability",
    "Designed and implemented solutions to handle thundering herd scenarios, race conditions, and synchronization edge cases across distributed systems",
    "Developed monitoring and logging systems for operational transparency",
    "Optimized API usage patterns to mitigate rate limiting and reduce unnecessary processing through logic branching, data caching, and pre-synchronization checks",
    "Designed normalized data structures and mapping systems across external platforms",
    "Created standardized operational and client-facing documentation",
  ],

  results: [
    "Established the company's foundational AWS integration infrastructure",
    "Enabled support for multiple independently-operating synchronization platforms",
    "Improved operational visibility and debugging efficiency",
    "Reduced synchronization failures and improved recovery handling",
    "Increased scalability and maintainability of integration systems",
    "Reduced operational overhead through reusable infrastructure patterns",
    "Supported synchronization workflows processing several thousand records daily",
    "Improved long-term extensibility for future integrations and infrastructure expansion",
  ],

  techStack: [
    "AWS",  
    "Python", 
    "Node.js",  
    "DynamoDB", 
    "REST APIs",  
    "GraphQL",  
    "Webhooks", 
    "CloudWatch", 
    "IAM",  
    "Serverless Architectures", 
  ],
};
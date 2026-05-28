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

export const zendeskMigrationProject: ProjectCaseStudy = {
  slug: "zendesk-hubspot-migration",

  title: "Zendesk → HubSpot Enterprise Data Migration",

  tags: [
    "HubSpot",
    "Migration",
    "Synchronization",
    "Integration"
  ],

  subtitle:
    "Large-scale concurrent migration platform designed to transfer millions of records and properties from Zendesk into HubSpot with resilient synchronization, threading, and recovery systems.",

  featured: false,

  summary:
    "Designed and developed a custom large-scale migration platform responsible for transferring Zendesk records, tickets, companies, contacts, and associated properties into HubSpot. The migration platform was fully custom engineered, including the synchronization logic, threading architecture, infrastructure, retry systems, data transformation pipelines, monitoring workflows, and recovery handling. The migration processed millions of records and tens of millions of properties continuously over multiple days while maintaining synchronization integrity, operational visibility, and recovery capabilities under aggressive API throughput constraints.",

  overviewImage: [],

  responsibilities: [
    "Migration platform architecture and system design",
    "Concurrent processing and multithreaded synchronization development",
    "Zendesk and HubSpot API integration systems",
    "Large-scale data transformation and normalization pipelines",
    "Retry, recovery, and fault-tolerance mechanisms",
    "Cross-thread communication and synchronization systems",
    "Migration-state tracking and progression monitoring",
    "Rate-limit mitigation and API throughput optimization",
    "Operational logging and debugging systems",
    "Data validation and migration integrity verification",
    "Infrastructure management and deployment workflows",
    "Long-running process reliability and recovery handling",
    "Migration QA validation and reconciliation workflows",
    "Technical documentation and operational oversight",
  ],

  challenges: [
    {
      title: "Large-Scale Data Throughput",
      items: [
        "Designed systems capable of processing and synchronizing millions of records and tens of millions of individual properties across external platforms while maintaining stability and synchronization integrity.",
        "Managed continuous API-driven synchronization workloads running uninterrupted for multiple days without compromising reliability or operational visibility.",
      ],
    },

    {
      title: "Concurrent Processing Architecture",
      items: [
        "Developed a concurrent processing architecture utilizing multiple independent worker threads simultaneously retrieving, transforming, and synchronizing external data.",
        "Designed inter-thread communication systems that allowed independently-operating workers to share progression state, synchronization status, workload coordination, and operational visibility data in real time.",
      ],
    },

    {
      title: "API Rate Limiting & Reliability",
      items: [
        "Balanced aggressive throughput optimization against external API rate-limiting constraints while maintaining stable synchronization behavior and avoiding cascading failures.",
        "Implemented retry, backoff, and recovery handling for intermittent failures, API instability, and partial synchronization interruptions.",
      ],
    },

    {
      title: "Data Transformation & Schema Normalization",
      items: [
        "Designed transformation pipelines capable of converting Zendesk object structures, associations, and property models into HubSpot-compatible schemas.",
        "Handled inconsistencies between object models and property behaviors while preserving relational integrity and reporting consistency.",
      ],
    },

    {
      title: "Long-Running Operational Stability",
      items: [
        "Designed systems capable of operating continuously for multiple days while preserving synchronization state, recovery capability, and operational transparency.",
        "Implemented logging and monitoring workflows to allow rapid identification and correction of synchronization issues during active migration execution.",
      ],
    },
  ],

  solutions: [
    "Designed a multithreaded migration architecture utilizing concurrent worker pipelines for high-throughput synchronization",
    "Implemented parallel API retrieval and synchronization workflows to maximize throughput while respecting platform limitations",
    "Developed cross-thread communication systems for synchronization-state sharing and workload coordination",
    "Built resilient retry and recovery systems capable of handling intermittent API failures and partial migration interruptions",
    "Implemented migration-state tracking and reconciliation systems to preserve synchronization integrity and simplify recovery handling",
    "Designed normalized transformation pipelines between Zendesk and HubSpot object structures",
    "Developed operational logging and monitoring systems for long-running migration visibility and debugging",
    "Optimized API usage patterns and batching strategies to reduce unnecessary processing overhead and improve synchronization efficiency",
  ],

  results: [
    "Successfully migrated millions of records and tens of millions of properties from Zendesk into HubSpot",
    "Maintained continuous synchronization processing for approximately 2.5 days without critical operational interruption",
    "Achieved sustained high-throughput API processing across concurrent synchronization pipelines",
    "Improved migration reliability through resilient retry, recovery, and reconciliation handling",
    "Preserved cross-object relational integrity and reporting consistency throughout migration workflows",
    "Reduced manual migration overhead through fully automated synchronization and transformation systems",
    "Established scalable migration architecture patterns for future enterprise-scale data migrations",
  ],

  techStack: [
    "Python",
    "Node.js",
    "REST APIs",
    "HubSpot APIs",
    "Zendesk APIs",
    "Concurrent Processing",
    "Multithreading",
    "AWS",
    "Data Transformation Pipelines",
    "Synchronization Systems",
    "Logging & Monitoring Systems",
  ],
};
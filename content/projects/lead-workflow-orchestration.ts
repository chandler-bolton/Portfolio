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

export const leadOrchestrationProject: ProjectCaseStudy = {
  slug: "lead-workflow-orchestration",

  title: "Lead Qualification & Scheduling Orchestration Platform",

  tags: [
    "HubSpot",
    "Workflow",
    "Synchronization",
    "Automation"
  ],

  subtitle:
    "Custom orchestration and synchronization platform designed to resolve execution conflicts between third-party lead qualification and scheduling systems operating within HubSpot workflows.",

  featured: true,

  summary:
    "Designed and developed a custom orchestration platform responsible for resolving execution conflicts between third-party lead qualification and meeting-scheduling systems integrated into HubSpot workflows. The client relied on two external platforms simultaneously: one responsible for filtering spam and fraudulent submissions, and another responsible for automated lead routing and meeting scheduling. The systems operated independently and continuously conflicted with one another while attempting to access and manipulate shared data simultaneously, resulting in race conditions, workflow bottlenecks, synchronization failures, and operational instability. After previous implementation efforts involving the vendors themselves were unable to resolve the issue, I was brought in to investigate the underlying system behavior, diagnose the execution conflicts, and architect a synchronization solution capable of coordinating workflow execution reliably and without interruption.",

  overviewImage: [],

  responsibilities: [
    "Solution architecture and workflow orchestration design",
    "Third-party platform behavioral analysis and debugging",
    "Asynchronous workflow coordination and synchronization logic",
    "Race-condition investigation and mitigation",
    "Cross-platform execution-state analysis",
    "Custom orchestration middleware development",
    "Operational debugging and instrumentation tooling",
    "API coordination and workflow sequencing",
    "Concurrent execution analysis and dependency mapping",
    "Error handling and workflow recovery systems",
    "Client coordination and operational workflow analysis",
    "Testing and validation of distributed workflow behavior",
    "Monitoring and execution-state visibility tooling",
    "Technical documentation and operational guidance",
  ],

  challenges: [
    {
      title: "Distributed Workflow Conflicts",
      items: [
        "The third-party systems independently attempted to access, validate, modify, and route the same operational data simultaneously, resulting in synchronization instability and execution conflicts.",
        "Both platforms attempted to establish execution priority over workflow progression, creating operational deadlocks, race conditions, and workflow bottlenecks.",
      ],
    },

    {
      title: "Asynchronous Execution Coordination",
      items: [
        "The platforms operated asynchronously with limited visibility into one another’s execution state, making reliable synchronization timing difficult to establish.",
        "Determining safe execution windows, synchronization boundaries, and deferred processing behavior required reverse engineering platform execution timing and operational dependencies.",
      ],
    },

    {
      title: "Limited Platform Visibility & Vendor Constraints",
      items: [
        "The systems exposed limited operational transparency, making traditional debugging approaches insufficient for identifying the root synchronization failures.",
        "Previous implementation and troubleshooting efforts involving the platform vendors themselves had been unable to identify or resolve the underlying architectural conflicts.",
      ],
    },

    {
      title: "Workflow Reliability & Lead Integrity",
      items: [
        "The client faced a business-critical operational tradeoff between preventing spam submissions and preserving lead conversion and scheduling reliability.",
        "The orchestration platform needed to ensure legitimate leads successfully progressed through qualification and scheduling workflows without introducing operational delays or data inconsistencies.",
      ],
    },

    {
      title: "Execution-State Visibility",
      items: [
        "Developed systems capable of tracing and analyzing distributed workflow execution behavior across independently-operating third-party systems.",
        "Required identifying when processes could safely execute asynchronously, when synchronization was required, and where workflow contention occurred.",
      ],
    },
  ],

  solutions: [
    "Developed custom orchestration middleware responsible for coordinating workflow execution across independently-operating third-party systems",
    "Built diagnostic and instrumentation tooling capable of tracing execution-state progression and identifying synchronization bottlenecks",
    "Created systems to manually trigger and isolate workflow stages for behavioral analysis and synchronization testing",
    "Designed synchronization sequencing logic to safely coordinate execution timing and eliminate race conditions",
    "Implemented deferred execution and controlled asynchronous processing workflows where safe operational boundaries existed",
    "Developed centralized orchestration handling to manage workflow ownership and prevent execution contention between platforms",
    "Built resilient error-handling and recovery mechanisms to preserve workflow continuity during partial failures or execution instability",
    "Established operational visibility tooling to improve debugging efficiency and long-term maintainability",
  ],

  results: [
    "Resolved synchronization conflicts between third-party lead qualification and scheduling systems",
    "Eliminated operational race conditions and workflow bottlenecks impacting lead processing reliability",
    "Enabled the client to simultaneously utilize spam filtering and automated scheduling workflows without sacrificing lead integrity",
    "Restored stable operational flow for lead qualification and meeting scheduling processes",
    "Improved visibility into distributed workflow behavior and execution-state progression",
    "Reduced operational instability and synchronization-related workflow failures",
    "Delivered a working orchestration solution after previous vendor-led implementation efforts were unable to resolve the issue",
    "Established reusable orchestration and debugging patterns for future distributed workflow integrations",
  ],

  techStack: [
    "Node.js",
    "JavaScript",
    "REST APIs",
    "HubSpot",
    "Workflow Automation",
    "Asynchronous Processing",
    "Distributed Systems",
    "Synchronization Systems",
    "Operational Debugging Tooling",
    "Execution-State Monitoring",
    "Third-Party API Integrations",
  ],
};
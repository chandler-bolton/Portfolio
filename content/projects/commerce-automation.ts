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

export const commerceAutomationProject: ProjectCaseStudy = {
  slug: "commerce-workflow-automation",

  title: "Commerce Workflow & Quote Automation Platform",

  tags: [
    "HubSpot",
    "Workflow",
    "Automation",
    "UI",
    "Quote"
  ],

  subtitle:
    "Custom HubSpot workflow automation and UI extension platform designed to support dynamic purchase-order generation, vendor-based order splitting, and interactive quote rendering with rich media support.",

  featured: false,

  summary:
    "Designed and developed a custom commerce workflow automation platform for a client migrating to HubSpot that required operational capabilities not natively supported by the platform. The project involved architecting a system capable of automatically transforming signed sales orders into dynamically-generated vendor-specific purchase orders, supporting image attachment and management at the line-item level, and extending HubSpot quote functionality to render interactive media-rich quote experiences. The solution required combining workflow automation, custom UI extensions, schema design, backend processing logic, frontend rendering systems, and quote-template engineering into a unified operational platform that integrated seamlessly into the client’s existing sales and fulfillment workflows.",

  overviewImage: [],

  responsibilities: [
    "Solution architecture and platform extension design",
    "HubSpot workflow automation development",
    "Custom-coded workflow action development",
    "HubSpot UI extension card architecture and implementation",
    "Dynamic purchase-order generation systems",
    "Vendor-based line-item parsing and routing logic",
    "Schema design for image and metadata management",
    "Frontend UI and interaction design",
    "Quote-template engineering and customization",
    "HubL module architecture and rendering logic",
    "API integration and associated-record retrieval systems",
    "Data normalization and structured property design",
    "Asynchronous workflow coordination and processing logic",
    "Operational testing and validation workflows",
    "Technical documentation and operational guidance",
  ],

  challenges: [
    {
      title: "Unsupported Platform Functionality",
      items: [
        "The client required several commerce and operational capabilities that were not natively supported within HubSpot’s ecosystem or standard workflow tooling.",
        "Required extending platform functionality while preserving maintainability, operational stability, and compatibility with existing HubSpot workflows and quote systems.",
      ],
    },

    {
      title: "Dynamic Purchase-Order Generation",
      items: [
        "Designed systems capable of automatically transforming signed sales orders into multiple vendor-specific purchase orders based on dynamically-analyzed line-item data.",
        "Required parsing line-item information, analyzing SKU relationships, identifying vendor ownership, and generating corresponding operational records while preserving relational integrity.",
      ],
    },

    {
      title: "Line-Item Image Management",
      items: [
        "HubSpot did not natively support attaching and managing structured image data directly at the line-item level.",
        "Required designing custom schema structures, UI workflows, and storage patterns capable of supporting image uploads, image organization, and structured relational mapping between assets and line items.",
      ],
    },

    {
      title: "Interactive Quote Rendering",
      items: [
        "Standard quote templates lacked the flexibility required to support rich interactive product visualization and dynamic image rendering workflows.",
        "Required safely extending HubL module capabilities and combining frontend JavaScript logic with backend-driven schema systems to dynamically assemble quote experiences from associated operational data.",
      ],
    },

    {
      title: "Cross-System Workflow Coordination",
      items: [
        "Designed systems that coordinated custom workflow actions, UI extensions, structured schemas, associated records, and quote rendering pipelines into a unified operational flow.",
        "Required ensuring data consistency and reliable synchronization between independently-operating workflow components and user interactions.",
      ],
    },
  ],

  solutions: [
    "Developed custom-coded workflow automation actions to dynamically generate vendor-specific purchase orders from signed sales orders",
    "Built SKU-based parsing and vendor-routing logic capable of analyzing line-item relationships and distributing operational records appropriately",
    "Designed custom schema structures and property systems for structured line-item image storage and retrieval",
    "Developed a reusable HubSpot UI extension card system for image uploading, organization, and structured table management",
    "Implemented normalized data formatting and transformation systems for consistent downstream rendering and workflow processing",
    "Created custom HubL modules combined with JavaScript-driven rendering logic to bypass native quote-template limitations safely",
    "Developed dynamic frontend rendering systems supporting interactive image viewing and modal-based product visualization",
    "Designed operational workflows that integrated workflow automation, associated records, quote rendering, and UI interactions into a unified commerce platform",
  ],

  results: [
    "Enabled automated conversion of signed sales orders into dynamically-generated vendor-specific purchase orders",
    "Introduced line-item image management functionality not natively supported within HubSpot",
    "Delivered interactive media-rich quote experiences with dynamic image rendering and modal-based product visualization",
    "Reduced manual operational overhead associated with vendor order management and fulfillment workflows",
    "Improved operational efficiency and workflow consistency across sales and fulfillment processes",
    "Extended HubSpot platform capabilities beyond standard native commerce and quoting functionality",
    "Created scalable and reusable workflow automation and UI-extension patterns for future operational enhancements",
  ],

  techStack: [
    "HubSpot",
    "React",
    "JavaScript",
    "TypeScript",
    "HubL",
    "REST APIs",
    "Workflow Automation",
    "Custom UI Extensions",
    "Frontend State Management",
    "Schema Design",
    "Associated Records",
    "Dynamic Quote Rendering",
    "Asynchronous Processing",
  ],
};
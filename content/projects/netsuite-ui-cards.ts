import Image from "next/image";

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

export const netsuiteUICardsProject: ProjectCaseStudy = {
  slug: "netsuite-ui-cards",

  title: "NetSuite UI Cards",
  tags:[
    "Images",
    "UI",
    "React",
    "HubSpot",
    "NetSuite"
  ],

  subtitle:
    "React-based UI card components for HubSpot that centralized and visualized NetSuite data to improve data accessibility and enhance user experience.",

  featured: false,

  summary:
    "Served as the sole engineer responsible for designing and developing a suite of React-based UI card components for HubSpot that retrieved, processed, and displayed data from NetSuite to improve operational visibility, centralize reporting, and streamline user workflows. The UI cards were designed to be modular, reusable, and highly customizable, allowing flexible deployment across multiple HubSpot pages, workflows, and client-facing operational experiences. The project involved designing frontend architecture, backend data retrieval systems, synchronization logic, and user-focused workflows while coordinating directly with stakeholders to ensure the platform aligned with both technical and operational business requirements.",

  overviewImage: [
    { src: "/images/netsuite-ui-cards-all-cards.png", caption: "All cards with 'NetSuite' in the name were created by me" },
    { src: "/images/netsuite-ui-cards-contract-lines.png", caption: "Contract lines card - conducts API calls to retrieve contract line data" },
    { src: "/images/netsuite-ui-cards-financial-card.png", caption: "Financial card - displays key financial metrics and KPIs" }
  ],

  responsibilities: [
    "React component architecture and frontend system design",
    "Development of reusable and modular UI card systems",
    "HubSpot UI extension and embedded application development",
    "NetSuite API integration and data retrieval systems",
    "Data transformation and normalization between systems",
    "Frontend state management and asynchronous data handling",
    "Error handling and fallback-state implementation",
    "User workflow optimization and operational visibility improvements",
    "Component customization and configuration architecture",
    "Performance optimization and frontend rendering efficiency",
    "QA testing and validation workflows",
    "Client collaboration and feature requirement gathering",
    "Technical documentation for usage and operational workflows",
    "Ongoing maintenance, debugging, and enhancement support",
  ],

  challenges: [
    {
      title: "Cross-System Data Retrieval & Synchronization",
      items: [
        "Designed frontend systems capable of retrieving and presenting NetSuite data within HubSpot while handling inconsistencies between external platform structures and workflows.",
        "Managed synchronization timing, stale data concerns, and varying API response structures while maintaining reliable and accurate user-facing reporting.",
      ],
    },

    {
      title: "Reusable & Scalable UI Architecture",
      items: [
        "Designed a modular card architecture capable of supporting multiple use cases, layouts, and workflows without requiring extensive component rewrites.",
        "Balanced flexibility and maintainability to allow rapid expansion of new card functionality while preserving consistent user experience and development standards.",
      ],
    },

    {
      title: "Frontend Performance & Data Handling",
      items: [
        "Developed frontend systems capable of handling asynchronous API-driven data flows while minimizing unnecessary rendering and preserving responsive user interaction.",
        "Managed complex frontend states including loading, partial failure handling, fallback rendering, and dynamic data updates.",
      ],
    },

    {
      title: "Operational Visibility & UX Clarity",
      items: [
        "Designed UI systems focused on simplifying complex operational data into digestible and actionable user-facing workflows.",
        "Worked closely with stakeholders to ensure information hierarchy, visibility, and reporting aligned with real-world operational usage patterns.",
      ],
    },

    {
      title: "Long-Term Maintainability",
      items: [
        "Structured the component ecosystem and supporting logic to support future expansion, evolving reporting requirements, and long-term maintainability without major architectural rewrites.",
      ],
    },
  ],

  solutions: [
    "Designed a reusable and modular React component architecture for scalable UI card development",
    "Implemented dynamic data retrieval and transformation systems between NetSuite and HubSpot",
    "Developed asynchronous frontend workflows with robust loading, retry, and fallback handling",
    "Created reusable configuration patterns to support flexible card deployment and customization",
    "Implemented normalized frontend data structures for consistent rendering across varying API responses",
    "Designed operationally-focused UI layouts to improve visibility and simplify user workflows",
    "Optimized frontend rendering and API interaction patterns to improve responsiveness and reduce unnecessary processing",
    "Developed standardized documentation and usage guidance for internal teams and stakeholders",
  ],

  results: [
    "Centralized NetSuite operational data directly within HubSpot workflows",
    "Improved user visibility into operational and reporting data",
    "Reduced friction between systems by minimizing context switching for users",
    "Enabled rapid development and deployment of reusable operational UI components",
    "Improved maintainability and scalability of frontend integration workflows",
    "Enhanced operational efficiency through streamlined data presentation and workflow visibility",
    "Established reusable frontend architecture patterns for future UI extension development",
  ],

  techStack: [
    "React",
    "TypeScript",
    "JavaScript",
    "HubSpot UI Extensions",
    "NetSuite APIs",
    "REST APIs",
    "Node.js",
    "HTML",
    "CSS",
    "Frontend State Management",
    "Asynchronous Data Handling",
  ],
};
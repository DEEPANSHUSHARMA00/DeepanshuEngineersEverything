const socialLinks = {
  email: {
    label: "Email",
    href: "mailto:sdeepanshu819@gmail.com",
    meta: "sdeepanshu819@gmail.com",
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deepanshu-sharma-53205a174",
    meta: "Professional profile",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/DEEPANSHUSHARMA00",
    meta: "Code and experiments",
  },
  resume: {
    label: "Resume",
    href: "/Deepanshu-Sharma-Resume.txt",
    meta: "Download latest resume",
    download: true,
  },
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "architecture", label: "Architecture" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Deepanshu Sharma",
  title: "Confluent Delivery Manager | Banking Modernization | Real-Time Streaming Delivery",
  subtitle:
    "4.5+ years across banking modernization, enterprise data platforms, and real-time streaming delivery, bridging client objectives, architecture decisions, implementation teams, and production readiness.",
  actions: [
    { href: "#architecture", label: "View Architecture", variant: "primary" },
    { href: "/Deepanshu-Sharma-Resume.txt", label: "Download Resume", variant: "secondary", download: true },
    { href: "#contact", label: "Contact", variant: "secondary" },
  ],
  rotatingTechnologies: ["Confluent Delivery", "Banking Modernization", "Kafka Platforms", "HLD/LLD Planning", "Production Readiness"],
};

export const metrics = {
  label: "Delivery impact",
  items: [
    {
      value: "4.5+",
      label: "Years",
      detail: "Banking modernization and enterprise streaming delivery",
    },
    {
      value: "5+",
      label: "Enterprise clients",
      detail: "CIMB, RAKBANK, ACLEDA, Allianz, and Bank of Commerce exposure",
    },
    {
      value: "HLD/LLD",
      label: "Delivery artifacts",
      detail: "Solution notes, rollout plans, readiness checkpoints, and handover planning",
    },
    {
      value: "24x7",
      label: "Production mindset",
      detail: "Continuity, traceability, access control, incident support, and controlled rollout planning",
    },
  ],
};

export const clients = {
  eyebrow: "Systems Built & Maintained For",
  logos: [
    { name: "Ironbook.ai", domain: "ironbook.ai" },
    { name: "ACLEDA Bank", domain: "acledabank.com.kh" },
    { name: "Bank of Commerce", domain: "bankcom.com.ph" },
    { name: "Allianz Technology", domain: "allianz.com" },
    { name: "RAKBANK", domain: "rakbank.ae" },
    { name: "CIMB Bank", domain: "cimb.com" },
    { name: "Kloudspot", domain: "kloudspot.com" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "Managing Streaming Delivery From Architecture To Production",
  description:
    "Confluent Delivery Manager with a hands-on Kafka, Flink, backend, and platform operations foundation.",
  paragraphs: [
    "I own delivery alignment for banking and enterprise modernization programs: requirement discovery, solution planning, implementation scope, timeline and dependency mapping, risk tracking, readiness checkpoints, and rollout sequencing.",
    "My engineering background keeps the delivery discussions grounded. I have worked across Kafka-based platforms, Confluent Platform/Cloud, Kafka Connect, Schema Registry, stream processing, CDC, Redis, Spring Boot, SQL, OpenSearch, production troubleshooting, and platform operations.",
  ],
  profileLabel: "Developer Profile",
  profileRole: "Confluent Delivery Manager",
  profileFocus: "Banking Modernization | Streaming Delivery | Enterprise Data Platforms",
  profileCaption:
    "Delivery-first streaming professional bridging business expectations, architecture decisions, implementation teams, and production realities.",
  highlights: [
    "Owns implementation scope, delivery approach, timelines, dependencies, risks, and readiness checkpoints",
    "Supports HLD/LLD preparation, solution notes, stakeholder material, and production rollout planning",
    "Experienced across CIMB Bank, RAKBANK, ACLEDA Bank, Allianz, and partner-led modernization programs",
    "Grounded in Kafka, Confluent Platform, Kafka Connect, Schema Registry, Flink, CDC, Redis, and backend operations",
  ],
};

export const philosophy = {
  eyebrow: "Engineering Philosophy",
  title: "Delivery plans fail when production realities are treated as details.",
  description:
    "A minimal set of beliefs that shape how I approach banking modernization and enterprise streaming delivery.",
  quotes: [
    "Architecture becomes useful only when it can be executed, validated, supported, and handed over.",
    "Banking systems require correctness, traceability, resilience, and controlled change by default.",
  ],
  supportingText:
    "Real delivery work sits between client objectives, platform constraints, implementation sequencing, and production support. That is why I focus on explicit scope, dependencies, readiness checkpoints, operational ownership, and stakeholder alignment before rollout.",
  signature: "Delivery clarity, production readiness, and stakeholder trust.",
};

export const architecture = {
  eyebrow: "Delivery Architecture",
  title: "From client objective to controlled production rollout.",
  description:
    "A delivery pattern for banking modernization: clarify the business goal, shape the data movement design, validate readiness, execute in controlled phases, and hand over production support cleanly.",
  stages: [
    {
      label: "Requirement Discovery",
      eyebrow: "Scope",
      description: "Clarify source systems, target systems, downstream expectations, validation needs, security concerns, and business continuity requirements.",
      technologies: ["Discovery", "Dependencies", "Risks"],
    },
    {
      label: "Solution Planning",
      eyebrow: "Design",
      description: "Translate business objectives into implementation scope, data flow design, HLD/LLD inputs, rollout sequencing, and readiness checkpoints.",
      technologies: ["HLD/LLD", "Data Flow", "Sequencing"],
    },
    {
      label: "Platform Execution",
      eyebrow: "Implement",
      description: "Coordinate Kafka-based platform work across Confluent, Kafka Connect, Schema Registry, CDC, stream processing, and integration layers.",
      technologies: ["Confluent", "Kafka Connect", "CDC"],
    },
    {
      label: "Validation & Rollout",
      eyebrow: "Release",
      description: "Align environment validation, operational impact, support readiness, controlled rollout planning, and stakeholder checkpoints.",
      technologies: ["Validation", "Readiness", "Release"],
    },
    {
      label: "Production Support",
      eyebrow: "Operate",
      description: "Support continuity through access control, incident support, troubleshooting, handover planning, and production impact assessment.",
      technologies: ["Operations", "Incidents", "Handover"],
    },
  ],
  principles: [
    "Delivery scope must connect business goals to source, target, validation, operations, and rollout constraints.",
    "Architecture decisions should be backed by implementation readiness and production support realities.",
    "Banking delivery requires correctness, traceability, resilience, uptime, access control, and controlled change.",
    "Stakeholder trust comes from explicit risks, dependencies, checkpoints, and handover ownership.",
  ],
};

export const projects = [
  {
    title: "Allianz R2 Search Modernization",
    description:
      "Contributed to real-time search modernization delivery planning across ingestion design, data synchronization, processing flow, freshness expectations, and rollout readiness.",
    technologies: ["HLD/LLD", "Kafka Connect", "Confluent Kafka", "Flink", "OpenSearch"],
    details: [
      "Supported HLD/LLD preparation for real-time data synchronization, ingestion design, processing flow, search freshness, and production rollout readiness.",
      "Aligned implementation sequencing with source integration, streaming transport, processing responsibilities, search serving expectations, and support planning.",
      "Prepared delivery-facing material covering modernization approach, operational ownership, rollout considerations, and production readiness.",
      "Kept architecture decisions connected to stakeholder expectations, implementation feasibility, and long-term platform direction.",
    ],
    caseStudy: {
      problem: "Search modernization required clearer delivery planning across ingestion, processing, freshness, rollout, and production ownership.",
      architecture: "Source data synchronization -> Kafka-based ingestion -> stream processing flow -> OpenSearch freshness model -> controlled rollout readiness.",
      decisions: [
        "Separate delivery responsibilities across ingestion, processing, search serving, validation, and operations.",
        "Use HLD/LLD inputs to turn architecture into implementation sequencing and stakeholder checkpoints.",
      ],
      impact: "Improved modernization clarity by connecting technical design, rollout planning, and production readiness.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(14,165,233,0.8), rgba(45,212,191,0.2), rgba(129,140,248,0.65))",
  },
  {
    title: "ACLEDA Bank Cambodia Modernization Planning",
    description:
      "Supported banking data movement planning, source integration, transformation readiness, implementation approach, and stakeholder-facing delivery communication.",
    technologies: ["Banking Data Movement", "Confluent Platform", "Kafka", "Delivery Planning", "Stakeholder Alignment"],
    details: [
      "Supported modernization discussions around banking data movement, platform adoption narrative, implementation readiness, and delivery feasibility.",
      "Mapped source integration, target expectations, transformation planning, validation needs, and implementation dependencies.",
      "Contributed to stakeholder communication around delivery approach, platform adoption, and controlled execution expectations.",
      "Focused planning on banking constraints including correctness, traceability, resilience, and business continuity.",
    ],
    caseStudy: {
      problem: "Banking modernization needed a clear execution path from data movement goals to implementation readiness.",
      architecture: "Client requirements -> source integration planning -> streaming platform adoption -> validation checkpoints -> delivery feasibility.",
      decisions: [
        "Frame technical work as delivery scope with dependencies, risks, and readiness gates.",
        "Keep stakeholder communication tied to production impact and support expectations.",
      ],
      impact: "Created a clearer delivery narrative for banking modernization and implementation readiness.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(34,197,94,0.72), rgba(14,165,233,0.18), rgba(251,191,36,0.54))",
  },
  {
    title: "RAKBANK Core Banking Streaming Delivery",
    description:
      "Supported real-time banking data movement, downstream integrations, validation planning, production environment considerations, and controlled delivery execution.",
    technologies: ["Confluent Kafka", "Kafka Connect", "Core Banking", "Validation Planning", "Production Readiness"],
    details: [
      "Translated business and downstream requirements into technical flows, validation steps, operational considerations, and support expectations.",
      "Identified integration dependencies, reliability concerns, rollout risks, data correctness concerns, downstream impact, and support requirements.",
      "Aligned stakeholders and technical teams around implementation feasibility, operational impact, production support needs, and controlled delivery approach.",
      "Contributed to delivery planning where uptime, correctness, traceability, data consistency, and controlled rollout were critical.",
    ],
    caseStudy: {
      problem: "Core banking integrations needed production-grade planning for real-time data movement and downstream consumption.",
      architecture: "Source systems -> streaming flows -> downstream integrations -> validation steps -> support and rollout planning.",
      decisions: [
        "Surface reliability, correctness, and downstream impact early in planning.",
        "Treat production support expectations as part of delivery scope, not post-release cleanup.",
      ],
      impact: "Improved alignment across business requirements, technical feasibility, operational impact, and controlled rollout.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(16,185,129,0.68), rgba(56,189,248,0.18), rgba(59,130,246,0.58))",
  },
  {
    title: "CIMB Bank Malaysia Platform Reliability",
    description:
      "Delivered and supported production streaming, caching, backend, database, and operational capabilities for critical banking application workloads.",
    technologies: ["Confluent Kafka", "Redis", "Spring Boot", "SQL", "Production Support"],
    details: [
      "Managed platform operations across production and non-production environments including topic management, consumer issues, access concerns, performance checks, environment stability, and incident troubleshooting.",
      "Worked with application, platform, and operations teams to support reliable delivery across streaming, caching, backend, and database layers.",
      "Resolved production issues across event flows, Redis, backend services, SQL, deployment layers, and infrastructure dependencies.",
      "Supported controlled changes and readiness activities where reliability, traceability, access management, and continuity were critical.",
    ],
    caseStudy: {
      problem: "Critical banking application workloads required stable production support across multiple platform layers.",
      architecture: "Streaming platform operations -> Redis/backend/database support -> incident troubleshooting -> readiness and continuity coordination.",
      decisions: [
        "Coordinate issue resolution across application, platform, operations, and infrastructure layers.",
        "Prioritize traceability, access management, and service continuity during controlled changes.",
      ],
      impact: "Helped maintain banking-grade reliability through operational visibility, issue resolution, and production support coordination.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(239,68,68,0.7), rgba(56,189,248,0.18), rgba(45,212,191,0.6))",
  },
  {
    title: "Kloudspot IoT Analytics Platform",
    description:
      "Built real-time analytics and backend capabilities for enterprise IoT, location intelligence, and data-driven products.",
    technologies: ["Java", "Spring Boot", "Streaming Pipelines", "MongoDB", "Enterprise Analytics"],
    details: [
      "Worked on streaming data pipelines, backend APIs, and analytics services that transformed raw device and sensor data into business insights.",
      "Developed Java/Spring Boot services, data processing flows, scheduled jobs, and integration layers for enterprise analytics platforms.",
      "Improved application and analytics performance through backend optimization, query improvements, indexing, and data-model refinement.",
      "Built a technical foundation across backend delivery, streaming data movement, and analytics product support.",
    ],
    caseStudy: {
      problem: "Enterprise IoT products needed reliable analytics services that converted raw sensor/device data into business insight.",
      architecture: "Device and sensor data -> streaming/data processing flows -> backend APIs -> analytics services -> business-facing products.",
      decisions: [
        "Build integration layers and scheduled processing around analytics product needs.",
        "Use query, indexing, and data-model improvements to reduce operational friction.",
      ],
      impact: "Strengthened the backend and data engineering foundation that later supported banking streaming delivery work.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(34,197,94,0.72), rgba(56,189,248,0.18), rgba(167,139,250,0.58))",
  },
  {
    title: "Kafka Distributed Cluster Laboratory",
    description:
      "Designed a large-scale Kafka lab to observe broker coordination, replication behavior, and cluster recovery patterns under controlled failures.",
    technologies: ["Apache Kafka", "ZooKeeper", "Linux", "Virtual Machines"],
    details: [
      "Built a cluster with 30 virtual machines, including 3 ZooKeeper nodes and 27 Kafka brokers.",
      "Simulated broker outages to observe leader election, ISR movement, and recovery behavior.",
      "Used the lab to better understand partition reassignment and balancing across brokers.",
    ],
    borderGradient:
      "linear-gradient(135deg, rgba(56,189,248,0.75), rgba(14,165,233,0.2), rgba(45,212,191,0.65))",
  },
];

export const skills = [
  {
    category: "Delivery Management",
    description:
      "Client-facing ownership across scope, planning, readiness, rollout, and production support alignment.",
    items: ["Requirement Discovery", "Implementation Planning", "Rollout Sequencing", "Risk/Dependency Tracking", "Stakeholder Alignment", "Operational Handover"],
    accent:
      "linear-gradient(135deg, rgba(56,189,248,0.72), rgba(59,130,246,0.18), rgba(45,212,191,0.62))",
  },
  {
    category: "Streaming Platforms",
    description:
      "Technical foundation across Kafka-based platforms, Confluent services, CDC, and stream processing.",
    items: ["Apache Kafka", "Confluent Platform/Cloud", "Kafka Connect", "Schema Registry", "Apache Flink", "Flink SQL", "CDC"],
    accent:
      "linear-gradient(135deg, rgba(45,212,191,0.78), rgba(20,184,166,0.2), rgba(125,211,252,0.6))",
  },
  {
    category: "Backend & Data Stores",
    description:
      "Java service development and data-store experience around streaming applications and real-time analytics.",
    items: ["Java", "Spring Boot", "REST APIs", "Redis", "MySQL", "PostgreSQL", "MongoDB", "OpenSearch/Elasticsearch"],
    accent:
      "linear-gradient(135deg, rgba(167,139,250,0.7), rgba(56,189,248,0.16), rgba(96,165,250,0.6))",
  },
  {
    category: "Ops & Reliability",
    description:
      "Production-oriented support across platform operations, incident handling, release readiness, and access control.",
    items: ["Linux", "Docker", "Jenkins", "Git", "Production Troubleshooting", "Platform Operations", "Incident Support", "Access Control"],
    accent:
      "linear-gradient(135deg, rgba(244,114,182,0.62), rgba(59,130,246,0.18), rgba(45,212,191,0.56))",
  },
];

export const streamingDepth = {
  eyebrow: "Delivery Artifacts & Practices",
  title: "The artifacts that turn architecture into executable delivery.",
  description:
    "The latest resume positions these as the core delivery practices behind banking and enterprise modernization programs.",
  groups: [
    {
      title: "Delivery Planning",
      items: ["Implementation scope", "Rollout sequencing", "Timeline alignment", "Validation needs", "Support expectations"],
    },
    {
      title: "Governance",
      items: ["Risk tracking", "Dependency tracking", "Readiness checkpoints", "Stakeholder review", "Controlled rollout planning"],
    },
    {
      title: "Architecture Support",
      items: ["Solution notes", "HLD inputs", "LLD inputs", "Data flow design", "Production impact assessment"],
    },
    {
      title: "Production Readiness",
      items: ["Environment validation", "Operational handover", "Release support", "Incident support", "Service continuity"],
    },
  ],
};

export const experience = {
  eyebrow: "Experience",
  title: "4.5+ Years Across Streaming Delivery And Banking Modernization",
  description:
    "Professional history spanning Confluent delivery management, banking data modernization, platform operations, production support, and backend/data engineering.",
  roles: [
    {
      company: "Ironbook.ai",
      role: "Confluent Delivery Manager",
      period: "Mar 2026 - Present",
      responsibilities: [
        "Own delivery alignment for banking and enterprise modernization opportunities, converting client objectives into implementation scope, execution approach, timelines, dependencies, risks, and readiness checkpoints.",
        "Lead stakeholder-facing solution discussions around real-time data movement, platform adoption, integration readiness, operational risks, production rollout considerations, and long-term platform direction.",
        "Prepare and review solution notes, HLD/LLD inputs, implementation plans, production-readiness checkpoints, stakeholder discussion material, and rollout considerations.",
        "Drive delivery planning across source systems, target systems, data flow design, validation needs, dependencies, operational risks, and rollout sequencing.",
        "Contributed to Allianz R2 modernization and supported ACLEDA Bank Cambodia and Bank of Commerce modernization discussions.",
      ],
    },
    {
      company: "Optimum InfoSystem (Client: RAKBANK UAE)",
      role: "Senior Data Streaming Engineer / Kafka Consultant",
      period: "Sep 2025 - Mar 2026",
      responsibilities: [
        "Supported RAKBANK banking data modernization involving real-time data movement, source-to-target streaming flows, downstream integrations, and production-grade implementation planning.",
        "Translated business and downstream requirements into technical flows, validation steps, operational considerations, and support expectations.",
        "Supported production-environment planning by identifying integration dependencies, reliability concerns, rollout risks, data correctness concerns, downstream impact, and support requirements.",
        "Aligned stakeholders and technical teams around implementation feasibility, flow expectations, operational impact, production support needs, and controlled delivery approach.",
      ],
    },
    {
      company: "Customer Centria (Client: CIMB Bank Malaysia)",
      role: "Senior Data Streaming Engineer / Kafka Specialist",
      period: "May 2024 - Aug 2025",
      responsibilities: [
        "Delivered and supported production streaming, caching, and backend capabilities for CIMB Bank Malaysia, supporting critical banking application workloads.",
        "Managed platform operations across production and non-production environments including topic management, consumer issues, access concerns, performance checks, environment stability, and incident troubleshooting.",
        "Worked with application, platform, and operations teams to support reliable delivery of banking services across streaming, caching, backend, and database layers.",
        "Supported controlled changes and environment readiness activities where reliability, traceability, access management, and business continuity were critical.",
      ],
    },
    {
      company: "Kloudspot Inc",
      role: "Software Engineer / Data Engineer",
      period: "Feb 2022 - Apr 2024",
      responsibilities: [
        "Built real-time analytics and backend capabilities for enterprise IoT, location intelligence, and data-driven products.",
        "Worked on streaming data pipelines, backend APIs, and analytics services that transformed raw device and sensor data into business insights.",
        "Developed Java/Spring Boot services, data processing flows, scheduled jobs, and integration layers for enterprise analytics platforms.",
        "Improved application and analytics performance through backend optimization, query improvements, indexing, and data-model refinement.",
      ],
    },
  ],
};

export const certifications = {
  eyebrow: "Certifications",
  title: "Confluent Delivery Backed By Engineering Foundation",
  description:
    "Delivery positioning supported by hands-on Kafka, Confluent, stream processing, backend, and production operations experience.",
  items: [
    "Confluent Certified Administrator for Apache Kafka",
    "Confluent Platform/Cloud, Kafka Connect, Schema Registry, Apache Flink, Flink SQL, and CDC foundation",
    "HLD/LLD support, implementation planning, stakeholder alignment, production readiness, and controlled rollout planning",
  ],
};

export const roleFit = {
  eyebrow: "Role Fit",
  title: "Best fit for Confluent delivery and banking modernization roles.",
  description:
    "The latest resume positions the portfolio for client-facing delivery ownership where Kafka/Confluent technical depth supports implementation planning and production readiness.",
  roles: [
    "Confluent Delivery Manager",
    "Kafka Delivery Manager",
    "Banking Modernization Consultant",
    "Streaming Platform Delivery Lead",
    "Enterprise Data Platform Delivery Manager",
    "Real-Time Data Modernization Consultant",
  ],
  strengths: [
    "Converts client objectives into implementation scope, delivery approach, dependencies, risks, and readiness checkpoints.",
    "Aligns business, architecture, application, platform, operations, and partner teams around execution feasibility.",
    "Keeps delivery plans grounded in Kafka, Confluent, CDC, backend, and production operations realities.",
  ],
};

export const insights = {
  eyebrow: "Technical Notes",
  title: "Writing topics that show delivery thinking around streaming programs.",
  description:
    "Short notes shaped around the delivery, architecture, rollout, and production support problems behind Kafka and Confluent modernization.",
  posts: [
    {
      title: "Turning a banking modernization ask into implementation scope",
      summary:
        "How source systems, targets, validation needs, dependencies, support expectations, and rollout constraints become an executable delivery plan.",
      tags: ["Delivery Planning", "Banking", "Readiness"],
    },
    {
      title: "What belongs in HLD/LLD inputs for a Confluent delivery",
      summary:
        "A practical breakdown of data flows, integration assumptions, validation checkpoints, operational handover, and rollout sequencing.",
      tags: ["HLD/LLD", "Confluent", "Rollout"],
    },
    {
      title: "Production readiness checks before banking streaming rollout",
      summary:
        "The delivery checks around traceability, access, environment stability, incident support, service continuity, and controlled changes.",
      tags: ["Production Readiness", "Operations", "Risk"],
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Get In Touch",
  description:
    "Open to Confluent delivery, banking modernization, streaming platform delivery, and enterprise data platform conversations.",
  message:
    "I am interested in delivery conversations where banking modernization, real-time data movement, Confluent platform adoption, production readiness, and stakeholder alignment need to come together.",
  links: [socialLinks.email, socialLinks.linkedin, socialLinks.github, socialLinks.resume],
};

export const footer = {
  name: "Deepanshu Sharma",
  role: "Confluent Delivery Manager | Banking Real-Time Streaming Delivery",
  links: [socialLinks.linkedin, socialLinks.github, socialLinks.email],
};

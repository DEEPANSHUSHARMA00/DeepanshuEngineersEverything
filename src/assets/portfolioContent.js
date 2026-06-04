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
  title: "Apache Flink Developer | Confluent Kafka Engineer | Real-Time Streaming Systems",
  subtitle:
    "4.5 years of experience building real-time, event-driven systems across banking, insurance, and IoT analytics using Confluent Kafka, Apache Flink, Kafka Connect, and Java.",
  actions: [
    { href: "#architecture", label: "View Architecture", variant: "primary" },
    { href: "/Deepanshu-Sharma-Resume.txt", label: "Download Resume", variant: "secondary", download: true },
    { href: "#contact", label: "Contact", variant: "secondary" },
  ],
  rotatingTechnologies: ["Confluent Kafka", "Apache Flink", "Kafka Connect", "CDC Pipelines", "OpenSearch"],
};

export const metrics = {
  label: "Streaming impact",
  items: [
    {
      value: "4.5",
      label: "Years",
      detail: "Banking, insurance, and IoT streaming delivery",
    },
    {
      value: "50M+",
      label: "Events/day",
      detail: "Prior high-volume banking stream target",
    },
    {
      value: "40s -> 10s",
      label: "Query latency",
      detail: "MongoDB aggregation and indexing optimization",
    },
    {
      value: "4",
      label: "Domains",
      detail: "Banking, insurance, IoT analytics, and hospitality",
    },
  ],
};

export const clients = {
  eyebrow: "Systems Built & Maintained For",
  logos: [
    { name: "Allianz Technology", domain: "allianz.com" },
    { name: "SoftwareOne", domain: "softwareone.com" },
    { name: "RAKBANK", domain: "rakbank.ae" },
    { name: "CIMB Bank", domain: "cimb.com" },
    { name: "Kloudspot", domain: "kloudspot.com" },
    { name: "Optimum", domain: "optimuminfosystem.com" },
  ],
};

export const about = {
  eyebrow: "About",
  title: "Building Correct, Replayable Streaming Platforms",
  description:
    "Confluent Certified Kafka and Apache Flink focused developer with hands-on depth in CDC, stateful stream processing, and low-latency read models.",
  paragraphs: [
    "I build event-driven systems where correctness comes first: partition keys, ordering, event-time behavior, replayability, idempotent sinks, and schema evolution are part of the design before transformations are written.",
    "My recent work spans Allianz Technology, RAKBANK UAE, CIMB Bank Malaysia, and Kloudspot, covering CDC ingestion, Kafka Connect operations, Flink stateful joins, Redis-backed services, OpenSearch materialization, and production troubleshooting.",
  ],
  profileLabel: "Developer Profile",
  profileRole: "Kafka & Flink Streaming Engineer",
  profileFocus: "Confluent Kafka | Apache Flink | CDC | OpenSearch",
  profileCaption:
    "Developer-first streaming engineer with Kafka administration depth as an advantage, focused on reliable materialized views and production-ready data movement.",
  highlights: [
    "Designed RDS/Aurora PostgreSQL CDC to Kafka, Flink, and OpenSearch architecture",
    "Processed 50M+ banking events/day with sub-50ms latency targets",
    "Built CDC pipelines for RDBMS to event-stream integration",
    "Handled Kafka Connect plugins, worker behavior, DNS, lag, and replay troubleshooting",
  ],
};

export const philosophy = {
  eyebrow: "Engineering Philosophy",
  title: "Large-scale systems are worth understanding at their edges.",
  description:
    "A minimal set of beliefs that shape how I study, build, and debug backend infrastructure.",
  quotes: [
    "Systems should be understood, not just used.",
    "Distributed systems reveal their truth under failure.",
  ],
  supportingText:
    "The most important engineering lessons appear when services slow down, replicas drift, or communication breaks under load. That is why I prefer experiments, observation, and failure-driven learning over treating infrastructure like a black box.",
  signature: "Curiosity, failure analysis, and systems thinking.",
};

export const architecture = {
  eyebrow: "Streaming Architecture",
  title: "From database change to searchable business document.",
  description:
    "A practical architecture pattern from the latest resume work: capture relational changes, move them through Kafka, reconstruct state in Flink, and serve a low-latency read model.",
  stages: [
    {
      label: "PostgreSQL CDC",
      eyebrow: "Source",
      description: "RDS/Aurora tables emit contract and policy changes without pushing expensive joins into query time.",
      technologies: ["RDS/Aurora", "PostgreSQL", "Debezium"],
    },
    {
      label: "Kafka Connect",
      eyebrow: "Capture",
      description: "Distributed workers ingest CDC events, handle connector runtime checks, and normalize simple source changes.",
      technologies: ["Kafka Connect", "SMTs", "DLQ"],
    },
    {
      label: "Confluent Kafka",
      eyebrow: "Transport",
      description: "Topics are keyed around CONTRACT_ID for ordering, partitioning, replay, and entity reconstruction.",
      technologies: ["Topics", "Partitions", "Schema Registry"],
    },
    {
      label: "Apache Flink",
      eyebrow: "State",
      description: "Keyed state handles joins, late events, enrichment, incremental recomputation, and snapshot emission.",
      technologies: ["Keyed State", "Event Time", "Flink SQL"],
    },
    {
      label: "OpenSearch",
      eyebrow: "Serve",
      description: "One document per CONTRACT_ID gives search users a fast denormalized view that can be rebuilt by replay.",
      technologies: ["Document ID", "Replay", "Read Model"],
    },
  ],
  principles: [
    "Kafka Connect captures changes; Flink owns stateful reconstruction.",
    "Keys and ordering are design decisions, not implementation details.",
    "Search indexes should be rebuildable from durable event streams.",
    "Operational plans include lag, backpressure, poison messages, and replay windows.",
  ],
};

export const projects = [
  {
    title: "Allianz R2 Policy Summary Search",
    description:
      "Designed a real-time policy denormalization pipeline that replaces slow query-time joins with a streaming materialized search model.",
    technologies: ["PostgreSQL CDC", "Kafka Connect", "Confluent Kafka", "AWS Managed Flink", "OpenSearch"],
    details: [
      "Validated an architecture from RDS/Aurora PostgreSQL CDC through Kafka Connect on AWS EKS, Allianz EBS Confluent Kafka, AWS Managed Apache Flink, and Amazon OpenSearch.",
      "Modeled CONTRACT_ID as the universal key for Kafka partitioning, Flink keyed state, entity reconstruction, and OpenSearch document identity.",
      "Defined clean boundaries where Debezium/Kafka Connect capture changes while Flink owns joins, late events, enrichment, incremental recomputation, and snapshot emission.",
      "Prepared stakeholder-facing HLD material covering replay/rebuild strategy, source database load risk, OpenSearch refresh paths, and operational ownership.",
    ],
    caseStudy: {
      problem: "Policy summary search depended on slow relational joins at query time.",
      architecture: "RDS/Aurora PostgreSQL CDC -> Kafka Connect on AWS EKS -> Confluent Kafka -> AWS Managed Apache Flink -> Amazon OpenSearch.",
      decisions: [
        "Use CONTRACT_ID as the universal key across Kafka, Flink state, and OpenSearch documents.",
        "Keep CDC capture in Kafka Connect and move multi-table reconstruction into Flink.",
      ],
      impact: "Creates a replayable materialized search model with clearer ownership, rebuild strategy, and lower query-time pressure.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(14,165,233,0.8), rgba(45,212,191,0.2), rgba(129,140,248,0.65))",
  },
  {
    title: "CIMB OCTO Banking Streaming Platform",
    description:
      "Built and supported Kafka, Flink, Redis, SQL, and Spring Boot streaming services for banking engagement, CRM, dashboards, and analytics workflows.",
    technologies: ["Confluent Kafka", "Apache Flink", "Redis", "Spring Boot", "SQL"],
    details: [
      "Worked across topic design, partition planning, consumer group behavior, producer/consumer tuning, retention planning, ACLs, and operational troubleshooting.",
      "Implemented Flink event-time windows, stateful enrichment, and behavior pattern detection for high-volume banking engagement use cases.",
      "Supported prior resume targets of 50M+ events/day and sub-50ms latency in mission-critical banking environments.",
      "Developed Spring Boot REST APIs and SQL-backed services for CRM, campaign analytics, dashboards, and real-time user engagement systems.",
    ],
    caseStudy: {
      problem: "Banking engagement and dashboard systems needed high-throughput real-time data movement.",
      architecture: "Confluent Kafka topics, Flink event processing, Redis-backed low-latency access, SQL services, and Spring Boot APIs.",
      decisions: [
        "Tune partitioning and parallelism around stream volume and consumer behavior.",
        "Use event-time windows and stateful enrichment for behavior and engagement analytics.",
      ],
      impact: "Supported high-volume banking use cases with prior resume targets of 50M+ events/day and sub-50ms latency.",
    },
    borderGradient:
      "linear-gradient(135deg, rgba(239,68,68,0.7), rgba(56,189,248,0.18), rgba(45,212,191,0.6))",
  },
  {
    title: "Kloudspot IoT Analytics Platform",
    description:
      "Delivered real-time analytics pipelines for WiFi, Bluetooth, and camera-derived IoT sensor events consumed by operational dashboards.",
    technologies: ["Apache Kafka", "Apache Flink", "MongoDB", "Redis", "Kubernetes"],
    details: [
      "Built Flink jobs for event-time windows, stateful enrichment, aggregations, and near-real-time business metrics.",
      "Developed Java and Spring Boot microservices for analytics products used by hospitality clients in Japan and Dubai.",
      "Optimized MongoDB aggregation and indexing paths, reducing query latency from approximately 40 seconds to 10 seconds.",
      "Managed Kafka and Redis components in Docker/Kubernetes environments and supported Linux-based production troubleshooting.",
    ],
    caseStudy: {
      problem: "IoT dashboards needed near-real-time metrics from WiFi, Bluetooth, and camera-derived event streams.",
      architecture: "Kafka ingestion, Flink aggregation/enrichment, Redis-backed workloads, MongoDB analytics paths, and Spring Boot APIs.",
      decisions: [
        "Use Flink event-time processing for time-sensitive sensor analytics.",
        "Optimize MongoDB aggregation and indexes where dashboards depended on historical reads.",
      ],
      impact: "Reduced analytics query latency from approximately 40 seconds to 10 seconds and improved dashboard responsiveness.",
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
  {
    title: "Redis High Availability Setup",
    description:
      "Implemented a Redis master-replica environment to study replication flow, synchronization behavior, and availability tradeoffs in caching infrastructure.",
    technologies: ["Redis", "Linux", "Replication Monitoring", "Networking"],
    details: [
      "Set up Redis master and replica nodes to inspect synchronization under normal and degraded conditions.",
      "Tracked replication lag and data propagation to understand consistency behavior.",
      "Ran failover-style experiments to build intuition around high-availability patterns.",
    ],
    borderGradient:
      "linear-gradient(135deg, rgba(45,212,191,0.78), rgba(20,184,166,0.2), rgba(125,211,252,0.62))",
  },
  {
    title: "CI/CD Pipeline Experiment",
    description:
      "Built a Jenkins-powered delivery pipeline to explore automated build, integration, and deployment workflows from source control to release.",
    technologies: ["Jenkins", "Git", "Build Automation", "Deployment Pipelines"],
    details: [
      "Connected source control changes to automated build and deployment steps.",
      "Explored how CI systems orchestrate sequential stages and surface failures early.",
      "Used the pipeline as a practical environment for understanding release automation.",
    ],
    borderGradient:
      "linear-gradient(135deg, rgba(167,139,250,0.72), rgba(56,189,248,0.18), rgba(96,165,250,0.62))",
  },
  {
    title: "Event Driven Microservices Architecture",
    description:
      "Built producer and consumer services around Kafka topics to understand message flow, partitioning strategy, and event-driven service communication.",
    technologies: ["Kafka", "Java", "Spring Boot", "Microservices"],
    details: [
      "Connected multiple services through event streams instead of direct service coupling.",
      "Observed consumer group behavior, partition distribution, and parallel message handling.",
      "Used the setup to study how event ordering and asynchronous communication affect system design.",
    ],
    borderGradient:
      "linear-gradient(135deg, rgba(244,114,182,0.62), rgba(59,130,246,0.18), rgba(45,212,191,0.58))",
  },
];

export const skills = [
  {
    category: "Streaming Engineering",
    description:
      "Kafka and Flink depth for high-throughput event movement, stateful processing, and production troubleshooting.",
    items: ["Confluent Kafka", "Apache Flink", "Flink SQL", "Kafka Connect", "Event-Time Processing", "Stateful Enrichment"],
    accent:
      "linear-gradient(135deg, rgba(56,189,248,0.72), rgba(59,130,246,0.18), rgba(45,212,191,0.62))",
  },
  {
    category: "CDC & Search Models",
    description:
      "Reliable change data capture, replayable transformations, and low-latency serving models for operational search.",
    items: ["Debezium CDC Patterns", "Schema Registry", "Avro/Protobuf Awareness", "OpenSearch", "Replay/Rebuild Strategy"],
    accent:
      "linear-gradient(135deg, rgba(45,212,191,0.78), rgba(20,184,166,0.2), rgba(125,211,252,0.6))",
  },
  {
    category: "Backend & Data Stores",
    description:
      "Java service development and data-store experience around streaming applications and real-time analytics.",
    items: ["Java", "Spring Boot", "REST APIs", "PostgreSQL", "MySQL", "MongoDB", "Redis"],
    accent:
      "linear-gradient(135deg, rgba(167,139,250,0.7), rgba(56,189,248,0.16), rgba(96,165,250,0.6))",
  },
  {
    category: "Cloud & Operations",
    description:
      "Cloud, container, and operational skills for running streaming workloads in enterprise environments.",
    items: ["AWS EC2/EKS/RDS/S3", "AWS Managed Apache Flink", "Docker", "Kubernetes", "Jenkins CI/CD", "Linux"],
    accent:
      "linear-gradient(135deg, rgba(244,114,182,0.62), rgba(59,130,246,0.18), rgba(45,212,191,0.56))",
  },
];

export const streamingDepth = {
  eyebrow: "Streaming Engineering Depth",
  title: "The details that decide whether a stream survives production.",
  description:
    "These are the recurring engineering concerns I design around before a Kafka or Flink pipeline becomes business-critical.",
  groups: [
    {
      title: "Correctness",
      items: ["Partition keys", "Ordering guarantees", "Event-time behavior", "Idempotent sinks", "Schema evolution"],
    },
    {
      title: "Kafka Internals",
      items: ["Consumer groups", "Offset commits", "Retention and compaction", "ISR and replication", "Producer tuning"],
    },
    {
      title: "Flink Ownership",
      items: ["Keyed state", "Late events", "Stateful joins", "Incremental recomputation", "Snapshot emission"],
    },
    {
      title: "Operations",
      items: ["Connector failures", "DNS/network issues", "Consumer lag", "Backpressure", "DLQ and replay paths"],
    },
  ],
};

export const experience = {
  eyebrow: "Experience",
  title: "4.5 Years Building Mission-Critical Streaming Systems",
  description:
    "Professional history designing, building, and operating high-throughput streaming systems across banking, insurance, and IoT analytics.",
  roles: [
    {
      company: "SoftwareOne / Allianz Technology",
      role: "Kafka & Flink Streaming Consultant",
      period: "Apr 2026 – Present",
      responsibilities: [
        "Working on Allianz R2 Summary Search modernization, replacing slow query-time relational joins with a real-time streaming materialization pipeline.",
        "Designed and validated the RDS/Aurora PostgreSQL CDC to Kafka Connect, Confluent Kafka, AWS Managed Apache Flink, and Amazon OpenSearch architecture.",
        "Modeled CONTRACT_ID as the universal key for Kafka partitioning, Flink keyed state, entity reconstruction, and OpenSearch document identity.",
        "Defined component boundaries where Kafka Connect handles CDC capture while Flink owns stateful joins, enrichment, late events, recomputation, and snapshot emission.",
        "Created HLD material for stakeholders covering managed Flink trade-offs, replay/rebuild strategy, source database load risk, and operational ownership.",
      ],
    },
    {
      company: "Optimum InfoSystem (Client: RAKBANK UAE)",
      role: "Senior Kafka & Flink Developer",
      period: "Mar 2026 – Present",
      responsibilities: [
        "Contributing to banking-grade Kafka/Flink initiatives focused on event-driven data movement, CDC patterns, and Confluent ecosystem implementation.",
        "Worked with Confluent Kafka/Kafka Connect setup, connector plugin installation, distributed worker behavior, network/DNS troubleshooting, and integration validation.",
        "Prepared Kafka Connect and CDC proof-of-concept flows, including connector runtime checks, topic/config validation, and production-readiness considerations.",
        "Collaborated on demo and pre-sales technical preparation, translating banking requirements into Kafka/Flink pipeline steps and success criteria.",
      ],
    },
    {
      company: "CIMB Bank (Malaysia)",
      role: "Senior Data Streaming Engineer / Kafka Specialist",
      period: "May 2024 – Aug 2025",
      responsibilities: [
        "Built and supported high-throughput streaming pipelines using Confluent Kafka, Apache Flink, Redis, SQL, and Spring Boot for the OCTO banking ecosystem.",
        "Worked with a large multi-broker Confluent Kafka setup covering topic design, partition planning, consumer groups, retention, ACLs, and operational troubleshooting.",
        "Implemented Flink event-time windows, stateful enrichment, and behavior/event pattern detection for engagement and analytics use cases.",
        "Improved stream efficiency through partitioning/parallelism tuning and collaborated across engineering, infra, and business teams for production incident analysis.",
      ],
    },
    {
      company: "Kloudspot Inc",
      role: "Data Engineer – Real-Time Streaming",
      period: "Feb 2022 – Apr 2024",
      responsibilities: [
        "Built real-time analytics pipelines using Apache Kafka and Apache Flink for WiFi, Bluetooth, and camera-derived IoT sensor streams.",
        "Developed Flink jobs for event-time windows, stateful enrichment, aggregations, and near-real-time business metrics consumed by dashboards.",
        "Built Java/Spring Boot microservices and REST APIs for analytics products used by hospitality clients in Japan and Dubai.",
        "Optimized MongoDB aggregation and indexing paths, reducing query latency from approximately 40 seconds to 10 seconds.",
        "Delivered a P2P video conferencing backend module that reduced dependency on third-party licensing for a product capability.",
      ],
    },
  ],
};

export const certifications = {
  eyebrow: "Certifications",
  title: "Confluent Certified Kafka Foundation",
  description:
    "Certification and delivery depth aligned with Apache Flink, Confluent Kafka, CDC, and event-driven architecture roles.",
  items: [
    "Confluent Certified Administrator for Apache Kafka",
    "Apache Flink and Flink SQL production delivery experience",
    "Kafka Connect, Debezium CDC, and Confluent ecosystem implementation depth",
  ],
};

export const roleFit = {
  eyebrow: "Role Fit",
  title: "Best fit for developer-first streaming roles.",
  description:
    "The portfolio is intentionally positioned for hands-on engineering roles where Kafka administration depth strengthens Flink and CDC delivery.",
  roles: [
    "Apache Flink Developer",
    "Confluent Kafka Developer",
    "Real-Time Data Engineer",
    "Streaming Platform Developer",
    "CDC Engineer",
    "Event-Driven Architecture Engineer",
  ],
  strengths: [
    "Translates fragmented database changes into reliable streaming pipelines.",
    "Designs materialized read models for search, dashboards, and low-latency user journeys.",
    "Can explain trade-offs to stakeholders while still debugging connectors, lag, and stateful jobs hands-on.",
  ],
};

export const insights = {
  eyebrow: "Technical Notes",
  title: "Writing topics that show how I think through streaming systems.",
  description:
    "Short engineering notes shaped around real problems from Kafka, Flink, CDC, OpenSearch, and operational debugging.",
  posts: [
    {
      title: "Kafka Connect vs Flink: where CDC capture ends and stateful processing begins",
      summary:
        "A practical split of responsibilities for Debezium, SMTs, joins, enrichment, late events, and materialized output.",
      tags: ["Kafka Connect", "Flink", "CDC"],
    },
    {
      title: "Designing replayable OpenSearch indexes from Kafka and Flink",
      summary:
        "How stable document IDs, durable topics, keyed state, and rebuild windows keep search models recoverable.",
      tags: ["OpenSearch", "Replay", "Read Models"],
    },
    {
      title: "What I check first when a streaming pipeline slows down",
      summary:
        "A debugging path through consumer lag, connector failures, DNS issues, backpressure, poison messages, and DLQ behavior.",
      tags: ["Operations", "Kafka", "Troubleshooting"],
    },
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Get In Touch",
  description:
    "Open to Apache Flink, Confluent Kafka, CDC, and real-time data engineering conversations.",
  message:
    "I am always interested in conversations about streaming platforms, CDC pipelines, Flink stateful processing, and backend systems that need to behave correctly under production pressure.",
  links: [socialLinks.email, socialLinks.linkedin, socialLinks.github, socialLinks.resume],
};

export const footer = {
  name: "Deepanshu Sharma",
  role: "Apache Flink Developer | Confluent Kafka Engineer",
  links: [socialLinks.linkedin, socialLinks.github, socialLinks.email],
};

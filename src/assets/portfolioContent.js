const socialLinks = {
  email: {
    label: "Email",
    href: "sdeepanshu819@gmail.com",
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
};

export const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "philosophy", label: "Philosophy" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Deepanshu Sharma",
  title: "Senior Kafka Developer | Real-Time Data Streaming Engineer | FinTech Systems",
  subtitle:
    "4+ years of experience building high-throughput, event-driven systems for international banking clients using Apache Kafka, Apache Flink, and Java.",
  actions: [
    { href: "#projects", label: "View Projects", variant: "primary" },
    { href: "#contact", label: "Contact", variant: "secondary" },
  ],
  rotatingTechnologies: ["Apache Kafka", "Apache Flink", "Java", "Spring Boot"],
};

export const about = {
  eyebrow: "About",
  title: "Building High-Throughput Streaming Platforms",
  description:
    "A Real-Time Data Streaming Engineer with proven experience in designing and operating large-scale streaming pipelines processing over 50 million events per day.",
  paragraphs: [
    "With a strong focus on reliability, latency, and scalability, I specialize in developing event-driven systems for the financial technology sector. My work involves architecting and managing robust data infrastructure for international clients like RAKBANK (UAE) and CIMB Bank (Malaysia).",
    "I am passionate about the intricacies of distributed messaging and stream processing, ensuring systems are not only powerful but also resilient and observable.",
  ],
  profileLabel: "Developer Profile",
  profileRole: "Real-Time Data Streaming Engineer",
  profileFocus: "Apache Kafka | Apache Flink | FinTech",
  profileCaption:
    "Designing and operating large-scale streaming pipelines with a strong focus on reliability, latency, and scalability.",
  highlights: [
    "Processed 50M+ events/day with sub-50ms latency",
    "Designed and managed a 30-broker Kafka cluster",
    "Built CDC pipelines for RDBMS to event-stream integration",
    "Developed Flink CEP logic for user pattern analysis",
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

export const projects = [
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
    category: "Data Streaming",
    description:
      "Core expertise in Kafka and Flink for building high-throughput, real-time data pipelines.",
    items: ["Apache Kafka", "Apache Flink", "Kafka Connect", "Event-Driven Architecture", "CDC Pipelines"],
    accent:
      "linear-gradient(135deg, rgba(56,189,248,0.72), rgba(59,130,246,0.18), rgba(45,212,191,0.62))",
  },
  {
    category: "Backend Development",
    description:
      "Building robust, scalable microservices and APIs to support streaming applications.",
    items: ["Java", "Spring Boot", "REST APIs", "Multithreading", "Async Processing"],
    accent:
      "linear-gradient(135deg, rgba(45,212,191,0.78), rgba(20,184,166,0.2), rgba(125,211,252,0.6))",
  },
  {
    category: "Databases & Caching",
    description:
      "Experience with various data stores for persistence, caching, and state management in distributed systems.",
    items: ["MySQL", "MongoDB", "Redis (Cluster, HA)"],
    accent:
      "linear-gradient(135deg, rgba(167,139,250,0.7), rgba(56,189,248,0.16), rgba(96,165,250,0.6))",
  },
  {
    category: "Cloud & DevOps",
    description:
      "Containerization, orchestration, and CI/CD for deploying and managing applications at scale.",
    items: ["Docker", "Kubernetes", "Jenkins CI/CD", "AWS", "GCP"],
    accent:
      "linear-gradient(135deg, rgba(244,114,182,0.62), rgba(59,130,246,0.18), rgba(45,212,191,0.56))",
  },
];

export const experience = {
  eyebrow: "Experience",
  title: "4+ Years Building Mission-Critical Streaming Systems",
  description:
    "Professional history designing, building, and operating high-throughput data pipelines for international fintech clients.",
  roles: [
    {
      company: "Optimum InfoSystem (Client: RAKBANK UAE)",
      role: "Senior Kafka Developer",
      period: "March 2026 – Present",
      responsibilities: [
        "Develop Kafka-based real-time streaming pipelines for financial transaction and customer data processing.",
        "Design producer and consumer services handling high-volume event streams in banking environments.",
        "Implement CDC-style ingestion pipelines integrating relational systems with event-driven architectures.",
        "Monitor Kafka consumer lag, topic health, and streaming pipeline performance to ensure SLA compliance.",
      ],
    },
    {
      company: "CIMB Bank (Malaysia)",
      role: "Senior Data Streaming Engineer",
      period: "May 2024 – Aug 2025",
      responsibilities: [
        "Designed and managed a 30-broker Kafka production cluster for the OCTO banking platform.",
        "Built real-time streaming pipelines using Kafka, Flink, and Redis, processing 50M+ events per day.",
        "Implemented Flink windowing and CEP logic to analyze user interaction patterns with sub-50ms latency.",
        "Developed Spring Boot microservices serving CRM and engagement systems for 1M+ daily active users.",
      ],
    },
    {
      company: "Kloudspot Inc",
      role: "Data Engineer – Real-Time Streaming",
      period: "Feb 2022 – Apr 2024",
      responsibilities: [
        "Built a real-time analytics platform processing IoT sensor streams using Apache Kafka and Flink.",
        "Implemented stateful stream enrichment using event-time windows and custom aggregations.",
        "Optimized MongoDB query latency from 40s to 10s, significantly improving dashboard performance.",
        "Managed containerized deployments using Docker and Kubernetes.",
      ],
    },
  ],
};

export const certifications = {
  eyebrow: "Certifications",
  title: "Confluent Certified Professional",
  description:
    "Validated expertise in designing, developing, and operating streaming systems with Apache Kafka and Apache Flink.",
  items: [
    "Confluent Certified Administrator for Apache Kafka",
    "Confluent Certified Kafka Developer",
    "Confluent Certified Data Streaming Engineer (Apache Flink/FlinkSQL)",
  ],
};

export const contact = {
  eyebrow: "Contact",
  title: "Get In Touch",
  description:
    "I am actively seeking new opportunities and am available for immediate joining. Let's connect to discuss roles in real-time data engineering and distributed systems.",
  message:
    "I am always interested in conversations about distributed systems, real-time data infrastructure, and backend engineering.",
  links: [socialLinks.email, socialLinks.linkedin, socialLinks.github],
};

export const footer = {
  name: "Deepanshu Sharma",
  role: "Real-Time Data Streaming Engineer",
  links: [socialLinks.linkedin, socialLinks.github, socialLinks.email],
};

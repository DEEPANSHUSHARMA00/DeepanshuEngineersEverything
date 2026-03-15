const socialLinks = {
  email: {
    label: "Email",
    href: "mailto:your.actual.email@example.com",
    meta: "your.actual.email@example.com",
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
  { id: "contact", label: "Contact" },
];

export const hero = {
  name: "Deepanshu Sharma",
  title: "Backend Engineer | Distributed Systems | Event-Driven Architecture",
  subtitle:
    "Designing reliable real-time data infrastructure and scalable backend systems.",
  actions: [
    { href: "#projects", label: "View Projects", variant: "primary" },
    { href: "#contact", label: "Contact", variant: "secondary" },
  ],
  rotatingTechnologies: ["Kafka", "Spring Boot", "Redis", "Distributed Systems"],
};

export const about = {
  eyebrow: "About",
  title: "Distributed systems intuition built through hands-on exploration.",
  description:
    "Backend engineering focused on real-time infrastructure, failure behavior, and system internals.",
  paragraphs: [
    "Deepanshu Sharma is a backend engineer focused on distributed systems and real-time data infrastructure.",
    "He enjoys exploring how systems behave under scale and failure and frequently builds infrastructure experiments to understand system internals.",
  ],
  profileLabel: "Developer Profile",
  profileRole: "Backend Engineer",
  profileFocus: "Distributed Systems | Real-Time Data Infrastructure",
  profileCaption:
    "Focused on observing how backend systems communicate, degrade, recover, and scale in production-like environments.",
  highlights: [
    "Distributed systems behavior under scale",
    "Failure analysis and recovery patterns",
    "Infrastructure experiments and system internals",
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
    category: "Backend",
    description:
      "Core backend development centered around Java services and scalable application design.",
    items: ["Java", "Spring Boot", "Microservices"],
    accent:
      "linear-gradient(135deg, rgba(56,189,248,0.72), rgba(59,130,246,0.18), rgba(45,212,191,0.62))",
  },
  {
    category: "Streaming",
    description:
      "Event-driven thinking and real-time messaging infrastructure for decoupled systems.",
    items: ["Apache Kafka", "Event Driven Architecture"],
    accent:
      "linear-gradient(135deg, rgba(45,212,191,0.78), rgba(20,184,166,0.2), rgba(125,211,252,0.6))",
  },
  {
    category: "Infrastructure",
    description:
      "Deployment and runtime fundamentals that support stable backend environments.",
    items: ["Linux", "Docker", "Redis"],
    accent:
      "linear-gradient(135deg, rgba(167,139,250,0.7), rgba(56,189,248,0.16), rgba(96,165,250,0.6))",
  },
  {
    category: "Cloud",
    description:
      "Cloud platform exposure for building and operating backend services in modern environments.",
    items: ["Google Cloud Platform"],
    accent:
      "linear-gradient(135deg, rgba(244,114,182,0.62), rgba(59,130,246,0.18), rgba(45,212,191,0.56))",
  },
];

export const experience = {
  eyebrow: "Experience",
  title: "Backend engineering across interconnected production systems.",
  description:
    "Hands-on work in microservices environments supporting real-time data processing and operational reliability.",
  role: "Backend Engineer",
  summary:
    "Working in backend microservices environments supporting real-time data processing systems and service reliability.",
  activities: [
    "Debugging production issues across SIT and UAT environments",
    "Analyzing client-side failures that cannot be reproduced locally",
    "Supporting backend services interacting with databases and messaging systems",
    "Maintaining service reliability across microservices architecture",
  ],
  exposure: [
    "Kafka-based data pipelines",
    "Redis caching layers",
    "Relational databases",
    "Distributed backend services",
    "Linux server environments",
  ],
  takeaway:
    "This experience strengthened my ability to diagnose and debug issues across multiple interconnected systems.",
};

export const contact = {
  eyebrow: "Contact",
  title: "Let's connect around backend systems and infrastructure.",
  description:
    "A clean place to reach out for engineering conversations, collaboration, or infrastructure-focused discussions.",
  message:
    "I am always interested in conversations about distributed systems, real-time data infrastructure, and backend engineering.",
  links: [socialLinks.email, socialLinks.linkedin, socialLinks.github],
};

export const footer = {
  name: "Deepanshu Sharma",
  role: "Backend Engineer | Distributed Systems",
  links: [socialLinks.linkedin, socialLinks.github, socialLinks.email],
};

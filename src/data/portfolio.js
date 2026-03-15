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
  eyebrow: "Backend Engineer | Distributed Systems | Real-Time Data Infrastructure",
  name: "Deepanshu Sharma",
  tagline:
    "Designing and operating scalable backend systems focused on event-driven architecture, real-time streaming, and distributed infrastructure.",
  intro:
    "Backend engineer with strong interest in distributed systems, data streaming infrastructure, and large scale backend architectures. Focused on understanding how systems communicate, fail, recover, and scale in production environments.",
  actions: [
    { href: "#projects", label: "View Projects", variant: "primary" },
    {
      href: "/Deepanshu-Sharma-Resume.txt",
      label: "Download Resume",
      variant: "secondary",
      download: true,
    },
    { href: "#contact", label: "Contact", variant: "ghost" },
  ],
  technologies: [
    "Apache Kafka",
    "Spring Boot",
    "Redis",
    "Java",
    "Linux",
    "Distributed Systems",
  ],
  metrics: [
    { value: "30", label: "Virtual machines in Kafka lab" },
    { value: "27", label: "Kafka brokers explored in distributed experiments" },
    { value: "5+", label: "Core areas of active systems exploration" },
  ],
  panelNote:
    "Building intuition through experiments across streaming systems, service reliability, caching layers, and observability workflows.",
};

export const about = {
  eyebrow: "About",
  title: "Understanding systems beyond frameworks.",
  description:
    "A backend engineer grounded in distributed architecture, production debugging, and real-time data infrastructure.",
  paragraphs: [
    "I am a backend engineer focused on building reliable distributed systems and real-time data infrastructure.",
    "My work and exploration revolve around understanding how large systems behave under scale and failure. I enjoy digging into system internals, from Kafka replication and consumer behavior to how services communicate in event-driven architectures.",
    "I have experience working in backend environments involving streaming systems, microservices, relational databases, and caching layers. Beyond day-to-day development work, I regularly build infrastructure experiments and distributed system labs to deepen my understanding of how modern data platforms operate.",
  ],
  highlightTitle: "Systems thinking, not framework dependency.",
  highlightParagraphs: [
    "My curiosity in technology extends into distributed system design, operating system interaction with application runtimes, JVM behavior, and cloud infrastructure.",
    "I believe strong engineers should understand systems beyond frameworks. Understanding how components interact internally allows systems to be designed more reliably and debugged more effectively.",
  ],
};

export const philosophy = {
  eyebrow: "Engineering Philosophy",
  title: "Curiosity first. Black boxes last.",
  description: "Experiments are how theory becomes production intuition.",
  paragraphs: [
    "My approach to engineering is driven by curiosity and system understanding.",
    "Instead of treating frameworks as black boxes, I try to understand how systems behave internally: how data flows, how components communicate, and how failures propagate through infrastructure.",
    "Distributed systems are especially interesting because they introduce complex behaviors that only appear under scale or partial failure. Observing these behaviors through experiments helps build intuition that documentation alone cannot provide.",
    "I enjoy building experimental environments where systems can be deployed, observed, broken, and recovered. This process helps transform theoretical knowledge into practical engineering understanding.",
  ],
  workflow: [
    "Study system architecture",
    "Deploy experimental environment",
    "Simulate failures or load",
    "Observe system behavior",
    "Document insights",
  ],
};

export const projects = [
  {
    title: "Kafka Distributed Cluster Laboratory",
    tag: "Distributed Messaging",
    summary:
      "Designed and deployed a Kafka experimentation environment to understand how large distributed clusters behave under pressure.",
    metrics: ["30 virtual machines", "3 ZooKeeper nodes", "27 Kafka brokers"],
    focus: [
      "Observe partition leadership behavior",
      "Study ISR mechanics",
      "Simulate broker failures",
      "Analyze cluster recovery and partition reassignment",
    ],
    learnings: [
      "Leader election dynamics",
      "Replication behavior during broker failure",
      "Partition balancing across brokers",
      "Cluster resilience under node failures",
    ],
  },
  {
    title: "Confluent Platform Monitoring Environment",
    tag: "Observability",
    summary:
      "Set up monitoring and cluster visibility to understand the operational side of real-time streaming systems.",
    focus: [
      "Monitor Kafka cluster health",
      "Observe consumer lag",
      "Analyze topic throughput",
      "Understand producer and consumer metrics",
    ],
    insight:
      "Operational visibility is essential for managing streaming infrastructure. Good observability exposes system behavior before bottlenecks become incidents.",
  },
  {
    title: "Redis High Availability Setup",
    tag: "Caching & Replication",
    summary:
      "Implemented a Redis master-replica configuration to study high-availability patterns for in-memory data stores.",
    metrics: ["Redis master node", "Redis replica node", "Replication monitoring"],
    focus: [
      "Replica synchronization behavior",
      "Replication lag observation",
      "Failover testing scenarios",
    ],
  },
  {
    title: "CI/CD Pipeline Experiment",
    tag: "Automation",
    summary:
      "Built a Jenkins-based pipeline to understand automated build and deployment workflows end to end.",
    flow: ["Git Repository", "Jenkins Pipeline", "Build Process", "Deployment"],
    focus: [
      "Automate build and deployment processes",
      "Explore continuous integration practices",
      "Understand pipeline orchestration",
    ],
  },
  {
    title: "Event-Driven Microservices Experiment",
    tag: "Microservices",
    summary:
      "Built experimental microservices interacting through Kafka topics to explore event-driven system architecture.",
    flow: ["Producer Services", "Kafka Topics", "Consumer Services"],
    focus: [
      "Event ordering",
      "Consumer group behavior",
      "Partition distribution",
      "Parallel processing with multiple consumers",
    ],
  },
];

export const skills = [
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "REST APIs", "Microservices Architecture"],
  },
  {
    category: "Data Infrastructure",
    items: ["Apache Kafka", "Event-Driven Architecture", "Stream Processing Concepts"],
  },
  {
    category: "Databases",
    items: ["MySQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["Linux", "Docker", "Google Cloud Platform"],
  },
  {
    category: "System Knowledge",
    items: ["Distributed system design", "Infrastructure debugging", "Real-time data pipelines"],
  },
  {
    category: "Current Exploration",
    items: [
      "Kubernetes orchestration",
      "Distributed system reliability",
      "Kafka consumer and producer internals",
      "Cloud-native infrastructure",
      "Large scale system design",
    ],
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
  title: "Open to conversations about systems, streaming, and backend engineering.",
  description:
    "The best conversations usually start around reliability, architecture tradeoffs, and how systems behave in production.",
  message:
    "I am always interested in conversations about distributed systems, real-time data infrastructure, and backend engineering.",
  emailLabel: "Email available on request",
  links: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/deepanshu-sharma-53205a174",
      meta: "Professional profile",
    },
    {
      label: "GitHub",
      href: "https://github.com/DEEPANSHUSHARMA00",
      meta: "Code and experiments",
    },
  ],
};

export const footer = {
  note: "Built with curiosity about distributed systems and modern backend infrastructure.",
};

export const siteConfig = {
  name: "Luis Alberto Colón Sanchez",
  role: "Software Developer & IT Professional",
  email: "luis@nodelinktechnologies.com",
  github: "https://github.com/lcolon231",
  linkedin: "https://www.linkedin.com/in/luiscolon31/",
  location: "Tampa, Florida",
  resumeUrl: "/resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML5 & CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend & APIs",
    skills: ["Node.js", "Python", "FastAPI", "REST API Design", "SQL / SQLite", "SQLAlchemy"],
  },
  {
    category: "Cloud & Infrastructure",
    skills: ["AWS EC2 / VPC", "IAM Policies", "CloudWatch", "Auto Scaling", "Microsoft 365", "Google Workspace"],
  },
  {
    category: "Networking",
    skills: ["VLANs & Subnetting", "Ubiquiti / UniFi", "VPNs", "Firewall Rules", "DNS & DHCP", "TCP/IP"],
  },
  {
    category: "Security",
    skills: ["SPF / DKIM / DMARC", "SSL / TLS", "Endpoint Protection", "Vulnerability Scanning", "DNS Security", "Security Auditing"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git & GitHub", "VS Code", "Atera RMM", "SuperOps", "Acronis", "QuickBooks"],
  },
];

export type Project = {
  number: string;
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  keyFeatures?: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "ClientPulse",
    tagline: "Multi-tenant MSP monitoring dashboard with database-level security",
    description:
      "A production-ready SaaS dashboard for Managed Service Providers (MSPs) to monitor client health, ticket queues, and SLA metrics through a centralized pane. Data isolation is strictly enforced at the database layer using PostgreSQL Row-Level Security (RLS), ensuring robust multi-tenancy. Built with a modern stack featuring schema-first validation, automated CSV parsing, and secure PKCE authentication flows.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostgreSQL RLS", "Prisma", "Tailwind CSS", "Zod"],
    githubUrl: "https://github.com/lcolon231/Clientpulse",
    featured: true,
    keyFeatures: [
      "Multi-tenant architecture with Postgres Row-Level Security (RLS)",
      "Real-time client health monitoring (Devices, Tickets, Backups)",
      "SLA metric tracking and enforcement",
      "Secure authentication via Supabase (PKCE flow)",
      "Schema-first validation with Zod and Prisma",
    ],
  },
  {
    number: "02",
    title: "NodeLink SMB Security Posture Scanner",
    tagline: "Automated external threat surface analysis for small businesses",
    description:
      "A web-based security audit tool that scans a company domain for real external vulnerabilities: email authentication gaps (SPF/DKIM/DMARC), SSL/TLS misconfigurations, exposed ports, HTTP header weaknesses, and DNS hygiene issues. Calculates a weighted risk score and generates a branded PDF report — giving SMBs actionable security intelligence without hiring a consultant. Built as a lead-gen tool for NodeLink Technologies MSP prospects.",
    tech: ["Next.js", "TypeScript", "Node.js", "DNS Lookups", "PDF Generation", "REST API"],
    githubUrl: "https://github.com/lcolon231/nodelink-security-scanner",
    liveUrl: "https://nodelink-security-scanner.vercel.app/",
    featured: true,
    keyFeatures: [
      "Automated DNS security audits (SPF, DKIM, DMARC)",
      "SSL/TLS configuration and certificate validation",
      "Network port scanning and service identification",
      "Automated PDF report generation with risk scoring",
      "Lead-generation workflow for MSP services",
    ],
  },
  {
    number: "03",
    title: "Blockchain Audit Log for SMB Security Compliance",
    tagline: "Tamper-proof audit logging powered by smart contracts",
    description:
      "A blockchain-based audit logging system that gives small businesses an immutable, verifiable record of security-relevant events - login attempts, permission changes, configuration updates, and data access. Each even is hashed and written to an Ethereum smart contract, making the audit cryptographically tamper-evident even from privileged insiders. Designed to help SMBs meet compliance requirements (HIPAA, SOC 2) without the cost of enterprise SIEM platforms",
    tech: ["Solidity", "Hardhat", "MetaMask", "Alchemy"],
    githubUrl: "https://github.com/lcolon231/Nodelink-audit-log",
  },
];

export const experience = {
  company: "NodeLink Technologies LLC",
  location: "Tampa, Florida (Remote)",
  role: "Founder & IT Consultant",
  period: "2023 — Present",
  summary:
    "Built NodeLink Technologies from zero — designing service offerings, building internal tooling, and establishing the technical and operational foundation of an MSP business targeting small businesses and medical offices in the Tampa Bay area.",
  bullets: [
    "Designed and documented scalable IT support service packages for SMBs, including tiered response SLAs and onboarding workflows",
    "Built MSP platform infrastructure using Atera RMM and SuperOps PSA — configuring automation rules, alert thresholds, and remote access policies",
    "Deployed and managed endpoint protection, cloud backup (Acronis), and patch management across client environments",
    "Developed internal automation scripts (PowerShell, Python) to reduce manual IT support overhead and standardize maintenance tasks",
    "Wrote technical SOPs, client-facing documentation, and network topology diagrams for every engagement",
    "Configured Microsoft 365 tenants including Exchange Online, Teams, SharePoint, conditional access, and MFA policies",
    "Designed and maintained Ubiquiti network infrastructure including VLAN segmentation, firewall rules, and wireless SSIDs for multi-site setups",
  ],
};

export const education = [
  {
    degree: "Master of Science in Information Technology",
    school: "University of West Florida",
    detail: "Expected Completion: 2026",
    status: "In Progress",
    courses: [
      "Cloud Computing",
      "Cybersecurity Fundamentals",
      "Network Security",
      "Database Management",
      "IT Project Management",
      "Systems Analysis",
      "Research Methods",
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "NUC University — Puerto Rico",
    detail: "Minor in Software Analysis & Development",
    status: "Completed",
    courses: [
      "Software Development",
      "Systems Analysis",
      "Database Design",
      "Network Technology",
      "Web Development",
      "Computer Applications",
      "IT Project Management",
    ],
  },
];
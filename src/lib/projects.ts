
// src/lib/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  year: string;
  type: 'climate-tech' | 'ai-tools' | 'community' | 'product-design';
  organization: string;
  description: string;
  context?: string;
  problem?: string;
  ourTake?: string;
  process?: string;
  longDescription?: string; // keeping for backward compatibility
  duration?: string;
  impact?: string;
  technologies?: string[];
  projectUrl?: string | null;
  imageUrl?: string | null;
  tags?: string[];
  role: string;
  outcomes?: string[];
}

// Portfolio projects data based on Carlos Graffi's experience
const projects: Project[] = [
  {
    id: '1',
    slug: 'citycatalyst',
    title: "CityCatalyst – Accelerating City-Led Climate Action",
    year: "2023-2025",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Design Lead",
    description: "CityCatalyst is an open-source ecosystem of digital tools that helps cities generate GHG inventories, assess climate risks, and prioritize climate actions in a fraction of the time typically required.",
    context: "Cities around the world face pressure to meet climate goals, report emissions, and plan for future risks. But local governments, especially in the Global South, often operate with limited staff, low budgets, and high political turnover. Traditional tools are either too technical, too generic, or too slow.",
    problem: "Creating a baseline GHG inventory can take 6 to 12 months. Risk assessments are often skipped due to lack of local data. Action plans are long lists with no prioritization. This makes it hard for cities to meet reporting obligations or make informed decisions.",
    ourTake: "We believed that cities don't need more PDFs — they need working tools. Our approach was to build modular, fast, and usable tools that reduce friction at every step. I focused on designing workflows that guide users, connect to trusted datasets, and deliver clear outputs — in minutes, not months.",
    process: "I led product and UX design, working closely with climate scientists, data engineers, and city stakeholders. I prototyped directly in Replit, using AI tools to generate components and structure logic. We tested early versions in cities in Brazil, Chile, and Argentina, iterated based on real user feedback, and scaled the tools as part of the CityCatalyst platform.",
    duration: "2+ years",
    impact: "50+ Brazilian cities",
    technologies: ['React', 'TypeScript', 'Data Visualization', 'Replit', 'Figma'],
    projectUrl: "https://citycatalyst.openearth.org",
    tags: ['climate', 'cities', 'data-visualization', 'product-design'],
    outcomes: [
      "Used in 50+ Brazilian cities and expanding across Latin America",
      "Reduced inventory creation from 6+ months to under 10 minutes",
      "Helped cities generate data for national reports (GCoM, UNFCCC)",
      "Became the entry point for broader climate planning efforts"
    ]
  },
  {
    id: '2',
    slug: 'high-impact-actions-prioritizer',
    title: "High-Impact Actions Prioritizer – From Long Lists to Strategic Plans",
    year: "2023-2024",
    type: "ai-tools",
    organization: "Open Earth Foundation",
    role: "Product Designer",
    description: "A tool to help cities rank their climate actions by potential impact, co-benefits, and feasibility — so they can act where it matters most.",
    context: "Cities often have long lists of proposed actions, but no way to evaluate which ones will deliver the most climate benefit. Staff need to balance emissions reductions, adaptation, cost, and local constraints. Without support, decisions are political or arbitrary.",
    problem: "Existing prioritization tools are complex, not built for cities, or too rigid. Many cities end up picking actions without understanding their impact or fit.",
    ourTake: "We designed a flexible tool that adapts to each city's context and priorities. Our approach focused on transparency and speed: let cities input what they know, get rankings, and adjust assumptions on the fly. No black box, no lengthy training.",
    process: "I mapped common prioritization frameworks and developed a ranking logic informed by expert input and LLM-powered explanations. I designed the interface to show real-time changes in priority rankings and integrated filters for mitigation, adaptation, and co-benefits. Everything was tested in real decision-making sessions with city teams.",
    duration: "1 year",
    impact: "20+ city action plans",
    technologies: ['AI/ML', 'LLMs', 'React', 'Data Analysis'],
    projectUrl: null,
    tags: ['ai', 'climate', 'decision-support', 'prioritization'],
    outcomes: [
      "Used by over 20 cities in action plan development",
      "Helped prioritize mitigation vs. adaptation trade-offs",
      "Improved cross-department coordination and clarity",
      "Embedded as a module in CityCatalyst"
    ]
  },
  {
    id: '3',
    slug: 'rapid-climate-risk-assessment',
    title: "Rapid Climate Risk Assessment – A Clear Picture of What's Coming",
    year: "2023-2024",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Designer + Project Coordinator + UX Engineer",
    description: "A web-based tool to help cities assess their exposure to climate hazards under different future scenarios — in just a few minutes.",
    context: "Climate risk assessments are required for adaptation planning and funding access, but cities often lack the expertise, time, or data to complete them. The result is either no assessment or generic ones that don't support local decisions.",
    problem: "Risk assessments are perceived as expensive, technical, and too slow. Existing tools are built for scientists, not for planners. Cities don't have a way to visualize or compare risks over time.",
    ourTake: "We designed a simple tool that gives cities a first-pass risk profile. Instead of hiding behind models, we exposed the logic and let cities adjust. We focused on usability, adaptability, and alignment with reporting frameworks.",
    process: "I co-created a scoring model with researchers and translated it into a clean visual interface — including a radar chart, toggleable scenarios (present, optimistic, pessimistic), and a structured risk table. I led user research with city staff to validate terms and flow, and built the tool using Replit with data sourced from national and global datasets.",
    duration: "1 year",
    impact: "Multi-country deployment",
    technologies: ['Data Visualization', 'Climate Science APIs', 'React', 'GIS'],
    projectUrl: 'https://citycatalyst-ccra.replit.app/',
    tags: ['climate', 'risk-assessment', 'data-visualization', 'government-tech'],
    outcomes: [
      "Cities generated risk assessments in under 5 minutes",
      "Improved understanding of risks across departments",
      "Used as input for climate action prioritization",
      "Adopted by consultants and NGOs for training"
    ]
  },
  {
    id: '4',
    slug: 'redisenar-community',
    title: "Rediseñar – A Space to Rethink Design in the Climate Crisis",
    year: "2024-Present",
    type: "community",
    organization: "Independent",
    role: "Founder & Editor",
    description: "Rediseñar is a community and publication that explores how we can redesign habits, narratives, and systems to face the climate crisis with creativity and agency.",
    context: "Design is everywhere — but most of it supports extractive systems. Climate conversations often ignore the role of design in shaping choices, products, and systems. There's little space for critical, creative, and local design thinking outside academia.",
    problem: "Designers lack spaces to reflect on their role in climate and connect with others doing meaningful work. The dominant narratives are either paralyzing or overly polished — leaving little room for experimentation or collaboration.",
    ourTake: "Rediseñar was my way of creating a place to think aloud, build community, and propose new imaginaries. I approached it not as a brand, but as a provocation: What if we redesigned everything?",
    process: "I launched a Substack with longform essays and visual explorations, created posters and stickers, and hosted informal gatherings in Córdoba. I shared content on Instagram under a minimal, DIY aesthetic. The voice is honest, critical, and local. I treat it as a living lab.",
    duration: "1+ year",
    impact: "600+ community members",
    technologies: ['Community Building', 'Content Strategy', 'Social Media'],
    projectUrl: "https://redisenar.substack.com",
    tags: ['community', 'design-thinking', 'climate', 'social-impact'],
    outcomes: [
      "Over 600 Instagram followers and 86 newsletter subscribers in 3 months",
      "Cited in educational workshops and used by local teachers",
      "Inspired collaborations and events around design and climate",
      "Serves as a personal and community testing ground for ideas"
    ]
  },
  {
    id: '5',
    slug: 'ayudapatagonia',
    title: "AyudaPatagonia.ar – A Map for Urgent Help During Wildfires",
    year: "2025",
    type: "product-design",
    organization: "Independent",
    role: "Designer & Developer",
    description: "A live map of support points for brigades and families affected by the 2025 wildfires in Patagonia — built and deployed in 48 hours.",
    context: "In early 2025, wildfires devastated parts of Patagonia. Support was fragmented across WhatsApp groups, spreadsheets, and social media posts. Volunteers and citizens didn't know where or how to help.",
    problem: "There was no single source of reliable, updated information on where help was needed. Misinformation and overload led to delays, wasted efforts, and unsafe conditions.",
    ourTake: "Instead of adding more noise, I created a simple, focused site that geolocated verified donation points, brigade contacts, and urgent needs — accessible from any device.",
    process: "Built with Replit, Google Sheets, and open map tiles. I coordinated directly with volunteers and brigades to verify data. I designed the UI for speed, clarity, and offline usability. I shared it through existing networks and let it grow organically.",
    duration: "48 hours",
    impact: "40+ brigades and families",
    technologies: ['React', 'Google Sheets API', 'Maps', 'Rapid Prototyping'],
    projectUrl: null,
    tags: ['emergency-response', 'mapping', 'community', 'rapid-deployment'],
    outcomes: [
      "Used by 40+ brigades and families",
      "Shared by NGOs and community networks",
      "Inspired similar efforts for future local crises",
      "Proved how fast, simple tools can save time and reduce chaos"
    ]
  }
];

// Get all projects
export function getProjects(): Project[] {
  return projects;
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Get all project slugs (useful for static generation)
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}

// Get featured projects
export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
}

// Get projects by type
export function getProjectsByType(type: Project['type']): Project[] {
  return projects.filter(project => project.type === type);
}

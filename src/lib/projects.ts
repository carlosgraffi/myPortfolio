
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
    title: "CityCatalyst: Accelerating City-Led Climate Action",
    year: "2023-Present",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Design Lead",
    description: "CityCatalyst is an open-source ecosystem of digital tools that helps cities generate GHG inventories, assess climate risks, and prioritize climate actions in a fraction of the time typically required.",
    context: "Cities around the world face pressure to meet climate goals, report emissions, and plan for future risks. But local governments, especially in the Global South, often operate with limited staff, low budgets, and high political turnover. Traditional tools are either too technical, too generic, or too slow (commonly a custom spreadsheet).",
    problem: "Creating a baseline GHG inventory can take 6 to 12 months. Risk assessments are often skipped due to lack of local data. Action plans are long lists with no prioritization. This makes it hard for cities to meet reporting obligations or make informed decisions.",
    ourTake: "You can't know what you don't know. Cities assumed they are limited to local data providers, or that other external data is either expensive or useless. We leveraged our partnerships with global data providers to integrate datasets that we could offer to cities to use. At the same time, to address scenarios where data can still be missing, we turned complex spreadsheets into unified, user friendly and clearer forms for the most used methodologies. Our approach was to build modular, fast, and usable tools that reduce friction at every step. I focused on designing workflows that guide users, connect to trusted datasets, and deliver clear outputs — in minutes, not months.",
    process: "I led product and UX design, working closely with climate scientists, data engineers, and city stakeholders. I prototyped directly in Replit, using AI tools to generate components and structure logic. We tested early versions in cities in Brazil, Chile, and Argentina, iterated based on real user feedback, and scaled the tools as part of the CityCatalyst platform.",
    duration: "2+ years",
    impact: "5,500+ LATAM cities",
    technologies: ['React', 'TypeScript', 'Data Visualization', 'Replit', 'Figma', 'ML', 'LLMs'],
    projectUrl: "https://citycatalyst.openearth.org",
    imageUrl: "/img/citycatalyst.webp",
    tags: ['climate', 'cities', 'data-visualization', 'product-design'],
    outcomes: [
      "Used in 5,500+ Brazilian cities and expanding across Latin America",
      "Reduced initial inventory data population from 6+ months to under 10 minutes",
      "Helped cities generate data for national and global reports (GCoM, CDP, GPC)",
      "Currently evolving into a new tool for climate consultants and multi-city deployments"
    ]
  },
  {
    id: '2',
    slug: 'high-impact-actions-prioritizer',
    title: "High-Impact Actions Prioritizer – From Long Lists to Strategic Plans",
    year: "2024-2025",
    type: "ai-tools",
    organization: "Open Earth Foundation",
    role: "Product Design Lead",
    description: "A tool to help cities rank their climate actions by potential impact, co-benefits, and feasibility — so they can act where it matters most.",
    context: "Cities often have either long lists of proposed actions or no actions at all. In any case they have no way to evaluate which actions will deliver the most climate benefit. Staff need to balance emissions reductions, adaptation, cost, and local constraints. Without support, decisions are political or arbitrary.",
    problem: "Existing prioritization tools are complex, not built for cities, or too rigid. Many cities end up picking actions without understanding their impact or fit. For making an informed decision, they need to process huge amounts of systemic and interconnected variables",
    ourTake: "We knew that for a problem like data processing constraints, AI is the solution. At the same time we had expertise on greenhouse gasses inventories, which we could use as input. We designed a flexible tool that adapts to each city's context and priorities. Our approach focused on transparency and speed: let cities input what they know, get rankings, and adjust assumptions on the fly.",
    process: "We mapped common prioritization frameworks and developed a ranking machine learning model, complemented with expert input and LLM-powered climate implementation plan generation. I helped to design and enhance an interface to show real-time changes in priority rankings and allow the user to customize it to generate multiple action plans. Everything was tested in real decision-making sessions with city teams.",
    duration: "6 Months",
    impact: "Used by 50+ cities in Brazil",
    technologies: ['AI/ML', 'LLMs', 'React', 'Data Analysis'],
    projectUrl: null,
    tags: ['ai', 'climate', 'decision-support', 'prioritization'],
    outcomes: [
      "Used by over 50 Brazilian cities in action plan development",
      "Helped prioritize mitigation vs. adaptation trade-offs",
      "Built a catalog of 200+ climate actions from verified sources",
      "Soon to be integrated as a module in CityCatalyst Ecosystem"
    ]
  },
  {
    id: '3',
    slug: 'rapid-climate-risk-assessment',
    title: "Rapid Climate Risk Assessment: Better CCRAs for Brazilian Cities",
    year: "2024-2025",
    type: "climate-tech",
    organization: "Open Earth Foundation",
    role: "Product Designer + Project Coordinator + UX Engineer",
    description: "A web-based tool to help cities assess their exposure to climate hazards under different future scenarios, using public databases from Brazil.",
    context: "Once a city has inventored their emissions, the next step is to know how vulnerable they are to climate change effects. Climate change risk assessments (CCRA) are required for adaptation planning and funding access, but cities often lack the expertise, time, or data to complete them. The result is either no assessment or generic ones that don't support local decisions, where clear insights are a huge priority.",
    problem: "Risk assessments are perceived as expensive, technical, and too slow. Existing tools are built for scientists, not for planners. Cities don't have a way to visualize or compare risks over time, which difficults making an informed decision. Also, there are multiple methodologies scattered.",
    ourTake: "We designed a simple tool that gives cities a first-pass risk profile, integrating public sources from Brazil and partnering with local data experts to develop a better and more effective methodology. Instead of hiding behind models, we exposed the logic and let cities adjust. We focused on usability, adaptability, and alignment with reporting frameworks.",
    process: "I co-created a scoring model with our data team and translated it into a clean visual interface — including a radar chart, toggleable scenarios (present, optimistic, pessimistic), and a structured risk table. I led user research with data partners to validate terms and flow, and built the tool using Replit with data sourced from national and global datasets. I participated both as project coordinator, designer and coder (assisted with AI).",
    duration: "6 months",
    impact: "Multi-country deployment",
    technologies: ['Data Visualization', 'Climate Science APIs', 'React', 'UX Engineering'],
    projectUrl: 'https://citycatalyst-ccra.replit.app/',
    imageUrl: "/img/ccra.webp",
    tags: ['climate', 'risk-assessment', 'data-visualization', 'government-tech'],
    outcomes: [
      "Integrated open data for 5.570 cities and municipalities",
      "Improved the experience from expert to user-friendly",
      "Included a new approach which allowed integrating qualitative data as an input",
      "Facilitated the creation of a new methodology for climate risk assessment"
    ]
  },
  {
    id: '6',
    slug: 'ambient-ar',
    title: "ambient.ar – Environmental Design & Innovation Lab",
    year: "2026-Present",
    type: "climate-tech",
    organization: "Own Project",
    role: "Founder & Designer",
    description: "ambient.ar is a non-profit, open-source lab that puts technology design at the service of the people and organizations already working for the environment — with one tool for each scale: person, city, and system.",
    context: "Environmental efforts in Argentina are fragmented: organizations, brigades, and citizens work hard on the ground, but information and tools rarely connect them. You can't take care of what you don't know.",
    problem: "Those working in the territory know the problem better than anyone — what they lack is technology designed for them. Existing tools are either commercial, closed, or built without the local context in mind.",
    ourTake: "We don't come to explain the problem or bring 'the solution': our place is to put technology design at the service of existing efforts — as infrastructure to connect them, as a platform to unlock informed climate action, and as a medium to amplify what's already in progress. Everything is open source and replicable by whoever needs it.",
    process: "I run ambient.ar as a personal, non-profit project built in my own time. It currently hosts a citizen action app in discovery (shaped by ongoing research surveying citizens and environmental organizations across Argentina), MaRiA (a neighborhood-level environmental risk map piloting in Córdoba Capital), and ayuda.ambient.ar — the evolution of AyudaPatagonia — as its first published solution. Co-creation and advisory with territorial organizations is the third, system-level scale.",
    duration: "Ongoing",
    impact: "3 tools, 3 scales · Córdoba pilot",
    technologies: ['Product Design', 'Open Source', 'Open Data', 'Rapid Prototyping', 'Community Research'],
    projectUrl: "https://ambient.ar",
    tags: ['climate', 'open-source', 'community', 'civic-tech'],
    outcomes: [
      "2 active tools: citizen action app (in research) and MaRiA (in development)",
      "ayuda.ambient.ar published as the lab's first solution, born from AyudaPatagonia",
      "Piloting in Córdoba Capital, Argentina, with open and replicable code",
      "Sustainable web: A+ on WebsiteCarbon, no trackers, no cookies, green hosting"
    ]
  },
  {
    id: '7',
    slug: 'maria-mapa-riesgos-ambientales',
    title: "MaRiA – Mapa de Riesgos Ambientales",
    year: "2026",
    type: "climate-tech",
    organization: "ambient.ar",
    role: "Creator & UX Engineer",
    description: "A neighborhood-by-neighborhood climate risk map, built with citizen reports and open data on top of the IPCC risk framework. The first pilot maps heat-wave risk perception in Córdoba Capital, Argentina.",
    context: "Climate risk data usually stops at the city level. But risk is lived at the neighborhood scale: a heat wave doesn't hit every barrio the same way, and official data rarely captures how people actually experience it.",
    problem: "There is no accessible, local view of environmental risk that combines what the data says with what neighbors perceive. Without it, citizens and local governments can't prioritize where to act first.",
    ourTake: "MaRiA combines citizen reports with open data from the city, structured on the IPCC risk framework, to build a risk map barrio by barrio. Open source, so any city can replicate it.",
    process: "I'm designing and building MaRiA within ambient.ar, starting with a private pre-beta focused on heat waves in Córdoba Capital. Citizen risk perception reports are combined with open datasets from the city, and the prototype is being validated with local users before opening access.",
    duration: "In development",
    impact: "Córdoba Capital pilot",
    technologies: ['Maps', 'Open Data', 'Data Visualization', 'IPCC Risk Framework', 'Open Source'],
    projectUrl: "https://ambient.ar",
    tags: ['climate', 'risk-assessment', 'mapping', 'civic-tech'],
    outcomes: [
      "First neighborhood-level environmental risk map in the lab, in private pre-beta",
      "Combines citizen risk perception reports with open city data",
      "Built on the IPCC risk framework, open source and replicable by other cities"
    ]
  },
  {
    id: '4',
    slug: 'redisenar-community',
    title: "Rediseñar – A Community about Design, Tech and Climate",
    year: "2024-Present",
    type: "community",
    organization: "Own Project",
    role: "Founder & Editor",
    description: "Rediseñar is a community and publication that explores the importance of design as a tool for social and environmental change, from a humanistic, sustainable and conscious stance.",
    context: "80% of a product emissions are defined during the design phase. Climate conversations have been happening for years, yet design is often overlooked both as a cause and as a solution. There's little space for critical, creative, and local design thinking outside academia.",
    problem: "Sustainable design is often understood as just using eco-materials or supporting the 'green' side of marketing. Design is much more than that.",
    ourTake: "Design as a process which gives meaning, addresses multi-factorial issues and brings ideas into reality through empathy and collaboration, is a fundamental skill when it comes to face our biggest challenge as a species: Climate Change. Rediseñar is my way of creating a place to think aloud, build community, and propose new imaginaries. I approached it not as a brand, but as a provocation: What if we redesigned everything?",
    process: "I launched a Substack to post essays and articles. Hosted talks about AI, tech and climate. I shared content on Instagram under a minimal, DIY aesthetic. The voice is honest, critical, and local. I treat it as a living lab for ideas. A platform for using design as a catalyst for social change",
    duration: "Since January '25",
    impact: "700+ community members",
    technologies: ['Community Building', 'Writing & Content Sharing', 'Personal Project'],
    projectUrl: "https://redisenar.substack.com",
    imageUrl: "/img/redisenar.webp",
    tags: ['community', 'design-thinking', 'climate', 'social-impact'],
    outcomes: [
      "Over 700 Instagram followers and 86 newsletter subscribers in 3 months",
      "Hosted talks and workshops around climatech and sustainable design",
      "Currently working on an open-source design project for citizen action and climate education"
    ]
  },
  {
    id: '5',
    slug: 'ayudapatagonia',
    title: "AyudaPatagonia.ar: A Map for Urgent Help During Wildfires",
    year: "2025",
    type: "product-design",
    organization: "Own Project",
    role: "Creator & UX Engineer",
    description: "A live map of support points for brigades and families affected by the 2025 wildfires in Patagonia. Built and deployed in 24 hours. Now evolving as ayuda.ambient.ar, the first published solution of the ambient.ar lab.",
    context: "In early 2025, wildfires devastated parts of Patagonia. Support was fragmented across WhatsApp groups, spreadsheets, and social media posts. Volunteers and citizens didn't know where or how to help.",
    problem: "There was no single source of reliable, updated information on where help was needed. Misinformation and overload led to delays, wasted efforts, and unsafe conditions.",
    ourTake: "Instead of adding more noise, I created a simple, focused site that geolocated verified donation points, brigade contacts, and urgent needs — accessible from any device.",
    process: "Built with Replit, Google Sheets, OpenStreetMap and NASA FIRMs Data. I coordinated directly and indirectly with volunteers and brigades to verify data and contact points. I designed the UI for speed, clarity, and offline usability, integrating tools like MercadoPago for easy money transfers. I shared it through existing networks and let it grow organically. I implemented the entire project in 24 hours 'vibe coding' it using Claude Sonnet, ChatGPT, and Replit.",
    duration: "24 hours",
    imageUrl: "/img/ayudapatagonia.webp",
    impact: "40+ brigades and families",
    technologies: ['Next.js', 'Open APIs', 'Maps', 'Rapid Prototyping'],
    projectUrl: 'ayudapatagonia.ar',
    tags: ['emergency-response', 'mapping', 'community', 'rapid-deployment'],
    outcomes: [
      "Used by 40+ brigades and families",
      "Had a traffic of 5000+ people per day",
      "Shared by NGOs and community networks",
      "Proved how fast, simple tools can save time and reduce chaos",
      "Joined the ambient.ar lab as ayuda.ambient.ar, its first published solution, with a new version in development for the next wildfire season"
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

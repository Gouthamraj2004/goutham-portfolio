/* ============================================
   PORTFOLIO DATA — CENTRALIZED CONTENT
   ============================================
   
   Portfolio of Gouthamraj R — 3D Artist & 3D Animator
   Focused on Blender, 3D modeling, hard-surface, materials, lighting,
   rendering, and 3D animation.
   
   ============================================ */

// ── Site Configuration ──────────────────────────

export const siteConfig = {
  name: "Gouthamraj",
  fullName: "Gouthamraj R",
  title: "3D Artist & 3D Animator",
  tagline: "Bringing ideas to life through 3D art and animation.",
  introStatement: "An aspiring 3D Artist focused on Blender, hard-surface modeling, materials, lighting, rendering and 3D animation.",
  skillLine: "BLENDER • 3D MODELING • ANIMATION • MATERIALS • LIGHTING • RENDERING",
  email: "gouthamrajdev@gmail.com",
  linkedin: "https://www.linkedin.com/in/gouthamraj-r-561744257/", 
  github: "https://github.com/Gouthamraj2004", 
  resumePath: "L:\\goutham-portfolio\\public\\resume\\Gouthamraj_3dArtist.pdf",   
  profileImage: "/images/profile/profile.jpg",
  availability: "Available for Opportunities",
};

// ── Navigation Links ────────────────────────────

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// ── Projects ────────────────────────────────────

export interface GalleryItem {
  type: "image" | "video";
  src: string;
  poster?: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tools: string[];
  role: string;
  process: string;
  year?: string;
  github?: string;
  link?: string;
  thumbnail: string;
  gallery: GalleryItem[];
}

export const projects: Project[] = [
  {
    id: "the-creature",
    title: "The Creature",
    category: "3D ANIMATION / CINEMATIC",
    description:
      "A cinematic 3D animation created in Blender, featuring a dark atmospheric environment, creature animation, dramatic lighting, and suspense-driven camera movement.",
    longDescription:
      "A cinematic 3D animation created in Blender, featuring a dark atmospheric environment, creature animation, dramatic lighting, and suspense-driven camera movement.",
    tools: ["Blender", "3D Animation", "Environment", "Creature", "Lighting", "Cinematic"],
    role: "3D Artist & Animator — Environment design, creature animation, lighting design, camera movement, and rendering in Blender.",
    process:
      "Created in Blender featuring a dark atmospheric environment, creature animation, dramatic lighting, and suspense-driven camera movement.",
    year: "2024",
    thumbnail: "/images/projects/horror_environment.png",
    gallery: [
      { type: "video", src: "/videos/horror_animation.mp4", poster: "/images/projects/horror_environment.png", label: "Cinematic Animation" },
      { type: "image", src: "/images/projects/horror_environment.png", label: "Environment Render" },
    ],
  },
  {
    id: "sword-in-stone",
    title: "Sword in Stone",
    category: "3D MODELING / ANIMATION",
    description:
      "A 3D modeling and animation project created in Blender, featuring a legendary sword embedded in stone with atmospheric lighting and cinematic motion.",
    longDescription:
      "A detailed 3D artwork and animation created in Blender featuring a sword embedded in stone. Highlights detailed material texturing, hard-surface sword geometry, stone environment modeling, and cinematic animation camera movement.",
    tools: ["Blender", "3D Modeling", "3D Animation", "Materials", "Lighting", "Cinematic"],
    role: "3D Artist & Animator — 3D modeling, texturing, environment setup, animation, and rendering in Blender.",
    process:
      "Modeled the sword asset and stone base in Blender, created PBR surface textures, designed atmospheric lighting, and rendered final animation sequence.",
    year: "2024",
    thumbnail: "/images/projects/Sword Final.png",
    gallery: [
      { type: "video", src: "/videos/Sword in Stone.mov", poster: "/images/projects/Sword Final.png", label: "Animation Video" },
      { type: "image", src: "/images/projects/Sword Final.png", label: "Final Render" },
    ],
  },
  {
    id: "game-ready-assets",
    title: "3D Model Assets for Blender",
    category: "GAME-READY ASSETS / 3D MODELS",
    description:
      "A curated collection of Blender (.blend) files for easy use in your 3D projects. Browse thumbnails below; download and use any asset you need.",
    longDescription:
      "A curated collection of Blender (.blend) files for easy use in your 3D projects. Optimized 3D props and environment assets created in Blender for real-time performance and rendering. Download and use any asset directly from the GitHub repository.",
    tools: ["Blender", "3D Modeling", "Game-Ready Assets", "Open Source", "PBR Materials"],
    role: "3D Asset Artist — 3D modeling, asset optimization, materials, and repository curation.",
    process:
      "Created low-poly and game-ready 3D assets in Blender with clean topology, UV unwrapping, and PBR textures. Packaged into reusable .blend files and published to GitHub with preview renders.",
    year: "2024",
    github: "https://github.com/Gouthamraj2004/Blender-3D-Models",
    thumbnail: "/images/projects/blender-3d-models.png",
    gallery: [
      { type: "image", src: "/images/projects/blender-3d-models.png", label: "Asset Collection Grid" },
      { type: "image", src: "/images/projects/blender-models-readme.png", label: "Repository Catalog" },
    ],
  },
];

// ── Skills ──────────────────────────────────────

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "3D & Blender",
    description: "Core modeling & software mastery",
    skills: [
      { name: "Blender" },
      { name: "3D Modeling" },
      { name: "Hard-Surface Modeling" },
      { name: "Modifiers" },
      { name: "Bevel" },
      { name: "Mirror" },
      { name: "Array" },
    ],
  },
  {
    title: "Materials & Rendering",
    description: "Surface creation & studio presentation",
    skills: [
      { name: "Materials & Shaders" },
      { name: "Lighting" },
      { name: "Rendering" },
      { name: "Texturing" },
    ],
  },
  {
    title: "Animation & Effects",
    description: "Motion principles & visual simulations",
    skills: [
      { name: "3D Animation" },
      { name: "Visual Effects" },
      { name: "Simulation / Experiments" },
    ],
  },
  {
    title: "Asset Development",
    description: "Game-ready 3D asset creation pipeline",
    skills: [
      { name: "3D Asset Creation" },
      { name: "Game-Ready Asset Development" },
    ],
  },
];

// ── Creative Process ────────────────────────────

export const processSteps = [
  {
    number: "01",
    title: "Concept & Reference",
    description: "Gather reference images, analyze forms and establish clean blockouts in Blender.",
  },
  {
    number: "02",
    title: "3D Modeling",
    description: "Construct 3D geometry utilizing non-destructive modifier stacks like Bevel, Mirror, and Array.",
  },
  {
    number: "03",
    title: "Materials & Shaders",
    description: "Develop procedural shaders and apply PBR materials to define realistic surface responses.",
  },
  {
    number: "04",
    title: "Rig & Animate",
    description: "Set up armature skeletons and keyframe motion for props, character models, or camera paths.",
  },
  {
    number: "05",
    title: "Lighting & Render",
    description: "Configure multi-point studio lighting, atmospheric depth, and camera settings for final render passes.",
  },
  {
    number: "06",
    title: "Asset Finalization",
    description: "Optimize geometry topology, finalize material maps, and package assets for game-ready output.",
  },
];

// ── Timeline ────────────────────────────────────

export interface TimelineEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    period: "EDUCATION",
    title: "B.E. Computer Science",
    subtitle: "KPR Institute of Engineering and Technology, Coimbatore",
    description: "2022 – 2026 | CGPA: 7.8 — Computer Science background combined with dedicated focus on Blender, 3D modeling, and digital art.",
  },
  {
    period: "EXPERIENCE",
    title: "Metaverse Intern",
    subtitle: "Teachnook",
    description: "Feb 2024 – Mar 2024 — Worked with optimized 3D assets and real-time 3D content as part of an immersive technology internship.",
  },
  {
    period: "PROJECTS",
    title: "Blender 3D Models & Assets",
    subtitle: "Personal & Portfolio Projects",
    description: "Creating hard-surface models, applying materials, modifiers (Bevel, Mirror, Array), studio lighting, and rendering in Blender.",
  },
  {
    period: "CURRENTLY",
    title: "Skill Development & Exploration",
    subtitle: "Present",
    description: "Continuously refining Blender techniques, hard-surface workflows, PBR shaders, 3D animation, and game-ready asset optimization.",
  },
];

// ── About ───────────────────────────────────────

export const aboutText = {
  intro:
    "I'm Gouthamraj, an aspiring 3D Artist and 3D Animator focused on Blender and digital 3D art.",
  body:
    "I enjoy creating hard-surface models, experimenting with materials, lighting and rendering, and exploring animation and visual effects. I'm continuously developing my skills with the goal of creating professional, game-ready 3D assets and growing within the 3D industry.",
};

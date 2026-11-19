# Gouthamraj — 3D Artist & 3D Animator

Personal portfolio website showcasing my work in **3D modelling, hard-surface modelling, materials, lighting, rendering, and 3D animation**.

<p align="center">
  <a href="https://goutham-portfolio-two.vercel.app/"><strong>Visit Live Portfolio →</strong></a>
  &nbsp;·&nbsp;
  <a href="https://github.com/Gouthamraj2004"><strong>GitHub Profile</strong></a>
</p>

## About

Hi, I'm **Gouthamraj R**, an aspiring 3D Artist and 3D Animator focused on Blender and digital 3D art. I enjoy creating 3D models, experimenting with materials and lighting, and bringing scenes to life through animation.

This website brings together selected projects, my creative process, skills, experience, and contact details in one place.

## Featured Work

### The Creature
A cinematic Blender animation featuring a dark atmospheric environment, creature animation, dramatic lighting, and suspense-driven camera movement.

### Sword in Stone
A Blender modelling and animation project featuring a sword embedded in stone, with detailed materials, an atmospheric scene, and cinematic motion.

### 3D Model Assets for Blender
A collection of reusable Blender assets and 3D models.  
[Explore the asset repository →](https://github.com/Gouthamraj2004/Blender-3D-Models)

## Portfolio Sections

- **Home** — introduction and interactive 3D hero experience.
- **Work** — selected 3D projects with visual previews and project details.
- **About** — background, interests, and focus areas.
- **Skills** — Blender modelling, materials, rendering, animation, and asset development.
- **Creative Process** — an overview of my workflow, from concept and modelling to final rendering and asset preparation.
- **Resume** — access to my résumé.
- **Contact** — links to get in touch and a message form.

## Built With

| Technology | Purpose |
| --- | --- |
| [Next.js](https://nextjs.org/) | React framework and App Router |
| [React](https://react.dev/) | UI components |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS](https://tailwindcss.com/) | Styling |
| [Framer Motion](https://www.framer.com/motion/) | UI animation |
| [GSAP](https://gsap.com/) | Animation and motion effects |
| [Three.js](https://threejs.org/) | 3D graphics |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) & [Drei](https://drei.docs.pmnd.rs/) | Three.js in React |
| [Lucide React](https://lucide.dev/) | Icons |

## Run Locally

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Gouthamraj2004/goutham-portfolio.git
   cd goutham-portfolio
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create your local environment file:

   ```bash
   cp .env.example .env.local
   ```

   Add your Formspree endpoint to `.env.local`:

   ```env
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup

The message form uses [Formspree](https://formspree.io/) to deliver submissions.

1. Create a Formspree account and verify your email.
2. Create a new form and set its target/notification email to **gouthamrajdev@gmail.com**.
3. Copy the form endpoint from the form's **Integration** tab.
4. Add it as `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in your local `.env.local` and in the Vercel project's environment variables (Production, Preview, and Development as needed).
5. Redeploy the Vercel project after adding or changing the environment variable.

Form submissions are stored in the Formspree dashboard. Email notifications are sent according to the form's notification settings. The endpoint is public by design; do not put a private API key in a `NEXT_PUBLIC_` variable.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
goutham-portfolio/
├── public/
│   ├── images/           # Profile and project images
│   ├── videos/           # Project animation videos
│   └── resume/           # Downloadable résumé
├── src/
│   ├── app/              # App Router, layout, and global styles
│   ├── components/
│   │   ├── layout/       # Navigation and footer
│   │   ├── sections/     # Portfolio page sections
│   │   ├── three/        # Three.js hero scene
│   │   └── ui/           # Reusable UI components
│   └── data/
│       └── portfolio.ts  # Central portfolio content and project data
├── .env.example          # Environment variable template
├── package.json
└── README.md
```

## Updating Portfolio Content

Most portfolio text, project descriptions, skills, timeline entries, and contact links are centralized in:

`src/data/portfolio.ts`

Project images, videos, and the résumé are stored under `public/`. Update the relevant paths in the portfolio data when adding or replacing media.

## Deployment

The portfolio is deployed on [Vercel](https://vercel.com/):

**Live site:** https://goutham-portfolio-two.vercel.app/

## Connect

- **Portfolio:** https://goutham-portfolio-two.vercel.app/
- **Email:** [gouthamrajdev@gmail.com](mailto:gouthamrajdev@gmail.com)
- **GitHub:** https://github.com/Gouthamraj2004
- **LinkedIn:** https://www.linkedin.com/in/gouthamraj-r-561744257/

---

Designed and developed by **Gouthamraj R**.

# Abdul Basit — Software Engineer Portfolio

A modern, animated, and fully responsive personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Three.js**. Designed to showcase skills, experience, projects, and achievements with a premium dark-themed UI and smooth micro-animations.

---

## ✨ Live Sections

| Section        | Description                                                               |
| -------------- | ------------------------------------------------------------------------- |
| **Hero**       | Animated intro with 3D particle background, CTA buttons & social links    |
| **About**      | Brief professional summary with highlight cards (Frontend, Backend, DB)   |
| **Skills**     | Categorized tech arsenal — Languages, Frontend, Backend, Database & Tools |
| **Experience** | Interactive timeline showcasing roles at SparkoSol                        |
| **Projects**   | Showcase of key projects — Chat App, Habit Tracker, Booking System        |
| **Education**  | Academic background (BS CS @ MNS-UAM) and achievements & scholarships     |
| **Contact**    | Email, phone, location, and social links to get in touch                  |

---

## 🛠️ Tech Stack

### Core

- **React 18** — Component-based UI
- **TypeScript** — Type-safe development
- **Vite** — Lightning-fast build tool & dev server

### Styling & UI

- **Tailwind CSS 3** — Utility-first CSS framework
- **shadcn/ui** — Beautifully designed, accessible Radix-based component library
- **Framer Motion** — Declarative animations and micro-interactions
- **Lucide React** — Crisp, modern icon set

### 3D & Visual Effects

- **Three.js** — 3D rendering engine
- **@react-three/fiber** — React renderer for Three.js
- **@react-three/drei** — Useful helpers for R3F (particle fields, floating shapes)

### Routing & State

- **React Router DOM v6** — Client-side routing
- **TanStack React Query** — Server state management

### Quality & Testing

- **Vitest** — Unit testing framework
- **Testing Library** — React component testing utilities
- **ESLint** — Code linting with React hooks & refresh plugins

---

## 📁 Project Structure

```
next-portfolio/
├── public/                         # Static assets
│   ├── Abdul_Basit_Software_Engineer_CV.pdf
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/                 # Feature components
│   │   ├── Navbar.tsx              # Responsive navigation bar
│   │   ├── HeroSection.tsx         # Hero with 3D particle background
│   │   ├── AboutSection.tsx        # About me + highlight cards
│   │   ├── SkillsSection.tsx       # Categorized skills grid
│   │   ├── ExperienceSection.tsx   # Animated work timeline
│   │   ├── ProjectsSection.tsx     # Project showcase cards
│   │   ├── EducationSection.tsx    # Education & achievements
│   │   ├── ContactSection.tsx      # Contact info & social links
│   │   ├── WhatsAppButton.tsx      # Floating WhatsApp chat button
│   │   ├── ParticleField.tsx       # Three.js particle background
│   │   ├── FloatingShape.tsx       # 3D floating decoration
│   │   ├── Footer.tsx              # Site footer
│   │   ├── NavLink.tsx             # Navigation link component
│   │   └── ui/                     # shadcn/ui components (49 components)
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mobile.tsx          # Mobile breakpoint detection
│   │   └── use-toast.ts            # Toast notification hook
│   ├── lib/                        # Utility functions
│   ├── pages/
│   │   ├── Index.tsx               # Main portfolio page
│   │   └── NotFound.tsx            # 404 page
│   ├── App.tsx                     # Root app with routing & providers
│   ├── main.tsx                    # Entry point
│   ├── index.css                   # Global styles & CSS variables
│   └── App.css                     # App-level styles
├── index.html                      # HTML entry with SEO meta tags
├── tailwind.config.ts              # Tailwind theme customization
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
├── components.json                 # shadcn/ui configuration
└── package.json                    # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+ — [Install via nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **bun** package manager

### Installation

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate to the project directory
cd next-portfolio

# 3. Install dependencies
npm install
# or
bun install

# 4. Start the development server
npm run dev
```

The dev server will start at **http://localhost:8080** with hot module replacement enabled.

### Available Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start Vite dev server on port 8080 |
| `npm run build`      | Production build                   |
| `npm run build:dev`  | Development build                  |
| `npm run preview`    | Preview production build locally   |
| `npm run lint`       | Run ESLint checks                  |
| `npm run test`       | Run tests with Vitest              |
| `npm run test:watch` | Run tests in watch mode            |

---

## 🎨 Design Highlights

- **Dark Theme** — Sleek dark color palette with vibrant accent colors
- **3D Particle Background** — Interactive Three.js particle field in the hero section
- **Smooth Animations** — Scroll-triggered animations, hover effects, and staggered reveals powered by Framer Motion
- **Floating 3D Shapes** — Decorative Three.js elements adding depth to section backgrounds
- **Glassmorphism Cards** — Gradient card backgrounds with glowing hover effects
- **Custom Typography** — Space Grotesk (sans-serif) + JetBrains Mono (monospace)
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop viewports
- **Floating WhatsApp Button** — Quick-access chat button for direct communication

---

## 🏆 Featured Projects

| Project                    | Tech Stack                        | Description                                                             |
| -------------------------- | --------------------------------- | ----------------------------------------------------------------------- |
| **Anonymous Chat App**     | React, NestJS, MongoDB, WebSocket | Real-time chat with private, group, and anonymous room conversations    |
| **Gamified Habit Tracker** | React, NestJS, MongoDB            | Task management with gamification — streaks, points, and custom rewards |
| **Marriage Hall Booking**  | React, NestJS, Prisma, PostgreSQL | Venue booking platform with real-time availability and admin dashboard  |

---

## 📄 License

This project is private and intended for personal portfolio use.

---

## 📬 Contact

- **Email:** [abdulbasitofficial.dev@gmail.com](mailto:abdulbasitofficial.dev@gmail.com)
- **Phone:** 0312-6922823
- **Location:** Multan, Pakistan

---

> Built with ❤️ by **Abdul Basit** — Full-stack Software Engineer

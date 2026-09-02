<p align="center">
  <img src="docs/assets/josuakuru-logo.svg" width="150" alt="Josuakuru Logo">
</p>

<h1 align="center">Josuakuru — 19th Birthday Editorial Website</h1>

<p align="center">
  An editorial-style digital birthday tribute built for Josua's 19th birthday.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3.4-000000?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.2.8-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/ESLint-9.x-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint">
</p>

---

## Project Overview

**Josuakuru** is a bespoke, editorial-grade digital birthday tribute created for Josua's 19th birthday. 

Moving away from the standard greeting card format, this project embraces a luxury, high-fashion magazine aesthetic. It combines striking typography, a curated color palette, interactive photography, and personal storytelling. The website serves as both an elegant visual showcase and a humorous commentary on Josua's passion for gadgetry, data science, and his ambition in the tech space.

---

## ✨ Key Features

- **Editorial Visual Design**: A minimal, premium aesthetic blending ivory, charcoal, and burgundy accents.
- **Custom Typography Pairing**: Elegant use of Next.js optimized fonts (Geist sans-serif and Newsreader serif).
- **Interactive Photo Gallery**: A custom-built horizontal scrolling photography archive with custom pointer-drag interactions and scrubbable scrollbar.
- **Portrait Video Archive**: A responsive 9:16 portrait video showcase with native HTML5 controls and custom poster fallback.
- **Personalized Storytelling**: Bespoke message and creator signature sections with asymmetrical layouts.
- **Fluid Responsiveness**: Gracefully scales across mobile, tablet, and desktop viewports using Tailwind CSS v4 dynamic sizing.
- **CSS Entrance Animations**: Subtle fade and rise keyframe animations that introduce content gracefully on load.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js (16.3.4)** | React framework and App Router for page structure |
| **React (19.2.8)** | Core UI rendering engine |
| **TypeScript (5.x)** | Type-safe development |
| **Tailwind CSS (4.0)** | Utility-first styling and inline theme tokens |
| **next/font** | Zero-layout-shift font optimization |
| **ESLint (9.x)** | Code quality and standard enforcement |

---

## Project Structure

```text
josua-kuru/
├── docs/
│   └── assets/
│       └── josuakuru-logo.svg
├── public/
│   └── birthday/
│       ├── photos/
│       │   ├── josua-thumbnail.jpg
│       │   └── photo-01.jpg ... photo-08.jpg
│       └── videos/
│           └── video-01.mp4
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── birthday/
│   │       ├── Footer.tsx
│   │       ├── Hero.tsx
│   │       ├── MessageSection.tsx
│   │       ├── PhotoGallery.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── SignatureSection.tsx
│   │       └── VideoSection.tsx
│   └── data/
│       └── birthday.ts
├── package.json
├── next.config.ts
├── tsconfig.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** (v20+ recommended)
- **npm** (comes with Node.js)

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/MufidJK/josua-kuru.git
cd josua-kuru
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Start the Next.js development server on localhost:3000 |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server (requires a build first) |
| `npm run lint` | Run ESLint to check for code quality issues |

---

## Customizing Content

All site text, image paths, and video metadata are centralized in a single configuration file.

**Path:** `src/data/birthday.ts`

To change the birthday messages, gallery captions, or video descriptions, simply edit the values inside this file.

### Adding Photos & Videos

The project follows a strict organizational structure for media assets.

- **Photos** belong in: `public/birthday/photos/`
- **Videos** belong in: `public/birthday/videos/`

To add new media:
1. Place the new image or video file into the respective folder above.
2. Open `src/data/birthday.ts`.
3. Add a new entry to the `gallery.images` array for photos, or update the `video` object for videos.

---

## Media Guidelines

- **Format:** The main video feature is specifically designed for **portrait 9:16** aspect ratio.
- **Optimization:** Images are automatically optimized by Next.js `<Image>` components at runtime.
- **Repository Size:** High-resolution raw images can significantly increase the Git repository size. Compressing large images before committing is highly recommended.

---

## Production

To build the application for production, run:

```bash
npm run build
```

Then, to test the production build locally:

```bash
npm run start
```

---

## Deployment

The project is a standard Next.js application and is perfectly suited for zero-config deployment on platforms like [Vercel](https://vercel.com). It can also be deployed to any Node.js-compatible hosting environment.

The current implementation requires **no external databases**, **no external APIs**, and **no environment variables**.

---

## Project Status / Notes

- **Architecture:** Built as a single-page flow utilizing the Next.js App Router.
- **Client/Server boundaries:** Heavy use of React Server Components. Client-side interaction (`"use client"`) is intentionally localized to the `PhotoGallery` component to handle DOM calculations and gesture tracking.
- **Local Assets:** All media and content are statically served locally from the repository.

---

<p align="center">
  <small>Made with intention. 2026.</small>
</p>

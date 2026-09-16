# Personal Website

Personal portfolio website for showcasing my engineering experience, projects, leadership activities, and resume.

The site is built with **SvelteKit**, **TypeScript**, and **Tailwind CSS** and is designed as a lightweight static portfolio.

## Overview

The website includes:

* Introduction and contact information
* Professional experience
* Engineering and software projects
* Leadership and extracurricular activities
* Downloadable resume
* Links to GitHub and LinkedIn

## Tech Stack

* [Svelte 5](https://svelte.dev/)
* [SvelteKit](https://svelte.dev/docs/kit)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vite.dev/)
* [Tailwind CSS](https://tailwindcss.com/)

## Project Structure

```text
personal-website/
├── personalSite/
│   ├── src/
│   │   ├── lib/
│   │   │   ├── components/
│   │   │   ├── images/
│   │   │   └── resumeData/
│   │   └── routes/
│   ├── static/
│   ├── package.json
│   ├── svelte.config.ts
│   └── vite.config.ts
├── LICENSE
└── README.md
```

The main portfolio sections are implemented as reusable Svelte components under `src/lib/components`.

Portfolio information such as professional experience, projects, and leadership activities is separated into data files under `src/lib/resumeData`.

## Running Locally

### Requirements

Install:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/EmilioGarciaRabell/personal-website.git
cd personal-website/personalSite
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

Create a production build with:

```bash
npm run build
```

Preview the generated build locally:

```bash
npm run preview
```

The project uses SvelteKit's static adapter to generate a static production build.

## Updating Portfolio Content

Most portfolio content can be updated through the files inside:

```text
src/lib/resumeData/
```

These currently contain data for:

* Experience
* Projects
* Leadership

Images used throughout the portfolio are stored under:

```text
src/lib/images/
```

The downloadable resume is stored in:

```text
static/EmilioGarciaResume.pdf
```

## License

This project is licensed under the terms included in the [LICENSE](LICENSE) file.


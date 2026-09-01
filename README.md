# Chief Mrs. Monica Memorial Website

A respectful, static memorial website honoring Chief Mrs. Monica Edumongren Zisine Otoro, 1941 — 2026.

## Overview

This project is a warm, elegant digital remembrance space built with React, Vite, and local content files. It is designed to preserve her story, family legacy, and memories in a way that feels personal, timeless, and easy to maintain.

## Tech stack

- React
- Vite
- JavaScript
- CSS
- Static local content files

## Project structure

- src/data/memorialData.js — main content repository
- src/pages/PublicMemorialPage.jsx — public memorial experience
- src/App.css — memorial styling and responsive layout
- public/ — static assets and future media files

## Local content management

To update the memorial text, biography, timeline, gallery, or tribute notes, edit the content in:

- src/data/memorialData.js

This keeps the site easy to maintain without a backend or CMS.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL in the browser.

## Build for production

```bash
npm run build
```

The production build is static and ready to deploy to GitHub Pages, Netlify, Vercel static hosting, or any standard static host.

## Media and assets

Store approved images and supporting media in the project under `public/` or in a dedicated local asset folder. Keep media references in the data file rather than hard-coding them directly into the UI.

## Deployment

Because this project is purely static, deployment is simple:

1. Run the production build
2. Upload the generated dist folder to a static host
3. Keep the source files, media, and content together for future updates

## Important note

All family content should be reviewed and approved before public publishing. The existing content is written respectfully and intentionally without inventing personal details.

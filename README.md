# GUARATIBACHECK

A Next.js application with Vercel Web Analytics integration.

## Features

- ✓ Next.js 16 with App Router
- ✓ TypeScript support
- ✓ Tailwind CSS styling
- ✓ Vercel Web Analytics integrated

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Vercel Analytics

This project includes Vercel Web Analytics configuration. The Analytics component is integrated in the root layout (`app/layout.tsx`) and will automatically track page views and web vitals when deployed to Vercel.

To enable analytics:
1. Deploy this project to Vercel
2. Navigate to your project's Analytics section in the Vercel dashboard
3. Click "Enable" to activate Web Analytics

## Build

To create a production build:

```bash
npm run build
```

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
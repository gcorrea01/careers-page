# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a careers page built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Development Commands

```bash
# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Architecture

### App Router Structure

This project uses Next.js App Router (not Pages Router). All routes are defined in the `app/` directory:

- `app/page.tsx` - Root page component
- `app/layout.tsx` - Root layout with shared UI and metadata
- Route segments are created using folders (e.g., `app/jobs/page.tsx` for `/jobs`)

### Path Aliases

TypeScript is configured with path aliases:
- `@/*` maps to the root directory (e.g., `@/app/components/JobCard`)

### Styling

Tailwind CSS v4 is configured with PostCSS. Use Tailwind utility classes for styling. Dark mode support is available using the `dark:` prefix.

## Key Technologies

- **Next.js**: 16.1.6 (App Router)
- **React**: 19.2.3
- **TypeScript**: v5
- **Tailwind CSS**: v4
- **ESLint**: v9 with eslint-config-next

## Next.js 16 Specific Notes

- Uses React 19 which has breaking changes from React 18
- Server Components are the default in the App Router
- Use `"use client"` directive for Client Components
- Async Server Components are supported
- Font optimization uses `next/font`

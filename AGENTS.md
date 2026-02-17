# AGENTS.md - SunnyHUB Careers Page

## Project Identity & Tech Stack
You are an expert full-stack engineer building the SunnyHUB Careers Page.
- **Framework:** Next.js 16.1.6 (App Router - Strict)
- **Runtime:** React 19.2.3 (Server Components by default)
- **Styling:** Tailwind CSS v4 + PostCSS
- **Database/Auth:** Supabase (Integration in progress)
- **Environment:** Node.js v22+ / TypeScript v5

## Rules of Engagement (Strict)
1. **Component Pattern:** Default to **Server Components**. Only use `"use client"` if state, effects, or browser APIs are required.
2. **Pathing:** Use `@/` aliases for all imports (e.g., `@/components/ui/button`). Never use relative paths like `../../`.
3. **Styling:** Use Tailwind v4 utility classes. Adhere to SunnyHUB brand guidelines:
   - Primary: #0056b3 (Sunny Blue)
   - Secondary: #ff9900 (Sunny Orange)
4. **React 19 Syntax:** Use the new `use` hook for data fetching in Client Components and the `action` prop for forms.
5. **Terminal usage:** Always run `npm run lint` after significant refactors to catch React 19/Next 16 type mismatches.

## Development Context
- **Dev Server:** `npm run dev` (Port 3000)
- **Directory Structure:**
  - `app/`: All routing logic.
  - `components/`: Reusable UI elements.
  - `lib/`: Shared utilities and Supabase client.
  - `hooks/`: Custom React hooks.

## Current Project State
- Root page (`app/page.tsx`) and layout are initialized.
- Tailwind v4 is configured and working.
- Task: Preparing for Supabase integration and Job Board dynamic routing.
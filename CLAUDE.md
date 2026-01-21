# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React application built with Vite and TypeScript, intended for publishing to GitHub Pages. Uses Storybook for component development and documentation.

## Development Commands

```bash
pnpm dev              # Start development server (Vite)
pnpm build            # Build for production (runs tsc then vite build)
pnpm lint             # Run ESLint
pnpm storybook        # Start Storybook on port 6006
pnpm build-storybook  # Build static Storybook
```

## Project Structure

- `src/` - Application source code
  - `src/stories/` - Storybook stories and example components
- `.storybook/` - Storybook configuration
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

## Deployment

GitHub Pages deployment is automated via GitHub Actions. Pushing to `main` triggers a build and deploy.

**Setup required in GitHub repo settings:**
1. Settings → Pages → Source: "GitHub Actions"

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Iconsax Vue Next is a monorepo providing Iconsax icons for Vue 3 and Nuxt 3. It generates Vue components from SVG icons and publishes three packages:

- `@ratoufa/iconsax-vue` - Vue 3 components with tree-shaking and dynamic loading
- `@ratoufa/iconsax-nuxt` - Nuxt 3 module with auto-imports
- `@iconify-json/iconsax` - Iconify JSON format for Nuxt Icon/UnoCSS

## Commands

```bash
# Install dependencies
pnpm install

# Fetch icons from source repository (requires git)
pnpm fetch:icons

# Generate Vue components from SVGs
pnpm generate

# Generate Iconify JSON format
pnpm generate:iconify

# Generate both Vue components and Iconify JSON
pnpm generate:all

# Build all packages
pnpm build

# Run tests (all packages)
pnpm test

# Run tests in watch mode (vue package only)
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Lint the codebase
pnpm lint

# Type check all packages
pnpm typecheck
```

## Architecture

### Code Generation Pipeline

1. `pnpm fetch:icons` - Clones blade-iconsax repo, extracts SVGs organized by variant prefix (bol-, lin-, etc.) into `icons/{variant}/` directories
2. `pnpm generate` - Reads SVGs from `icons/`, generates:
   - Individual Vue SFCs in `packages/vue/src/components/Is{PascalName}.vue`
   - `IsIcon.vue` dynamic component with lazy loading
   - `types.ts` with `IconName` union type and `iconNames` const array
   - `index.ts` barrel exports
3. `pnpm generate:iconify` - Creates Iconify-compatible `icons.json` in `packages/iconify/`

### Icon Variants

Six styles per icon: `bold`, `broken`, `bulk`, `linear` (default), `outline`, `twotone`

Each generated component:

- Embeds all variant SVG data inline
- Switches content based on `variant` prop
- Applies `fill` for bold/bulk, `stroke` for linear/outline/broken/twotone

### Nuxt Module

The Nuxt module (`packages/nuxt/src/module.ts`) uses `@nuxt/kit` to:

- Always register `IsIcon` (dynamic) component
- Optionally register all icons globally via `global: true` option
- Configure component prefix via `prefix` option (default: `Is`)

### Package Dependencies

- `@ratoufa/iconsax-nuxt` depends on `@ratoufa/iconsax-vue` via `workspace:*`
- `@ratoufa/iconsax-vue` uses tsup for building ESM/CJS
- Tests use Vitest with happy-dom and @vue/test-utils

## Key Files

- `scripts/fetch-icons.ts` - Downloads and organizes SVG source files
- `scripts/generate.ts` - Core generator that creates Vue components from SVGs
- `scripts/generate-iconify.ts` - Generates Iconify JSON format
- `packages/vue/src/types.ts` - TypeScript types (auto-generated)
- `packages/nuxt/src/module.ts` - Nuxt module definition

## Testing

Tests are in `packages/vue/tests/`. Run a specific test file:

```bash
pnpm --filter @ratoufa/iconsax-vue test tests/icons.test.ts
```

# 📋 PRD - Iconsax Vue Next

> Product Requirements Document (PRD) - Document de spécifications techniques et fonctionnelles

---

## 📌 Informations générales

| Champ | Valeur |
|-------|--------|
| **Nom du projet** | Iconsax Vue Next |
| **Auteur** | Chris (Ratoufa) |
| **Version** | 1.0.0 |
| **Date de création** | Janvier 2025 |
| **Licence** | MIT |
| **Repository** | https://github.com/ratoufa/iconsax-vue-next |

---

## 🎯 Vision & Objectifs

### Vision
Créer la bibliothèque d'icônes Iconsax la plus moderne, performante et developer-friendly pour l'écosystème Vue.js et Nuxt.js, en remplacement des packages existants qui sont abandonnés ou mal conçus.

### Problème à résoudre
Les packages Iconsax existants pour Vue présentent plusieurs problèmes :
- **`iconsax-vue`** : Abandonné, ne supporte pas Vue 3 Composition API
- **`vue-iconsax`** : Package lourd (6.96 MB), peu de téléchargements, pas vraiment type-safe
- **Aucun** ne supporte nativement Nuxt Icon ou le format Iconify

### Objectifs principaux
1. **Modernité** : Support complet de Vue 3, Nuxt 3, TypeScript 5
2. **DX (Developer Experience)** : Autocomplétion, type-safety, documentation claire
3. **Performance** : Tree-shaking, lazy-loading, bundle minimal
4. **Flexibilité** : Import statique et dynamique, multiple intégrations
5. **Maintenabilité** : Tests automatisés, génération de code, CI/CD

---

## 👥 Personas & Use Cases

### Persona 1 : Développeur Vue.js
**Nom** : Sarah, Développeuse Frontend  
**Contexte** : Travaille sur une application Vue 3 avec TypeScript  
**Besoin** : Ajouter des icônes rapidement avec autocomplétion  
**Pain point** : Les packages actuels n'ont pas de types corrects  

**Use case** :
```vue
<script setup lang="ts">
import { IsHome, IsSetting } from '@ratoufa/iconsax-vue'
</script>
<template>
  <IsHome variant="bold" size="24" color="#6366f1" />
</template>
```

### Persona 2 : Développeur Nuxt.js
**Nom** : Marc, Développeur Fullstack  
**Contexte** : Développe des applications Nuxt 3  
**Besoin** : Auto-import des icônes sans configuration  
**Pain point** : Doit importer manuellement chaque icône  

**Use case** :
```vue
<!-- Nuxt auto-import -->
<template>
  <IsIcon name="home" variant="bold" />
</template>
```

### Persona 3 : Développeur utilisant Nuxt Icon
**Nom** : Julie, Designer/Dev  
**Contexte** : Utilise Nuxt Icon avec plusieurs sets d'icônes  
**Besoin** : Intégrer Iconsax dans son workflow existant  
**Pain point** : Iconsax n'est pas disponible dans Iconify  

**Use case** :
```vue
<template>
  <Icon name="iconsax:home-bold" />
  <Icon name="iconsax:setting-linear" />
</template>
```

---

## 📦 Packages & Architecture

### Structure du monorepo

```
iconsax-vue-next/
├── packages/
│   ├── vue/                      # @ratoufa/iconsax-vue
│   │   ├── src/
│   │   │   ├── components/       # Composants Vue générés
│   │   │   │   ├── IsHome.vue
│   │   │   │   ├── IsSetting.vue
│   │   │   │   ├── IsIcon.vue    # Composant dynamique
│   │   │   │   └── ...
│   │   │   ├── types.ts          # Types TypeScript
│   │   │   └── index.ts          # Exports
│   │   ├── tests/                # Tests Vitest
│   │   └── package.json
│   │
│   ├── nuxt/                     # @ratoufa/iconsax-nuxt
│   │   ├── src/
│   │   │   └── module.ts         # Module Nuxt
│   │   └── package.json
│   │
│   └── iconify/                  # @iconify-json/iconsax
│       ├── icons.json            # Format Iconify
│       ├── index.d.ts            # Types
│       └── package.json
│
├── scripts/
│   ├── fetch-icons.ts            # Télécharge les SVGs
│   ├── generate.ts               # Génère les composants Vue
│   └── generate-iconify.ts       # Génère le format Iconify
│
├── icons/                        # SVGs sources (6 variants)
│   ├── bold/
│   ├── broken/
│   ├── bulk/
│   ├── linear/
│   ├── outline/
│   └── twotone/
│
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.json
```

### Packages publiés

| Package | npm | Description |
|---------|-----|-------------|
| `@ratoufa/iconsax-vue` | ![npm](https://img.shields.io/npm/v/@ratoufa/iconsax-vue) | Composants Vue 3 |
| `@ratoufa/iconsax-nuxt` | ![npm](https://img.shields.io/npm/v/@ratoufa/iconsax-nuxt) | Module Nuxt 3 |
| `@iconify-json/iconsax` | ![npm](https://img.shields.io/npm/v/@iconify-json/iconsax) | Format Iconify |

---

## ✨ Fonctionnalités

### 1. Collection d'icônes

| Caractéristique | Valeur |
|-----------------|--------|
| **Nombre d'icônes** | 1000+ |
| **Variants** | 6 (linear, bold, outline, bulk, broken, twotone) |
| **Total SVGs** | 6000+ |
| **Format** | SVG optimisé |
| **ViewBox** | 24x24 |

### 2. Composants Vue

#### 2.1 Import statique (Tree-shakable)
```typescript
import { IsHome, IsSetting, IsUser } from '@ratoufa/iconsax-vue'
```

**Avantages** :
- ✅ Tree-shaking : seules les icônes importées sont dans le bundle
- ✅ Autocomplétion sur les noms de composants
- ✅ Type-checking complet

#### 2.2 Import dynamique
```typescript
import { IsIcon } from '@ratoufa/iconsax-vue'
```

```vue
<IsIcon name="home" variant="bold" />
```

**Avantages** :
- ✅ Nom d'icône en string (pour données dynamiques)
- ✅ Autocomplétion sur la prop `name`
- ✅ Lazy-loading automatique

### 3. Props des composants

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `24` | Taille en pixels ou valeur CSS |
| `color` | `string` | `'currentColor'` | Couleur de l'icône |
| `variant` | `IconVariant` | `'linear'` | Style de l'icône |

### 4. Variants disponibles

| Variant | Description | Rendu |
|---------|-------------|-------|
| `linear` | Outline simple | Stroke uniquement |
| `bold` | Rempli | Fill solid |
| `outline` | Outline détaillé | Stroke avec détails |
| `bulk` | Deux tons | Fill avec opacité |
| `broken` | Lignes interrompues | Stroke dashé |
| `twotone` | Deux couleurs | Stroke + opacité |

### 5. Types TypeScript

```typescript
// Nom d'icône avec autocomplétion
type IconName = 'home' | 'setting' | 'user' | ... // 1000+ noms

// Variants disponibles
type IconVariant = 'linear' | 'bold' | 'outline' | 'bulk' | 'broken' | 'twotone'

// Props des composants
interface IconProps {
  size?: number | string
  color?: string
  variant?: IconVariant
}
```

### 6. Intégration Nuxt 3

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@ratoufa/iconsax-nuxt'],
  iconsax: {
    prefix: 'Is',      // Préfixe des composants
    global: false      // Enregistrer toutes les icônes globalement
  }
})
```

### 7. Intégration Nuxt Icon (Iconify)

```vue
<template>
  <Icon name="iconsax:home-bold" />
  <Icon name="iconsax:setting-linear" />
</template>
```

---

## 🔧 Spécifications techniques

### Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Vue.js** | 3.4+ | Framework UI |
| **TypeScript** | 5.3+ | Typage |
| **Vite** | 5.0+ | Build tool |
| **tsup** | 8.0+ | Bundle package |
| **Vitest** | 1.1+ | Tests |
| **pnpm** | 8.12+ | Package manager |
| **Nuxt** | 3.9+ | Framework SSR (module) |

### Compatibilité

| Environnement | Support |
|---------------|---------|
| Vue 3.3+ | ✅ |
| Nuxt 3.0+ | ✅ |
| TypeScript 5+ | ✅ |
| Node.js 18+ | ✅ |
| ESM | ✅ |
| CommonJS | ✅ |
| SSR | ✅ |

### Performance

| Métrique | Objectif |
|----------|----------|
| Bundle size (1 icône) | < 1KB gzip |
| Bundle size (10 icônes) | < 5KB gzip |
| Tree-shaking | 100% efficace |
| Temps de build | < 30s |

---

## 🧪 Stratégie de tests

### Types de tests

| Type | Framework | Couverture |
|------|-----------|------------|
| Unitaires | Vitest | Composants, types |
| Snapshot | Vitest | Rendu SVG |
| Integration | Vitest | Exports, props |

### Fichiers de test

| Fichier | Description |
|---------|-------------|
| `icons.test.ts` | Tests des composants individuels |
| `dynamic-icon.test.ts` | Tests du composant `IsIcon` |
| `types.test.ts` | Validation des types TypeScript |
| `snapshots.test.ts` | Snapshots des rendus |
| `exports.test.ts` | Vérification des exports |

### Commandes

```bash
pnpm test          # Exécuter tous les tests
pnpm test:watch    # Mode watch
pnpm test:coverage # Avec couverture
```

---

## 🚀 Roadmap

### Phase 1 : MVP ✅
- [x] Structure du monorepo
- [x] Script de fetch des icônes
- [x] Script de génération Vue
- [x] Package `@ratoufa/iconsax-vue`
- [x] Types TypeScript
- [x] Composant dynamique `IsIcon`
- [x] Tests unitaires

### Phase 2 : Nuxt & Iconify ✅
- [x] Module `@ratoufa/iconsax-nuxt`
- [x] Package `@iconify-json/iconsax`
- [x] Script de génération Iconify

### Phase 3 : Publication (À faire)
- [ ] Télécharger les 6000 SVGs complets
- [ ] Générer tous les composants
- [ ] Publier sur npm
- [ ] Documentation site web
- [ ] CI/CD GitHub Actions

### Phase 4 : Améliorations (Futur)
- [ ] Playground interactif
- [ ] Plugin VS Code (snippets)
- [ ] Icônes animées
- [ ] Support React (optionnel)

---

## 📖 Documentation

### Installation

```bash
# Vue 3
npm install @ratoufa/iconsax-vue

# Nuxt 3
npm install @ratoufa/iconsax-nuxt

# Nuxt Icon (Iconify)
npm install @iconify-json/iconsax
```

### Usage basique

```vue
<script setup lang="ts">
import { IsHome, IsIcon } from '@ratoufa/iconsax-vue'
</script>

<template>
  <!-- Import statique -->
  <IsHome variant="bold" size="24" color="#6366f1" />
  
  <!-- Import dynamique -->
  <IsIcon name="setting" variant="linear" />
</template>
```

### Usage Nuxt

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@ratoufa/iconsax-nuxt']
})
```

```vue
<template>
  <!-- Auto-importé -->
  <IsIcon name="home" variant="bold" />
</template>
```

### Usage Nuxt Icon

```vue
<template>
  <Icon name="iconsax:home-bold" />
</template>
```

---

## 🔐 Sécurité & Maintenance

### Dépendances
- Mise à jour mensuelle des dépendances
- Audit de sécurité avec `pnpm audit`
- Dependabot activé sur GitHub

### Versioning
- Semantic Versioning (SemVer)
- Changelog automatique
- Tags Git pour chaque release

### CI/CD (À configurer)
```yaml
# .github/workflows/ci.yml
- Lint (ESLint)
- Type check (TypeScript)
- Tests (Vitest)
- Build
- Publish (npm)
```

---

## 📊 Métriques de succès

| Métrique | Objectif |
|----------|----------|
| Téléchargements npm/semaine | > 1000 |
| Stars GitHub | > 100 |
| Issues ouverts | < 5 |
| Couverture de tests | > 80% |
| Temps de réponse issues | < 48h |

---

## 📚 Ressources

### Liens utiles
- [Iconsax officiel](https://iconsax.io/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Nuxt 3 Documentation](https://nuxt.com/)
- [Iconify](https://iconify.design/)
- [Vitest](https://vitest.dev/)

### Inspiration
- [Lucide Icons](https://lucide.dev/)
- [Heroicons](https://heroicons.com/)
- [Tabler Icons](https://tabler-icons.io/)

---

## 📝 Changelog

### v1.0.0 (À venir)
- 🎉 Release initiale
- ✅ 1000+ icônes
- ✅ 6 variants
- ✅ Support Vue 3 & Nuxt 3
- ✅ Types TypeScript complets
- ✅ Format Iconify

---

## 📄 Licence

MIT License - Voir [LICENSE](./LICENSE) pour plus de détails.

Les icônes Iconsax sont créées par [Vuesax](https://vuesax.com/) et distribuées sous licence MIT.

---

**Créé avec ❤️ par Chris (Ratoufa) - Togo 🇹🇬**

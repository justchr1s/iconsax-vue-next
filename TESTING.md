# 🧪 Guide de Test Local

Ce guide explique comment tester le package `@ratoufa/iconsax-vue` en local.

---

## 📋 Prérequis

- **Node.js** 18+ 
- **pnpm** 8+ (recommandé) ou npm/yarn

```bash
# Installer pnpm si nécessaire
npm install -g pnpm
```

---

## 🚀 Méthode 1 : Playground intégré (Recommandé)

Le projet inclut un playground Vue 3 pour tester les icônes visuellement.

### Étapes

```bash
# 1. Extraire le projet
unzip iconsax-vue-next.zip
cd iconsax-vue-next

# 2. Installer les dépendances du monorepo
pnpm install

# 3. Installer les dépendances du playground
cd playground
pnpm install
cd ..

# 4. Lancer le playground
cd playground
pnpm dev
```

### Résultat attendu

```
  VITE v5.0.10  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Ouvre **http://localhost:5173** dans ton navigateur. Tu verras :
- ✅ Les 5 icônes d'exemple (home, setting, heart, user, search-normal)
- ✅ Contrôles pour changer variant, size, color
- ✅ Test du composant dynamique `IsIcon`
- ✅ Tous les 6 variants affichés

---

## 🔧 Méthode 2 : Avec toutes les icônes (1000+)

Pour tester avec la collection complète d'icônes :

```bash
# 1. Extraire et entrer dans le projet
unzip iconsax-vue-next.zip
cd iconsax-vue-next

# 2. Installer les dépendances
pnpm install

# 3. Télécharger les 6000 SVGs (nécessite git)
pnpm fetch:icons

# 4. Générer les composants Vue
pnpm generate

# 5. Générer le format Iconify
pnpm generate:iconify

# 6. Lancer le playground
cd playground
pnpm install
pnpm dev
```

---

## 🧪 Méthode 3 : Tests unitaires

Exécuter les tests automatisés :

```bash
cd iconsax-vue-next

# Installer les dépendances
pnpm install

# Lancer les tests
cd packages/vue
pnpm install
pnpm test:run

# Avec couverture
pnpm test:coverage
```

### Résultat attendu

```
 ✓ tests/icons.test.ts (20 tests)
 ✓ tests/dynamic-icon.test.ts (8 tests)
 ✓ tests/types.test.ts (12 tests)
 ✓ tests/exports.test.ts (8 tests)
 ✓ tests/snapshots.test.ts (32 tests)

 Test Files  5 passed (5)
      Tests  80 passed (80)
```

---

## 📦 Méthode 4 : Dans ton propre projet Vue/Nuxt

### Option A : Lien symbolique (npm link)

```bash
# 1. Builder le package
cd iconsax-vue-next/packages/vue
pnpm install
pnpm build

# 2. Créer le lien global
pnpm link --global

# 3. Dans ton projet Vue/Nuxt
cd /chemin/vers/ton-projet
pnpm link --global @ratoufa/iconsax-vue

# 4. Utiliser dans ton code
```

```vue
<script setup lang="ts">
import { IsHome, IsIcon } from '@ratoufa/iconsax-vue'
</script>

<template>
  <IsHome variant="bold" size="24" />
  <IsIcon name="setting" />
</template>
```

### Option B : Installation locale directe

```bash
# Dans ton projet
pnpm add /chemin/absolu/vers/iconsax-vue-next/packages/vue
```

---

## ✅ Checklist de vérification

Après avoir lancé le playground, vérifie que :

| Test | Attendu |
|------|---------|
| Icônes s'affichent | ✅ 5 icônes visibles |
| Changer de variant | ✅ L'apparence change |
| Changer la taille | ✅ Les icônes grandissent/rétrécissent |
| Changer la couleur | ✅ La couleur change |
| IsIcon dynamique | ✅ Fonctionne avec le sélecteur |
| Pas d'erreurs console | ✅ Console propre |

---

## 🐛 Résolution de problèmes

### Erreur : "Module not found"

```bash
# Réinstaller les dépendances
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Erreur : "Cannot find module vue"

```bash
# Dans le playground
cd playground
pnpm install vue @vitejs/plugin-vue vite
```

### Les icônes ne s'affichent pas

1. Vérifie que les fichiers `.vue` existent dans `packages/vue/src/components/`
2. Vérifie les imports dans `packages/vue/src/index.ts`
3. Relance le serveur de développement

### Erreur TypeScript

```bash
# Vérifier les types
cd packages/vue
pnpm typecheck
```

---

## 📁 Structure après installation

```
iconsax-vue-next/
├── icons/                    # 30 SVGs (5 icônes × 6 variants)
├── packages/
│   └── vue/
│       └── src/
│           └── components/   # 6 composants .vue
├── playground/               # App de test Vue 3
│   ├── src/
│   │   └── App.vue          # Interface de test
│   └── package.json
└── package.json
```

---

## 🎉 Succès !

Si tu vois les icônes dans le playground, le package fonctionne correctement !

Tu peux maintenant :
1. **Ajouter toutes les icônes** avec `pnpm fetch:icons && pnpm generate`
2. **Publier sur npm** avec `npm publish` dans chaque package
3. **Utiliser dans tes projets** Ratoufa ! 🐿️

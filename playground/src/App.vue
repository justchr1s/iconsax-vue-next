<script setup lang="ts">
import { ref } from 'vue'

// Import statique (tree-shakable)
import { 
  IsHome, 
  IsSetting, 
  IsHeart, 
  IsUser, 
  IsSearchNormal,
  IsIcon,
  iconNames,
  iconVariants
} from '@ratoufa/iconsax-vue'

import type { IconName, IconVariant } from '@ratoufa/iconsax-vue'

// États réactifs
const selectedVariant = ref<IconVariant>('linear')
const selectedSize = ref(32)
const selectedColor = ref('#6366f1')
const dynamicIconName = ref<IconName>('home')

// Liste des icônes pour le test dynamique
const menuItems: { icon: IconName; label: string }[] = [
  { icon: 'home', label: 'Accueil' },
  { icon: 'setting', label: 'Paramètres' },
  { icon: 'user', label: 'Profil' },
  { icon: 'heart', label: 'Favoris' },
  { icon: 'search-normal', label: 'Recherche' },
]
</script>

<template>
  <div class="container">
    <header>
      <h1>🐿️ Iconsax Vue - Playground</h1>
      <p>Teste les icônes en temps réel</p>
    </header>

    <!-- Section 1: Import statique -->
    <section>
      <h2>1️⃣ Import Statique (Tree-shakable)</h2>
      <p class="code">import { IsHome, IsSetting } from '@ratoufa/iconsax-vue'</p>
      
      <div class="icons-grid">
        <div class="icon-card">
          <IsHome :variant="selectedVariant" :size="selectedSize" :color="selectedColor" />
          <span>IsHome</span>
        </div>
        <div class="icon-card">
          <IsSetting :variant="selectedVariant" :size="selectedSize" :color="selectedColor" />
          <span>IsSetting</span>
        </div>
        <div class="icon-card">
          <IsHeart :variant="selectedVariant" :size="selectedSize" :color="selectedColor" />
          <span>IsHeart</span>
        </div>
        <div class="icon-card">
          <IsUser :variant="selectedVariant" :size="selectedSize" :color="selectedColor" />
          <span>IsUser</span>
        </div>
        <div class="icon-card">
          <IsSearchNormal :variant="selectedVariant" :size="selectedSize" :color="selectedColor" />
          <span>IsSearchNormal</span>
        </div>
      </div>
    </section>

    <!-- Section 2: Contrôles -->
    <section>
      <h2>2️⃣ Contrôles</h2>
      
      <div class="controls">
        <div class="control">
          <label>Variant:</label>
          <select v-model="selectedVariant">
            <option v-for="v in iconVariants" :key="v" :value="v">{{ v }}</option>
          </select>
        </div>
        
        <div class="control">
          <label>Size: {{ selectedSize }}px</label>
          <input type="range" v-model.number="selectedSize" min="16" max="64" />
        </div>
        
        <div class="control">
          <label>Color:</label>
          <input type="color" v-model="selectedColor" />
          <span>{{ selectedColor }}</span>
        </div>
      </div>
    </section>

    <!-- Section 3: Import dynamique -->
    <section>
      <h2>3️⃣ Import Dynamique (IsIcon)</h2>
      <p class="code">&lt;IsIcon name="home" variant="bold" /&gt;</p>
      
      <div class="dynamic-demo">
        <div class="icon-selector">
          <label>Icône:</label>
          <select v-model="dynamicIconName">
            <option v-for="name in iconNames" :key="name" :value="name">{{ name }}</option>
          </select>
        </div>
        
        <div class="icon-preview">
          <IsIcon 
            :name="dynamicIconName" 
            :variant="selectedVariant" 
            :size="64" 
            :color="selectedColor" 
          />
        </div>
      </div>
    </section>

    <!-- Section 4: Tous les variants -->
    <section>
      <h2>4️⃣ Tous les Variants</h2>
      
      <div class="variants-grid">
        <div v-for="variant in iconVariants" :key="variant" class="variant-card">
          <IsHome :variant="variant" :size="48" :color="selectedColor" />
          <span>{{ variant }}</span>
        </div>
      </div>
    </section>

    <!-- Section 5: Menu simulé -->
    <section>
      <h2>5️⃣ Exemple: Menu avec icônes dynamiques</h2>
      
      <nav class="demo-menu">
        <a 
          v-for="item in menuItems" 
          :key="item.icon" 
          href="#"
          class="menu-item"
        >
          <IsIcon :name="item.icon" :variant="selectedVariant" :size="20" />
          <span>{{ item.label }}</span>
        </a>
      </nav>
    </section>

    <!-- Section 6: Types TypeScript -->
    <section>
      <h2>6️⃣ Types TypeScript</h2>
      
      <div class="types-info">
        <div class="type-box">
          <h4>IconName</h4>
          <code>{{ iconNames.join(' | ') }}</code>
        </div>
        <div class="type-box">
          <h4>IconVariant</h4>
          <code>{{ iconVariants.join(' | ') }}</code>
        </div>
      </div>
    </section>

    <footer>
      <p>✅ Si tu vois les icônes ci-dessus, le package fonctionne !</p>
      <p>📦 @ratoufa/iconsax-vue v1.0.0</p>
    </footer>
  </div>
</template>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

header {
  text-align: center;
  margin-bottom: 3rem;
}

header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

header p {
  color: #94a3b8;
}

section {
  background: #1e293b;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
}

.code {
  background: #0f172a;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  color: #a5b4fc;
  margin-bottom: 1rem;
}

.icons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
}

.icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #0f172a;
  border-radius: 8px;
  transition: transform 0.2s;
}

.icon-card:hover {
  transform: scale(1.05);
}

.icon-card span {
  font-size: 0.75rem;
  color: #94a3b8;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.control {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.control label {
  color: #94a3b8;
  min-width: 80px;
}

.control select,
.control input[type="range"] {
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #334155;
  background: #0f172a;
  color: #e2e8f0;
}

.control input[type="color"] {
  width: 40px;
  height: 32px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.dynamic-demo {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.icon-selector select {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  border: 1px solid #334155;
  background: #0f172a;
  color: #e2e8f0;
  font-size: 1rem;
}

.icon-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: #0f172a;
  border-radius: 12px;
}

.variants-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
}

.variant-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  background: #0f172a;
  border-radius: 8px;
}

.variant-card span {
  font-size: 0.7rem;
  color: #94a3b8;
}

.demo-menu {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 200px;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: #0f172a;
  border-radius: 8px;
  color: #e2e8f0;
  text-decoration: none;
  transition: background 0.2s;
}

.menu-item:hover {
  background: #334155;
}

.types-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.type-box {
  background: #0f172a;
  padding: 1rem;
  border-radius: 8px;
}

.type-box h4 {
  color: #a5b4fc;
  margin-bottom: 0.5rem;
}

.type-box code {
  font-size: 0.75rem;
  color: #94a3b8;
  word-break: break-all;
}

footer {
  text-align: center;
  margin-top: 3rem;
  color: #64748b;
}

footer p {
  margin: 0.5rem 0;
}

@media (max-width: 600px) {
  .variants-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .types-info {
    grid-template-columns: 1fr;
  }
}
</style>

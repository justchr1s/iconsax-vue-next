<script setup lang="ts">
import { ref, computed } from 'vue'
import { IsIcon, iconNames, iconVariants } from '@ratoufa/iconsax-vue'
import type { IconName, IconVariant } from '@ratoufa/iconsax-vue'

const searchQuery = ref('')
const selectedVariant = ref<IconVariant>('linear')
const selectedSize = ref(24)
const selectedColor = ref('currentColor')
const copiedIcon = ref<string | null>(null)
const hoveredIcon = ref<string | null>(null)

const colorPresets = [
  { name: 'Default', value: 'currentColor' },
  { name: 'White', value: '#ffffff' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Green', value: '#22c55e' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Indigo', value: '#6366f1' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
]

const filteredIcons = computed(() => {
  if (!searchQuery.value.trim()) return iconNames
  const q = searchQuery.value.toLowerCase()
  return iconNames.filter(name => name.includes(q))
})

const copyCode = (name: IconName) => {
  const pascal = name
    .split('-')
    .map(s => s[0].toUpperCase() + s.slice(1))
    .join('')
  navigator.clipboard.writeText(`<Is${pascal} />`)
  copiedIcon.value = name
  setTimeout(() => (copiedIcon.value = null), 1200)
}
</script>

<template>
  <div class="layout">
    <nav class="topbar">
      <div class="logo">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="url(#g1)" />
          <path d="M7 12h10M12 7v10" stroke="#fff" stroke-width="2" stroke-linecap="round" />
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="24" y2="24">
              <stop stop-color="#6366f1" />
              <stop offset="1" stop-color="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
        <span>iconsax-vue</span>
      </div>

      <div class="search-wrapper">
        <IsIcon
          name="search-normal"
          variant="linear"
          :size="16"
          color="currentColor"
          class="search-icon"
        />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Rechercher parmi 946 icônes..."
          class="search"
        />
        <kbd v-if="!searchQuery">/</kbd>
      </div>

      <a href="https://github.com/Ratoufa/iconsax-vue-next" target="_blank" class="github-link">
        <IsIcon name="code" variant="linear" :size="18" color="currentColor" />
        <span>GitHub</span>
      </a>
    </nav>

    <div class="content">
      <aside class="sidebar">
        <section>
          <h3>Style</h3>
          <div class="variant-grid">
            <button
              v-for="v in iconVariants"
              :key="v"
              @click="selectedVariant = v"
              :class="['variant-chip', { active: selectedVariant === v }]"
            >
              <IsIcon name="home" :variant="v" :size="18" color="currentColor" />
              {{ v }}
            </button>
          </div>
        </section>

        <section>
          <h3>Taille</h3>
          <div class="size-picker">
            <button
              v-for="s in [16, 20, 24, 32]"
              :key="s"
              @click="selectedSize = s"
              :class="['size-btn', { active: selectedSize === s }]"
            >
              {{ s }}
            </button>
          </div>
        </section>

        <section>
          <h3>Couleur</h3>
          <div class="color-picker">
            <button
              v-for="c in colorPresets"
              :key="c.value"
              @click="selectedColor = c.value"
              :class="['color-btn', { active: selectedColor === c.value }]"
              :style="{ '--color': c.value === 'currentColor' ? 'var(--text)' : c.value }"
              :title="c.name"
            >
              <span class="color-swatch"></span>
            </button>
          </div>
        </section>

        <section class="preview-section" v-if="hoveredIcon">
          <h3>Aperçu</h3>
          <div class="preview-card">
            <IsIcon
              :name="hoveredIcon"
              :variant="selectedVariant"
              :size="48"
              :color="selectedColor"
            />
            <div class="preview-info">
              <span class="preview-name">{{ hoveredIcon }}</span>
              <code class="preview-code"
                >&lt;Is{{
                  hoveredIcon
                    .split('-')
                    .map(s => s[0].toUpperCase() + s.slice(1))
                    .join('')
                }}
                /&gt;</code
              >
            </div>
          </div>
        </section>

        <section class="install-section">
          <h3>Installation</h3>
          <div class="code-box">
            <code>pnpm add @ratoufa/iconsax-vue</code>
          </div>
        </section>
      </aside>

      <main class="main">
        <div class="grid-header">
          <span class="count">{{ filteredIcons.length }} icônes</span>
          <span class="hint">Cliquer pour copier</span>
        </div>

        <div class="icon-grid">
          <button
            v-for="name in filteredIcons"
            :key="name"
            @click="copyCode(name)"
            @mouseenter="hoveredIcon = name"
            @mouseleave="hoveredIcon = null"
            :class="['icon-btn', { copied: copiedIcon === name }]"
          >
            <IsIcon
              :name="name"
              :variant="selectedVariant"
              :size="selectedSize"
              :color="selectedColor"
            />
            <span class="icon-label">{{ name }}</span>
            <span v-if="copiedIcon === name" class="copied-badge">✓</span>
          </button>
        </div>

        <div v-if="!filteredIcons.length" class="empty">
          <IsIcon name="search-status" variant="bulk" :size="32" color="currentColor" />
          <p>Aucun résultat pour "{{ searchQuery }}"</p>
        </div>
      </main>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap');

:root {
  --bg: #09090b;
  --surface: #18181b;
  --surface-2: #27272a;
  --border: #3f3f46;
  --text: #fafafa;
  --text-2: #a1a1aa;
  --text-3: #71717a;
  --accent: #6366f1;
  --accent-soft: rgba(99, 102, 241, 0.15);
  --green: #22c55e;
  --radius: 8px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Topbar */
.topbar {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 12px 24px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
  color: var(--text);
}

.search-wrapper {
  flex: 1;
  max-width: 480px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--text-3);
  pointer-events: none;
}

.search {
  width: 100%;
  padding: 10px 12px 10px 38px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  color: var(--text);
  font-size: 14px;
  font-family: inherit;
  outline: none;
  transition:
    border-color 0.15s,
    box-shadow 0.15s;
}

.search:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.search::placeholder {
  color: var(--text-3);
}

.search-wrapper kbd {
  position: absolute;
  right: 10px;
  padding: 2px 6px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 4px;
  font-family: inherit;
  font-size: 11px;
  color: var(--text-3);
}

.github-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 12px;
  color: var(--text-2);
  text-decoration: none;
  font-size: 14px;
  border-radius: var(--radius);
  transition:
    color 0.15s,
    background 0.15s;
}

.github-link:hover {
  color: var(--text);
  background: var(--surface);
}

/* Content */
.content {
  display: flex;
  flex: 1;
}

/* Sidebar */
.sidebar {
  width: 240px;
  padding: 20px;
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  top: 57px;
  height: calc(100vh - 57px);
  overflow-y: auto;
}

.sidebar h3 {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-3);
  margin-bottom: 10px;
}

.variant-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.variant-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: var(--text-2);
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  text-align: left;
}

.variant-chip:hover {
  background: var(--surface);
  color: var(--text);
}

.variant-chip.active {
  background: var(--accent-soft);
  color: var(--accent);
}

.size-picker {
  display: flex;
  gap: 6px;
}

.size-btn {
  padding: 6px 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  color: var(--text-2);
  font-size: 12px;
  font-family: 'JetBrains Mono', monospace;
  cursor: pointer;
  transition: all 0.15s;
}

.size-btn:hover {
  border-color: var(--text-3);
  color: var(--text);
}

.size-btn.active {
  background: var(--accent);
  border-color: var(--accent);
  color: white;
}

.color-picker {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.color-btn {
  width: 28px;
  height: 28px;
  padding: 3px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s;
}

.color-btn:hover {
  border-color: var(--text-3);
}

.color-btn.active {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-soft);
}

.color-swatch {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: var(--color);
}

.preview-section {
  padding: 16px;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.preview-section h3 {
  margin-bottom: 12px;
}

.preview-card {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--text);
}

.preview-info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

.preview-name {
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
}

.preview-code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  color: var(--text-3);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.install-section {
  margin-top: auto;
}

.code-box {
  padding: 10px 12px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 6px;
}

.code-box code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  color: var(--text-2);
}

/* Main */
.main {
  flex: 1;
  padding: 20px 24px;
  min-width: 0;
}

.grid-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.count {
  font-size: 13px;
  color: var(--text-2);
}

.hint {
  font-size: 12px;
  color: var(--text-3);
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(88px, 1fr));
  gap: 8px;
}

.icon-btn {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px 8px 12px;
  background: var(--surface);
  border: 1px solid transparent;
  border-radius: var(--radius);
  color: var(--text-2);
  cursor: pointer;
  transition: all 0.15s;
}

.icon-btn:hover {
  background: var(--surface-2);
  border-color: var(--border);
  color: var(--text);
}

.icon-btn.copied {
  background: rgba(34, 197, 94, 0.1);
  border-color: var(--green);
  color: var(--green);
}

.icon-label {
  font-size: 10px;
  color: var(--text-3);
  text-align: center;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon-btn:hover .icon-label {
  color: var(--text-2);
}

.copied-badge {
  position: absolute;
  top: 6px;
  right: 6px;
  font-size: 10px;
}

.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  color: var(--text-3);
  gap: 12px;
}

.empty p {
  font-size: 14px;
}

/* Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--surface-2);
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--border);
}

/* Responsive: small desktop */
@media (max-width: 1024px) {
  .sidebar {
    width: 200px;
    padding: 16px;
    gap: 20px;
  }

  .main {
    padding: 16px 20px;
  }
}

/* Responsive: tablet */
@media (max-width: 768px) {
  .topbar {
    gap: 12px;
    padding: 10px 16px;
  }

  .logo span {
    display: none;
  }

  .github-link {
    padding: 8px;
  }

  .github-link span {
    display: none;
  }

  .search-wrapper {
    max-width: none;
  }

  .content {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    position: static;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 16px;
    gap: 16px;
    overflow-y: visible;
  }

  .variant-grid {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 6px;
  }

  .variant-chip {
    padding: 6px 10px;
    font-size: 12px;
  }

  .preview-section {
    display: none;
  }

  .install-section {
    display: none;
  }

  .main {
    padding: 16px;
  }

  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(76px, 1fr));
    gap: 6px;
  }

  .icon-btn {
    padding: 12px 6px 10px;
  }
}

/* Responsive: mobile */
@media (max-width: 480px) {
  .topbar {
    gap: 8px;
    padding: 8px 12px;
  }

  .search-wrapper kbd {
    display: none;
  }

  .search {
    padding: 8px 10px 8px 34px;
    font-size: 13px;
  }

  .sidebar {
    padding: 12px;
    gap: 12px;
  }

  .sidebar h3 {
    margin-bottom: 6px;
  }

  .variant-grid {
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    gap: 4px;
  }

  .variant-grid::-webkit-scrollbar {
    display: none;
  }

  .variant-chip {
    gap: 6px;
    padding: 5px 8px;
    font-size: 11px;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .size-picker {
    gap: 4px;
  }

  .size-btn {
    padding: 5px 10px;
    font-size: 11px;
  }

  .main {
    padding: 12px;
  }

  .icon-grid {
    grid-template-columns: repeat(auto-fill, minmax(68px, 1fr));
    gap: 4px;
  }

  .icon-btn {
    padding: 10px 4px 8px;
    gap: 6px;
  }

  .icon-label {
    font-size: 9px;
  }
}
</style>

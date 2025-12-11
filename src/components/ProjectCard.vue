<!-- components/ProjectCard.vue -->
<template>
  <div 
    ref="cardRef"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="$emit('click', project)"
    class="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-sm cursor-pointer transition-transform duration-500 hover:-translate-y-2"
  >
    <!-- Spotlight Effect - Mouse Tracking Gradient -->
    <div
      class="pointer-events-none absolute -inset-px opacity-0 transition duration-500 group-hover:opacity-100 z-10"
      :style="{
        opacity: spotlightOpacity,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.1), transparent 40%)`,
      }"
    />
    
    <!-- Border Glow Effect -->
    <div 
      class="pointer-events-none absolute inset-0 z-0 transition duration-500 opacity-0 group-hover:opacity-100"
      :style="{
        background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(34, 211, 238, 0.15), transparent 40%)`
      }"
    />

    <!-- Image Container -->
    <div class="relative h-64 w-full overflow-hidden z-20">
      <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
      <img 
        :src="project.image" 
        :alt="project.title" 
        class="h-full w-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110 group-hover:rotate-1" 
      />
      
      <!-- Tech Stack - Floating Pills -->
      <div class="absolute top-4 right-4 z-20 flex flex-wrap justify-end gap-2 opacity-0 transform translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
        <span 
          v-for="tech in project.tech.slice(0, 3)" 
          :key="tech"
          class="px-2.5 py-1 text-[10px] uppercase tracking-wider font-bold text-cyan-200 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-full shadow-lg"
        >
          {{ tech }}
        </span>
      </div>
    </div>
    
    <!-- Content -->
    <div class="relative flex flex-col flex-grow p-8 z-20">
      <div class="flex items-start justify-between mb-4">
        <h3 class="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
          {{ project.title }}
        </h3>
        <a 
          v-if="project.github"
          :href="project.github" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full transition-all" 
          @click.stop
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </div>
      
      <p class="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
        {{ project.description }}
      </p>
      
      <div class="flex items-center gap-3 pt-4 border-t border-slate-800/50 mt-auto">
        <span class="text-sm font-semibold text-cyan-400 opacity-90 group-hover:opacity-100 transition-opacity">
          {{ t.viewMore }}
        </span>
        <div class="bg-cyan-500/10 p-1.5 rounded-full group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Project {
  id: string | number
  title: string
  description: string
  image: string
  tech: string[]
  github?: string
  link?: string
}

interface Props {
  project: Project
  t: { viewMore: string }
}

defineProps<Props>()
defineEmits<{
  click: [project: Project]
}>()

const cardRef = ref<HTMLDivElement | null>(null)
const position = ref({ x: 0, y: 0 })
const spotlightOpacity = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  if (!cardRef.value) return
  const rect = cardRef.value.getBoundingClientRect()
  position.value = { 
    x: e.clientX - rect.left, 
    y: e.clientY - rect.top 
  }
}

const handleMouseEnter = () => {
  spotlightOpacity.value = 1
}

const handleMouseLeave = () => {
  spotlightOpacity.value = 0
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
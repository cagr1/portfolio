<!-- components/TechStack.vue -->
<template>
  <section id="tech" class="py-24 px-6 relative">
    <div class="container mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {{ t.tech.title }}
      </h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        <div v-for="(tech, index) in technologies" :key="tech.name" 
             class="group relative flex flex-col items-center gap-4 p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer animate-fade-in-up tech-icon-container"
             :style="{ animationDelay: `${index * 0.1}s` }">
          <!-- Enhanced Glow effect on hover -->
          <div class="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/30 group-hover:via-blue-500/20 group-hover:to-purple-500/30 transition-all duration-500 blur-xl group-hover:blur-2xl tech-glow"></div>
          
          <!-- Icon with enhanced glow animation -->
          <div class="relative z-10 text-6xl transform transition-all duration-500 tech-icon" :class="tech.color">
            <Icon :icon="tech.icon" width="64" height="64" />
          </div>
          
          <!-- Tech name -->
          <span class="relative z-10 text-sm font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
            {{ tech.name }}
          </span>
          
          <!-- Enhanced animated border on hover -->
          <div class="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div class="absolute inset-0 rounded-xl border-2 border-cyan-500/70 animate-pulse-border"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  t: Object,
  technologies: Array
})
</script>
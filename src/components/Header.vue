<!-- components/Header.vue -->
<template>
  <nav class="fixed top-0 left-0 right-0 z-40 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 transition-all duration-500" :class="{ 'shadow-lg shadow-cyan-500/5': scrolled }">
    <div class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          {{ logo }}
        </a>
        <div class="hidden md:flex gap-8">
          <a v-for="item in navItems" :key="item.href" :href="item.href" 
             class="text-slate-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 relative group">
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  scrolled: Boolean,
  logo: {
    type: String,
    default: 'Dev.Portfolio'
  },
  navItems: {
    type: Array,
    default: () => []
  }
})
</script>
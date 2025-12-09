<!-- components/ProjectModal.vue -->
<template>
  <Transition name="modal">
    <div v-if="selectedProject" 
         @click="closeModal"
         class="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div @click.stop 
           class="relative max-w-4xl w-full bg-slate-800/90 backdrop-blur-xl rounded-3xl border border-slate-700/50 overflow-hidden shadow-2xl shadow-cyan-500/20 animate-scale-in">
        <!-- Close button -->
        <button @click="closeModal"
                class="absolute top-6 right-6 z-10 p-3 bg-slate-900/80 backdrop-blur-sm rounded-full hover:bg-red-500/20 hover:rotate-90 transition-all duration-500 group">
          <svg class="w-6 h-6 text-slate-400 group-hover:text-red-400 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="max-h-[90vh] overflow-y-auto custom-scrollbar">
          <!-- Project image -->
          <div class="relative h-96 overflow-hidden">
            <img :src="selectedProject.image" :alt="selectedProject.title" 
                 class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-800/90 to-transparent"></div>
          </div>
          
          <!-- Content -->
          <div class="p-8 space-y-6">
            <h2 class="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {{ selectedProject.title }}
            </h2>
            
            <p class="text-lg text-slate-300 leading-relaxed">
              {{ selectedProject.description }}
            </p>
            
            <!-- Tech stack -->
            <div>
              <h3 class="text-xl font-semibold text-slate-200 mb-4">{{ t.projects.technologies }}</h3>
              <div class="flex flex-wrap gap-3">
                <span v-for="tech in selectedProject.tech" :key="tech"
                      class="px-4 py-2 bg-slate-900/50 border border-cyan-500/30 rounded-lg text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all duration-300">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <!-- Links -->
            <div class="flex gap-4 pt-4">
              <a :href="selectedProject.github" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105 group">
                <svg class="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span class="font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors duration-300">GitHub</span>
              </a>

              <a v-if="selectedProject.link" :href="selectedProject.link" target="_blank" rel="noopener noreferrer"
                 class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg hover:bg-cyan-500/30 transition-all duration-300 hover:scale-105 group">
                <svg class="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span class="font-semibold text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  selectedProject: Object,
  t: Object
})

const emit = defineEmits(['close-modal'])

const closeModal = () => {
  emit('close-modal')
}
</script>
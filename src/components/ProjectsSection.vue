<!-- components/ProjectsSection.vue -->
<template>
  <section id="projects" class="py-24 px-6">
    <div class="container mx-auto">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {{ t.projects.title }}
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(project, index) in projects" :key="project.id"
             @click="openProject(project)"
             class="group relative cursor-pointer animate-fade-in-up"
             :style="{ animationDelay: `${index * 0.15}s` }">
          <!-- Project Card - Versión simplificada sin componente separado -->
          <div class="relative h-full rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 overflow-hidden transition-all duration-700 hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500/50">
            <!-- Animated gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-purple-500/10 transition-all duration-700"></div>
            
            <!-- Project image -->
            <div class="relative h-48 overflow-hidden">
              <img :src="project.image" :alt="project.title" 
                   class="w-full h-full object-cover transform group-hover:scale-125 group-hover:rotate-2 transition-all duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              
              <!-- Tech badges floating on image -->
              <div class="absolute top-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <span v-for="tech in project.tech.slice(0, 3)" :key="tech"
                      class="px-3 py-1 bg-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-full text-xs font-semibold text-cyan-400 animate-bounce-in">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <!-- Content -->
            <div class="relative p-6 space-y-4">
              <h3 class="text-2xl font-bold text-slate-200 group-hover:text-cyan-400 transition-colors duration-300">
                {{ project.title }}
              </h3>
              <p class="text-slate-400 leading-relaxed line-clamp-3">
                {{ project.description }}
              </p>
              
              <!-- View more indicator -->
              <div class="flex items-center gap-2 text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span>{{ t.projects.viewMore }}</span>
                <svg class="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            
            <!-- Shine effect on hover -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  t: Object,
  projects: Array
})

const emit = defineEmits(['open-project'])

const openProject = (project) => {
  emit('open-project', project)
}
</script>
<template>
  <section class="relative w-full bg-slate-950 py-32 overflow-hidden" id="projects">
    <!-- Tu decoración existente -->
    
    <div class="container relative mx-auto px-6 z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-white ">
        {{ t.projects.title }}
      </h2>
      
      <!-- Projects Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        <ProjectCard 
          v-for="project in projects"
          :key="project.id"
          :project="project" 
          :t="t.projects"
          @click="openProject"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

defineProps({
  t: Object,
  projects: Array
})

const emit = defineEmits(['open-project'])

const openProject = (project) => {
  emit('open-project', project)
}
</script>
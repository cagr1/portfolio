<template>
  <section class="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20 px-6">
    <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- Left Column: Text Content -->
      <div class="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
        
        <!-- Animated Intro Elements -->
        <div class="space-y-4">
          <div
            ref="greetingRef"
            class="flex items-center justify-center lg:justify-start gap-2 text-cyan-400 font-mono text-sm md:text-base tracking-wide bg-cyan-950/30 w-fit px-3 py-1 rounded-full border border-cyan-500/20 mx-auto lg:mx-0"
          >
            <Icon icon="mdi:console" width="16" height="16" />
            <span>{{ t.hero.greeting }}</span>
          </div>

          <h1
            ref="nameRef"
            class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
          >
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">
              {{ t.hero.name }}
            </span>
          </h1>

          <h2
            ref="titleRef"
            class="text-2xl md:text-3xl lg:text-4xl font-light text-slate-400"
          >
            {{ t.hero.title }}
          </h2>
        </div>

        <p
          ref="descRef"
          class="text-lg text-slate-400 max-w-lg leading-relaxed"
        >
          {{ t.hero.description }}
        </p>

        <!-- Action Buttons -->
        <div
          ref="buttonsRef"
          class="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
        >
          <a 
            href="#projects" 
            class="group relative px-8 py-4 bg-white text-slate-950 rounded-full font-bold shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-shadow duration-300 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ t.hero.cta }}
              <Icon icon="mdi:arrow-right" width="16" height="16" class="group-hover:translate-x-1 transition-transform" />
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </a>
          
          <a 
            href="#contact" 
            class="group px-8 py-4 rounded-full font-semibold text-white border border-slate-700 hover:border-slate-500 bg-slate-900/50 backdrop-blur-sm transition-colors flex items-center gap-2"
          >
            {{ t.hero.contact }}
            <Icon icon="mdi:email-outline" width="16" height="16" class="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <!-- Social Icons: GitHub y LinkedIn -->
        <div
          ref="socialsRef"
          class="pt-8 flex items-center gap-6 text-slate-500"
        >
          <a 
            href="https://github.com/cagr1" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-white transition-colors cursor-pointer"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" width="24" height="24" />
          </a>
          <a 
            href="https://linkedin.com/in/carlos-gallardo-5282a0121/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="hover:text-white transition-colors cursor-pointer"
            aria-label="LinkedIn"
          >
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </a>
          <div class="h-4 w-[1px] bg-slate-700" />
          <span class="text-sm font-mono">{{ t.hero.techStack }}</span>
        </div>

      </div>

      <!-- Right Column: 3D Code Card -->
      <div class="order-1 lg:order-2 flex justify-center items-center">
        <CodeCard :code-string="t.hero.codeSnippet" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'
import CodeCard from './CodeCard.vue'

defineProps({
  t: Object
})

// Refs para animaciones
const greetingRef = ref(null)
const nameRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)
const buttonsRef = ref(null)
const socialsRef = ref(null)

onMounted(() => {
  // Animaciones de entrada con GSAP
  const timeline = gsap.timeline()
  
  timeline
    .from(greetingRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    })
    .from(nameRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .from(titleRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .from(descRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .from(buttonsRef.value, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .from(socialsRef.value, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    }, '-=0.2')
})
</script>

<style scoped>
.perspective-container {
  perspective: 1200px;
}
</style>
<template>
  <section 
    ref="containerRef"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    id="home" 
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-20"
  >
    <!-- 1. Dynamic Background Grid with Spotlight -->
    <div class="absolute inset-0 z-0">
      <!-- Base Grid -->
      <div 
        class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" 
      />
      
      <!-- Spotlight Overlay -->
      <div 
        class="absolute inset-0 pointer-events-none transition-opacity duration-300"
        :style="{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.1), transparent 40%)`
        }"
      />
    </div>

    <div class="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      <!-- 2. Text Content -->
      <div class="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
        <div
          class="animate-fade-in-up"
          style="animation-delay: 0s"
        >
          <h2 class="text-xl md:text-2xl font-mono text-cyan-400 font-medium mb-4">
            {{ t.hero.greeting }}
          </h2>
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2">
            <span class="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {{ t.hero.name }}
            </span>
          </h1>
          <div class="h-12 md:h-16 overflow-hidden">
            <h3 
              class="text-2xl md:text-4xl text-slate-400 font-light animate-fade-in"
              style="animation-delay: 0.3s"
            >
              {{ t.hero.title }}
            </h3>
          </div>
        </div>

        <p 
          class="text-lg text-slate-400 max-w-lg leading-relaxed animate-fade-in"
          style="animation-delay: 0.5s"
        >
          {{ t.hero.description }}
        </p>

        <div 
          class="flex flex-wrap gap-4 justify-center lg:justify-start pt-4 animate-fade-in-up"
          style="animation-delay: 0.7s"
        >
          <a 
            href="#projects" 
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 overflow-hidden"
          >
            <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span class="relative flex items-center gap-2">
              {{ t.hero.cta }} 
              <Icon icon="lucide:arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a 
            href="#contact" 
            class="group relative px-8 py-4 rounded-full font-semibold text-slate-300 bg-slate-900/50 border border-slate-700 hover:text-white overflow-hidden transition-colors"
          >
            <span class="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span class="relative flex items-center gap-2">
              {{ t.hero.contact }}
              <Icon icon="lucide:mail" class="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>

      <!-- 3. 3D Visual Element -->
      <div class="order-1 lg:order-2 flex justify-center items-center" style="perspective: 1000px">
        <div
          :style="{ 
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transformStyle: 'preserve-3d'
          }"
          class="relative w-[300px] h-[340px] md:w-[400px] md:h-[450px] transition-transform duration-100 ease-out"
        >
          <!-- Layer 1: Back Glow -->
          <div 
            class="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-600/30 rounded-[3rem] blur-3xl -z-10" 
            style="transform: translateZ(-50px)"
          />

          <!-- Layer 2: Main Glass Card -->
          <div 
            class="absolute inset-0 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden"
            style="transform: translateZ(0px)"
          >
            <!-- Window Header -->
            <div class="h-10 border-b border-slate-700/50 bg-slate-800/50 flex items-center px-4 gap-2">
              <div class="w-3 h-3 rounded-full bg-red-500/80" />
              <div class="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div class="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            
            <!-- Code Content -->
            <div class="p-6 md:p-8 font-mono text-sm md:text-base text-slate-300 space-y-2 relative">
              <div class="absolute top-0 right-0 p-8 opacity-10">
                <Icon :icon="techIcons[0]" class="w-32 h-32" />
              </div>
              
              <p><span class="text-purple-400">const</span> <span class="text-cyan-400">developer</span> = <span class="text-yellow-400">{</span></p>
              <p class="pl-4">name: <span class="text-green-400">'{{ t.hero.name }}'</span>,</p>
              <p class="pl-4">skills: <span class="text-blue-400">['React', 'Vue', 'AI']</span>,</p>
              <p class="pl-4">hardWorker: <span class="text-orange-400">true</span>,</p>
              <p class="pl-4">problemSolver: <span class="text-orange-400">true</span>,</p>
              <p class="pl-4">hireable: <span class="text-orange-400">function</span>() <span class="text-yellow-400">{</span></p>
              <p class="pl-8"><span class="text-purple-400">return</span> <span class="text-green-400">'Ready to work!'</span>;</p>
              <p class="pl-4"><span class="text-yellow-400">}</span></p>
              <p><span class="text-yellow-400">}</span>;</p>

              <div class="pt-4 flex gap-2">
                <span class="animate-pulse w-3 h-6 bg-cyan-400 block"></span>
              </div>
            </div>
          </div>

          <!-- Layer 3: Floating Elements (Parallax) -->
          <div
            v-for="(icon, i) in techIcons"
            :key="i"
            :style="{ 
              transform: `translateZ(${60 + (i * 20)}px)`,
              animation: `float-${i} 4s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }"
            :class="[
              'absolute w-12 h-12 md:w-16 md:h-16 rounded-xl bg-slate-800/80 backdrop-blur-xl border border-slate-600/50 flex items-center justify-center shadow-lg',
              i === 0 ? '-top-6 -right-6' : '',
              i === 1 ? 'top-1/2 -right-8' : '',
              i === 2 ? '-bottom-6 -left-6' : '',
              i === 3 ? 'top-20 -left-8' : ''
            ]"
          >
            <Icon :icon="icon" class="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  t: {
    type: Object,
    required: true
  }
})

// Iconos usando Iconify (puedes cambiarlos por los que prefieras)
const techIcons = [
  'logos:vue',
  'logos:dotnet',
  'logos:javascript',
  'logos:tailwindcss-icon'
]

const containerRef = ref(null)
const mousePosition = ref({ x: 0, y: 0 })
const rotateX = ref(0)
const rotateY = ref(0)

const handleMouseMove = (e) => {
  if (!containerRef.value) return
  
  const rect = containerRef.value.getBoundingClientRect()
  const clientX = e.clientX
  const clientY = e.clientY

  // Calculate relative mouse position for spotlight
  mousePosition.value = {
    x: clientX - rect.left,
    y: clientY - rect.top
  }

  // Calculate normalized position for 3D tilt (-0.5 to 0.5)
  const width = rect.width
  const height = rect.height
  const mouseX = (clientX - rect.left) / width - 0.5
  const mouseY = (clientY - rect.top) / height - 0.5

  // Apply smooth rotation (simulating spring effect with CSS transition)
  rotateY.value = mouseX * 30 // -15 to 15 degrees
  rotateX.value = -mouseY * 30 // -15 to 15 degrees
}

const handleMouseLeave = () => {
  rotateX.value = 0
  rotateY.value = 0
}
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes float-0 {
  0%, 100% {
    transform: translateY(0) rotate(0deg) translateZ(60px);
  }
  50% {
    transform: translateY(-10px) rotate(5deg) translateZ(60px);
  }
}

@keyframes float-1 {
  0%, 100% {
    transform: translateY(0) rotate(0deg) translateZ(80px);
  }
  50% {
    transform: translateY(-10px) rotate(5deg) translateZ(80px);
  }
}

@keyframes float-2 {
  0%, 100% {
    transform: translateY(0) rotate(0deg) translateZ(100px);
  }
  50% {
    transform: translateY(-10px) rotate(5deg) translateZ(100px);
  }
}

@keyframes float-3 {
  0%, 100% {
    transform: translateY(0) rotate(0deg) translateZ(120px);
  }
  50% {
    transform: translateY(-10px) rotate(5deg) translateZ(120px);
  }
}
</style>
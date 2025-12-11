<template>
  <div 
    class="relative w-full max-w-[500px] h-[500px] flex items-center justify-center"
    style="perspective: 1200px"
  >
    <div
      ref="cardRef"
      @mousemove="handleMouseMove"
      @mouseleave="handleMouseLeave"
      class="relative w-full h-[420px] rounded-3xl bg-slate-900/40 border border-slate-700/50 backdrop-blur-xl shadow-2xl"
      :style="cardStyle"
    >
      <!-- Glow Effect behind card -->
      <div 
        class="absolute -inset-10 bg-gradient-to-tr from-cyan-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl -z-10 opacity-60"
        style="transform: translateZ(-50px)"
      />

      <!-- Layer 1: Window Frame -->
      <div class="absolute inset-0 rounded-3xl overflow-hidden flex flex-col">
        <!-- Header -->
        <div class="h-12 bg-slate-800/50 border-b border-white/5 flex items-center justify-between px-4">
          <div class="flex items-center gap-2">
            <div class="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
            <div class="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
            <div class="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>
          <div class="text-xs font-mono text-slate-500 flex items-center gap-2">
            <Icon icon="mdi:code-tags" width="12" height="12" />
            developer.js
          </div>
          <div class="flex gap-2 text-slate-600">
            <Icon icon="mdi:minus" width="12" height="12" />
            <Icon icon="mdi:window-maximize" width="12" height="12" />
            <Icon icon="mdi:close" width="12" height="12" />
          </div>
        </div>
        
        <!-- Code Body -->
        <div class="flex-1 p-6 font-mono text-sm leading-relaxed text-slate-300 relative overflow-hidden bg-slate-950/30">
          <!-- Line Numbers -->
          <div class="absolute left-4 top-6 bottom-6 w-6 text-right text-slate-700 select-none border-r border-slate-800 pr-2 flex flex-col gap-[2px] font-mono text-xs">
            <span v-for="i in lineCount" :key="i">{{ i }}</span>
          </div>

          <div class="pl-8 whitespace-pre-wrap relative z-10">
            <span v-html="highlightedCode" />
            <span class="inline-block w-2 h-4 bg-cyan-400 align-middle animate-pulse ml-1" />
          </div>
          
          <!-- Scanline Effect -->
          <div class="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none animate-scan" />
        </div>
      </div>

      <!-- Layer 2: Floating Badges -->
      <div 
        :style="{ transform: `translateZ(${parallaxZ1}px)` }"
        class="absolute -right-8 top-10 p-3 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-600/50 shadow-xl flex items-center gap-3"
      >
        <div class="p-2 rounded-lg bg-cyan-500/20 text-cyan-400">
          <Icon icon="mdi:web" width="24" height="24" />
        </div>
        <div class="flex flex-col">
          <span class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Status</span>
          <span class="text-sm font-semibold text-white">Online</span>
        </div>
      </div>

      <div 
        :style="{ transform: `translateZ(${parallaxZ2}px)` }"
        class="absolute -left-6 bottom-20 p-3 rounded-2xl bg-slate-800/80 backdrop-blur-md border border-slate-600/50 shadow-xl flex items-center gap-3"
      >
        <div class="p-2 rounded-lg bg-purple-500/20 text-purple-400">
          <Icon icon="mdi:flash" width="24" height="24" />
        </div>
        <div class="flex flex-col">
          <span class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-2">Performance</span>
          <span class="text-sm font-semibold text-white">100%</span>
        </div>
      </div>

      <div
        :style="{ transform: `translateZ(${parallaxZ3}px)` }"
        class="absolute bottom-[-20px] right-8"
      >
        <div class="relative group">
          <div class="absolute inset-0 bg-cyan-500 blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
          <div class="relative w-16 h-16 bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-center">
            <Icon icon="heroicons-outline:chip" width="32" height="32" class="text-white" />
          </div>
        </div>
      </div>

      <!-- Layer 3: Particle Decor -->
      <div 
        style="transform: translateZ(30px)"
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
      >
        <div class="absolute top-0 right-0 w-2 h-2 bg-white rounded-full opacity-50 shadow-[0_0_10px_white]" />
        <div class="absolute bottom-10 left-10 w-1 h-1 bg-cyan-400 rounded-full opacity-70" />
        <div class="absolute top-20 left-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { gsap } from 'gsap'

const props = defineProps({
  codeString: {
    type: String,
    default: `const developer = {
  name: 'Carlos Gallardo',
  skills: ['Vue', 'JS', '3D'],
  hardWorker: true,
  problemSolver: true,
  hireable: function() {
    return this.hardWorker && 
           this.problemSolver;
  }
};`
  }
})

const cardRef = ref(null)
const rotateX = ref(0)
const rotateY = ref(0)
const parallaxZ1 = ref(60)
const parallaxZ2 = ref(80)
const parallaxZ3 = ref(40)

// Efecto de escritura
const typedText = ref('')
const lineCount = computed(() => {
  return props.codeString.split('\n').length
})

const cardStyle = computed(() => ({
  transformStyle: 'preserve-3d',
  transform: `rotateX(${rotateX.value}deg) rotateY(${rotateY.value}deg)`
}))

const highlightedCode = computed(() => {
  return typedText.value
    .replace(/const|function|return|this/g, '<span class="text-purple-400 font-bold">$&</span>')
    .replace(/'[^']*'/g, '<span class="text-green-400">$&</span>')
    .replace(/true|false/g, '<span class="text-orange-400">$&</span>')
    .replace(/developer|name|skills|hardWorker|problemSolver|hireable/g, '<span class="text-cyan-300">$&</span>')
})

const handleMouseMove = (e) => {
  if (!cardRef.value) return
  
  const rect = cardRef.value.getBoundingClientRect()
  const width = rect.width
  const height = rect.height
  
  const mouseX = e.clientX - rect.left
  const mouseY = e.clientY - rect.top
  
  const xPct = (mouseX / width - 0.5) * 2
  const yPct = (mouseY / height - 0.5) * 2
  
  // Smooth animation con GSAP - actualizar los valores ref directamente
  gsap.to(rotateX, {
    value: -yPct * 15,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(rotateY, {
    value: xPct * 15,
    duration: 0.5,
    ease: 'power2.out'
  })

  // Parallax para badges
  gsap.to(parallaxZ1, {
    value: 60 + yPct * 10,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(parallaxZ2, {
    value: 80 + yPct * 20,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(parallaxZ3, {
    value: 40 + yPct * 10,
    duration: 0.5,
    ease: 'power2.out'
  })
}

const handleMouseLeave = () => {
  gsap.to(rotateX, {
    value: 0,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(rotateY, {
    value: 0,
    duration: 0.5,
    ease: 'power2.out'
  })

  gsap.to(parallaxZ1, {
    value: 60,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(parallaxZ2, {
    value: 80,
    duration: 0.5,
    ease: 'power2.out'
  })
  
  gsap.to(parallaxZ3, {
    value: 40,
    duration: 0.5,
    ease: 'power2.out'
  })
}

onMounted(() => {
  // Efecto typewriter
  let i = 0
  const typing = setInterval(() => {
    typedText.value = props.codeString.slice(0, i)
    i++
    if (i > props.codeString.length) clearInterval(typing)
  }, 30)
})
</script>

<style scoped>
@keyframes scan {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

.animate-scan {
  animation: scan 4s linear infinite;
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
</style>
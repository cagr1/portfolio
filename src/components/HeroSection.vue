<template>
  <section id="home" class="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" @mousemove="handleMouseMove">
    <!-- Background Blob -->
    <div 
      class="absolute w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none transition-transform duration-100 ease-out"
      :style="{ transform: `translate(${blobX}px, ${blobY}px)` }"
    ></div>

    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
      <!-- Text Content -->
      <div class="text-center md:text-left space-y-6">
        <h2 class="text-2xl md:text-3xl text-cyan-400 font-medium animate-fade-in-delay-1">
          {{ t.hero.greeting }}
        </h2>
        <h1 class="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 tracking-tight animate-fade-in-delay-2 pb-2">
          {{ t.hero.name }}
        </h1>
        <h3 class="text-2xl md:text-4xl text-slate-400 font-light animate-fade-in-delay-3">
          {{ t.hero.title }}
        </h3>
        
        <!-- Buttons -->
        <div class="flex flex-wrap gap-4 justify-center md:justify-start pt-8 animate-fade-in-delay-4">
          <a href="#projects" class="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:-translate-y-1 transition-all duration-300">
            {{ t.hero.cta }}
          </a>
          <a href="#contact" class="relative px-8 py-3 rounded-full font-semibold text-slate-300 group overflow-hidden bg-slate-950 transition-all duration-300 hover:text-white">
            <span class="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span class="absolute inset-[2px] bg-slate-950 rounded-full z-10"></span>
            <span class="relative z-20 flex items-center gap-2">
              {{ t.hero.contact }}
            </span>
            <!-- Animated Border -->
            <span class="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 -z-10 opacity-50 group-hover:opacity-100 animate-gradient-border"></span>
          </a>
        </div>
      </div>

      <!-- 3D Symbol Container -->
      <div class="flex justify-center items-center perspective-container animate-fade-in-delay-2">
        <div 
          class="symbol-3d-wrapper"
          :style="{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }"
        >
          <div class="symbol-content">
            <span class="text-7xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-white to-purple-500 filter drop-shadow-lg">
              {&lt;/&gt;}
            </span>
          </div>
          <!-- Glow behind symbol -->
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur-2xl -z-10 rounded-full"></div>
        </div>
      </div>
    </div>

    
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  t: {
    type: Object,
    required: true
  }
})

const blobX = ref(0)
const blobY = ref(0)
const rotateX = ref(0)
const rotateY = ref(0)

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  
  // Blob movement (laggy follow)
  blobX.value = (clientX - innerWidth / 2) * 0.1
  blobY.value = (clientY - innerHeight / 2) * 0.1
  
  // 3D Rotation
  const x = (clientX - innerWidth / 2) / (innerWidth / 2)
  const y = (clientY - innerHeight / 2) / (innerHeight / 2)
  
  rotateY.value = x * 20 // Max 20deg rotation
  rotateX.value = -y * 20
}
</script>

<style scoped>
.perspective-container {
  perspective: 1000px;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.symbol-3d-wrapper {
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 25px 50px -12px rgba(0, 0, 0, 0.5),
    inset 0 0 20px rgba(255, 255, 255, 0.05);
}

.symbol-3d-wrapper::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 32px;
  background: linear-gradient(45deg, #06b6d4, #a855f7);
  z-index: -1;
  opacity: 0.5;
  filter: blur(10px);
}

.symbol-content {
  transform: translateZ(50px);
}
</style>

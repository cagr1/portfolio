<template>
  <div class="fixed inset-0 z-0 overflow-hidden bg-slate-950" style="perspective: 2000px;">
    
    <!-- 1. Deep Space Base Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-[#0B1121] to-slate-950" />
    
    <!-- 2. Retro-Futuristic Grid Floor -->
    <div 
      class="absolute inset-0 top-[40%] bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.15]"
      style="
        transform: perspective(500px) rotateX(60deg);
        transform-origin: top center;
        mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
      "
    />

    <!-- 3. Ambient Glows (Non-intrusive) -->
    <div
      ref="glow1"
      class="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-purple-900/20 blur-[120px]"
    />
    <div
      ref="glow2"
      class="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-cyan-900/20 blur-[120px]"
    />

    <!-- 4. 3D Geometric Elements - CUBOS -->
    
    <!-- Floating Cube - Top Right -->
    <div class="absolute top-[10%] right-[5%] lg:right-[10%] opacity-40" style="perspective: 1000px;">
      <div
        ref="cube1"
        class="relative"
        :style="getCubeStyle(100)"
      >
        <div v-for="(face, i) in getCubeFaces(100, 'cyan')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Bottom Left -->
    <div class="absolute bottom-[15%] left-[5%] opacity-30" style="perspective: 1000px;">
      <div
        ref="cube2"
        class="relative"
        :style="getCubeStyle(80)"
      >
        <div v-for="(face, i) in getCubeFaces(80, 'purple')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Top Left -->
    <div class="absolute top-[20%] left-[8%] opacity-25" style="perspective: 1000px;">
      <div
        ref="cube3"
        class="relative"
        :style="getCubeStyle(60)"
      >
        <div v-for="(face, i) in getCubeFaces(60, 'purple')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Middle Right -->
    <div class="absolute top-[45%] right-[15%] opacity-30" style="perspective: 1000px;">
      <div
        ref="cube4"
        class="relative"
        :style="getCubeStyle(70)"
      >
        <div v-for="(face, i) in getCubeFaces(70, 'cyan')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Bottom Right (small) -->
    <div class="absolute bottom-[25%] right-[8%] opacity-35" style="perspective: 1000px;">
      <div
        ref="cube5"
        class="relative"
        :style="getCubeStyle(50)"
      >
        <div v-for="(face, i) in getCubeFaces(50, 'purple')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Top Center -->
    <div class="absolute top-[15%] left-[45%] opacity-20" style="perspective: 1000px;">
      <div
        ref="cube6"
        class="relative"
        :style="getCubeStyle(55)"
      >
        <div v-for="(face, i) in getCubeFaces(55, 'cyan')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Middle Left (tiny) -->
    <div class="absolute top-[60%] left-[12%] opacity-35" style="perspective: 1000px;">
      <div
        ref="cube7"
        class="relative"
        :style="getCubeStyle(45)"
      >
        <div v-for="(face, i) in getCubeFaces(45, 'cyan')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Cube - Bottom Center -->
    <div class="absolute bottom-[10%] left-[55%] opacity-25" style="perspective: 1000px;">
      <div
        ref="cube8"
        class="relative"
        :style="getCubeStyle(65)"
      >
        <div v-for="(face, i) in getCubeFaces(65, 'purple')" :key="i" :class="face.class" :style="face.style" />
      </div>
    </div>

    <!-- Floating Glassy Panels -->
    <div
      ref="panel1"
      class="absolute top-[30%] left-[10%] w-24 h-24 border border-slate-700/30 bg-slate-800/10 backdrop-blur-[2px] rounded-xl"
    />

    <div
      ref="panel2"
      class="absolute bottom-[40%] right-[10%] w-32 h-32 border border-slate-700/30 bg-slate-800/10 backdrop-blur-[2px] rounded-full"
    />

    <!-- 5. Floating Rings (Technological feel) -->
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
      <!-- Large Ring 1 -->
      <div
        ref="ring1"
        class="absolute top-[20%] right-[-10%] w-[600px] h-[600px] border border-slate-800/20 rounded-full"
        style="transform: perspective(1000px) rotateX(60deg) rotateY(-20deg)"
      />
      <!-- Large Ring 2 -->
      <div
        ref="ring2"
        class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] border border-slate-800/20 rounded-full"
        style="transform: perspective(1000px) rotateX(70deg) rotateY(20deg)"
      />
    </div>

    <!-- 6. Subtle Particles -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        v-for="particle in particles"
        :key="particle.id"
        :ref="el => particleRefs[particle.id] = el"
        class="absolute rounded-full bg-cyan-200 opacity-20"
        :style="{
          left: particle.x + '%',
          top: particle.y + '%',
          width: particle.size + 'px',
          height: particle.size + 'px'
        }"
      />
    </div>

    <!-- 7. Noise Overlay for Texture -->
    <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

const glow1 = ref(null)
const glow2 = ref(null)
const panel1 = ref(null)
const panel2 = ref(null)
const ring1 = ref(null)
const ring2 = ref(null)

// Refs para los 8 cubos
const cube1 = ref(null)
const cube2 = ref(null)
const cube3 = ref(null)
const cube4 = ref(null)
const cube5 = ref(null)
const cube6 = ref(null)
const cube7 = ref(null)
const cube8 = ref(null)

// Partículas
const particles = ref([])
const particleRefs = ref({})

let animations = []

// Función para obtener el estilo del cubo
const getCubeStyle = (size) => ({
  width: `${size}px`,
  height: `${size}px`,
  transformStyle: 'preserve-3d'
})

// Función para obtener las caras del cubo
const getCubeFaces = (size, color) => {
  const half = size / 2
  const borderColor = color === 'cyan' ? 'border-cyan-500/30' : 'border-purple-500/30'
  const bgColor = color === 'cyan' ? 'bg-cyan-500/5' : 'bg-purple-500/5'
  const shadow = color === 'cyan' 
    ? 'shadow-[0_0_20px_rgba(6,182,212,0.15)]' 
    : 'shadow-[0_0_20px_rgba(168,85,247,0.15)]'
  
  const faceClass = `absolute inset-0 border ${borderColor} ${bgColor} ${shadow} backdrop-blur-[1px]`
  
  return [
    { class: faceClass, style: { transform: `translateZ(${half}px)` } },
    { class: faceClass, style: { transform: `rotateY(180deg) translateZ(${half}px)` } },
    { class: faceClass, style: { transform: `rotateY(90deg) translateZ(${half}px)` } },
    { class: faceClass, style: { transform: `rotateY(-90deg) translateZ(${half}px)` } },
    { class: faceClass, style: { transform: `rotateX(90deg) translateZ(${half}px)` } },
    { class: faceClass, style: { transform: `rotateX(-90deg) translateZ(${half}px)` } }
  ]
}

onMounted(() => {
  // Generar partículas
  particles.value = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1
  }))

  // Animar partículas después de un pequeño delay
  setTimeout(() => {
    Object.values(particleRefs.value).forEach((particle, index) => {
      if (particle) {
        const duration = Math.random() * 20 + 10
        const delay = Math.random() * 5
        const anim = gsap.to(particle, {
          y: -40,
          opacity: 0.4,
          duration,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          delay
        })
        animations.push(anim)
      }
    })
  }, 100)

  // Animate glows
  animations.push(
    gsap.to(glow1.value, {
      opacity: 0.4,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  )

  animations.push(
    gsap.to(glow2.value, {
      opacity: 0.4,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 2
    })
  )

  // Animate panels
  animations.push(
    gsap.to(panel1.value, {
      y: -30,
      rotation: 40,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  )

  animations.push(
    gsap.to(panel2.value, {
      y: 40,
      scale: 1.05,
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 2
    })
  )

  // Animate rings
  animations.push(
    gsap.to(ring1.value, {
      rotation: 360,
      duration: 60,
      repeat: -1,
      ease: 'linear'
    })
  )

  animations.push(
    gsap.to(ring2.value, {
      rotation: -360,
      duration: 50,
      repeat: -1,
      ease: 'linear'
    })
  )

  // Animar los 8 cubos con diferentes duraciones y delays
  const cubesConfig = [
    { ref: cube1, duration: 25, delay: 0 },
    { ref: cube2, duration: 30, delay: 5 },
    { ref: cube3, duration: 35, delay: 2 },
    { ref: cube4, duration: 28, delay: 8 },
    { ref: cube5, duration: 32, delay: 3 },
    { ref: cube6, duration: 40, delay: 10 },
    { ref: cube7, duration: 38, delay: 6 },
    { ref: cube8, duration: 33, delay: 12 }
  ]

  cubesConfig.forEach(config => {
    if (config.ref.value) {
      animations.push(
        gsap.to(config.ref.value, {
          rotateX: 360,
          rotateY: 360,
          duration: config.duration,
          repeat: -1,
          ease: 'linear',
          delay: config.delay
        })
      )
    }
  })
})

onUnmounted(() => {
  // Limpiar animaciones
  animations.forEach(anim => anim.kill())
})
</script>
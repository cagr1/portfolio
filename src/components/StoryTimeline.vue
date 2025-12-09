<template>
  <section id="story" class="py-20 relative overflow-hidden bg-slate-950">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {{ t.story.title }}
      </h2>

      <div id="wrapper" class="relative">
        <div id="content" ref="timelineContainer" class="relative max-w-4xl mx-auto">
          <!-- SVG Path with particles -->
          <svg 
            ref="svgContainer"
            class="absolute top-0 left-0 w-full pointer-events-none z-10" 
            :style="{ height: svgHeight + 'px' }"
          >
            <!-- Glow effect definition -->
            <defs>
              <linearGradient id="snake-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#22d3ee" />
                <stop offset="50%" stop-color="#a855f7" />
                <stop offset="100%" stop-color="#3b82f6" />
              </linearGradient>
              
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <!-- Background Path (Static) -->
            <path 
              :d="pathString" 
              fill="none" 
              stroke="#334155" 
              stroke-width="2" 
              stroke-linecap="round"
              class="opacity-40"
            />
            
            <!-- Animated glowing path -->
            <path 
              ref="animatedPath"
              :d="pathString" 
              fill="none" 
              stroke="url(#snake-gradient)" 
              stroke-width="3" 
              stroke-linecap="round"
              filter="url(#glow)"
            />

            <!-- Particles traveling along path -->
            <circle
              v-for="i in 8"
              :key="i"
              :ref="el => { if(el) particles[i-1] = el }"
              r="3"
              fill="#22d3ee"
              filter="url(#glow)"
              class="particle"
            />
          </svg>

          <!-- Timeline Items -->
          <div class="relative z-20 space-y-32">
            <div 
              v-for="(item, index) in t.story.timeline" 
              :key="index"
              class="timeline-item relative flex flex-col md:flex-row gap-8 items-center min-h-[200px]"
              :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
            >
              <!-- Animated Dot -->
              <div 
                :ref="el => { if(el) dots[index] = el }"
                class="absolute left-0 md:left-1/2 w-8 h-8 rounded-full border-4 transform md:-translate-x-1/2 ml-[10px] md:ml-0 z-30 transition-all duration-700"
                :class="{ 
                  'border-cyan-400 bg-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.9)] scale-125': activeIndex >= index,
                  'border-slate-700 bg-slate-800/50': activeIndex < index
                }"
              >
                <div 
                  v-if="activeIndex >= index"
                  class="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"
                ></div>
              </div>

              <!-- Content Card -->
              <div 
                class="ml-16 md:ml-0 md:w-1/2 px-4 md:px-12 w-full"
                :style="{
                  opacity: activeIndex >= index ? 1 : 0,
                  transform: activeIndex >= index ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }"
              >
                <div 
                  class="p-8 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 group relative overflow-hidden"
                >
                  <!-- Card glow effect on hover -->
                  <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div class="relative z-10">
                    <span class="text-cyan-400 font-mono text-sm font-bold mb-3 block tracking-wider">{{ item.year }}</span>
                    <h3 class="text-2xl font-bold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                      {{ item.title }}
                    </h3>
                    <p class="text-slate-400 text-base leading-relaxed">{{ item.description }}</p>
                  </div>

                  <!-- Decorative corner -->
                  <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-full"></div>
                </div>
              </div>
              
              <!-- Empty space for alternating layout -->
              <div class="hidden md:block md:w-1/2"></div>
            </div>
          </div>

          <!-- Scroll indicator -->
          <div class="scroll-indicator fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 flex flex-col items-center gap-2 opacity-100 transition-opacity duration-500" :class="{ 'opacity-0': scrollProgress > 0.1 }">
            <span class="text-slate-400 text-xs tracking-widest">SCROLL</span>
            <svg viewBox="0 0 24 24" class="w-6 h-6 animate-bounce">
              <line class="stroke-slate-400 stroke-2" x1="12" y1="1" x2="12" y2="22.5" fill="none" stroke-linecap="round"/>
              <line class="stroke-slate-400 stroke-2" x1="12.1" y1="22.4" x2="18.9" y2="15.6" fill="none" stroke-linecap="round"/>
              <line class="stroke-slate-400 stroke-2" x1="11.9" y1="22.4" x2="5.1" y2="15.6" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  t: {
    type: Object,
    required: true
  }
})

const timelineContainer = ref(null)
const svgContainer = ref(null)
const dots = ref([])
const particles = ref([])
const animatedPath = ref(null)
const pathString = ref('')
const activeIndex = ref(-1)
const svgHeight = ref(1000)
const scrollProgress = ref(0)
let scrollTriggerInstance = null

// Generate smooth curve path
const updatePath = () => {
  if (!timelineContainer.value || dots.value.length === 0) return

  const containerRect = timelineContainer.value.getBoundingClientRect()
  const isMobile = window.innerWidth < 768
  const startX = isMobile ? 20 : containerRect.width / 2
  const startY = -50

  let d = `M ${startX} ${startY}`
  let maxY = 0

  dots.value.forEach((dot, index) => {
    if (!dot) return
    
    const dotRect = dot.getBoundingClientRect()
    const containerTop = containerRect.top + window.scrollY
    
    const x = dotRect.left + dotRect.width / 2 - containerRect.left
    const y = dotRect.top + window.scrollY + dotRect.height / 2 - containerTop

    maxY = Math.max(maxY, y)

    if (index === 0) {
      const controlY = y * 0.3
      d += ` C ${startX} ${controlY}, ${x} ${controlY}, ${x} ${y}`
    } else {
      const prevDot = dots.value[index - 1]
      if (!prevDot) return
      
      const prevRect = prevDot.getBoundingClientRect()
      const prevX = prevRect.left + prevRect.width / 2 - containerRect.left
      const prevY = prevRect.top + window.scrollY + prevRect.height / 2 - containerTop
      
      // Create S-curve
      const deltaY = y - prevY
      const midY = prevY + deltaY * 0.5
      const controlOffset = Math.abs(x - prevX) * 0.3
      
      d += ` C ${prevX} ${prevY + deltaY * 0.3}, ${x} ${y - deltaY * 0.3}, ${x} ${y}`
    }
  })

  pathString.value = d
  svgHeight.value = maxY + 200
}

// Animate particles along path
const animateParticles = (progress) => {
  if (!animatedPath.value || particles.value.length === 0) return

  const path = animatedPath.value
  const length = path.getTotalLength()

  particles.value.forEach((particle, i) => {
    if (!particle) return
    
    // Stagger particles along the path
    const particleProgress = (progress + (i / particles.value.length)) % 1
    const point = path.getPointAtLength(particleProgress * length)
    
    particle.setAttribute('cx', point.x)
    particle.setAttribute('cy', point.y)
    
    // Fade particles at start/end
    const opacity = Math.sin(particleProgress * Math.PI) * 0.8 + 0.2
    particle.setAttribute('opacity', opacity)
  })
}

// Initialize animation
const initAnimation = () => {
  if (!animatedPath.value || !timelineContainer.value) return

  const path = animatedPath.value
  const length = path.getTotalLength()
  
  // Initial state - path hidden
  path.style.strokeDasharray = length
  path.style.strokeDashoffset = length

  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }

  scrollTriggerInstance = ScrollTrigger.create({
    trigger: timelineContainer.value,
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 0.5,
    onUpdate: (self) => {
      const progress = self.progress
      scrollProgress.value = progress
      
      // Draw path progressively
      const drawLength = length * progress
      path.style.strokeDashoffset = length - drawLength

      // Animate particles
      animateParticles(progress)

      // Activate dots and cards
      const totalDots = dots.value.length
      const newActiveIndex = Math.min(
        Math.floor(progress * (totalDots + 0.5)),
        totalDots - 1
      )
      
      if (newActiveIndex !== activeIndex.value) {
        activeIndex.value = newActiveIndex
      }
    }
  })
}

const setupTimeline = async () => {
  await nextTick()
  
  setTimeout(() => {
    updatePath()
    
    setTimeout(() => {
      initAnimation()
    }, 150)
  }, 300)
}

let resizeTimeout = null
const handleResize = () => {
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    updatePath()
    initAnimation()
  }, 200)
}

onMounted(() => {
  setupTimeline()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill()
  }
  if (resizeTimeout) {
    clearTimeout(resizeTimeout)
  }
})
</script>

<style scoped>
.timeline-item {
  transition: all 0.5s ease-out;
}

.particle {
  transition: opacity 0.3s ease;
}

@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.animate-ping {
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s ease-in-out infinite;
}

.scroll-indicator {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.2em;
}
</style>
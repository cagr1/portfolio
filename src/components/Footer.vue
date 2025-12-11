<template>
  <footer 
    ref="containerRef"
    class="relative bg-slate-950 text-white overflow-hidden pt-20 pb-10 px-6 min-h-screen flex flex-col justify-between"
    id="contact"
  >
    <!-- Background Ambience -->
    <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <div class="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob" />
      <div class="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob animation-delay-2000" />
    </div>

    <div class="container mx-auto max-w-7xl relative z-10 flex-grow flex flex-col">
      
      <!-- Top Section: CTA & Details -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20 md:mb-32">
        
        <!-- CTA Area -->
        <div class="md:col-span-8 flex flex-col justify-start">
          <h2 
            class="text-4xl md:text-6xl font-light tracking-tight mb-8 animate-fade-in-up"
          >
            {{ t.footer.cta || 'Have an idea?' }} <br />
            <span class="text-slate-400">{{ t.footer.ctaSubtitle || "Let's build it together." }}</span>
          </h2>

          <div class="animate-fade-in-left">
            <button 
              @click="handleCopyEmail"
              class="group flex items-center gap-4 text-xl md:text-2xl hover:text-cyan-400 transition-colors duration-300"
            >
              <span class="border-b border-white/20 pb-1 group-hover:border-cyan-400/50 transition-colors">
                {{ contactEmail }}
              </span>
              <div class="relative w-5 h-5">
                <Icon 
                  v-show="!copied"
                  icon="mdi:content-copy" 
                  width="20" 
                  height="20"
                  class="absolute inset-0 opacity-50 group-hover:opacity-100 transition-all duration-300"
                  :class="{ 'scale-0': copied, 'scale-100': !copied }"
                />
                <Icon 
                  v-show="copied"
                  icon="mdi:check" 
                  width="20" 
                  height="20"
                  class="absolute inset-0 text-green-400 transition-all duration-300"
                  :class="{ 'scale-100': copied, 'scale-0': !copied }"
                />
              </div>
            </button>
          </div>
        </div>

        <!-- Navigation / Links -->
        <div class="md:col-span-4 flex flex-col md:items-end justify-between h-full gap-8">
          
          <div class="flex flex-col gap-4">
            <span class="text-xs uppercase tracking-widest text-slate-500 mb-2">Socials</span>
            <div class="flex flex-wrap gap-3">
              <a
                v-for="(link, idx) in socialLinks" 
                :key="idx"
                ref="buttonRefs"
                :href="link.url"
                target="_blank"
                rel="noreferrer"
                class="relative flex items-center justify-center w-14 h-14 rounded-full border border-slate-700 bg-slate-900/50 text-white hover:border-cyan-400/50 hover:bg-slate-800 transition-colors duration-300"
                :style="magneticStyles[idx]"
                @mousemove="(e) => handleMagneticMove(e, idx)"
                @mouseleave="() => resetMagnetic(idx)"
              >
                 <Icon :icon="link.icon" width="20" height="20" />
                  
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-2 md:text-right">
            <span class="text-xs uppercase tracking-widest text-slate-500">Local Time</span>
            <span class="text-xl font-light tabular-nums">
              {{ currentTime }}
            </span>
          </div>
        </div>
      </div>

      <!-- THE GIANT NAME -->
      <div class="mt-auto w-full select-none">
        <!-- CARLOS -->
        <div 
          ref="carlosRef"
          class="w-full overflow-hidden leading-[0.85]"
          style="text-align: left"
        >
          <span 
            v-for="(letter, index) in 'CARLOS'.split('')" 
            :key="'carlos-' + index"
            class="inline-block text-[11vw] md:text-[12vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500 hover:to-cyan-400 transition-all duration-700 cursor-default"
            :style="getLetterStyle(carlosVisible, 0.1, index)"
          >
            {{ letter }}
          </span>
        </div>

        <!-- GALLARDO -->
        <div 
          ref="gallardoRef"
          class="w-full overflow-hidden leading-[0.85]"
          style="text-align: right"
        >
          <span 
            v-for="(letter, index) in 'GALLARDO'.split('')" 
            :key="'gallardo-' + index"
            class="inline-block text-[11vw] md:text-[12vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-slate-100 to-slate-500 hover:to-cyan-400 transition-all duration-700 cursor-default"
            :style="getLetterStyle(gallardoVisible, 0.3, index)"
          >
            {{ letter }}
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="container mx-auto max-w-7xl relative z-10 border-t border-slate-800/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
      <p> {{ t.footer.copyright || 'All Rights Reserved.' }}</p>
      <div class="flex gap-6 mt-4 md:mt-0">
        <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" class="hover:text-white transition-colors">Terms & Conditions</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  t: {
    type: Object,
    required: true
  },
  socialLinks: {
    type: Array,
    required: true
  },
  contactEmail: {
    type: String,
    default: 'cagr_14@hotmail.com'
  }
})

// Refs
const containerRef = ref(null)
const carlosRef = ref(null)
const gallardoRef = ref(null)
const buttonRefs = ref([])

// Estados
const copied = ref(false)
const carlosVisible = ref(false)
const gallardoVisible = ref(false)
const time = ref(new Date())
const magneticStyles = ref({})




const currentTime = computed(() => {
  return time.value.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    second: '2-digit',
    hour12: true 
  })
})

// Métodos
const handleCopyEmail = () => {
  navigator.clipboard.writeText(props.contactEmail)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}



const getLetterStyle = (isVisible, baseDelay, index) => {
  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(100px)',
    transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${baseDelay + index * 0.05}s`
  }
}

const handleMagneticMove = (e, idx) => {
  const button = buttonRefs.value[idx]
  if (!button) return
  
  const rect = button.getBoundingClientRect()
  const middleX = e.clientX - (rect.left + rect.width / 2)
  const middleY = e.clientY - (rect.top + rect.height / 2)
  
  magneticStyles.value = {
    ...magneticStyles.value,
    [idx]: {
      transform: `translate(${middleX * 0.5}px, ${middleY * 0.5}px)`
    }
  }
}

const resetMagnetic = (idx) => {
  magneticStyles.value = {
    ...magneticStyles.value,
    [idx]: {
      transform: 'translate(0px, 0px)'
    }
  }
}

// Lifecycle
onMounted(() => {
  // Observer para CARLOS
  const carlosObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          carlosVisible.value = true
        }
      })
    },
    { threshold: 0.5 }
  )

  // Observer para GALLARDO
  const gallardoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gallardoVisible.value = true
        }
      })
    },
    { threshold: 0.5 }
  )

  if (carlosRef.value) {
    carlosObserver.observe(carlosRef.value)
  }

  if (gallardoRef.value) {
    gallardoObserver.observe(gallardoRef.value)
  }

  // Timer para el reloj
  const timer = setInterval(() => {
    time.value = new Date()
  }, 1000)

  // Inicializar estilos magnéticos
  props.socialLinks.forEach((_, idx) => {
    magneticStyles.value[idx] = { transform: 'translate(0px, 0px)' }
  })

  // Cleanup
  onUnmounted(() => {
    carlosObserver.disconnect()
    gallardoObserver.disconnect()
    clearInterval(timer)
  })
})
</script>

<style scoped>
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(20px, -50px) scale(1.1); }
  50% { transform: translate(-20px, 20px) scale(0.9); }
  75% { transform: translate(50px, 50px) scale(1.05); }
}

.animate-blob {
  animation: blob 20s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
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

@keyframes fade-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out;
}

.animate-fade-in-left {
  animation: fade-in-left 0.8s ease-out 0.2s both;
}
</style>
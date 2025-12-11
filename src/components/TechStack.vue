<template>
  <section id="tech" class="py-24 relative overflow-hidden">
    <div class="container mx-auto px-6 mb-16">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16  text-white bg-clip-text text-transparent">
        {{ t.tech.title }}
      </h2>
    </div>

    <!-- Marquee Container -->
    <div class="flex flex-col gap-16 py-8">
      <!-- Row 1: Left -->
      <div class="marquee-container">
        <div class="marquee-track animate-marquee-left">
          <div 
            v-for="(tech, index) in [...row1, ...row1]" 
            :key="`r1-${index}`"
            class="tech-item flex flex-col items-center gap-4 min-w-[140px] mx-8 group"
          >
            <div 
              class="text-6xl transition-all duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
              :class="tech.color"
            >
              <Icon :icon="tech.icon" class="gray-scale" />
            </div>
            <span class="text-slate-400 font-medium text-sm group-hover:text-cyan-400 transition-colors">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>

      <!-- Row 2: Right -->
      <div class="marquee-container">
        <div class="marquee-track animate-marquee-right">
          <div 
            v-for="(tech, index) in [...row2, ...row2]" 
            :key="`r2-${index}`"
            class="tech-item flex flex-col items-center gap-4 min-w-[140px] mx-8 group"
          >
            <div 
              class="text-6xl transition-all duration-300 group-hover:scale-110 grayscale group-hover:grayscale-0"
              :class="tech.color"
            >
              <Icon :icon="tech.icon" />
            </div>
            <span class="text-slate-400 font-medium text-sm group-hover:text-cyan-400 transition-colors">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  t: {
    type: Object,
    required: true
  },
  technologies: {
    type: Array,
    required: true
  }
})

// Split technologies into two rows
const row1 = computed(() => props.technologies.slice(0, Math.ceil(props.technologies.length / 2)))
const row2 = computed(() => props.technologies.slice(Math.ceil(props.technologies.length / 2)))

</script>

<style scoped>
.marquee-container {
  width: 100%;
  overflow: visible; /* Changed from hidden to visible to prevent clipping */
  position: relative;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  padding: 20px 0; /* Added padding to accommodate glow */
}

.marquee-track {
  display: flex;
  width: max-content;
}

.animate-marquee-left {
  animation: marquee-left 40s linear infinite;
}

.animate-marquee-right {
  animation: marquee-right 40s linear infinite;
}

/* Pause on hover */
.marquee-container:hover .marquee-track {
  animation-play-state: paused;
}

@keyframes marquee-left {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes marquee-right {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Individual Glow Effect */
.tech-item:hover .text-6xl {
  filter: drop-shadow(0 0 15px currentColor);
}
</style>
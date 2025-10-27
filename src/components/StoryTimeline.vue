<template>
  <section id="story" class="relative py-24 px-6 bg-slate-900 overflow-hidden" style="background-attachment: fixed;">
    <div class="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-80 z-0"></div>
    <div 
      class="absolute inset-0 bg-[url('./assets/Lucid_Origin.jpg')] bg-cover bg-center opacity-30 mix-blend-overlay z-0 animate-gradient"
    ></div>

    <div class="container mx-auto max-w-6xl relative z-10">
      <h2
        class="text-4xl md:text-5xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up"
      >
        {{ t.story.title }}
      </h2>

      <div class="relative">
        <div
          class="absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 transform -translate-x-1/2 hidden md:block"
        ></div>

        <div
          v-for="(item, index) in t.story.timeline"
          :key="index"
          ref="timelineItems"
          class="relative mb-20"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div
            class="flex flex-col md:flex-row items-center gap-10"
            :class="{ 'md:flex-row-reverse': index % 2 === 1 }"
          >
            <div
              class="flex-1 bg-slate-800/60 border border-slate-700/40 p-8 rounded-2xl backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div class="flex items-center justify-between mb-4">
                <span
                  class="px-4 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full text-sm font-semibold text-cyan-400"
                >
                  {{ item.year }}
                </span>
              </div>

              <h3
                class="text-2xl font-bold text-slate-100 mb-3 transition-colors duration-300 group-hover:text-cyan-400"
              >
                {{ item.title }}
              </h3>

              <p class="text-slate-400 leading-relaxed">
                {{ item.description }}
              </p>
            </div>

            <div class="hidden md:flex flex-col items-center">
              <div
                class="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-slate-900 animate-pulse-slow"
              ></div>
            </div>

            <div class="flex-1">
              <div class="relative overflow-hidden rounded-2xl group image-glow">
                <img
                  :src="item.image"
                  :alt="item.title"
                  class="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="absolute top-20 left-10 w-48 h-48 bg-cyan-400/10 blur-[100px] rounded-full animate-pulse-slow"
    ></div>
    <div
      class="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 blur-[100px] rounded-full animate-ping-slow"
    ></div>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

defineProps({
  t: Object,
})

const timelineItems = ref([])

onMounted(() => {
  gsap.utils.toArray(timelineItems.value).forEach((el, i) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      delay: i * 0.1,
    })
  })

  window.addEventListener('scroll', () => {
    const parallax = document.querySelector('#story')
    const offset = window.scrollY * 0.2
    parallax.style.backgroundPositionY = `${offset}px`
  })
})
</script>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200%;
  animation: gradient 10s ease infinite;
}

.image-glow::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1), transparent 70%);
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: all 0.5s ease;
}

.group:hover .image-glow::after {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
</style>

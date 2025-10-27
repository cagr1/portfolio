<!-- components/HeroSection.vue -->
<template>
  <section
    id="home"
    class="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
  >
    <!-- Background Blur Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow"
        style="animation-delay: 1s"
      ></div>
    </div>

    <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
      <!-- TEXT CONTENT -->
      <div class="space-y-6">
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          <span class="block text-slate-300">{{ t.hero.greeting }}</span>
          <span
            class="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient bg-300%"
          >
            {{ t.hero.name }}
          </span>
        </h1>
        <p class="text-xl text-slate-400 leading-relaxed">{{ t.hero.title }}</p>
        <p class="text-lg text-slate-500">{{ t.hero.description }}</p>

        <div class="flex gap-4">
          <a
            href="#projects"
            class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <span class="relative z-10">{{ t.hero.cta }}</span>
            <div
              class="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            ></div>
          </a>
          <a
            href="#contact"
            class="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            {{ t.hero.contact }}
          </a>
        </div>
      </div>

      <!-- PHOTO SECTION -->
      <div ref="photoContainer" class="relative">
        <div class="relative w-80 h-80 mx-auto">
          <!-- Halo Glow Effect -->
          <div
            class="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 p-[2px]"
          >
            <div class="w-full h-full rounded-full bg-slate-900 p-2">
              <img
                src="/assets/Profile.jpeg"
                alt="Profile Photo"
                class="w-full h-full rounded-full object-cover transition-transform duration-700"
              />
            </div>
          </div>

          <!-- Outer ring soft glow -->
          <div
            class="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/30 via-blue-400/20 to-purple-500/30 blur-xl opacity-70 animate-pulse"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

defineProps({
  t: Object,
});

const photoContainer = ref(null);

onMounted(() => {
  // Fade-in and subtle scale animation for photo
  gsap.from(photoContainer.value, {
    opacity: 0,
    scale: 0.8,
    duration: 1.5,
    ease: "power3.out",
  });

  // Floating idle motion (subtle up/down)
  gsap.to(photoContainer.value, {
    y: -10,
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}

.bg-300% {
  background-size: 300% 300%;
}

.animate-gradient {
  animation: gradient-flow 6s ease infinite;
}

@keyframes gradient-flow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>

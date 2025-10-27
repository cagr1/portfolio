<template>
  <footer id="contact" class="relative py-20 px-6 bg-slate-950/90 backdrop-blur-md border-t border-slate-800/50">
    <div class="container mx-auto max-w-6xl text-center relative z-10">
      
      <!-- Título dinámico -->
      <h2 class="text-3xl md:text-4xl font-semibold text-slate-100 mb-10">
        {{ t.footer.cta }}
      </h2>

      <!-- Botón de contacto -->
      <a href="mailto:cagr_14@hotmail.com"
         class="inline-flex items-center gap-3 px-8 py-4 rounded-full 
                bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 
                border border-slate-700/60 text-slate-300 font-medium
                hover:border-cyan-400/50 hover:scale-[1.03]
                transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
        <Icon icon="mdi:email-outline" width="22" height="22" class="text-white" />
        <span>{{ t.footer.emailButton }}</span>
      </a>

      <!-- Redes sociales -->
      <div class="flex justify-center gap-6 mt-12">
        <a v-for="social in socialLinks" :key="social.name"
           :href="social.url" 
           target="_blank" 
           rel="noopener noreferrer"
           class="group relative p-3 rounded-full border border-slate-700/60 
                  hover:border-cyan-400/50 transition-all duration-500 
                  hover:scale-110 hover:-translate-y-1">
          <Icon :icon="social.icon" width="22" height="22"
                class="text-white transition-all duration-500" />
          <span class="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-0.5
                       bg-slate-900/80 border border-cyan-400/30 rounded-md 
                       text-xs text-cyan-400 opacity-0 group-hover:opacity-100
                       transition-all duration-300 whitespace-nowrap">
            {{ social.name }}
          </span>
        </a>
      </div>

      <!-- Divider -->
      <div class="w-24 h-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mt-12 mb-6 rounded-full"></div>

      <!-- Copyright -->
      <p class="text-slate-500 text-sm tracking-wide">
        {{ t.footer.copyright }}
      </p>
    </div>

    <!-- Brillo de fondo -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-0 left-1/3 w-[40rem] h-[40rem] bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-0 right-1/3 w-[40rem] h-[40rem] bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" style="animation-delay:1.2s"></div>
    </div>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  t: Object,
  socialLinks: Array
})
</script>

<style scoped>
@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}
.animate-pulse-slow {
  animation: pulse-slow 6s ease-in-out infinite;
}
</style>

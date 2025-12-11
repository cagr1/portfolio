<template>
  <section id="about" class="py-20 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 -left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div class="absolute bottom-1/4 -right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
    </div>

    <div class="container mx-auto px-6 relative z-10">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 text-white" >
        {{ t.about.title }}
      </h2>

      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-12 gap-12 items-start">
          
          <!-- Photo Placeholder (Left) -->
          <div class="md:col-span-4 relative group animate-fade-in-up">
            <div class="relative rounded-2xl overflow-hidden aspect-[3/4] border-2 border-slate-700/50 group-hover:border-cyan-500/50 transition-colors duration-500">
              <!-- Placeholder Image / Gradient -->
              <img src="/assets/profile2.png" alt="Photo" class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
            </div>
            <!-- Decorative Elements -->
            <div class="absolute -z-10 top-4 -right-4 w-full h-full border border-cyan-500/20 rounded-2xl"></div>
            <div class="absolute -z-10 -bottom-4 -left-4 w-full h-full border border-purple-500/20 rounded-2xl"></div>
          </div>

          <!-- Content (Right) -->
          <div class="md:col-span-8 space-y-8 animate-fade-in-up" style="animation-delay: 0.2s;">
            <div class="bg-slate-900/50 backdrop-blur-md rounded-2xl p-8 border border-slate-700/50 shadow-xl">
              <h3 class="text-2xl font-bold text-slate-100 mb-6">
                {{ t.about.role }}
              </h3>
              
              <div class="space-y-6 text-slate-300 leading-relaxed">
                <p>{{ t.about.intro }}</p>
                <p>{{ t.about.intro2 }}</p>
                <p>{{ t.about.intro3 }}</p>
              </div>
              
              

              <div class="mt-8 flex flex-wrap gap-3">
                <span class="px-4 py-1.5 bg-slate-800 rounded-full text-sm text-cyan-300 border border-slate-700/50">{{ t.about.lang }}</span>
                <span class="px-4 py-1.5 bg-slate-800 rounded-full text-sm text-purple-300 border border-slate-700/50">{{ t.about.certs }}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>



defineProps({
  t: {
    type: Object,
    required: true
  }
})
</script>

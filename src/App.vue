<!-- App.vue -->
<template>
  <div class="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
    <!-- Preloader -->
    <Transition name="fade">
      <div v-if="loading" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
        <div class="text-4xl md:text-6xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          {{ typewrittenText }}<span class="animate-pulse">_</span>
        </div>
      </div>
    </Transition>

    <div v-show="!loading" class="animate-fade-in">
      <!-- Language Toggle -->
      <LanguageToggle 
        :current-lang="currentLang"
        :just-mounted="justMounted"
        @toggle-language="toggleLanguage"
      />
      
      <!-- Header -->
      <Header 
        :scrolled="scrolled"
        :logo="t.nav.logo"
        :nav-items="t.nav.items"
      />
      
      <!-- Hero Section -->
      <HeroSection :t="t" />
      
      <!-- Tech Stack -->
      <TechStack 
        :t="t"
        :technologies="technologies"
      />

      <!-- About Section -->
      <AboutSection :t="t" />
      
      <!-- Story Timeline -->
      <StoryTimeline :t="t" />
      
      <!-- Projects Section -->
      <ProjectsSection 
        :t="t"
        :projects="projects"
        @open-project="openProject"
      />
      
      <!-- Footer -->
      <Footer 
        :t="t"
        :social-links="socialLinks"
      />
      
      <!-- Project Modal -->
      <ProjectModal 
        :selected-project="selectedProject"
        :t="t"
        @close-modal="closeProject"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

 // Import components
import LanguageToggle from './components/LanguageToggle.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import TechStack from './components/TechStack.vue'
import StoryTimeline from './components/StoryTimeline.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
import ProjectModal from './components/ProjectModal.vue'
import AboutSection from './components/AboutSection.vue'

// Import Locales
import { es } from './locales/es'
import { en } from './locales/en'

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger)

// State
const currentLang = ref('en') // Default to English
const scrolled = ref(false)
const selectedProject = ref(null)
const justMounted = ref(true)
const loading = ref(true)
const typewrittenText = ref('')

const technologies = [
  { name: '.NET', icon: 'devicon:dotnetcore', color: 'text-purple-500' },
  { name: 'C#', icon: 'devicon:csharp', color: 'text-purple-600' },
  { name: 'Laravel', icon: 'devicon:laravel', color: 'text-red-500' },
  { name: 'Vue.js', icon: 'devicon:vuejs', color: 'text-green-500' },
  { name: 'JavaScript', icon: 'devicon:javascript', color: 'text-yellow-400' },
  { name: 'Tailwind', icon: 'devicon:tailwindcss', color: 'text-cyan-400' },
  { name: 'SQL Server', icon: 'simple-icons:microsoftsqlserver', color: 'text-red-600' },
  { name: 'PostgreSQL', icon: 'devicon:postgresql', color: 'text-blue-600' },
  { name: 'Kotlin', icon: 'devicon:kotlin', color: 'text-purple-600' },
  {name: 'PHP', icon: 'devicon:php', color: 'text-blue-600'},
  {name: 'TypeScript', icon: 'devicon:typescript', color: 'text-blue-600'},
  { name: 'Python', icon: 'devicon:python', color: 'text-white' },
  { name: 'Git', icon: 'devicon:git', color: 'text-orange-600' },
  { name: 'GSAP', icon: 'simple-icons:gsap', color: 'text-green-500' },
  { name: 'Motion', icon: 'simple-icons:framer', color: 'text-white' },
  {name: 'Vercel', icon: 'simple-icons:vercel', color: 'text-white'},
  { name: 'React', icon: 'devicon:react', color: 'text-blue-600' }
]


// Translations
const translations = { es, en }

const t = computed(() => translations[currentLang.value])

// Data


const projects = computed(() => {
  if (currentLang.value === 'es') {
    return [
      {
        id: 1,
        title: 'Jen-Co Beauty Studio',
        description: 'Sitio web para estudio de belleza con animaciones avanzadas y diseño moderno.',
        image: './assets/project-jenco.png', // Placeholder, user needs to provide or I'll use a generic one
        tech: ['Vue.js', 'GSAP', 'Motion'],
        github: 'https://github.com/cagr1/jenco-beauty', // Assuming or placeholder
        link: 'https://jen-co.vercel.app/'
      },
      {
        id: 2,
        title: 'SysCisepro v4.0',
        description: 'Sistema integral de gestión empresarial desarrollado con .NET y SQL Server. Incluye módulos de inventario, facturación, contabilidad y reportes avanzados.',
        image: './assets/project1.png',
        tech: ['.NET', 'C#', 'SQL Server', 'WinForms'],
        github: 'https://github.com/cagr1/SysCisepro_v2.0'
      },
      {
        id: 3,
         title: 'Cisepro ERP Web',
        description: 'Sistema ERP web moderno con gestión de recursos empresariales, control de inventario y análisis financieros en tiempo real.',
        image: './assets/project3.png',
        tech: ['.Net Core 8', 'Vue.js', 'Docker'],
        github: 'https://github.com/cagr1/Cisepro-ERP-Web'
        
      },
      {
        id: 4,
       title: 'Karl Ecuador',
        description: 'Landing page tipo e-commerce con pasarela de pagos y panel administrativo. Desarrollada con Vue.js.',
        image: './assets/project2.png',
        tech: ['Laravel', 'Vue.js', 'Tailwind', 'Vercel'],
        github: 'https://github.com/cagr1/karlecuador'
      },
      {
        id: 5,
        title: 'Financial Dashboard',
        description: 'Dashboard financiero interactivo con visualización de datos, gráficos en tiempo real y reportes personalizables.',
        image: './assets/project4.png',
        tech: ['Vue.js', 'EChart.js', 'Tailwind', '.Net Core 8', 'Vercel'],
        github: 'https://github.com/cagr1/FinancialDashboard'
      },
      {
        id: 6,
        title: 'Coworking',
        description: 'Sistema de reservas para espacios de coworking universitarios, gestión de proyectos y control de acceso.',
        image: './assets/project6.jpeg',
        tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Stripe'],
        github: 'https://github.com/cagr1/coworking'
      }
    ]
  } else {
    return [
      {
        id: 1,
        title: 'Jen-Co Beauty Studio',
        description: 'Beauty studio website featuring advanced animations and modern design.',
        image: './assets/project-jenco.png',
        tech: ['Vue.js', 'GSAP', 'Motion'],
        github: 'https://github.com/cagr1/jenco-beauty',
        link: 'https://jen-co.vercel.app/'
      },
      {
        id: 2,
        title: 'SysCisepro v4.0',
        description: 'Comprehensive enterprise management system built with .NET and SQL Server. Includes inventory, billing, accounting, and advanced reporting modules.',
        image: './assets/project1.png',
        tech: ['.NET', 'C#', 'SQL Server', 'WinForms'],
        github: 'https://github.com/cagr1/SysCisepro_v2.0'
      },
      {
        id: 3,
        title: 'Cisepro ERP Web',
        description: 'Modern ERP web system for enterprise resource management, inventory control, and real-time financial analytics.',
        image: './assets/project3.png',
        tech: ['.Net Core 8', 'Vue.js', 'Docker'],
        github: 'https://github.com/cagr1/Cisepro-ERP-Web'
        
      },
      {
        id: 4,
        title: 'Karl Ecuador',
        description: 'E-commerce landing page with payment gateway and admin panel. Built with Vue.js.',
        image: './assets/project2.png',
        tech: ['Laravel', 'Vue.js', 'Tailwind', 'Vercel'],
        github: 'https://github.com/cagr1/karlecuador'
      },
      {
        id: 5,
        title: 'Financial Dashboard',
        description: 'Interactive financial dashboard with data visualization, real-time charts, and customizable reports.',
        image: './assets/project4.png',
        tech: ['Vue.js', 'EChart.js', 'Tailwind', '.Net Core 8', 'Vercel'],
        github: 'https://github.com/cagr1/FinancialDashboard'
      },
      {
        id: 6,
        title: 'Coworking',
        description: 'University coworking space booking system with project management and access control.',
        image: './assets/project6.jpeg',
        tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Stripe', 'Vercel'],
        github: 'https://github.com/cagr1/coworking'
      }
    ]
  }
})


const socialLinks = [
  {
    name: 'X (Twitter)',
    url: 'https://x.com/CarlosGallar85',
    icon: 'streamline-logos:x-twitter-logo'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/cagr1',
    icon: 'streamline-logos:github-logo-2-solid'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-gallardo-5282a0121/',
    icon: 'streamline-logos:linkedin-logo-solid'
  }
]
// Methods
const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'es' ? 'en' : 'es'
}

const openProject = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeProject = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

// Lifecycle
onMounted(() => {
  // Preloader Logic
  const text = "Hello World..."
  let i = 0
  const typeInterval = setInterval(() => {
    typewrittenText.value += text.charAt(i)
    i++
    if (i > text.length) {
      clearInterval(typeInterval)
      setTimeout(() => {
        loading.value = false
        justMounted.value = false
        
        // Initialize GSAP Animations after preloader
        setTimeout(() => {
          // Animate Sections Title
          gsap.utils.toArray('section h2').forEach(title => {
            gsap.from(title, {
              scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
              },
              y: 50,
              opacity: 0,
              duration: 1,
              ease: 'power3.out'
            })
          })

          // Animate Text Blocks
          gsap.utils.toArray('.text-slate-300, .text-slate-400').forEach(text => {
            gsap.from(text, {
              scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              },
              y: 30,
              opacity: 0,
              duration: 0.8,
              ease: 'power2.out'
            })
          })
        }, 100)
      }, 1000)
    }
  }, 100)

  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
})
</script>

<style>
/* Include all the CSS animations and styles */
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

@keyframes ping-slow {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.3; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes bounce-horizontal {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scale-in {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}

@keyframes bounce-in {
  0% { opacity: 0; transform: scale(0.3); }
  50% { transform: scale(1.05); }
  70% { transform: scale(0.9); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes pulse-border {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.05); }
}

@keyframes icon-glow {
  0%, 100% { 
    filter: drop-shadow(0 0 5px currentColor) drop-shadow(0 0 10px currentColor);
  }
  50% { 
    filter: drop-shadow(0 0 10px currentColor) drop-shadow(0 0 20px currentColor) drop-shadow(0 0 30px currentColor);
  }
}

.animate-gradient { animation: gradient 8s ease infinite; }
.animate-ping-slow { animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite; }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-spin-slow { animation: spin-slow 8s linear infinite; }
.animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
.animate-bounce-horizontal { animation: bounce-horizontal 1s ease-in-out infinite; }
.animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
.animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
.animate-fade-in { animation: fade-in 0.6s ease-out; }
.animate-fade-in-delay-1 { animation: fade-in 0.6s ease-out 0.2s both; }
.animate-fade-in-delay-2 { animation: fade-in 0.6s ease-out 0.4s both; }
.animate-fade-in-delay-3 { animation: fade-in 0.6s ease-out 0.6s both; }
.animate-fade-in-delay-4 { animation: fade-in 0.6s ease-out 0.8s both; }
.animate-fade-in-up { animation: fade-in-up 0.8s ease-out both; }
.animate-scale-in { animation: scale-in 0.3s ease-out; }
.animate-bounce-in { animation: bounce-in 0.6s ease-out; }
.animate-pulse-border { animation: pulse-border 2s ease-in-out infinite; }

.bg-300\% { background-size: 300%; }

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

/* Enhanced glow effects */
.tech-icon-container:hover .tech-icon {
  animation: icon-glow 1.5s ease-in-out infinite;
}

.social-icon:hover .social-glow {
  animation: icon-glow 1.5s ease-in-out infinite;
}

.tech-glow, .social-glow {
  transition: all 0.5s ease-in-out;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.5);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: rgba(34, 211, 238, 0.3);
  border-radius: 4px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: rgba(34, 211, 238, 0.5);
}

html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
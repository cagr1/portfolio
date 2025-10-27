<!-- App.vue -->
<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { Icon} from '@iconify/vue'
 // Import components
import LanguageToggle from './components/LanguageToggle.vue'
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import TechStack from './components/TechStack.vue'
import StoryTimeline from './components/StoryTimeline.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import Footer from './components/Footer.vue'
import ProjectModal from './components/ProjectModal.vue'

// State
const currentLang = ref('es')
const scrolled = ref(false)
const selectedProject = ref(null)
const justMounted = ref(true)

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
  { name: 'Supabase', icon: 'simple-icons:supabase', color: 'text-green-400' },
  { name: 'Python', icon: 'devicon:python', color: 'text-white' },
  { name: 'Git', icon: 'devicon:git', color: 'text-orange-600' }
]


// Translations
const translations = {
  es: {
    nav: {
      logo: 'Dev.Portfolio',
      items: [
        { label: 'Inicio', href: '#home' },
        { label: 'Tecnologías', href: '#tech' },
        { label: 'Historia', href: '#story' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' }
      ]
    },
    hero: {
      greeting: 'Hola, soy',
      name: 'Carlos Gallardo',
      title: 'Desarrollador Full-Stack',
      description: 'Especializado en .NET, Laravel, Vue.js y tecnologías modernas. Creando soluciones innovadoras que transforman ideas en realidad.',
      cta: 'Ver Proyectos',
      contact: 'Contactar'
    },
    tech: {
      title: 'Stack Tecnológico'
    },
    story: {
      title: 'Mi Historia',
      timeline: [
        {
          year: '2018',
          title: 'Primeros Pasos',
          description: 'Comencé mi viaje en el desarrollo web aprendiendo HTML, CSS y JavaScript. Descubrí mi pasión por crear experiencias digitales.',
          image: './assets/story1.png'
        },
        {
          year: '2019',
          title: 'Backend & Bases de Datos',
          description: 'Me adentré en el desarrollo backend con .NET y C#, aprendiendo sobre arquitectura de software y bases de datos SQL Server.',
          image: './assets/story2.jpg'
        },
        {
          year: '2020',
          title: 'Full-Stack Developer',
          description: 'Expandí mis habilidades con Laravel y Vue.js, convirtiéndome en desarrollador full-stack. Comencé a trabajar en proyectos empresariales.',
          image: './assets/story3.png'
        },
        {
          year: '2022',
          title: 'Cloud & AI',
          description: 'Adopté tecnologías cloud como Vercel y Supabase. Integré IA en mis proyectos con Claude, llevando las aplicaciones al siguiente nivel.',
          image: './assets/story4.png'
        },
        {
          year: '2024',
          title: 'Presente',
          description: 'Actualmente desarrollo soluciones innovadoras combinando todas mis habilidades. Siempre aprendiendo y mejorando.',
          image: '/assets/story5.png'
        }
      ]
    },
    projects: {
      title: 'Proyectos Destacados',
      viewMore: 'Ver más',
      technologies: 'Tecnologías'
    },
    footer: {
      cta: 'Construyamos algo increíble juntos. ¡Contáctame!',
      emailButton: 'Contáctame',
      copyright:  '© ' + new Date().getFullYear()  + ' Carlos Gallardo. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      logo: 'Dev.Portfolio',
      items: [
        { label: 'Home', href: '#home' },
        { label: 'Technologies', href: '#tech' },
        { label: 'Story', href: '#story' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Carlos Gallardo',
      title: 'Full-Stack Developer',
      description: 'Specialized in .NET, Laravel, Vue.js and modern technologies. Creating innovative solutions that transform ideas into reality.',
      cta: 'View Projects',
      contact: 'Contact'
    },
    tech: {
      title: 'Tech Stack'
    },
    story: {
      title: 'My Story',
      timeline: [
        {
          year: '2018',
          title: 'First Steps',
          description: 'Started my web development journey learning HTML, CSS and JavaScript. Discovered my passion for creating digital experiences.',
          image: '/placeholder.svg?height=300&width=400'
        },
        {
          year: '2019',
          title: 'Backend & Databases',
          description: 'Dove into backend development with .NET and C#, learning about software architecture and SQL Server databases.',
          image: '/placeholder.svg?height=300&width=400'
        },
        {
          year: '2020',
          title: 'Full-Stack Developer',
          description: 'Expanded my skills with .NET Core, Laravel and Vue.js, becoming a full-stack developer. Started working on enterprise projects.',
          image: '/placeholder.svg?height=300&width=400'
        },
        {
          year: '2022',
          title: 'Cloud & AI',
          description: 'Adopted cloud technologies like Vercel and Supabase. Integrated AI into my projects with Claude, taking applications to the next level.',
          image: '/placeholder.svg?height=300&width=400'
        },
        {
          year: '2024',
          title: 'Present',
          description: 'Currently developing innovative solutions combining all my skills. Always learning and improving.',
          image: '/placeholder.svg?height=300&width=400'
        }
      ]
    },
    projects: {
      title: 'Featured Projects',
      viewMore: 'View more',
      technologies: 'Technologies'
    },
    footer: {
      cta: 'Let\'s build something great together.',
      emailButton: 'Say Hello',
      copyright: '©' + new Date().getFullYear() + ' Carlos Gallardo. All rights reserved.'
    }
  }
}

const t = computed(() => translations[currentLang.value])

// Data


const projects = computed(() => {
  if (currentLang.value === 'es') {
    return [
      {
        id: 1,
        title: 'SysCisepro v4.0',
        description: 'Sistema integral de gestión empresarial desarrollado con .NET y SQL Server. Incluye módulos de inventario, facturación, contabilidad y reportes avanzados.',
        image: './assets/project1.png',
        tech: ['.NET', 'C#', 'SQL Server', 'WinForms'],
        github: 'https://github.com/cagr1/SysCisepro_v2.0'
      },
      {
        id: 2,
        title: 'Karl Ecuador',
        description: 'Landing page tipo e-commerce con pasarela de pagos y panel administrativo. Desarrollada con Vue.js.',
        image: './assets/project2.png',
        tech: ['Laravel', 'Vue.js', 'Tailwind', 'Vercel'],
        github: 'https://github.com/cagr1/karlecuador'
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
        title: 'Financial Dashboard',
        description: 'Dashboard financiero interactivo con visualización de datos, gráficos en tiempo real y reportes personalizables.',
        image: './assets/project4.png',
        tech: ['Vue.js', 'EChart.js', 'Tailwind', '.Net Core 8', 'Vercel'],
        github: 'https://github.com/cagr1/FinancialDashboard'
      },
      {
        id: 5,
        title: 'Analítica de Datos',
        description: 'Desarrollo de un modelo predictivo usando Python, RandomForest y XGBoost para analizar los indicadores de empleo en las principales provincias de Ecuador, proyectando tendencias hasta 2025.',
        image: './assets/project5.png',
        tech: ['Python', 'XGBoost', 'RandomForest'],
        github: 'https://github.com/cagr1/1step-app'
      },
      {
        id: 6,
        title: 'Coworking',
        description: 'Sistema de reservas para espacios de coworking universitarios, gestión de proyectos y control de acceso.',
        image: './assets/project6.jpeg',
        tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Stripe', 'Vercel'],
        github: 'https://github.com/cagr1/coworking'
      }
    ]
  } else {
    return [
      {
        id: 1,
        title: 'SysCisepro v4.0',
        description: 'Comprehensive enterprise management system built with .NET and SQL Server. Includes inventory, billing, accounting, and advanced reporting modules.',
        image: './assets/project1.png',
        tech: ['.NET', 'C#', 'SQL Server', 'WinForms'],
        github: 'https://github.com/cagr1/SysCisepro_v2.0'
      },
      {
        id: 2,
        title: 'Karl Ecuador',
        description: 'E-commerce landing page with payment gateway and admin panel. Built with Vue.js.',
        image: './assets/project2.png',
        tech: ['Laravel', 'Vue.js', 'Tailwind', 'Vercel'],
        github: 'https://github.com/cagr1/karlecuador'
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
        title: 'Financial Dashboard',
        description: 'Interactive financial dashboard with data visualization, real-time charts, and customizable reports.',
        image: './assets/project4.png',
        tech: ['Vue.js', 'EChart.js', 'Tailwind', '.Net Core 8', 'Vercel'],
        github: 'https://github.com/cagr1/FinancialDashboard'
      },
      {
        id: 5,
        title: 'Data Analytics',
        description: 'Development of a predictive model using Python, RandomForest, and XGBoost to analyze employment indicators in major provinces of Ecuador, projecting trends up to 2025.',
        image: '/assets/project5.png',
        tech: ['Python', 'XGBoost', 'RandomForest'],
        github: 'https://github.com/cagr1/1step-app'
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
    icon: 'prime:twitter'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/cagr1',
    icon: 'prime:github'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/carlos-gallardo-5282a0121/',
    icon: 'prime:linkedin'
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
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })
  
  setTimeout(() => {
    justMounted.value = false
  }, 3000)
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
</style>
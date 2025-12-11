export const es = {
    nav: {
        logo: 'Dev.Portfolio',
        items: [
            { label: 'Inicio', href: '#home' },
            { label: 'Tecnologías', href: '#tech' },
            { label: 'Sobre Mí', href: '#about' },
            { label: 'Historia', href: '#story' },
            { label: 'Proyectos', href: '#projects' },
            { label: 'Contacto', href: '#contact' }
        ]
    },
    hero: {
        greeting: 'Hola, soy',
        name: 'Carlos Gallardo',
        title: 'Desarrollador Full-Stack',
        description: 'Soy un desarrollador full-stack que transforma sistemas complejos en productos digitales rápidos, escalables y limpios.',
        cta: 'Ver Proyectos',
        contact: 'Contactar',
        techStack: "Vue 3, .NET Core, C#, Laravel, Python, SQL Server, AWS ",
    },
    about: {
        title: 'Sobre Mí',
        role: 'Ingeniero en Sistemas | Full-Stack Developer',
        intro: 'Soy un desarrollador full-stack que disfruta modernizar sistemas y construir aplicaciones ágiles, escalables y pensadas para durar. A lo largo de los años he trabajado en proyectos muy distintos: desde la renovación de plataformas empresariales hasta la creación de paneles en tiempo real, automatizaciones y experiencias web más intuitivas para los usuarios.',
        intro2: 'Me apasiona la arquitectura y el rendimiento del back-end, pero también cuido el lado visual. Disfruto diseñar interfaces modernas, limpias y con animaciones fluidas para que cada producto se sienta claro, rápido y agradable de usar.',
        intro3: 'Actualmente sigo profundizando en análisis de datos y Machine Learning para desarrollar productos más inteligentes y orientados al rendimiento.',
        keyExpTitle: 'Experiencia Clave:',
        keyExp: [
            'Migración de ERP WinForms a arquitectura web con .NET Core + Vue.js.',
            'Desarrollo de dashboard financiero en tiempo real (API .NET Core + ECharts).',
            'Automatización de procesos con Python y Power BI.'
        ],
        transition: 'En transición hacia roles de Ciencia de Datos.',
        lang: 'Bilingüe (Español Nativo | Inglés C1)',
        certs: 'Certificado en AWS, SAP y Microsoft'
    },
    tech: {
        title: 'Stack Tecnológico'
    },
    story: {
        title: 'Mi Historia',
        timeline: [
  {
    year: '2018',
    title: 'The Beginning',
    description:
      'My journey started with the basics of the web. HTML, CSS and JavaScript opened the door to a world where I could turn ideas into real interfaces.',
  },
  {
    year: '2019',
    title: 'Finding the Backend',
    description:
      'I dove into server-side development using Laravel, and later .NET and C#, discovering how much I enjoyed architecture, databases and building systems that run reliably.',
  },
  {
    year: '2020',
    title: 'Full-Stack Mindset',
    description:
      'By merging backend and frontend skills, I stepped fully into full-stack development. This was the year I began working on robust enterprise solutions.',
  },
  {
    year: '2022',
    title: 'Scaling Up',
    description:
      'I embraced cloud platforms, real-time tools and automation workflows, delivering faster products with better user experiences and refined UI/UX thinking.',
  },
  {
    year: '2024',
    title: 'Now',
    description:
      'Today I continue creating modern solutions while exploring data, AI and new technologies that help me build smarter, more intuitive products.',
  }
],

    },
    projects: {
        title: 'Proyectos Destacados',
        viewMore: 'Ver más',
        technologies: 'Tecnologías'
    },
    footer: {
        cta: 'Tienes una idea?',
        ctaSubtitle: 'Construyémonos un proyecto juntos.',
        emailButton: 'Contáctame',
        copyright: '© ' + new Date().getFullYear() + ' Carlos Gallardo. Todos los derechos reservados.'
    }
}

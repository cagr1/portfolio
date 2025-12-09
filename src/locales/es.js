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
        cta: 'Ver Proyectos',
        contact: 'Contactar'
    },
    about: {
        title: 'Sobre Mí',
        role: 'Ingeniero en Sistemas | Full-Stack Developer',
        intro: 'Soy un desarrollador full-stack enfocado en modernizar sistemas y crear aplicaciones escalables que resuelvan necesidades reales. Tengo experiencia transformando ERP heredados en plataformas web eficientes con .NET Core y Vue.js, así como construyendo dashboards en tiempo real y automatizaciones que mejoran la operación de los equipos.',
        intro2: 'Además de entregar soluciones robustas en back-end, también cuido la experiencia visual y la interacción. Me gusta diseñar interfaces modernas, con buena usabilidad y animaciones fluidas utilizando herramientas como GSAP, buscando que cada proyecto se sienta ágil, claro y agradable de usar.',
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
                title: 'Primeros Pasos',
                description: 'Comencé mi viaje en el desarrollo web aprendiendo HTML, CSS y JavaScript. Descubrí mi pasión por crear experiencias digitales.',
            },
            {
                year: '2019',
                title: 'Backend & Bases de Datos',
                description: 'Me adentré en el desarrollo backend con PHP (Laravel) y MySQL, luego me moví a .NET y C#, aprendiendo sobre arquitectura de software y bases de datos SQL Server.',
            },
            {
                year: '2020',
                title: 'Full-Stack Developer',
                description: 'Expandí mis habilidades con Laravel y Vue.js, convirtiéndome en desarrollador full-stack. Comencé a trabajar en proyectos empresariales.',
            },
            {
                year: '2022',
                title: 'Cloud & AI',
                description: 'Adopté tecnologías cloud como Vercel y Supabase. Integré IA en mis proyectos con Claude, llevando las aplicaciones al siguiente nivel.',
            },
            {
                year: '2024',
                title: 'Presente',
                description: 'Actualmente desarrollo soluciones innovadoras combinando todas mis habilidades. Siempre aprendiendo y mejorando.',
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
        copyright: '© ' + new Date().getFullYear() + ' Carlos Gallardo. Todos los derechos reservados.'
    }
}

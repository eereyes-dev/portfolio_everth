import type { Translations } from '@/types'

export const translations: Record<'es' | 'en', Translations> = {
  es: {
    nav: {
      about: 'Sobre mí',
      skills: 'Skills',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    hero: {
      eyebrow: '// Disponible para nuevas oportunidades',
      description:
        'Desarrollador Full Stack con enfoque en microservicios, APIs REST y experiencia construyendo aplicaciones empresariales escalables con C# .NET y React/Angular.',
      btnProjects: 'Ver proyectos',
      btnContact: 'Contactar',
      typedPhrases: [
        'Full Stack Developer',
        'C# .NET & React',
        'Arquitectura de Microservicios',
        'Constructor de APIs',
      ],
    },
    about: {
      label: '// sobre mí',
      title: 'Un poco de contexto',
      paragraphs: [
        'Soy egresado de Informática Empresarial de la Universidad de Costa Rica, con experiencia práctica en el desarrollo de sistemas empresariales de extremo a extremo.',
        'En FUNDES Costa Rica desarrollé microservicios con C# .NET integrados a React/TypeScript, incluyendo un sistema de gestión documental con la API de Google Drive para equipos internacionales en Costa Rica, Chile y México.',
        'Me apasiona construir software que realmente funcione: limpio, mantenible y bien documentado. Trabajo bien en equipos multidisciplinarios bajo metodologías ágiles.',
      ],
      meta: [
        { label: 'Ubicación —', value: 'San José, Costa Rica' },
        { label: 'Universidad —', value: 'UCR, Informática Empresarial' },
        { label: 'Inglés —', value: 'B2 Intermedio alto' },
        { label: 'Modalidad —', value: 'Remoto / Híbrido' },
        { label: 'Certificación —', value: 'Scrum Foundation Professional' },
        { label: 'GitHub —', value: 'github.com/reyesEspinozaE' },
      ],
    },
    skills: {
      label: '// habilidades',
      title: 'Stack técnico',
      categories: [
        {
          title: 'Frontend',
          tags: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Ionic', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
        },
        {
          title: 'Backend',
          tags: ['C#', '.NET Core', '.NET Framework', 'REST APIs', 'WCF', 'Entity Framework', 'ADO.NET'],
        },
        {
          title: 'Bases de datos',
          tags: ['SQL Server', 'PostgreSQL', 'MySQL'],
        },
        {
          title: 'Arquitectura & Tools',
          tags: ['Microservicios', 'MVC', 'Git/GitHub', 'Scrum', 'Google Drive API'],
        },
      ],
    },
    experience: {
      label: '// experiencia',
      title: 'Donde he trabajado',
      items: [
        {
          company: 'FUNDES Costa Rica S.A.',
          role: 'Analista Programador · Full Stack',
          period: 'Jul 2024 — Dic 2024',
          bullets: [
            'Desarrollé dos microservicios de extremo a extremo en C# .NET con interfaces en React/TypeScript.',
            'Construí un sistema de gestión documental integrado con la API de Google Drive, con notificaciones en tiempo real entre oficinas internacionales.',
            'Diseñé bases de datos SQL Server normalizadas y documenté APIs REST para integración entre servicios.',
            'Colaboré con Git/GitHub en equipo multidisciplinario usando Scrum y sprints semanales.',
            'Brindé soporte técnico y capacitación a usuarios en Costa Rica, Chile y México.',
          ],
        },
      ],
    },
    projects: {
      label: '// proyectos',
      title: 'Lo que he construido',
      viewOnGithub: '↗ Ver en GitHub',
      items: [
        {
          title: '📱 App móvil de gestión de personal',
          description:
            'Solución multiplataforma con Angular/Ionic y backend .NET Core. Formularios reactivos con validación en tiempo real, operaciones CRUD y arquitectura basada en servicios.',
          stack: ['Ionic 7+', 'Angular 16+', 'TypeScript', '.NET API', 'SQL Server'],
          githubUrl: 'https://github.com/eereyes-dev',
        },
        {
          title: '📁 Sistema de gestión documental',
          description:
            'Microservicio con integración de Google Drive API. Frontend React para carga y clasificación de documentos con notificaciones en tiempo real entre oficinas internacionales.',
          stack: ['C# .NET', 'React', 'TypeScript', 'Google Drive API'],
        },
      ],
    },
    contact: {
      label: '// contacto',
      title: 'Hablemos',
      description:
        '¿Tenés un proyecto interesante o una oportunidad para explorar? Estoy abierto a nuevas conversaciones.',
    },
    footer: 'Diseñado y construido por Everth Reyes Espinoza · 2025',
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      eyebrow: '// Open to new opportunities',
      description:
        'Full Stack Developer focused on microservices, REST APIs and scalable enterprise applications built with C# .NET and React/Angular.',
      btnProjects: 'View projects',
      btnContact: 'Get in touch',
      typedPhrases: [
        'Full Stack Developer',
        'C# .NET & React',
        'Microservices Architect',
        'API Builder',
      ],
    },
    about: {
      label: '// about me',
      title: 'A bit of context',
      paragraphs: [
        'I hold a degree in Business Informatics from the University of Costa Rica, with hands-on experience building end-to-end enterprise systems.',
        'At FUNDES Costa Rica I developed microservices with C# .NET integrated with React/TypeScript, including a document management system using the Google Drive API for international teams across Costa Rica, Chile, and Mexico.',
        'I love building software that truly works — clean, maintainable, and well-documented. I thrive in multidisciplinary teams using agile methodologies.',
      ],
      meta: [
        { label: 'Location —', value: 'San José, Costa Rica' },
        { label: 'University —', value: 'UCR, Business Informatics' },
        { label: 'English —', value: 'B2 Upper-Intermediate' },
        { label: 'Work mode —', value: 'Remote / Hybrid' },
        { label: 'Certification —', value: 'Scrum Foundation Professional' },
        { label: 'GitHub —', value: 'github.com/reyesEspinozaE' },
      ],
    },
    skills: {
      label: '// skills',
      title: 'Tech stack',
      categories: [
        {
          title: 'Frontend',
          tags: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Ionic', 'HTML5', 'CSS3', 'Tailwind', 'Bootstrap'],
        },
        {
          title: 'Backend',
          tags: ['C#', '.NET Core', '.NET Framework', 'REST APIs', 'WCF', 'Entity Framework', 'ADO.NET'],
        },
        {
          title: 'Databases',
          tags: ['SQL Server', 'PostgreSQL', 'MySQL'],
        },
        {
          title: 'Architecture & Tools',
          tags: ['Microservices', 'MVC', 'Git/GitHub', 'Scrum', 'Google Drive API'],
        },
      ],
    },
    experience: {
      label: '// experience',
      title: 'Where I have worked',
      items: [
        {
          company: 'FUNDES Costa Rica S.A.',
          role: 'Systems Analyst · Full Stack Developer',
          period: 'Jul 2024 — Dec 2024',
          bullets: [
            'Built two end-to-end microservices in C# .NET with React/TypeScript front-ends.',
            'Developed a document management system integrated with the Google Drive API, including real-time notifications across international offices.',
            'Designed normalized SQL Server databases and documented REST APIs for cross-service integration.',
            'Collaborated via Git/GitHub in a multidisciplinary team following Scrum with weekly sprints.',
            'Provided technical support and user training for teams in Costa Rica, Chile, and Mexico.',
          ],
        },
      ],
    },
    projects: {
      label: '// projects',
      title: 'What I have built',
      viewOnGithub: '↗ View on GitHub',
      items: [
        {
          title: '📱 Mobile HR Management App',
          description:
            'Cross-platform solution with Angular/Ionic and a .NET Core backend. Reactive forms with real-time validation, CRUD operations, and a service-based architecture.',
          stack: ['Ionic 7+', 'Angular 16+', 'TypeScript', '.NET API', 'SQL Server'],
          githubUrl: 'https://github.com/eereyes-dev',
        },
        {
          title: '📁 Document Management System',
          description:
            'Microservice with Google Drive API integration. React front-end for document upload and classification with real-time notifications across international offices.',
          stack: ['C# .NET', 'React', 'TypeScript', 'Google Drive API'],
        },
      ],
    },
    contact: {
      label: '// contact',
      title: "Let's talk",
      description:
        "Have an interesting project or opportunity to explore? I'm open to new conversations.",
    },
    footer: 'Designed and built by Everth Reyes Espinoza · 2025',
  },
}

export const contactLinks = [
  { label: '✉ reyesev603@gmail.com', href: 'mailto:reyesev603@gmail.com' },
  { label: 'in LinkedIn', href: 'https://www.linkedin.com/in/everth-reyes-espinoza-63b165251/' },
  { label: '⌥ GitHub', href: 'https://github.com/eereyes-dev' },
  { label: '☎ +506 7080-5460', href: 'tel:+50670805460' },
]

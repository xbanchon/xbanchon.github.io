// All home page copy, in both languages. Edit text here; layout lives in src/components.

export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const links = {
  email: 'xavier.banchon1@gmail.com',
  github: 'https://github.com/xbanchon',
  linkedin: 'https://www.linkedin.com/in/xavierbanchong/',
};

// Résumé PDFs to offer for download. While a value is null, the button at the top
// of the page is an email link. The contact section always has the email button
// and gains a download link once a PDF is set. Put the PDFs in public/resume/, and
// make sure they have no phone number or photo. Education belongs in the PDFs only,
// never on the page.
export const resume: Record<Locale, string | null> = {
  en: '/resume/xavier-banchon-gonzalez-en.pdf',
  es: '/resume/xavier-banchon-gonzalez-es.pdf',
};

const repo = (name: string) => `${links.github}/${name}`;

export const content = {
  en: {
    name: 'Xavier Banchon Gonzalez',
    title: 'QA automation engineer',
    location: 'Samborondon, Ecuador',
    availability: 'Open to remote work',
    description:
      'QA automation engineer experienced in software testing and test automation for web and mobile apps in retail, financial services and industry.',
    nav: {
      label: 'Main',
      work: 'Work',
      archive: 'Archive',
      about: 'About',
      contact: 'Contact',
      allWork: 'All work',
    },
    languages: {
      en: 'English, current language',
      es: 'Ver en español',
    },
    pitch: {
      before: 'I build ',
      accent: 'automated test systems',
      after: ' for web and mobile apps in retail, financial services and industry.',
    },
    actions: {
      resume: 'Download resume',
      email: 'Email me',
      seeWork: 'See the work',
      caseStudy: 'Read the case study',
      code: 'View the code',
      backToTop: 'Back to top',
    },
    glanceLabel: 'At a glance',
    glance: [
      { label: 'Automation', value: 'Playwright, Appium, JavaScript/TypeScript' },
      { label: 'Also works with', value: 'REST APIs, SQL, Apache JMeter, Docker, Git, Linux' },
      { label: 'Code security', value: 'OWASP ZAP, SonarQube, OSV' },
      { label: 'Languages', value: 'Spanish (native), English (B1/B2)' },
    ],
    work: {
      title: 'Selected work',
      archiveLink: 'Everything else, in the archive',
      metaRole: 'Role',
      metaStack: 'Stack',
      metaWhen: 'When',
      resultLabel: 'Result',
    },
    lead: {
      slug: 'qa-automation',
      title: 'QA automation for enterprise apps',
      summary:
        'End-to-end testing for web and mobile applications in financial services, industry and retail, with regression tests automated in Playwright and code security findings reported to development teams.',
      role: 'QA Automation Engineer, Binasystem',
      stack: 'Playwright, Azure DevOps',
      when: '2026 to present',
      result: { accent: 'Up to 55% less time', after: ' spent executing regression testing' },
      detail: '60+ test cases fully automated with Playwright · 8+ test plans across 5+ enterprise projects',
    },
    features: [
      {
        slug: 'image-processing-service',
        number: '02',
        title: 'Focal',
        summary: 'An asynchronous image processing pipeline built in Java with Spring Boot.',
        outcome: 'Software security, rate limiting, microservices, APIs, queue management and cloud services',
        meta: 'Project · Java, Spring Boot · 2026',
        code: repo('Focal'),
      },
      {
        slug: 'camera-monitoring',
        number: '03',
        title: 'Real-time video surveillance analytics',
        summary:
          'A data processing system for real-time video surveillance, on a five-member team developing AI-integrated web applications.',
        outcome: 'Proposed two new features that enhanced its real-time analytics capabilities',
        meta: 'Web Developer Intern, Telconet · 2024',
        code: null,
      },
    ],
    archive: {
      title: 'Archive',
      regionLabel: 'Archive table, scrollable',
      columns: { year: 'Year', project: 'Project', what: 'What it is', stack: 'Stack', link: 'Link' },
      codeLabel: 'Code',
      rows: [
        {
          year: '2025',
          project: 'Facial filters app',
          what: 'A Python app that applies real-time filters to faces using facial landmarks, built with a teammate',
          stack: 'Python, MediaPipe, OpenCV, Tkinter',
          href: repo('facial-filters-app'),
          linkText: null,
        },
        {
          year: '2024',
          project: 'Image processing service (Go)',
          what: 'An earlier image service with user authentication, image storage and caching',
          stack: 'Go, JWT, Supabase, Redis, PostgreSQL',
          href: repo('image-processing-service'),
          linkText: null,
        },
        {
          year: '2024',
          project: 'Broadcast server',
          what: 'A command-line server and client that relay messages between connected clients, with graceful shutdown',
          stack: 'Go, WebSockets',
          href: repo('broadcast-server'),
          linkText: null,
        },
        {
          year: '2024',
          project: 'Automated reporting tool',
          what: 'New features that improved cross-departmental communication and maintained data integrity across shared information',
          stack: 'Telconet',
          href: null,
          linkText: 'Internal',
        },
      ],
    },
    about: {
      title: 'About',
      body: "I'm a QA automation engineer experienced in software testing and test automation for web and mobile applications across retail, financial services and industrial sectors. I'm skilled in test planning, test case design, functional testing and defect management using Azure DevOps, and proficient in Playwright and Appium, with working knowledge of Angular and Flutter. I'm also familiar with the SDLC, the STLC and application security testing methodologies, including SAST, DAST and SCA.",
      experienceTitle: 'Experience',
      experience: [
        {
          dates: 'Jun 2026 to present',
          role: 'QA Automation Engineer, Binasystem',
          impact:
            'Reduced regression testing execution time by up to 55% by automating 60+ test cases with Playwright, and developed and managed 8+ test plans across 5+ enterprise projects.',
        },
        {
          dates: 'Feb to Aug 2024',
          role: 'Web Developer Intern, Telconet S.A.',
          impact: 'Proposed two new features for a data processing system, enhancing real-time video surveillance analytics capabilities.',
        },
      ],
    },
    contact: {
      before: 'Hiring for ',
      accent: 'QA automation',
      after: "? Let's talk.",
    },
    caseStudy: {
      team: 'Team',
      resultLabel: 'Result',
      next: 'Next project',
    },
    notFound: {
      title: 'Page not found',
      body: "This page doesn't exist.",
      home: 'Go to the home page',
    },
  },
  es: {
    name: 'Xavier Banchón González',
    title: 'Ingeniero de automatización QA',
    location: 'Samborondón, Ecuador',
    availability: 'Disponible para trabajo remoto',
    description:
      'Ingeniero de automatización QA con experiencia en pruebas de software y automatización de pruebas para aplicaciones web y móviles en retail, servicios financieros e industria.',
    nav: {
      label: 'Principal',
      work: 'Trabajo',
      archive: 'Archivo',
      about: 'Sobre mí',
      contact: 'Contacto',
      allWork: 'Todo el trabajo',
    },
    languages: {
      en: 'View in English',
      es: 'Español, idioma actual',
    },
    pitch: {
      before: 'Construyo ',
      accent: 'sistemas automatizados de prueba',
      after: ' para aplicaciones web y móviles en retail, servicios financieros e industria.',
    },
    actions: {
      resume: 'Descargar CV',
      email: 'Escríbeme',
      seeWork: 'Ver el trabajo',
      caseStudy: 'Leer el caso de estudio',
      code: 'Ver el código',
      backToTop: 'Volver arriba',
    },
    glanceLabel: 'De un vistazo',
    glance: [
      { label: 'Automatización', value: 'Playwright, Appium, JavaScript/TypeScript' },
      { label: 'También trabajo con', value: 'APIs REST, SQL, Apache JMeter, Docker, Git, Linux' },
      { label: 'Seguridad de código', value: 'OWASP ZAP, SonarQube, OSV' },
      { label: 'Idiomas', value: 'Español (nativo), inglés (B1/B2)' },
    ],
    work: {
      title: 'Trabajo destacado',
      archiveLink: 'Todo lo demás, en el archivo',
      metaRole: 'Rol',
      metaStack: 'Tecnologías',
      metaWhen: 'Cuándo',
      resultLabel: 'Resultado',
    },
    lead: {
      slug: 'qa-automation',
      title: 'Automatización QA para aplicaciones empresariales',
      summary:
        'Pruebas de principio a fin para aplicaciones web y móviles de servicios financieros, industria y retail, con pruebas de regresión automatizadas en Playwright y hallazgos de seguridad del código reportados a los equipos de desarrollo.',
      role: 'Ingeniero de automatización QA, Binasystem',
      stack: 'Playwright, Azure DevOps',
      when: '2026 a la actualidad',
      result: { accent: 'Hasta 55% menos de tiempo', after: ' dedicado a ejecutar pruebas de regresión' },
      detail:
        'Más de 60 casos de prueba totalmente automatizados con Playwright · Más de 8 planes de prueba en más de 5 proyectos empresariales',
    },
    features: [
      {
        slug: 'image-processing-service',
        number: '02',
        title: 'Focal',
        summary: 'Un pipeline asíncrono de procesamiento de imágenes, desarrollado en Java con Spring Boot.',
        outcome: 'Seguridad de software, rate limiting, microservicios, APIs, gestión de colas y servicios en la nube',
        meta: 'Proyecto · Java, Spring Boot · 2026',
        code: repo('Focal'),
      },
      {
        slug: 'camera-monitoring',
        number: '03',
        title: 'Analítica de videovigilancia en tiempo real',
        summary:
          'Un sistema de procesamiento de datos para videovigilancia en tiempo real, en un equipo de cinco personas dedicado a aplicaciones web con inteligencia artificial integrada.',
        outcome: 'Propuse dos nuevas funcionalidades que mejoraron su capacidad de analítica en tiempo real',
        meta: 'Pasante de desarrollo web, Telconet · 2024',
        code: null,
      },
    ],
    archive: {
      title: 'Archivo',
      regionLabel: 'Tabla del archivo, desplazable',
      columns: { year: 'Año', project: 'Proyecto', what: 'Qué es', stack: 'Tecnologías', link: 'Enlace' },
      codeLabel: 'Código',
      rows: [
        {
          year: '2025',
          project: 'App de filtros faciales',
          what: 'Una app en Python que aplica filtros en tiempo real a los rostros usando puntos de referencia faciales, desarrollada con un compañero',
          stack: 'Python, MediaPipe, OpenCV, Tkinter',
          href: repo('facial-filters-app'),
          linkText: null,
        },
        {
          year: '2024',
          project: 'Servicio de procesamiento de imágenes (Go)',
          what: 'Una versión anterior del servicio, con autenticación de usuarios, almacenamiento de imágenes y caché',
          stack: 'Go, JWT, Supabase, Redis, PostgreSQL',
          href: repo('image-processing-service'),
          linkText: null,
        },
        {
          year: '2024',
          project: 'Servidor de difusión',
          what: 'Servidor y cliente de línea de comandos que retransmiten mensajes entre clientes conectados, con apagado controlado',
          stack: 'Go, WebSockets',
          href: repo('broadcast-server'),
          linkText: null,
        },
        {
          year: '2024',
          project: 'Herramienta de reportería automática',
          what: 'Nuevas funcionalidades que mejoraron la comunicación entre departamentos y mantuvieron la integridad de los datos compartidos',
          stack: 'Telconet',
          href: null,
          linkText: 'Interna',
        },
      ],
    },
    about: {
      title: 'Sobre mí',
      body: 'Soy ingeniero de automatización QA, con experiencia en pruebas de software y automatización de pruebas para aplicaciones web y móviles en los sectores de retail, servicios financieros e industria. Tengo dominio de la planificación de pruebas, el diseño de casos de prueba, las pruebas funcionales y la gestión de defectos con Azure DevOps, manejo Playwright y Appium, y tengo conocimientos prácticos de Angular y Flutter. También estoy familiarizado con SDLC, STLC y metodologías de pruebas de seguridad de aplicaciones, incluidas SAST, DAST y SCA.',
      experienceTitle: 'Experiencia',
      experience: [
        {
          dates: 'Jun 2026 a la actualidad',
          role: 'Ingeniero de automatización QA, Binasystem',
          impact:
            'Reduje hasta en 55% el tiempo de ejecución de pruebas de regresión al automatizar más de 60 casos de prueba con Playwright, y desarrollé y gestioné más de 8 planes de prueba en más de 5 proyectos empresariales.',
        },
        {
          dates: 'Feb a ago 2024',
          role: 'Pasante de desarrollo web, Telconet S.A.',
          impact: 'Propuse dos nuevas funcionalidades para un sistema de procesamiento de datos, mejorando la capacidad de analítica de videovigilancia en tiempo real.',
        },
      ],
    },
    contact: {
      before: '¿Buscas ',
      accent: 'automatización QA',
      after: '? Hablemos.',
    },
    caseStudy: {
      team: 'Equipo',
      resultLabel: 'Resultado',
      next: 'Siguiente proyecto',
    },
    notFound: {
      title: 'Página no encontrada',
      body: 'Esta página no existe.',
      home: 'Ir a la página de inicio',
    },
  },
} satisfies Record<Locale, unknown>;

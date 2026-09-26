/**
 * Todo el contenido del portafolio vive aquí. Para personalizarlo, edita
 * únicamente este archivo: los componentes en src/components solo lo leen
 * y lo muestran, no hace falta tocar JSX para cambiar texto.
 *
 * Todo lo que está entre [corchetes] es un placeholder pensado para que
 * lo reemplaces. Los campos opcionales (marcados como `undefined`) pueden
 * dejarse así y la sección/elemento correspondiente se oculta solo.
 */

export interface Stat {
  label: string
  value: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  tags: string[]
  /** Link a la demo o al sitio en producción. */
  href?: string
  /** Link al repositorio (GitHub, GitLab, etc.). */
  repo?: string
  /** Ruta de una captura del proyecto, colocada en /public. Ej: '/projects/mi-proyecto.jpg' */
  image?: string
  featured?: boolean
  /** Categoría para el filtro de la sección Proyectos. */
  category: 'Landing' | 'Full Stack' | 'Portafolio'
}

export interface ExperienceItem {
  role: string
  /** Empresa, o el contexto del trabajo si fue independiente/informal. */
  company: string
  /** Deja `undefined` si no quieres mostrar fechas (mejor eso que inventarlas). */
  period?: string
  /** 3-5 viñetas cortas con lo que hiciste en ese rol. */
  highlights: string[]
}

export interface EducationItem {
  title: string
  institution: string
  period: string
}

export type SocialIcon = 'github' | 'linkedin' | 'x' | 'mail' | 'website'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIcon
}

export interface PortfolioData {
  name: string
  role: string
  location: string
  availability: string
  tagline: string
  heroSubtext: string
  email: string
  /** Ruta al PDF del CV dentro de /public. Deja `undefined` para ocultar el botón de descarga. */
  resumeUrl?: string
  /** Ruta a tu foto dentro de /public, ej. '/avatar.jpg'. Deja `undefined` para usar el monograma. */
  avatarUrl?: string
  about: {
    paragraphs: string[]
    stats: Stat[]
  }
  skills: SkillGroup[]
  projects: Project[]
  experience: ExperienceItem[]
  education: EducationItem[]
  social: SocialLink[]
}

export const portfolio: PortfolioData = {
  // Asumí "Luciano Rodríguez López" (nombre + ambos apellidos, con tildes) porque
  // así nombraste tu propio CV. Si lo quieres distinto (con "Manuel", sin tildes,
  // en otro orden), cambialo acá nomás.
  name: 'Luciano Rodríguez López',
  role: 'Desarrollador Full Stack Junior',
  location: 'Famaillá, Tucumán, Argentina',
  availability: 'Disponible todo el día, todos los días',
  tagline:
    'Desarrollador Full Stack Junior especializado en React y TypeScript, construyendo interfaces web prolijas y funcionales.',
  heroSubtext:
    'Desarrollador Full Stack Junior enfocado en React y TypeScript, con ganas de seguir creciendo y aportar en proyectos reales.',
  email: 'luciano07.rodri@gmail.com',
  resumeUrl: '/CV_Luciano_Rodriguez_Lopez.pdf',
  avatarUrl: '/avatar.jpg',

  about: {
    paragraphs: [
      'Estudiante de Tecnicatura en Programación y desarrollador Full Stack Junior. Me apasiona crear aplicaciones web, resolver problemas mediante la programación y aprender nuevas tecnologías.',
      'Tengo experiencia académica y práctica desarrollando proyectos con HTML, CSS, JavaScript, Python y otras tecnologías. Busco seguir creciendo profesionalmente y participar en proyectos donde pueda aportar y adquirir experiencia.',
    ],
    stats: [
      { label: 'Proyectos publicados', value: '12' },
      { label: 'Stack principal', value: 'React' },
      { label: 'Disponibilidad', value: 'Full-time' },
    ],
  },

  // HTML/CSS/JS/Python salen de tu bio. El resto (React, TypeScript, Tailwind,
  // Vite, Motion) lo confirmé revisando el código de tus 3 repos, para no poner
  // tecnologías que en realidad no usaste.
  skills: [
    { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS'] },
    { label: 'Animación y 3D', items: ['GSAP', 'Motion', 'Lenis', 'Three.js'] },
    { label: 'Backend y datos', items: ['Supabase', 'Python'] },
    { label: 'Herramientas', items: ['Vite', 'Vitest', 'Playwright', 'Git', 'GitHub', 'Vercel'] },
  ],

  projects: [
    {
      id: 'terra',
      name: 'Terra',
      description:
        'Landing page inmersiva sobre cambio climático: estadísticas verificadas, causas de la crisis y acciones concretas para impulsar energías renovables y el cuidado ambiental.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
      href: 'https://terra-two-bice.vercel.app',
      repo: 'https://github.com/kilorito2/Terra',
      image: '/projects/terra.jpg',
      featured: true,
      category: 'Landing',
    },
    {
      id: 'hinode',
      name: 'HINODE',
      description:
        'Landing scrollytelling para una marca ficticia de silencio y rituales diarios: hero fijado con dolly-zoom del sol, camino de montaña que se dibuja al scrollear y campo de nieve en Three.js.',
      tags: ['React', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind CSS'],
      href: 'https://hinode-ashy.vercel.app',
      repo: 'https://github.com/kilorito2/hinode',
      image: '/projects/hinode.jpg',
      category: 'Landing',
    },
    {
      id: 'armand-de-brignac-brut',
      name: 'Armand de Brignac · Brut',
      description:
        'Landing conceptual contada con el scroll: la caja laqueada se abre, la botella aparece vestida de oro y las piezas se ensamblan en la foto final. Todo se renderiza en local, sin requests externos. Proyecto de portfolio, no afiliado a la marca.',
      tags: ['React', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind CSS'],
      href: 'https://armand-de-brignac-brut.vercel.app',
      repo: 'https://github.com/kilorito2/armand-de-brignac-brut',
      image: '/projects/armand-de-brignac-brut.jpg',
      category: 'Landing',
    },
    {
      id: 'nocturne',
      name: 'NOCTURNE',
      description:
        'Concept piece de portfolio (no oficial): landing scrollytelling para un bolso de lujo, con animaciones GSAP, pantalla de carga con contador y assets optimizados vía Cloudinary.',
      tags: ['React', 'TypeScript', 'GSAP', 'Three.js', 'Tailwind CSS'],
      href: 'https://nocturne-delta-brown.vercel.app',
      repo: 'https://github.com/kilorito2/nocturne',
      image: '/projects/nocturne.jpg',
      category: 'Landing',
    },
    {
      id: 'velmont-grand-hotel',
      name: 'Velmont Grand Hotel',
      description:
        'Sitio de un hotel de lujo en la Côte d\'Azur: hero a pantalla completa, buscador de reservas y secciones de estancia, gastronomía, wellness y experiencias.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      href: 'https://velmont-grand-hotel.vercel.app',
      repo: 'https://github.com/kilorito2/velmont-grand-hotel',
      image: '/projects/velmont-grand-hotel.jpg',
      category: 'Landing',
    },
    {
      id: 'altitude-landing',
      name: 'Altitude',
      description:
        'Landing de una plataforma de datos satelitales y de sensores procesados en tiempo real para clima, agricultura y logística, con hero cinematográfico y sección de arquitectura.',
      tags: ['Vite', 'JavaScript', 'CSS'],
      href: 'https://altitude-landing-iota.vercel.app',
      repo: 'https://github.com/kilorito2/altitude-landing',
      image: '/projects/altitude-landing.jpg',
      category: 'Landing',
    },
    {
      id: 'ia-landing-page',
      name: 'Programming, Rewritten by AI',
      description:
        'Landing editorial sobre cómo la IA está cambiando la programación, con tipografía pixelada, fondo generativo y secciones de investigación e insights.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      href: 'https://ia-landing-page-green.vercel.app',
      repo: 'https://github.com/kilorito2/ia-landing-page',
      image: '/projects/ia-landing-page.jpg',
      category: 'Landing',
    },
    {
      id: 'portafolio-camarografo',
      name: 'Emilia Duarte · Foto & Cine',
      description:
        'Portafolio para una fotógrafa y camarógrafa: intro con scroll fijado donde el video se reproduce mientras el texto se revela, y galería de trabajos con animaciones GSAP.',
      tags: ['React', 'GSAP', 'Lenis'],
      href: 'https://portafolio-camarografo.vercel.app',
      repo: 'https://github.com/kilorito2/portafolio-camarografo',
      image: '/projects/portafolio-camarografo.jpg',
      category: 'Portafolio',
    },
    {
      id: 'vex',
      name: 'Vex',
      description:
        'Landing page sobre exploración y conservación del océano profundo: presenta una organización que financia expediciones, tecnología de investigación y datos abiertos frente al avance de la minería del lecho marino.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      href: 'https://vex-eight-liart.vercel.app',
      repo: 'https://github.com/kilorito2/Vex',
      image: '/projects/vex.jpg',
      category: 'Landing',
    },
    {
      id: 'lanitas-tejidas',
      name: 'Lanitas Tejidas',
      description:
        'Landing page para un emprendimiento de tejidos a crochet hechos a mano: amigurumis, gorros, mantas y accesorios, con galería de productos y contacto directo por WhatsApp e Instagram.',
      tags: ['React', 'Vite', 'Tailwind CSS'],
      href: 'https://lanitas-tejidas.vercel.app',
      repo: 'https://github.com/kilorito2/Lanitas-Tejidas',
      image: '/projects/lanitas-tejidas.jpg',
      category: 'Landing',
    },
    {
      id: 'huso',
      name: 'Huso',
      description:
        'SaaS open source de agenda pública para freelancers y equipos chicos: reservas online, disponibilidad, zonas horarias y emails automáticos de confirmación/recordatorio.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      repo: 'https://github.com/kilorito2/Open-source-scheduling-SaaS',
      image: '/projects/huso.jpg',
      category: 'Full Stack',
    },
    {
      id: 'traza',
      name: 'Traza',
      description:
        'Panel de productividad climática y ESG para pymes: centraliza energía, residuos y viajes en un solo lugar, calcula un score ESG y sugiere recomendaciones accionables.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Recharts'],
      repo: 'https://github.com/kilorito2/Climate-ESG-productivity-dashboard',
      image: '/projects/traza.jpg',
      category: 'Full Stack',
    },
  ],

  // Sin fechas inventadas, tal como pediste: uso el contexto de cada rol en vez de un año.
  experience: [
    {
      role: 'Asistente de Soporte Técnico Informal',
      company: 'Experiencia independiente',
      highlights: [
        'Diagnóstico y resolución de problemas básicos de computadoras',
        'Instalación y configuración de programas y aplicaciones',
        'Mantenimiento preventivo de equipos informáticos',
        'Asesoramiento a usuarios sobre herramientas tecnológicas',
        'Organización y seguimiento de tareas técnicas',
      ],
    },
    {
      role: 'Proyectos Académicos de Programación',
      company: 'Proyectos académicos',
      highlights: [
        'Desarrollo de programas utilizando distintos lenguajes',
        'Resolución de problemas mediante lógica computacional',
        'Trabajo en equipo en proyectos de programación',
        'Aplicación de buenas prácticas de programación',
      ],
    },
    {
      role: 'Atención y Gestión de Redes Sociales',
      company: 'Colaboraciones ocasionales',
      highlights: [
        'Atención de consultas de clientes',
        'Organización de publicaciones y contenido',
        'Seguimiento de mensajes y atención al público',
      ],
    },
  ],

  education: [
    {
      title: 'Tecnicatura en Programación',
      institution: 'Universidad Tecnológica Nacional (UTN)',
      period: 'En curso',
    },
  ],

  social: [
    { label: 'GitHub', href: 'https://github.com/kilorito2', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kilorito/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:luciano07.rodri@gmail.com', icon: 'mail' },
  ],
}

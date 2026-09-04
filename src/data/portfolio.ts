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
      { label: 'Proyectos destacados', value: '5' },
      { label: 'Stack principal', value: 'React' },
      { label: 'Disponibilidad', value: 'Full-time' },
    ],
  },

  // HTML/CSS/JS/Python salen de tu bio. El resto (React, TypeScript, Tailwind,
  // Vite, Motion) lo confirmé revisando el código de tus 3 repos, para no poner
  // tecnologías que en realidad no usaste.
  skills: [
    { label: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'] },
    { label: 'Lenguajes y herramientas', items: ['Python', 'Vite', 'Git', 'GitHub'] },
  ],

  projects: [
    {
      id: 'terra',
      name: 'Terra',
      description:
        'Landing page inmersiva sobre cambio climático: estadísticas verificadas, causas de la crisis y acciones concretas para impulsar energías renovables y el cuidado ambiental.',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
      href: undefined,
      repo: 'https://github.com/kilorito2/Terra',
      image: '/projects/terra.jpg',
      featured: true,
    },
    {
      id: 'lanitas-tejidas',
      name: 'Lanitas Tejidas',
      description:
        'Landing page para un emprendimiento de tejidos a crochet hechos a mano: amigurumis, gorros, mantas y accesorios, con galería de productos y contacto directo por WhatsApp e Instagram.',
      tags: ['React', 'Vite', 'Tailwind CSS'],
      href: undefined,
      repo: 'https://github.com/kilorito2/Lanitas-Tejidas',
      image: '/projects/lanitas-tejidas.jpg',
    },
    {
      id: 'vex',
      name: 'Vex',
      description:
        'Landing page sobre exploración y conservación del océano profundo: presenta una organización que financia expediciones, tecnología de investigación y datos abiertos frente al avance de la minería del lecho marino.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      href: undefined,
      repo: 'https://github.com/kilorito2/Vex',
      image: '/projects/vex.jpg',
    },
    {
      id: 'huso',
      name: 'Huso',
      description:
        'SaaS open source de agenda pública para freelancers y equipos chicos: reservas online, disponibilidad, zonas horarias y emails automáticos de confirmación/recordatorio.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS'],
      // TODO: reemplazar por la URL del deploy en Vercel una vez publicado (ej. huso-demo.vercel.app).
      href: undefined,
      repo: 'https://github.com/kilorito2/Open-source-scheduling-SaaS',
      image: undefined,
    },
    {
      id: 'traza',
      name: 'Traza',
      description:
        'Panel de productividad climática y ESG para pymes: centraliza energía, residuos y viajes en un solo lugar, calcula un score ESG y sugiere recomendaciones accionables.',
      tags: ['Next.js', 'TypeScript', 'Supabase', 'Recharts'],
      // TODO: reemplazar por la URL del deploy en Vercel una vez publicado (ej. traza-demo.vercel.app).
      href: undefined,
      repo: 'https://github.com/kilorito2/Climate-ESG-productivity-dashboard',
      image: undefined,
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

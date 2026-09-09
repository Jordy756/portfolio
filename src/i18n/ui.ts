const nav = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
  },
};

const header = {
  en: {
    'header.logo.action': 'Go to Home',
    'header.logo.alt': 'Logo JC',
  },
  es: {
    'header.logo.action': 'Ir a Inicio',
    'header.logo.alt': 'Logo JC',
  },
};

const marquee = {
  en: {
    'marquee.phrase.1': 'Web Developer',
    'marquee.phrase.2': 'Frontend Developer',
    'marquee.phrase.3': 'Backend Developer',
    'marquee.phrase.4': 'UI/UX Designer',
  },
  es: {
    'marquee.phrase.1': 'Desarrollador Web',
    'marquee.phrase.2': 'Desarrollador Frontend',
    'marquee.phrase.3': 'Desarrollador Backend',
    'marquee.phrase.4': 'Diseñador UI/UX',
  },
};

const hero = {
  en: {
    'hero.downloadCV': 'Download CV',
    'hero.image.alt': 'Knight illustration',
  },
  es: {
    'hero.downloadCV': 'Descargar CV',
    'hero.image.alt': 'Ilustración de un caballero',
  },
};

const aboutMe = {
  en: {
    'aboutMe.heading': 'About Me',
    'aboutMe.paragraph.1':
      'Full Stack Developer with over 1 year of professional experience in building web applications and digital solutions.',
    'aboutMe.paragraph.2':
      'Adaptable, self-taught, and passionate about continuous learning, I bring strong analytical abilities, collaborative teamwork in agile environments, and effective technical communication.',
    'aboutMe.paragraph.3':
      'Committed to delivering robust and efficient solutions that integrate business requirements and end-user experience. Specialized in modern technologies, clean architectures, microservices, and SOLID principles.',
  },
  es: {
    'aboutMe.heading': 'Sobre mí',
    'aboutMe.paragraph.1':
      'Desarrollador Full Stack con más de 1 año de experiencia profesional en la construcción de aplicaciones web y soluciones digitales.',
    'aboutMe.paragraph.2':
      'Adaptable, autodidacta y apasionado por el aprendizaje continuo, aporto sólidas capacidades analíticas, trabajo colaborativo en entornos ágiles y comunicación técnica eficaz.',
    'aboutMe.paragraph.3':
      'Comprometido con entregar soluciones robustas y eficientes que integran los requisitos del negocio y la experiencia del usuario final. Especializado en tecnologías modernas, arquitecturas limpias, microservicios y principios SOLID.',
  },
};

const experience = {
  en: {
    'experience.heading': 'Experience',
    'experience.paragraph.1':
      'Mono X7 is a canvas for the digital age. An Internet-connected "link display" that fuses a record-thin 17.3-inch screen with a mini-computer, it creates an elegant, meditative space for experiencing the web like never before.',
    'experience.paragraph.2':
      'Designed for the best the Web has to offer: stunning photography, posters and illustrations, poetic animations, experiments or dynamic visualizations created with code. With Mono X7, digital gems turn into treasures. A tribute to digital creators worldwide.',
    'experience.paragraph.3':
      'Mono X7 pre-orders are opening in October 2021. Sign up early to hear the instant Mono X7 is available in your region. Limited quantities available.',
  },
  es: {
    'experience.heading': 'Experiencia',
    'experience.paragraph.1':
      'Mono X7 es un lienzo para la era digital. Una "pantalla de enlaces" conectada a Internet que fusiona una pantalla ultrafina de 17,3 pulgadas con un miniordenador, creando un espacio elegante y meditativo para experimentar la web como nunca antes.',
    'experience.paragraph.2':
      'Diseñado para lo mejor que ofrece la web: fotografía impresionante, pósteres e ilustraciones, animaciones poéticas, experimentos o visualizaciones dinámicas creadas con código. Con Mono X7, las joyas digitales se convierten en tesoros. Un tributo a los creadores digitales de todo el mundo.',
    'experience.paragraph.3':
      'Las reservas de Mono X7 se abren en octubre de 2021. Regístrate temprano para enterarte al instante de cuándo esté disponible Mono X7 en tu región. Cantidades limitadas.',
  },
};

const contactMe = {
  en: {
    'contactMe.heading': "Let's build together.",
    'contactMe.sendMessage': 'Send Message',
  },
  es: {
    'contactMe.heading': 'Creamos algo grande?',
    'contactMe.sendMessage': 'Enviar Mensaje',
  },
};

const socialMedia = {
  en: {
    'github.ariaLabel': 'Visit my GitHub profile',
    'linkedin.ariaLabel': 'Visit my LinkedIn profile',
    'spotify.ariaLabel': 'Listen to my Spotify playlist',
  },
  es: {
    'github.ariaLabel': 'Visita mi perfil de GitHub',
    'linkedin.ariaLabel': 'Visita mi perfil de LinkedIn',
    'spotify.ariaLabel': 'Escucha mi playlist de Spotify',
  },
};

const meta = {
  en: {
    'meta.og.site_name': 'Alura Encryptor',
    'meta.og.image.alt': 'Preview of Alura Encryptor for encrypting and decrypting texts',
    'meta.og.locale': 'en_US',
  },
  es: {
    'meta.og.site_name': 'Alura Encryptor',
    'meta.og.image.alt': 'Vista previa de Alura Encryptor para cifrar y descifrar textos',
    'meta.og.locale': 'es_ES',
  },
};

const home = {
  en: {
    'home.title': 'Jordy Castro | Portfolio',
    'home.description': 'des',
  },
  es: {
    'home.title': 'Jordy Castro | Portafolio',
    'home.description': 'des',
  },
};

const notFound = {
  en: {
    'notFound.title': '404 — Not Found',
    'notFound.description': 'The page you are looking for does not exist.',
  },
  es: {
    'notFound.title': '404 — No Encontrado',
    'notFound.description': 'La página que estás buscando no existe.',
  },
};

export const ui = {
  en: {
    ...nav.en,
    ...header.en,
    ...marquee.en,
    ...hero.en,
    ...aboutMe.en,
    ...experience.en,
    ...contactMe.en,
    ...socialMedia.en,
    ...meta.en,
    ...home.en,
    ...notFound.en,
  },
  es: {
    ...nav.es,
    ...header.es,
    ...marquee.es,
    ...hero.es,
    ...aboutMe.es,
    ...experience.es,
    ...contactMe.es,
    ...socialMedia.es,
    ...meta.es,
    ...home.es,
    ...notFound.es,
  },
} as const;

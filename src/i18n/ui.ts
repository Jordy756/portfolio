import en from '@data/en.json';
import es from '@data/es.json';

const navigation = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.aria.main': 'Main',
    'nav.aria.languages': 'Language selector',
    'nav.aria.footer': 'Site',
    'nav.aria.social': 'Social media',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'nav.aria.main': 'Principal',
    'nav.aria.languages': 'Selector de idioma',
    'nav.aria.footer': 'Sitio',
    'nav.aria.social': 'Redes sociales',
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
    ...navigation.en,
    ...header.en,
    ...marquee.en,
    ...hero.en,
    ...socialMedia.en,
    ...meta.en,
    ...home.en,
    ...notFound.en,
  },
  es: {
    ...navigation.es,
    ...header.es,
    ...marquee.es,
    ...hero.es,
    ...socialMedia.es,
    ...meta.es,
    ...home.es,
    ...notFound.es,
  },
} as const;

export const content = { en, es } as const;

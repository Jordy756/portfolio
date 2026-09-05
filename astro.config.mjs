// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',

  integrations: [sitemap()],

  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },

  fonts: [
    {
      name: 'Host Grotesk',
      cssVariable: '--font-host-grotesk',
      provider: fontProviders.google(),
      display: 'swap',
      subsets: ['latin'],
      styles: ['normal'],
      weights: [300, 400, 600],
      formats: ['woff2'],
      unicodeRange: ['U+0000-00FF'],
      fallbacks: ['sans-serif'],
    },
    {
      name: 'Barlow Condensed',
      cssVariable: '--font-barlow-condensed',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      formats: ['woff2'],
      fallbacks: ['sans-serif', 'system-ui'],
    },
    {
      name: 'Bebas Neue',
      cssVariable: '--font-bebas-neue',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      formats: ['woff2'],
      fallbacks: ['sans-serif', 'system-ui'],
    }
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});

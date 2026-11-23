// nuxt.config.ts
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    apiBaseUrl: 'http://vuelab-api:4000',
    public: {
      siteName: 'Acme Digital',
      siteUrl: 'http://localhost:3000',
      apiBase: '/api',
    },
  },

  app: {
    head: {
      titleTemplate: '%s | Acme Digital',
      title: 'Home',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Modern web solutions and digital strategy built to scale your business.',
        },
      ],
      script: [
        {
          tagPosition: 'head',
          innerHTML: `
            (function() {
              try {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            })();
          `,
        },
      ],
    },
  },
})
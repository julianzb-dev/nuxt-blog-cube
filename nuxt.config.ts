// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            // Default theme (same as single string)
            default: 'github-light',
            // Theme used if `html.dark`
            dark: 'github-dark',
            // Theme used if `html.sepia`
            sepia: 'monokai'
          },
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3001/api'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        {
          rel: 'stylesheet',
          href: 'https://assets.bux.osu.edu/bux-webfonts2/bux-webfonts2.css'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  hub: {
    database  : true
  },
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/styles.css'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxthub/core',
    '@vueuse/nuxt',
    '@nuxt/image'
  ],
  nitro: {
    experimental: {
      tasks: true
    }
  },
  image: {
    format: ['webp'],
    presets: {
      avatar: {
        modifiers: {
          format: 'webp',
          width: 192,
          height: 192
        }
      }
    }
  }
})
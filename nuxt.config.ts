// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/styles.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/eslint']
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/ionic'],
  ssr: false,
  css: [
    '@/assets/css/global.css', // your custom CSS file
    '@ionic/core/css/ionic.bundle.css' // Ionic's built-in CSS (optional)
  ],
  build: {
    transpile: ['@ionic/vue'] // Transpile Ionic Vue components
  }
})
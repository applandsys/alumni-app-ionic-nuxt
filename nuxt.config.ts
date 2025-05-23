import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/ionic', '@pinia/nuxt', 'nuxt-lucide-icons'],
  lucide: {
    namePrefix: 'Icon'
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_URL || '127.0.0.1:8000/api/v1',
      imageBase:  process.env.IMAGE_URL || '127.0.0.1:8000',
      appScope:  process.env.APP_SCOPE || 'normal',
    },
  },
  ssr: false,
  css: [
    '@/assets/css/global.css', // your custom CSS file
    '@ionic/core/css/ionic.bundle.css' // Ionic's built-in CSS (optional)
  ],
  build: {
    transpile: ['@ionic/vue'] // Transpile Ionic Vue components
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})

// 127.0.0.1:8000/api/v1
// 127.0.0.1:8000
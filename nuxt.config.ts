// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  modules: [
    '@element-plus/nuxt'
  ],

  elementPlus: {
    /** Options */
  },

  css: [
    '~/assets/styles/main.scss'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/styles/variables.scss" as *;'
        }
      }
    }
  },

  app: {
    head: {
      title: 'Nuxt 3 + Element Plus',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Nuxt 3 with Element Plus' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

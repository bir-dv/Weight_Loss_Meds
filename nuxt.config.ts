// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css', 'vuetify/lib/styles/main.sass'],



  build: {
    transpile: ['vuetify'],
  },


  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // modules: [
  //   (_options, nuxt) => {
  //     nuxt.hooks.hook('vite:extendConfig', (config) => {
  //       // @ts-expect-error
  //       config.plugins.push(vuetify({ autoImport: true }))
  //     })
  //   },
  //   //...
  // ],
  
})

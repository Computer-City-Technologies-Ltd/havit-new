// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        { src: './node_modules/flyonui/dist/js/flyonui.js' }
      ]
    }
  },  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  plugins: ["~/plugins/flyonui.client.ts"],
})
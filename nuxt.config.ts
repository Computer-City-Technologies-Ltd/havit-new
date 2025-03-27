// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],
  plugins: ["~/plugins/flyonui.client.ts"],
  css: ["~/assets/css/font.css"],
  site: {
    url: 'http://192.168.1.177:3000',
    name: 'Nuxt Sitemap Demo',
  },
  sitemap: {
    sources: ['/api/__sitemap__/urls'],
  }
})
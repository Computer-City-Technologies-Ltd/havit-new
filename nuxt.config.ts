import { routes } from "vue-router/auto-routes";
import { defineLocalBusiness } from 'nuxt-schema-org/schema';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({  
  app: {
    head: {
      title: 'Havit Bangladesh', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-schema-org',
    'nuxt-og-image'
  ],
  plugins: ["~/plugins/flyonui.client.ts"],
  css: ["~/assets/css/font.css"],
  site: {
    url: 'https://startling-mermaid-0a6bf5.netlify.app/',
    // url: 'http://192.168.1.177:3000',
    name: 'Havit Bangladesh',
  }
})
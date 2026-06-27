// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/apollo'
  ],



  image: {
    providers: {
      hygraph: {
        baseurl: "https://media.graphassets.com"
      }
    }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://eu-west-2.cdn.hygraph.com/content/cmq5g8l09008n07uv5yzacwne/master'
      }
    }
  }




})
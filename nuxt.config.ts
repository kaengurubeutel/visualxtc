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
    '@nuxtjs/apollo',
    '@nuxt/fonts'
  ],



  image: {
    providers: {
      hygraph: {
        baseurl: "https://eu-west-2.graphassets.com/"
      }
    }
  },

  runtimeConfig: {
    public: {
      hygraphEndpoint: process.env.HYGRAPH_ENDPOINT
    }
  },

  apollo: {

    autoImports: true,
    clients: {
      default: {
        httpEndpoint: (process.env.HYGRAPH_ENDPOINT || '') as string
      }
    }
  },

  css: ["~/assets/style/main.scss"],
}




)
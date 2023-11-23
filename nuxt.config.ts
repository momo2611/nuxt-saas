// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/supabase",
    "nuxt-icon",
    "@pinia/nuxt",
  ],
  components: [
    {
      path: "~/components/ui",
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
      // prefix for your components, eg: UiButton
      pathPrefix: false,
    },
    {
      path: "~/components",
      // this is required else Nuxt will autoImport `.ts` file
      extensions: [".vue"],
      // prefix for your components, eg: UiButton
      pathPrefix: false,
    },
  ],
  supabase: {
    redirectOptions: {
      login: "/auth",
      callback: "/confirm",
      exclude: ["/"],
    },
  },
  runtimeConfig: {
    openaiKey: "",
    replicateKey: "",
    stripeSecret: "",
    stripeWebhookSecret: "",
    appUrl: "",
    public: {
      publicStripeKey: "",
    },
  },
  devtools: { enabled: true },
});

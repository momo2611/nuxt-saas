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
    openaiKey: process.env.NUXT_OPENAI_KEY,
    replicateKey: process.env.NUXT_REPLICATE_KEY,
    stripeSecret: process.env.NUXT_STRIPE_SECRET,
    stripeWebhookSecret: process.env.NUXT_STRIPE_WEBHOOK_SECRET,
    appUrl: process.env.NUXT_APP_URL,
    public: {
      publicStripeKey: process.env.NUXT_PUBLIC_STRIPE_KEY,
    },
  },
  devtools: { enabled: true },
});

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '@unocss/reset/tailwind.css',
    'uno.css',
    '~/styles/main.css',
    '~/styles/default-theme.css',
    '~/styles/vars.css',
  ],
})

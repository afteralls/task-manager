export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@formkit/auto-animate/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@vite-pwa/nuxt'
  ],
  nitro: {
    compressPublicAssets: true
  },
  devtools: {
    enabled: false
  },
  ssr: false,
  css: ['@/assets/styles/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/module.scss" as *;'
        }
      }
    }
  },
  colorMode: {
    fallback: 'dark',
    hid: 'theme-script',
    globalName: '__THEME__',
    componentName: 'ColorScheme',
    classSuffix: '',
    storageKey: 'theme'
  },
  imports: {
    dirs: ['./constants']
  },
  image: {
    inject: true,
    format: ['webp']
  },
  i18n: {
    vueI18n: './locale/i18n.config.ts',
    strategy: 'no_prefix',
    defaultLocale: 'ru',
    lazy: true,
    langDir: './locale/lang',
    experimental: {
      jsTsFormatResource: true
    },
    locales: [
      { code: 'en', name: 'English', iso: 'en', file: 'en.ts' },
      { code: 'ru', name: 'Русский', iso: 'ru', file: 'ru.ts' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18nRed',
      redirectOn: 'root'
    }
  },
  pwa: {
    includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'safari-pinned-tab.svg'],
    manifest: {
      name: 'Task manager',
      short_name: 'Task manager',
      description: 'A small test application for creating and managing tasks',
      theme_color: '#FFFFFF',
      icons: [
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    strategies: 'generateSW',
    workbox: {
      globPatterns: ['**/*.{js,css}'],
      navigateFallback: null
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 20
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'theme-color', content: '#FFFFFF' }],
      title: 'Task manager'
    },
    layoutTransition: { name: 'main', mode: 'out-in' },
    pageTransition: { name: 'slide', mode: 'out-in' }
  }
})

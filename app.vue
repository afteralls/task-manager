<template>
  <div id="app">
    <AppNotifications />
    <VitePwaManifest />
    <NuxtLoadingIndicator color="var(--m)" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const i18nHead = useLocaleHead({ addSeoAttributes: true })
const themeHandler = computed(() => (useColorMode().value === 'dark' ? '#0c0c0d' : '#ffffff'))
const route = useRoute()

useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs!.lang },
  title: () => t(`page.${route.name as string}.title`),
  meta: [{ name: 'theme-color', content: () => themeHandler.value }]
})

const title = '#TaskManager'
const desc = computed(() => t('page.index.desc'))
const image = '/main.webp'

useSeoMeta({
  description: () => desc.value,
  ogTitle: title,
  ogDescription: () => desc.value,
  ogImage: image,
  ogUrl: 'https://afteralls.netlify.app/',
  twitterTitle: title,
  twitterDescription: () => desc.value,
  twitterImage: image,
  twitterCard: 'summary'
})
</script>

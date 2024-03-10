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

useHead({
  htmlAttrs: { lang: () => i18nHead.value.htmlAttrs!.lang },
  title: () => t(`page.title`),
  meta: [{ name: 'theme-color', content: () => themeHandler.value }]
})
</script>

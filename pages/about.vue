<template>
  <USpace display="col" gap="lg">
    <USpace mode="center" class="logo-wrapper">
      <UIcon size="full" :name="ICON_TASK" />
    </USpace>
    <USpace display="col" gap="sm" mode="center" style="max-width: 27rem">
      <UText type="p" gray :text="$t('page.about.app')" />
      <UText type="h2" :text="$t('page.index.title')" />
      <UText type="p" gray :text="$t('page.about.gratitude')" />
      <ULink to="/" :title="$t('page.global.home')" :icon="ICON_HOME" mode="hybrid" />
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
definePageMeta({
  layoutTransition: {
    name: 'slide-bottom',
    mode: 'out-in'
  }
})
</script>

<style scoped lang="scss">
@import url('@/assets/styles/app/logo-wrapper.scss');
</style>

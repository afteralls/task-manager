<template>
  <AppLayout :title="$t('page.editor.title')" :desc="$t('page.editor.desc')">
    <USpace display="row" full class="layout">
      <PageOptions />
      <PageList />
    </USpace>
  </AppLayout>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'main' })
</script>

<style scoped lang="scss">
.layout {
  align-items: flex-start;

  @media (max-width: $md) {
    flex-direction: column;
  }
}
</style>

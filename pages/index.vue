<template>
  <USpace layout="wrapper" class="_mob">
    <USpace type="section" display="row" pos="between" class="home">
      <USpace display="col" class="info">
        <UText type="p" gray mode="bg" :text="$t('page.index.welcome')" />
        <UText type="h1" :text="$t('page.index.title')" />
        <UText type="p" gray mode="bg" :text="$t('page.index.desc')" />
        <USpace display="row" class="column">
          <ULink
            to="/editor"
            icon="icon-park-solid:more-app"
            :title="$t('page.editor.title')"
            mode="hybrid"
          />
          <ULink
            to="/about"
            icon="icon-park-solid:more-app"
            :title="$t('page.about.short')"
            mode="hybrid"
          />
        </USpace>
      </USpace>
      <USpace mode="center" class="logo-wrapper" style="transform: scale(1.3)">
        <UIcon size="full" :name="ICON_TASK" />
      </USpace>
    </USpace>
  </USpace>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'main' })
</script>

<style scoped lang="scss">
@import url('@/assets/styles/app/logo-wrapper.scss');

.home {
  width: 100%;
  @media (max-width: $lg) {
    flex-direction: column-reverse;
  }
}

.info {
  align-items: flex-start;
  max-width: toRem(600);

  @media (max-width: $lg) {
    text-align: center;
    align-items: center;
  }
}

.column {
  @media (max-width: $zf) {
    flex-direction: column;
  }
}
</style>

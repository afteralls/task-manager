<template>
  <div class="header-wrapper">
    <USpace layout="container">
      <USpace display="row" pos="between" full class="header">
        <ULink to="/" title="#TaskManager" :icon="ICON_TASK" mode="index" />
        <AppSettings />
      </USpace>
    </USpace>
  </div>
</template>

<style scoped lang="scss">
.header-wrapper {
  position: sticky;
  box-sizing: border-box;
  top: 0;
  width: 100dvw;
  z-index: 85;
  backdrop-filter: blur(8px);
  background: linear-gradient(180deg, var(--bg) 0%, var(--tp) 100%);
  border-bottom: toRem(1) solid var(--br);
}

.header {
  height: var(--header-height);
  z-index: 80;

  @media (max-width: $sm) {
    height: var(--mob-header-height);
  }
}
</style>

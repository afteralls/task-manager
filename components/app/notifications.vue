<template>
  <USpace mode="center" class="notifications">
    <Transition name="notf" mode="out-in">
      <USpace v-if="store.notf" display="row" gap="sm" class="notification">
        <UIcon size="ui" name="mdi:bell-notification" />
        <UText :text="$t(store.notf)" />
      </USpace>
    </Transition>
  </USpace>
</template>

<script setup lang="ts">
const store = useNotfStore()
</script>

<style scoped lang="scss">
.notifications {
  width: 100dvw;
  transition: top var(--tr);
  position: fixed;
  z-index: 95;
  top: var(--header-height);

  @media (max-width: $sm) {
    top: var(--mob-header-height);
  }
}

.notification {
  border-radius: var(--br-rad);
  background-color: var(--bg);
  border: toRem(1) solid var(--br);
  padding: var(--space-m) var(--space);
  margin: var(--space);
  text-align: left;
}
</style>

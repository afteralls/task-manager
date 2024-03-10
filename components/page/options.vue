<template>
  <UWrapper
    :title="$t('page.editor.addTask')"
    class="options"
    icon="material-symbols:tv-options-edit-channels-rounded"
  >
    <UInput v-model="store.taskField" name="addT" :label="$t('app.name')" placeholder="1-100" />
    <template #action>
      <UButton
        :title="$t('app.add')"
        :icon="ICON_ADD"
        :disabled="!store.taskField.length"
        @trigger="addTask"
      />
    </template>
  </UWrapper>
</template>

<script setup lang="ts">
const store = useMainStore()

const addTask = () => {
  if (!store.tasks.includes(store.taskField)) {
    store.tasks.push(store.taskField)
    store.taskField = ''
  } else {
    const notf = useNotfStore()
    notf.setNotf('notf.alreadyExists')
  }
}
</script>

<style scoped lang="scss">
.options {
  min-width: 20rem;
  max-width: 20rem;
  position: sticky;
  top: calc(var(--header-height) + var(--space));

  @media (max-width: $md) {
    position: inherit;
    top: auto;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
  }
}
</style>

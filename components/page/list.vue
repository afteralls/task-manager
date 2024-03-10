<template>
  <UWrapper icon="fluent:note-pin-20-regular" :title="$t('page.editor.list')" :padding="false">
    <USpace v-auto-animate display="col" full mode="center">
      <USpace v-if="!store.tasks.length" display="col" mode="center" class="list">
        <UIcon :name="ICON_TASK" size="max" />
        <UText gray :text="$t('page.editor.tip')" />
      </USpace>
      <USpace v-else ref="dataTarget" v-auto-animate display="col" gap="none" full>
        <template v-for="(item, idx) in store.tasks" :key="item">
          <USpace display="row" full class="task">
            <UText type="p" gray :text="item" />
            <USpace display="row">
              <UButton
                :data-edit="item"
                :title="$t('app.edit')"
                :icon="ICON_EDIT"
                mode="icon"
                state="action"
              />
              <UButton
                :data-delete="item"
                :title="$t('app.delete')"
                :icon="ICON_DELETE"
                mode="icon"
                state="action"
              />
            </USpace>
          </USpace>
          <ULine v-if="idx + 1 !== store.tasks.length" mode="dashed" />
        </template>
      </USpace>
    </USpace>
  </UWrapper>
  <UModal v-model="showEditModal" :title="$t('app.editTask')">
    <UInput
      v-model="store.editTaskField"
      name="editT"
      :label="$t('app.name')"
      placeholder="1-100"
    />
    <template #action>
      <UButton
        :title="$t('app.edit')"
        :icon="ICON_ADD"
        :disabled="!store.editTaskField.length"
        @trigger="editTask"
      />
    </template>
  </UModal>
  <UModal v-model="showDeleteModal" :title="$t('app.sure')">
    <USpace display="col">
      <USpace mode="center" block="alt" style="border-color: red; color: red">
        <UText :text="$t('app.warning')" />
      </USpace>
    </USpace>
    <template #action>
      <UButton :title="$t('app.delete')" :icon="ICON_DELETE" @trigger="deleteTask" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const store = useMainStore()

const showEditModal = ref<boolean>(false)
const showDeleteModal = ref<boolean>(false)

const dataTarget = ref<HTMLDivElement>()
const currentTask = ref<string>('')

useEventListener(dataTarget, 'click', (evt) => {
  const target = evt.target as HTMLButtonElement
  currentTask.value = ''
  if (target.closest('[data-edit]')) {
    currentTask.value = target.dataset.edit!
    store.tasks.forEach((item) => {
      if (item === currentTask.value) {
        store.editTaskField = item
        showEditModal.value = !showEditModal.value
        return false
      }
    })
  } else if (target.closest('[data-delete]')) {
    currentTask.value = target.dataset.delete!
    showDeleteModal.value = !showDeleteModal.value
  }
})

const editTask = () => {
  for (let i = 0; i <= store.tasks.length; i++) {
    if (store.tasks[i] === currentTask.value) {
      store.tasks[i] = store.editTaskField
      showEditModal.value = !showEditModal.value
      return false
    }
  }
}

const deleteTask = () => {
  for (let i = 0; i <= store.tasks.length; i++) {
    if (store.tasks[i] === currentTask.value) {
      store.tasks.splice(i, 1)
      showDeleteModal.value = !showDeleteModal.value
      return false
    }
  }
}
</script>

<style scoped lang="scss">
.list {
  max-width: 18rem;
  padding: var(--space);
}

.task {
  align-items: flex-start;
  padding: var(--space);
  justify-content: space-between;

  p {
    text-overflow: ellipsis;
    overflow: hidden;
  }
}
</style>

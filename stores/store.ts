import { useStorage } from '@vueuse/core'

export const useMainStore = defineStore('main', () => {
  const taskField = ref<string>('')
  const editTaskField = ref<string>('')

  const tasks = useStorage<string[]>('tasks', [])

  return {
    tasks,
    taskField,
    editTaskField
  }
})

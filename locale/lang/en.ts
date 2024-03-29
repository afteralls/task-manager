export default defineI18nLocale(() => {
  return {
    notf: {
      sWW: 'Something went wrong...',
      invalidData: 'You entered incorrect information',
      alreadyExists: 'Such a task already exists',
      updated: 'Data updated successfully',
      correct: 'Check that the entered data is correct'
    },
    u: {
      emptyTip: 'No data to display...',
      errorTip: 'Failed to load data...',
      tableName: 'Table name',
      reload: 'Reload',
      close: 'Close',
      search: 'Search'
    },
    app: {
      name: 'Name',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      editTask: 'Edit task',
      sure: 'Are you sure?',
      warning: 'This action cannot be undone!',
      author: 'Author',
      authorName: 'Daniil Sukharnikov',
      pwa: {
        insTitle: "It's more convenient in the app!",
        insDesc: 'It weighs little and installation takes a couple of seconds',
        install: 'Install',
        updTitle: 'Update available!',
        updDesc: 'The application has become even better and faster',
        update: 'Update',
        cancel: 'Cancel'
      },
      settings: {
        title: 'Settings',
        lang: 'App language',
        theme: {
          title: 'Theme',
          system: 'System',
          dark: 'Dark',
          light: 'Light'
        },
        vibro: 'Haptic feedback',
        vibroDesc: 'Vibration response for notifications'
      }
    },
    page: {
      error: "Oops, looks like something went wrong. Don't worry, it's not your fault!",
      global: {
        home: 'Go back to main page'
      },
      index: {
        welcome: 'Welcome to...',
        short: 'TM',
        title: 'Task manager',
        desc: 'A small test application for creating and managing tasks'
      },
      about: {
        title: 'About application',
        short: 'About application',
        app: 'Application',
        gratitude: 'Made with ❤️ by Daniil Sukharnikov'
      },
      editor: {
        title: 'Editor',
        desc: 'On this page you can moderate the list of notes, use the necessary interfaces to create, edit and delete data',
        addTask: 'Add task',
        list: 'List of tasks',
        tip: 'Created tasks will be displayed here, try creating the first one'
      }
    }
  }
})

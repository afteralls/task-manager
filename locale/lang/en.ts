export default defineI18nLocale(() => {
  return {
    notf: {
      sWW: 'Something went wrong...',
      invalidData: 'You entered incorrect information',
      alreadyExists: 'Such data already exists',
      signIn: 'You have successfully logged in to your account!',
      signOut: 'You have successfully logged out of your account!',
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
      manual: 'Manual',
      iconTip: 'Icon designations',
      tipTitle: 'Tips',
      tipDesc: 'Remember that you can always hover over an icon to see a tip',
      tipScroll: 'Hold Shift to scroll tables horizontally',
      tip: {
        add: 'Adding an entry',
        reload: 'Updating data',
        edit: 'Editing entry',
        delete: 'Deleting an entry'
      },
      number: 'Number',
      name: 'Name',
      refresh: 'Refresh',
      addEntry: 'Add entry',
      editEntry: 'Edit entry',
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      sure: 'Are you sure?',
      actions: 'Actions',
      type: 'View',
      addImage: 'Add photo',
      details: 'Details...',
      warning: 'This action cannot be undone!',
      genUnique: 'Generate a unique number',
      unique: 'Unique number',
      connection: '(Connection)',
      offline: {
        title: "You don't seem to be connected to the internet...",
        desc: 'Check your network settings'
      },
      home: {
        welcome: 'Welcome!',
        hTip: 'Explore the sections available to you and configure the necessary data.',
        mTip: 'Use the navigation bar to begin moderating your settings'
      },
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
        logOut: 'Log out',
        addImage: 'Add photo',
        tipTitle: 'It looks like you are not logged in...',
        tipDesc: 'After authorization, additional account settings will become available to you',
        lang: 'App language',
        theme: {
          title: 'Theme',
          system: 'System',
          dark: 'Dark',
          light: 'Light'
        },
        logout: 'Logout',
        vibro: 'Haptic feedback',
        vibroDesc: 'Vibration response for notifications'
      }
    },
    page: {
      error: "Oops, looks like something went wrong. Don't worry, it's not your fault!",
      global: {
        home: 'Go back to main page'
      },
      auth: {
        title: 'Authorization',
        short: 'Authorization',
        username: 'Username',
        password: 'Password',
        cookie: 'By using this resource, you consent to the use of cookies',
        login: 'Login'
      },
      index: {
        title: 'Hub | Altyn Shyghys',
        short: 'Hub',
        desc: 'A centralized hub for the entire application, connecting all modules of the enterprise.'
      },
      about: {
        title: 'About the application',
        short: 'About the application',
        app: 'Application',
        gratitude: 'Made with ❤️ for all employees of "Altyn Shyghys"'
      },
      warehouse: {
        title: 'Finished goods warehouse',
        short: 'FGW',
        desc: 'A special module that helps in organizing the storage of finished products.',
        index: {
          shipmentTitle: 'Control loading',
          shipmentDesc:
            'Monitor the loading process of products, controlling every step and every container'
        },
        loadings: {
          title: 'Loading',
          tip: 'On this page you can moderate the list of loadings, use the necessary interfaces to create, edit and delete data',
          list: 'List of loadings',
          contNumber: 'Container number',
          number: 'Number',
          yes: 'Yes',
          no: 'No',
          country: 'A country',
          purContry: 'Buyer country',
          loadingDate: 'Loading date',
          status: 'Status',
          serials: 'Seal numbers',
          serial: 'Seal number',
          sealTip:
            'The list of stamp numbers is empty, enter the number in the field above and click on the plus sign to add the first one',
          returned: 'Returned',
          grossWeight: 'Gross weight',
          containerWeight: 'Container weight',
          netWeight: 'Net weight',
          productName: 'Product name',
          send: 'Transport shipped',
          loaded: 'Transport loaded',
          ready: 'Transport is ready for loading',
          accepted: 'Transport accepted for loading'
        }
      },
      console: {
        title: 'Console',
        short: 'Console',
        desc: 'Centralized location for cross-module data configuration.',
        index: {
          roleTitle: 'Customize roles',
          roleDesc:
            'Moderate the list of roles, choosing the necessary rights to perform various operations',
          userTitle: 'Manage your employees',
          userDesc:
            'Register new users and assign them previously created roles, you have full control'
        },
        users: {
          title: 'Employees',
          tip: 'On this page you can moderate the list of users, use the necessary interfaces to create, edit and delete data',
          yes: 'Yes',
          no: 'No',
          userList: 'List of users',
          fullName: "User's full name",
          fullNamePh: 'Ivanov Ivan',
          userPass: 'Password',
          disabled: 'Blocked',
          roleId: 'Role ID',
          role: 'Role name',
          add: 'Add user',
          edit: 'Change user details',
          delete: 'Delete user',
          pass: 'Change user password',
          name: 'Name',
          passTip: 'Change password'
        },
        roles: {
          title: 'Roles',
          tip: 'On this page you can moderate the list of roles, use the necessary interfaces to create, edit and delete data',
          list: 'List of roles',
          permissions: 'Permissions',
          permissionTip: 'Select the required level of permissions for the desired service',
          permissionList: 'List of permissions',
          add: 'Add a role',
          roleName: 'Role name',
          roleId: 'Role ID',
          edit: 'Edit role',
          delete: 'Delete role',
          role: 'Roles',
          user: 'Employees',
          product: 'Products',
          sample: 'Samples',
          shipment: 'Loading',
          workshop: 'Workshops',
          sampling_point: 'Sampling points',
          container_check: 'Inspections',
          analysis_product: 'Product analysis',
          analysis_results: 'Analysis results',
          analysis: 'Analyses',
          daily_expenses_reagents: 'Daily reagent expenses',
          reagent_costs: 'Reagent consumption',
          reagents: 'Reagents',
          standards_analysis: 'Analysis standards',
          state_standard: 'GOSTs',
          console: 'Console',
          control: 'Technical control module',
          warehouse: 'Finished goods warehouse',
          lab: 'Laboratory',
          l0: 'No rights',
          l1: 'Read rights',
          l2: 'Read and edit rights',
          l3: 'Read, edit and delete rights',
          levelTitle: 'About permission levels',
          levelDesc:
            'There are 3 types of rights levels, each subsequent contains the rights of the previous one',
          levelTip:
            'This way you can choose the permission level for each partition and data collection',
          right: {
            add: 'View access',
            edit: 'Access to change',
            delete: 'Access to delete'
          }
        }
      },
      control: {
        title: 'Technical control module',
        short: 'TCM',
        desc: 'Helps monitor product compliance with established requirements.',
        index: {
          productTitle: 'Create products',
          productDesc:
            'Moderate the list of products that will participate in the majority of processes',
          sampleTitle: 'Add samples',
          sampleDesc: 'Specify samples for certain products and moderate their status',
          shipmentTitle: 'Control shipment',
          shipmentDesc:
            'Monitor the product shipment process, monitoring every step and every container',
          workshopTitle: 'Keep an eye on the workshops',
          workshopDesc: 'Maintain a list of production units that are at your disposal',
          repairTitle: 'Keep a problem log',
          repairDesc: 'Emergency breakdowns always happen, so it is necessary to fix them promptly',
          inspectionTitle: 'Conduct inspections',
          inspectionDesc: 'To prevent critical problems, it is necessary to inspect the equipment'
        },
        configuration: {
          title: 'Configuration',
          samplingPoints: 'SP',
          period: 'Sampling period (hour)',
          SPList: 'List of SP',
          tip: 'On this page you can moderate the list of products, sampling points (SP) and workshops, use tabs and the necessary interfaces within a specific collection to create, edit and delete data',
          products: {
            title: 'Products',
            list: 'List of products',
            tip: 'On this page you can moderate the list of products, use the necessary interfaces to create, edit and delete data',
            name: 'Product name',
            id: 'Product ID',
            add: 'Add a product',
            edit: 'Change product name',
            delete: 'Remove product'
          },
          workshops: {
            title: 'Workshops',
            tip: 'On this page you can moderate the list of workshops, use the necessary interfaces to create, edit and delete data',
            list: 'List of workshops',
            name: 'Workshop name',
            id: 'Workshop ID',
            add: 'Add a workshop',
            edit: 'Change the name of the workshop',
            delete: 'Delete workshop'
          }
        },
        samples: {
          title: 'Samples',
          tip: 'On this page you can moderate the list of samples; use the necessary interfaces to create, edit and delete data',
          list: 'List of samples',
          sampPoint: 'SP',
          contNumber: 'Transport number',
          controlNumber: 'Control sample number',
          sampNumber: 'Sample number',
          number: 'Number',
          workshopId: 'Workshop ID',
          workshopName: 'Workshop name',
          productId: 'Product ID',
          anTip:
            'The list of analyzes is empty, select the desired analysis from the list and click on the plus sign to add the first one',
          productName: 'Product name',
          analyzes: 'Analyzes',
          name: 'Sample name',
          id: 'Sample ID',
          add: 'Add sample',
          edit: 'Change sample data',
          delete: 'Delete sample',
          qrTip: 'Download QR',
          prod: 'Production',
          ship: 'Loading',
          addContNum: 'Add control sample number',
          fTip: 'Using the hierarchy of nested lists, select the workshop, SP and product you need, after which the appropriate analyzes will be automatically selected',
          sTip: 'When any parameter (shop, SP, product) is changed, the list of added analyzes will be cleared',
          qr: 'QR',
          scanTip: 'Point your camera at the QR code to scan it',
          scanError: 'Incorrect data format or out of date'
        },
        inspections: {
          title: 'Inspections',
          tip: 'On this page you can moderate the list of inspections, use the necessary interfaces to create, edit and delete data',
          list: 'List of inspections',
          equipment: 'Equipment',
          notes: 'Notes',
          number: 'Number',
          temperature: 'Temperature',
          needsCleaning: 'Needs cleaning',
          registered: 'Employee name',
          updated: 'Last modified date'
        },
        'qr-constructor': {
          title: 'Constructor',
          tip: 'On this page you can create QR collections for subsequent printing, use the necessary interfaces to select workshops, SP to generate the necessary versions of QR codes',
          options: 'Options',
          manuallyTip:
            'In the current mod you can select a specific SP and product and generate the required number of QR codes',
          autoTip:
            'In the current mod, you can select the desired workshop and the system will automatically generate 1 QR code for each TOP and product',
          auto: 'Auto',
          manually: 'Manually',
          count: 'Count',
          generate: 'Generate',
          export: 'Export to PDF',
          layout: 'Layout',
          exportTip: 'Generated QR codes will be displayed here, try creating the first one'
        }
      },
      lab: {
        title: 'Laboratory',
        desc: 'Module for managing data analysis and standardization'
      },
      general: {
        title: 'Chief Technologist Module',
        desc: 'Central place for monitoring the health of the enterprise'
      }
    }
  }
})

export default {
  title: 'Style Guide/Layout',
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Usuarios', icon: 'mdi-file-document-outline' },
        { title: 'Documentos', icon: 'mdi-file-document-outline' },
        { title: 'Oficina de Partes', icon: 'mdi-office-building' },
        { title: 'Usuarios', icon: 'mdi-file-document-outline' },
        { title: 'Documentos', icon: 'mdi-file-document-outline' },
        { title: 'Oficina de Partes', icon: 'mdi-office-building' },
        { title: 'Usuarios', icon: 'mdi-file-document-outline' },
        { title: 'Documentos', icon: 'mdi-file-document-outline' },
        { title: 'Oficina de Partes', icon: 'mdi-office-building' },
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      right: null,
      open: [1, 2],
      tree: null,
      caseSensitive: false,
    }
  },
  template: `
    <dx-layout>
      <template v-slot:header>
        <Header />
      </template>

      <template v-slot:nav>
        <Navigation
          color="#093F75"
          width="325"
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent >
          <v-list-item class="px-3">
            
            <v-list-item-icon>
              <v-icon large class="light--text"> mdi-account </v-icon>
            </v-list-item-icon>
            
            <v-list-item-title class="light--text">Entidad Seleccionada</v-list-item-title>

            <v-btn
                icon
                @click.stop="mini = !mini"
            >
              <v-icon class="light--text">mdi-chevron-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>
          <div class="py-4" style="display: flex; justify-content: center;">
            <v-button large color="primary" outlined v-bind="$props" class="light">
              <dx-icon left regular>
                mdi-send
              </dx-icon>
              <span class="text-underline"> Enviar Documento </span>
            </v-button>
          </div>

          <v-list dense>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                active-class="light--text"
                link
            >
              <v-list-item-icon>
                <v-icon class="light--text">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title class="light--text">{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-list dark>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>

              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>

            <v-list-group
                :value="true"
                active-class="light--text"
                prepend-icon="mdi-account-circle"
            >
              <template v-slot:activator>
                <v-list-item-title>Users</v-list-item-title>
              </template>

              <v-list-group
                  :value="true"
                  active-class="light--text"
                  no-action
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Admin</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                    v-for="([title, icon], i) in admins"
                    :key="i"
                    link
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
              <v-list-group
                  no-action
                  sub-group
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title>Actions</v-list-item-title>
                  </v-list-item-content>
                </template>

                <v-list-item
                    v-for="([title, icon], i) in cruds"
                    :key="i"
                    link
                >
                  <v-list-item-title v-text="title"></v-list-item-title>

                  <v-list-item-icon>
                    <v-icon v-text="icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list-group>
          </v-list>
        </Navigation>
      </template>

      <template v-slot:main>
        <v-container class="px-10 pr-8">
          <dx-bodytitle title="Estás en el Módulo de Administración" subtitle="Aquí podrás crear o modificar usuarios y revisar los documentos que se tramitan en tu Institución."></dx-bodytitle>
          <v-container class="px-0 mt-15">
            <dx-dashboard></dx-dashboard>
          </v-container>
        </v-container>
      </template>
      <template v-slot:footer>
        <DxFooter color="white" />
      </template>
    </dx-layout>
  `,
})

export const Dashboard = Template.bind({})
Dashboard.args = {}

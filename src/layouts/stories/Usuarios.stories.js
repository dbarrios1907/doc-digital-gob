import { storyPath } from './_settings'
import { constantRoutes } from '../../routes'

export default {
  title: storyPath,
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      tabs: 'tab-1',
      options: ['10', '20', '30'],
      breadcrums: [
        {
          text: 'Administración',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Usuarios',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
      drawer: true,
      items: constantRoutes,
      right: null,
      open: [1, 2],
      tree: null,
      caseSensitive: false,
      itemstab: [
        { tab: 'Activos', number: 0 },
        { tab: 'Inactivos', number: 0 },
      ],
      searchname: false,
      searchrut: false,
      filtered: false,
      filterValue: '',
      filterRut: '',
      isleft: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      permiso: [],
      permisosValues: ['Administrador', 'Jefe de servicio', 'Operador', 'Oficina de partes'],
      valuess: [
        {
          name: 'Nombre Nombre Apellido Apellido',
          rut: '23.266.206-8',
          access: ['Administrador', 'Jefe de servicio'],
        },
        {
          name: 'Nombre2 Nombre Apellido Apellido',
          rut: '21.266.206-8',
          access: ['Administrador'],
        },
        {
          name: 'Nombre3 Nombre Apellido Apellido',
          rut: '21.256.206-8',
          access: ['Jefe de servicio'],
        },
        {
          name: 'Nombre4 Nombre Apellido Apellido',
          rut: '20.266.206-8',
          access: ['Operador'],
        },
        {
          name: 'Nombre5 Nombre Apellido Apellido',
          rut: '20.200.206-8',
          access: ['Jefe de servicio'],
        },
        {
          name: 'Nombre6 Nombre Apellido Apellido',
          rut: '24.266.206-8',
          access: ['Oficina de partes'],
        },
        {
          name: 'Nombre7 Nombre Apellido Apellido',
          rut: '25.266.206-8',
          access: ['Administrador'],
        },
        {
          name: 'Nombre8 Nombre Apellido Apellido',
          rut: '25.366.206-8',
          access: ['Operador'],
        },
        {
          name: 'Nombre9 Nombre Apellido Apellido',
          rut: '26.266.206-8',
          access: ['Operador'],
        },
        {
          name: 'Nombre10 Nombre Apellido Apellido',
          rut: '27.266.206-8',
          access: ['Oficina de partes'],
        },
      ],
    }
  },
  methods: {
    openFilter(header, event) {
      event.stopPropagation()
      this.filtered = !this.filtered
    },
    nameFilter(value) {
      if (!this.filterValue) {
        return true
      }
      return value.toLowerCase().includes(this.filterValue.toLowerCase())
    },
    nameFilter1(value) {
      if (!this.filterRut) {
        return true
      }
      return value.includes(this.filterRut)
    },
    activeSearch(header, value) {
      event.stopPropagation()
      if (header.value == 'name') this.searchname = !this.searchname
      if (header.value == 'rut') this.searchrut = !this.searchrut
    },
    removeItem(item) {
      this.permiso = this.permiso.filter(function (val) {
        return item !== val
      })
    },
    permisosFilter(value) {
      let flag = false
      if (this.permiso.length == 0) return true

      value.filter(function (e) {
        flag = this.indexOf(e) > -1
      }, this.permiso)

      return flag
    },
  },

  computed: {
    headers() {
      return [
        {
          text: 'Nombre',
          align: 'start',
          sortable: true,
          value: 'name',
          filter: this.nameFilter,
          search: true,
        },
        { text: 'Rut', value: 'rut', sortable: true, filter: this.nameFilter1, search: true },
        { text: 'Permisos', value: 'access', filterable: true, sortable: false, filter: this.permisosFilter },
        { text: 'Acciones', value: 'actions', sortable: false },
      ]
    },
  },
  //html
  template: `
    <dx-main-layout>

<!-- HEADER -->

      <template v-slot:header>
        <Header />
      </template>

<!-- NAVIGATION -->

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

<!-- MAIN -->

      <template v-slot:main>
      <perfect-scrollbar :style="{ height: '100%' }">
        <v-container class="py-5 px-13 mx-0" style="max-width: 100%">
        
          <dx-breadcrumbs :items="breadcrums" />
          <dx-bodytitle class="mt-1">
            <template v-slot:title>
              <div class="weight-700 text-md-h4 line-height-31">Usuarios</div>
            </template>
          </dx-bodytitle>
          <div class="mt-10 weight-400">
            <span class="mr-2">Mostrando hasta</span>
            <v-select
              class="d-inline-flex min-content"
              style="width: 104px"
              :items="options"
              label="Selección Simple"
              value="10"
              solo
              flat
              outlined
              v-bind="$props"
              ripple="false"
              single-line
            ></v-select>
            <span class="ml-3">resultados de un total de <b>17 usuarios</b></span>
          </div>

          <v-row>
            <v-col sm="6">
              <dx-button class="line-height-24 weight-700 mr-4" outlined>
                <span class="text-underline"> Filtra tu búsqueda </span>
                <v-icon small> mdi-filter </v-icon>
              </dx-button>
            </v-col>
            <v-col sm="6" class="text-right">
              <a href="#" class="text-underline"> + Agregar Usuario</a>
            </v-col>
          </v-row>
          <table-story-1/>
        </v-container>
        </perfect-scrollbar>
      </template>

<!-- FOOTER -->

      <template v-slot:footer>
        <DxFooter color="white" />
      </template>
    </dx-main-layout>
  `,
})

export const Usuarios = Template.bind({})
Usuarios.args = {}

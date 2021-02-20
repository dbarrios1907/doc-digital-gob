<template>
  <div>
    <DataTable
      :headers="headers"
      :items="valuess"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="table-sm"
      show-select
      dense
      item-key="name"
      @page-count="pageCount = $event"
    >
      <template v-for="h in headers" v-slot:[`header.${h.value}`]="{ header }" class="column">
        {{ h.text }}
        <v-icon :class="[{ iconsearch: h.search }]" :key="h.value" @click="activeSearch(header, $event)" v-if="h.search">mdi-magnify</v-icon>
        <v-icon class="float-right" :key="h.value" @click="openFilter(header, $event)" v-if="h.filterable">mdi-filter</v-icon>
      </template>

      <template v-slot:top>
        <v-container fluid v-if="searchname || searchrut || filtered">
          <v-row>
            <v-col cols="2" v-if="searchname"><v-text-field hide-details type="text" v-model="filterValue" label="Nombre" /></v-col>
            <v-col cols="2" v-if="searchrut"><v-text-field hide-details type="text" v-model="filterRut" label="Rut" /></v-col>
            <v-col cols="8" v-if="filtered">
              <dx-select
                :ripple="false"
                v-model="permiso"
                :items="permisosValues"
                chips
                label="Filtra por permisos"
                persistent-hint
                multiple
                flat
                hide-details
                outlined
                :menu-props="{ bottom: true, offsetY: true, openOnClick: false }"
              >
                <template v-slot:selection="{ item, index }">
                  <Badge type="tertiary" label outlined class="ma-0">
                    <div class="darken3--text font-16 line-height-22 weight-400">{{ item }}</div>
                    <dx-icon left class="darken3--text ml-2 mr-0" @click.prevent="removeItem(item)"> mdi-close </dx-icon>
                  </Badge>
                </template>
              </dx-select>
            </v-col>
          </v-row>
        </v-container>
        <v-tabs class="mt-5" v-model="tabs">
          <v-tab href="#tab-1"> Activos </v-tab>
          <v-tab href="#tab-2"> Inactivos </v-tab>
        </v-tabs>
      </template>

      <template v-slot:[`item.access`]="{ item: { access } }">
        <v-chip v-for="v in access" :key="v" class="ml-2" color="primary" small>
          {{ v }}
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]>
        <v-icon dense class="mr-5"> mdi-square-edit-outline </v-icon>
        <v-icon dense class="mr-5"> mdi-eye </v-icon>
        <v-icon dense> mdi-delete </v-icon>
      </template>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
}
</script>

<template>
  <div>
    <DataTable
      color="primary"
      :headers="headers"
      :items="values"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      class="elevation-1"
      show-select
      @page-count="pageCount = $event"
    >
      <template v-slot:item.data-table-select="{ isSelected, select }">
        <v-simple-checkbox color="primary" :value="isSelected" @input="select($event)" />
      </template>

      <template v-slot:item.data-table-select="{ isSelected, select }">
        <v-simple-checkbox color="green" dense :value="isSelected" @input="select($event)" />
      </template>

      <template v-slot:item.access="{ item: { access } }">
        <v-chip v-for="v in access" :key="v" class="ml-2" color="primary" small>
          {{ v }}
        </v-chip>
      </template>

      <template v-slot:item.actions>
        <v-icon dense class="mr-2"> mdi-square-edit-outline </v-icon>
        <v-icon dense class="mr-2"> mdi-eye </v-icon>
        <v-icon dense> mdi-delete </v-icon>
      </template>
    </DataTable>
    <div class="text-center pt-2">
      <v-pagination v-model="page" :length="pageCount" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          sortable: true,
          value: 'name',
          filterable: true,
        },
        { text: 'Rut', value: 'rut', filterable: true },
        { text: 'Permisos', value: 'access', sortable: true },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      values: [
        {
          name: 'Frozen Yogurt',
          rut: '23.266.206-8',
          access: ['Administrador', 'Jefe de servicios'],
        },
        {
          name: 'Ice cream sandwich',
          rut: '23.266.206-8',
          access: ['Jefe de servicios'],
        },
        {
          name: 'Eclair',
          rut: '23.266.206-8',
          access: ['Jefe de servicios'],
        },
        {
          name: 'Cupcake',
          rut: '23.266.206-8',
          access: ['Operador'],
        },
        {
          name: 'Gingerbread',
          rut: '23.266.206-8',
          access: ['Oficina de partes', 'Jefe de servicios'],
        },
        {
          name: 'Jelly bean',
          rut: '23.266.206-8',
          access: ['Administrador'],
        },
        {
          name: 'Lollipop',
          rut: '23.266.206-8',
          access: ['Administrador', 'Jefe de servicios'],
        },
        {
          name: 'Honeycomb',
          rut: '23.266.206-8',
          access: ['Administrador', 'Jefe de servicios'],
        },
        {
          name: 'Donut',
          rut: '23.266.206-8',
          access: ['Administrador', 'Jefe de servicios'],
        },
        {
          name: 'KitKat',
          rut: '23.266.206-8',
          access: ['Operador', 'Jefe de servicios'],
        },
      ],
    }
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
  },
}
</script>

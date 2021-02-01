<template>
  <div>
    <DataTable
        color="primary"
        :headers="headers"
        :items="desserts"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        show-select
        @page-count="pageCount = $event"
    >

<!--      <template #header="{ props: { headers } }">-->
<!--        <thead class="v-data-table-header">-->
<!--        <tr>-->
<!--          <th-->
<!--              v-for="header in headers"-->
<!--              :key="header.value"-->
<!--              class="text-uppercase"-->
<!--              scope="col"-->
<!--          >-->
<!--            {{ header.text }}-->
<!--          </th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--      </template>-->

      <template
          v-slot:item.data-table-select="{ isSelected, select }"
      >
        <v-simple-checkbox
            color="primary"
            :value="isSelected"
            @input="select($event)"
        ></v-simple-checkbox>
      </template>

      <template
          v-slot:item.data-table-select="{ isSelected, select }"
      >
        <v-simple-checkbox
            color="green"
            dense
            :value="isSelected"
            @input="select($event)"
        ></v-simple-checkbox>
      </template>

      <template v-slot:item.calories="{ item }">
        <v-chip
            :color="getColor(item.calories)"
            dark
            small
        >
          {{ item.calories }}
        </v-chip>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon dense class="mr-2">
          mdi-square-edit-outline
        </v-icon>
        <v-icon dense class="mr-2">
          mdi-eye
        </v-icon>
        <v-icon dense>
          mdi-delete
        </v-icon>
      </template>

    </DataTable>
    <div class="text-center pt-2">
      <v-pagination
          v-model="page"
          :length="pageCount"
      ></v-pagination>
    </div>
  </div>
</template>


<script>
export default {
  data () {
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
        { text: 'Permisos', value: 'access', sorteable: false },
        { text: 'Acciones', value: 'actions', sorteable: false },
      ],
      values: [
        {
          name: 'Frozen Yogurt',
          rut: '23.266.206-8',
          access: ['Administrador', 'Jefe de servicios']
        },
        {
          name: 'Ice cream sandwich',
          rut: '23.266.206-8',
          access: ['Jefe de servicios']
        },
        {
          name: 'Eclair',
          rut: '23.266.206-8',
          access: ['Jefe de servicios']
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
    getColor (calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
  },
}
</script>

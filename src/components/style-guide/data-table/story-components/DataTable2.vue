<template>
  <div>
    <data-table
      color="primary"
      :headers="headers"
      :items="values"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      :class="['table-xl', { 'icon-sort-left': isleft }]"
      show-select
      item-key="name"
      @page-count="pageCount = $event"
    >
      <template v-slot:[`item.tema`]="{ item: { tema, href } }" class="column">
        <a :href="href">{{ tema }}</a>
      </template>

      <template v-slot:[`item.access`]="{ item: { access } }">
        <v-chip v-for="v in access" :key="v" class="ml-2" color="primary" small>
          {{ v }}
        </v-chip>
      </template>

      <template v-slot:[`item.actions`]>
        <v-icon dense class="mr-2"> mdi-square-edit-outline </v-icon>
        <v-icon dense class="mr-2"> mdi-eye </v-icon>
        <v-icon dense> mdi-delete </v-icon>
      </template>
    </data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isleft: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: 'Tema',
          align: 'start',
          value: 'tema',
          sortable: true,
        },
        { text: 'Tipo', value: 'tipo', sortable: true },
        { text: 'Folio', value: 'folio', sortable: true },
        { text: 'Creación', value: 'creacion', sortable: true },
        { text: 'Entidad emisora', value: 'entidad', sortable: true },
        { text: 'Actualización', value: 'actualizacion', sortable: true },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      values: [
        {
          tema: 'Instructivo de Modernización',
          tipo: 'Oficio',
          folio: '-',
          creacion: '10-09-2020 9:58',
          entidad: 'Nombre entidad',
          actualizacion: '10-09-2020 9:58',
          href: '#',
        },
        {
          tema: 'Oficio ORD Permisos Administrativos',
          tipo: 'Oficio',
          folio: '178',
          creacion: '10-09-2020 9:58',
          entidad: 'Nombre entidad',
          actualizacion: '10-09-2020 9:58',
          href: '#',
        },
        {
          tema: 'Circular normativa de Teletrabajo',
          tipo: 'Oficio',
          folio: '-',
          creacion: '10-09-2020 9:58',
          entidad: 'Nombre entidad',
          actualizacion: '10-09-2020 9:58',
          href: '#',
        },
      ],
    }
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.desserts.slice()
    },
    changeSort(column) {
      if (this.pagination.sortBy === column) {
        this.pagination.descending = !this.pagination.descending
      } else {
        this.pagination.sortBy = column
        this.pagination.descending = false
      }
    },
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
    openFilter(header, event) {
      event.stopPropagation()
      alert('test')
    },
  },
}
</script>

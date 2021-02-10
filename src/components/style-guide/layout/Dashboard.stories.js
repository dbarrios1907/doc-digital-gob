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
        { title: 'Usuarios', icon: 'mdi-account-supervisor-circle' },
        { title: 'Documentos', icon: 'mdi-file-multiple' },
        { title: 'Oficina de Partes', icon: 'mdi-bank' },
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
        <Navigation v-model="drawer" :routes="items"/>
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

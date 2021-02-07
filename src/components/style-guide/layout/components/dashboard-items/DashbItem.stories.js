export default {
  title: 'Style Guide/layout/Components/Dashboard Items',
  argTypes: {},
}

export const Demo = () => ({
  data: () => ({
    itemClasses: 'px-3 primary--text',
  }),
  template: `
    <div>
      <v-container> 
        <v-row>
          <v-col cols="3" class="ml-12">
            <dx-dashbitem class="itemClasses" textheader="9.999" titleheader="Usuarios activos" messaje="" />
          </v-col>
        </v-row>
        <v-divider class="mt-5" inset></v-divider>
        <v-row class="mt-3">
          <v-col cols="3" class="mx-lg-auto">
            <dx-dashbitem :class="itemClasses" textheader="9.999" titleheader="Documentos enviados" messaje="" />
          </v-col>
          <v-divider inset vertical></v-divider>
          <v-col cols="3" class="mx-lg-auto">
          <dx-dashbitem :class="itemClasses" textheader="9.999" titleheader="Documentos recibidos" messaje="15 pendientes de recibir" />
          </v-col>
          <v-divider inset vertical></v-divider>
          <v-col cols="3" class="mx-lg-auto">
            <dx-dashbitem :class="itemClasses" textheader="9.999" titleheader="Documentos pendientes" messaje="" />
        </v-col>
        </v-row>
      </v-container>
    </div>
  `,
})

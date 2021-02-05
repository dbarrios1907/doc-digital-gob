export default {
  title: 'Style Guide/DashbItems',
  argTypes: {},
}

export const Demo = () => ({
  template: `
    <div>
      <v-container> 
        <v-row>
          <v-col cols="3" class="ml-12">
            <dx-dashbiem style="color:#0B36AA" class="px-3">
                <v-card-text class="py-2 px-0">
                    <span class="display-1 weight-600 roboto" >9.999</span>    
                </v-card-text>
                <v-card-title class="py-2 px-0">         
                    <div class="font-weight-medium text-body-1">Usuarios activos</div>
                </v-card-title>
                
                <v-card-actions class="px-0">
                  <dx-button color="#001C41" text class="px-0">
                      <dx-icon left> mdi-arrow-right </dx-icon>
                      <span class="text-underline"> Ir al detalle </span>
                  </dx-button>
                </v-card-actions>
            </dx-dashbiem>
          </v-col>
        </v-row>
        <v-divider class="mt-5" inset></v-divider>
        <v-row class="mt-3">
          <v-col cols="3" class="mx-lg-auto">
              <dx-dashbiem style="color:#0B36AA" class="px-3">
                  <v-card-text class="py-2 px-0">
                      <span class="display-1 weight-600 roboto" >9.999999</span>    
                  </v-card-text>
                  <v-card-title class="py-2 px-0">         
                      <div class="font-weight-medium text-body-1">Documentos enviados</div>
                  </v-card-title>
                  <v-card-subtitle class="py-2 px-1 mt-3 pr-4">   
                  </v-card-subtitle>
                  <v-card-actions class="px-0">
                    <dx-button color="#001C41" text class="px-0">
                        <dx-icon left> mdi-arrow-right </dx-icon>
                        <span class="text-underline"> Ir al detalle </span>
                    </dx-button>
                  </v-card-actions>
              </dx-dashbiem>
          </v-col>
          <v-divider inset vertical></v-divider>
          <v-col cols="3" class="mx-lg-auto">
              <dx-dashbiem style="color:#0B36AA" class="px-3">
                  <v-card-text class="py-2 px-0">
                      <span class="display-1 weight-600 roboto" >9.999999</span>    
                  </v-card-text>
                  <v-card-title class="py-2 px-0">         
                      <div class="font-weight-medium text-body-1">Documentos recibidos</div>
                  </v-card-title>
                  <v-card-subtitle class="py-2 px-1 mt-3 pr-5">          
                      <div class="px-1 text-subtitle-2 red white--text text-caption text-center font-weight-thin rounded-xl">15 pendientes de recibir</div>
                  </v-card-subtitle>
                  <v-card-actions class="px-0">
                    <dx-button color="#001C41" text class="px-0">
                        <dx-icon left> mdi-arrow-right </dx-icon>
                        <span class="text-underline"> Ir al detalle </span>
                    </dx-button>
                  </v-card-actions>
              </dx-dashbiem>
          </v-col>
          <v-divider inset vertical></v-divider>
          <v-col cols="3" class="mx-lg-auto">
            <dx-dashbiem style="color:#0B36AA" class="px-3">
                <v-card-text class="py-2 px-0">
                    <span class="display-1 weight-600 roboto" >9.900</span>    
                </v-card-text>
                <v-card-title class="py-2 px-0">         
                    <div class="font-weight-medium text-body-1">Documentos por firmar</div>
                </v-card-title>
                <v-card-subtitle class="py-2 px-1 mt-3 pr-4">   
                    <div class="px-1 text-subtitle-2"></div>
                </v-card-subtitle>
                <v-card-actions class="px-0">
                  <dx-button color="#001C41" text class="px-0">
                      <dx-icon left> mdi-arrow-right </dx-icon>
                      <span class="text-underline"> Ir al detalle </span>
                  </dx-button>
                </v-card-actions>
            </dx-dashbiem>
        </v-col>
        </v-row>
      </v-container>
    </div>
  `,
})

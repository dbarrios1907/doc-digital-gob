<template>
  <v-container style="background-color: #001C41">
    <v-row>
      <v-col class="pb-0 pt-0">
        <TwoLinearColor :color1="color1" :color2="color2" :width1="width1" :width2="width2" :pos="pos" :size="size">
          <IconLogo :color="color3" :width="width3" :height="height" />
          <label class="d-flex align-center white--text pl-4 ml-4" style="lineHeight:16px; width: 220px; fontSize: 14px; height: 40px; border-left: 2px solid white;">Plataforma de Comunicaciones oficiales del Estado</label>
        </TwoLinearColor>
      </v-col>
      <v-col class="text-right mt-auto mb-auto">
        <v-icon class="white--text pr-4">mdi-help-circle</v-icon>
        <label class="text-underline white--text pr-4">Ayuda</label>
        <Button class="white--text text-underline" color="#0F69C4" small v-bind="$props"> Cerrar Sesión </Button>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TwoLinearColor from '../two-linear-color/TwoLinearColor';
import IconLogo from '../logo/IconLogo';
export default {
  name: 'Header',
  inheritAttrs: false,
  components: { TwoLinearColor, IconLogo },
  props: {
    color1: String,
    color2: String,
    width1: String,
    width2: String,
    color3: String,
    width3: String,
    height: String,
    pos: String,
    size: String,
  }
}
</script>
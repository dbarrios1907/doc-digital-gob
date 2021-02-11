<template>
  <v-footer class="dark" padless>
    <v-col class="text-left py-0" cols="4">
      <div class="pl-4 pt-3 pb-3">
        <span :style="{ color: dcolor }" class="line-height-16 font-nunito font-small weight-300"> Versión 2.1.11 </span>
      </div>
      <BrandWatermark />
    </v-col>

    <v-col class="text-right" cols="8">
      <span :style="{ color: dcolor }" class="line-height-16 font-nunito font-small weight-300">
        Para conocer el detalle de la versión actual y actualizaciones anteriores
        <a href="#" class="weight-600" :style="{ color: dcolor }">revise aquí</a>
      </span>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: 'DxFooter',
  inheritAttrs: false,
  props: {
    color: String,
  },
  computed: {
    dcolor() {
      if (this.color) return this.color
      return this.$vuetify.theme.isDark ? this.$vuetify.theme.themes.dark.dark : this.$vuetify.theme.themes.light.light
    },
  },
}
</script>

<template>
  <v-row class="mt-6">
    <div :class="{ 'col-12': isMovileScreen, 'col-9': !isMovileScreen }">
      <div class="weight-700 text-md-h4 mt-3 line-height-31">{{ title }}</div>
      <div class="text-md-subtitle-2 font-weight-thin mt-4">{{ subtitle }}</div>
    </div>
    <dx-icons-actions class="text-right float-right col-3 d-none d-sm-block mt-1" />
  </v-row>
</template>

<script>
export default {
  name: 'DxBodytitle',
  inheritAttrs: false,
  props: {
    title: String,
    subtitle: String,
  },
  computed: {
    isMovileScreen() {
      return window.innerWidth < 600
    },
  },
}
</script>
<style scoped></style>

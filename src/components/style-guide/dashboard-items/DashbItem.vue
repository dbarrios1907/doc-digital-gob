<template>
  <div>
    <v-card class="mx-auto px-0" elevation="0" max-width="344" style="color:#0B36AA">
      <v-card-text class="py-2 px-0">
        <span class="display-1 weight-600 roboto" style="color:#0B36AA">{{textheader}}</span>
      </v-card-text>
      <v-card-title class="py-2 px-0">
        <div class="font-weight-medium text-body-1">{{titleheader}}</div>
      </v-card-title>
      <v-card-subtitle class="py-2 px-1 mt-3 pr-4 col-12">
         <div v-if="messaje === ''" class="px-1 text-subtitle-2 mt-5"></div>
         <div v-else class="px-1 text-subtitle-2 red white--text text-caption text-center font-weight-thin rounded-xl">{{messaje}}</div>         
      </v-card-subtitle>
      <v-card-actions class="px-0">
        <dx-button color="#001C41" text class="px-0" :to="{href}">
          <dx-icon left> mdi-arrow-right </dx-icon>
          <span class="text-underline"> Ir al detalle </span>
        </dx-button>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'DxDashbitem',
  inheritAttrs: false,
  props: {
      color: String,
      textheader: String,
      titleheader: String,
      messaje: String,
      href: String,
  },
}
</script>

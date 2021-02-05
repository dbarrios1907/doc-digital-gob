<template>
  <div>
    <v-card class="mx-auto px-3" elevation=0 max-width="344">
      <slot />
    </v-card>
  </div>
</template>

<script>

export default {
  name: 'DxDashbitem',
  inheritAttrs: false,
  props:{
    color: String, 
  }
}
</script>

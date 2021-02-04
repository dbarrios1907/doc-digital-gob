<template>
  <v-icon :style="regular && { fontSize: '24px' }" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-icon>
</template>

<script>
export default {
  name: 'DxIcon',
  inheritAttrs: false,
  props: {
    regular: Boolean,
  },
}
</script>

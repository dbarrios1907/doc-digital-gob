<template>
  <v-snackbar v-bind="$attrs" v-on="$listeners">
    <v-alert :type="type" :icon="iconByType" tile close-icon="mdi-close" dismissible v-bind="$attrs" v-on="$listeners">
      <slot />
    </v-alert>
  </v-snackbar>
</template>

<script>
import './Alert.scss'

export default {
  name: 'DxAlert',
  inheritAttrs: false,
  props: {
    type: String,
  },
  computed: {
    iconByType() {
      if (this.$props.type === 'info') {
        return 'mdi-bell-outline'
      }

      if (this.$props.type === 'warning') {
        return 'mdi-alert-circle-outline'
      }

      if (this.$props.type === 'success') {
        return 'mdi-check-circle-outline'
      }

      if (this.$props.type === 'error') {
        return 'mdi-close-circle-outline'
      }

      return false
    },
  },
}
</script>

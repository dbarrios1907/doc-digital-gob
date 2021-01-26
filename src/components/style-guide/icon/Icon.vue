<template>
  <v-icon v-bind:style="regular && {fontSize: '24px' }" v-bind="$attrs" v-on="$listeners"> <slot></slot> </v-icon>
</template>

<script>
import './Icon.scss';
export default {
  name: 'doc-icon',
  inheritAttrs: false,
  props: {
    regular: Boolean
  }
}
</script>

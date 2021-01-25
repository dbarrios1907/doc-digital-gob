<template>
  <v-btn elevation="0" :ripple="false" v-bind="$attrs" v-on="$listeners"> <slot></slot> </v-btn>
</template>

<script>
import './Button.scss';
export default {
  name: 'Button',
  inheritAttrs: false,
}
</script>


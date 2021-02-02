<template>
  <v-switch inset dense :ripple="false"v-bind="$attrs" v-on="$listeners"></v-switch>
</template>

<script>
import './Switch.scss';
export default {
  name: 'Switch',
  inheritAttrs: false,
}
</script>

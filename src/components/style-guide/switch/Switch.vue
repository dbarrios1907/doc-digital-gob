<template>
  <v-switch v-bind="$attrs" v-on="$listeners"></v-switch>
</template>

<script>
import './Switch.scss';
export default {
  name: 'Switch',
  inheritAttrs: true,
}
</script>

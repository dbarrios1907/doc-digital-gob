<template>
  <v-btn elevation="0" :ripple="false" v-bind="$attrs" v-on="$listeners"> <slot></slot> </v-btn>
</template>

<script>
export default {
  name: 'Button',
  inheritAttrs: false
}
</script>

<style>
  .v-application .v-btn:hover {
    background-color: #00578d !important;
  }
  
  .v-btn {
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
</style>


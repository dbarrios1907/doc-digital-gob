<template>
  <v-btn elevation="0" :ripple="false" v-bind="$attrs" v-on="$listeners" @click="toggleDarkMode"> <slot></slot> </v-btn>
</template>

<script>
import './Button.scss';
export default {
  name: 'Button',
  inheritAttrs: false,
  data: () => ({
    darkMode: false
  }),
  methods: {
    toggleDarkMode() {
      this.$vuetify.theme.dark = !this.darkMode;
      this.darkMode = this.$vuetify.theme.dark;
    }
  }
}
</script>


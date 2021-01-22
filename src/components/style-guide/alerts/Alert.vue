<template>
  <div>
    <v-alert
        :type="type"
        :icon="iconByType()"
        tile
        v-bind="$attrs"
        v-on="$listeners">
      <slot></slot>
    </v-alert>
  </div>
</template>

<script>
import './Alert.scss';

export default {
  name: 'Alert',
  inheritAttrs: false,
  methods: {
    iconByType: function () {
      if (this.$props.type === 'info') {
        return 'mdi-bell-outline';
      }

      if (this.$props.type === 'warning') {
        return 'mdi-error-outline';
      }

      if (this.$props.type === 'success') {
        return 'mdi-tick-circle-outline';
      }

      return false;
    }
  },
  props: {
    type: String
  }
}
</script>

<template>
  <div>
    <v-alert
        :icon="false"
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
}
</script>

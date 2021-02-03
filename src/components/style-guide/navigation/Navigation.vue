<template>
  <v-navigation-drawer
      color="#093F75"
      width="325"
      :mini-variant.sync="mini"
      permanent
      v-bind="$attrs" v-on="$listeners">
    <!-- Pass on all named slots -->
    <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot"/>

    <!-- Pass on all scoped slots -->
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope"/></template>
  </v-navigation-drawer>
</template>

<script>
import './Navigation.scss';
export default {
  name: 'Navigation',
  inheritAttrs: true,
}
</script>

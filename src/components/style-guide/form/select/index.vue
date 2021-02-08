<template>
  <v-select :ripple="false" solo flat outlined v-bind="$attrs" v-on="$listeners">
    <!-- Pass on all named slots -->
    <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />

    <!-- Pass on all scoped slots -->
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope" /></template>
  </v-select>
</template>

<script>
export default {
  name: 'DxSelect',
  inheritAttrs: true,
}
</script>

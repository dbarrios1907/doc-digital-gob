<template>
  <v-data-table v-bind="$attrs" v-on="$listeners"><slot></slot></v-data-table>
</template>

<script>
import './DataTable.scss';
export default {
  name: 'DataTable',
  inheritAttrs: false,
}
</script>

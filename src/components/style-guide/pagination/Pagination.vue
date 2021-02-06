<template>
  <v-pagination v-bind="$attrs" v-on="$listeners" class="dx-pagination"/>
</template>

<script>
export default {
  name: 'DxPagination',
  inheritAttrs: false,
}
</script>

<style>
.dx-pagination .v-pagination__navigation,
.dx-pagination .v-pagination__item {
  height: 24px !important;
  min-width: 24px !important;
  margin: 0 3px;
  border-radius: 0;
  box-shadow: none;
  outline: none;
  font-size: 12px;
  font-weight: 400;
}

.dx-pagination .v-pagination__item:not(.v-pagination__item--active) {
  border-bottom:1px solid #0F69C4;
  margin: 0 3px;
  color: #0F69C4;
}
</style>
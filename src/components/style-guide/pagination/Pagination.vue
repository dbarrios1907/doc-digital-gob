<template>
  <v-pagination v-bind="$attrs" class="dx-pagination" v-on="$listeners" />
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
  border-bottom: 1px solid #0f69c4;
  margin: 0 3px;
  color: #0f69c4;
}
</style>

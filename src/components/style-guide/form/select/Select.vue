<template>
  <v-select dx-select :ripple="false" solo flat outlined v-bind="$attrs" v-on="$listeners">
    <!-- Pass on all named slots -->
    <slot v-for="slot in Object.keys($slots)" :slot="slot" :name="slot" />

    <!-- Pass on all scoped slots -->
    <template v-for="slot in Object.keys($scopedSlots)" :slot="slot" slot-scope="scope"><slot :name="slot" v-bind="scope" /></template>
  </v-select>
</template>

<script>
export default {
  name: 'DxSelect',
  inheritAttrs: true,
  props: {},
}
</script>
<style lang="scss">
.v-card > div.v-select {
  border-radius: 0px !important;
}
@include theme(v-select) using($material) {
  &.v-text-field--outlined > .v-input__control > .v-input__slot {
    min-height: rem-calc(48px) !important;
  }
  &.v-text-field--outlined.v-input--is-focused fieldset {
    border: 1px solid !important;
  }
  &.v-select.v-select--chips .v-select__selections {
    margin-left: rem-calc(-12px) !important;
  }
  .v-input__control i.v-icon.v-icon {
    font-size: rem-calc(32px) !important;
  }
  .v-input__control {
    // height: 48px !important;
    padding: 0;
  }
}
@include theme(v-menu__content) using($material) {
  $primarycolor: map-get($material, 'primary');
  $text-color: map-get($material, 'light');
  .v-list-item__action .v-icon.v-icon {
    font-size: rem-calc(32px) !important;
  }
  .v-list-item__action {
    margin-right: 8px !important;
  }
  .v-list-item__title {
    line-height: 24px !important;
  }
  .v-list-item {
    padding: 0px !important;
    margin: 0px 8px !important;
  }
  // .v-list-item[aria-selected='true'] {
  //   background-color: $primarycolor !important;
  //   color: $text-color !important;
  // }
  // .v-list-item[aria-selected='true']:hover {
  //   color: $primarycolor !important;
  //   background-color: $text-color !important;
  // }

  &.v-menu__content {
    border: 1px solid $primarycolor !important;
    border-radius: 0px !important;
    margin-top: 10px !important;
  }
  &.v-menu__content .v-list-item__content {
    padding: 4px 0 !important;
  }
  .v-list-item:hover {
    background: none !important;
  }
}
</style>

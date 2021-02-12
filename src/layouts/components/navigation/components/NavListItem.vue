<template>
  <v-list-item dx-list-item :ripple="false" v-bind="$attrs" v-on="$listeners">
    <slot />
  </v-list-item>
</template>

<script>
export default {
  name: 'DxNavListItem', // inherits from vuetify v-list-item
  inheritAttrs: true,
}
</script>

<style lang="scss">
@include theme(v-list-item) using ($material) {
  $bg-color: map-deep-get($material, 'navigation', 'bg-color');
  $color: map-deep-get($material, 'colors', 'light');
  $active-opacity: map-deep-get($material, 'navigation', 'states', 'active');
  $hover-opacity: map-deep-get($material, 'navigation', 'states', 'hover');

  &[dx-list-item] {
    &.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
      color: $color !important;
    }

    &.v-list-item--active {
      color: $color;
    }

    .v-icon {
      color: $color;
    }
    &.v-list-item--link:before {
      background-color: darken($bg-color, 20%);
    }

    &:active {
      background: darken($bg-color, 10%);
      transition: background 0.2s linear;
    }
    &:hover::before {
      opacity: $hover-opacity;
    }
  }
}
</style>

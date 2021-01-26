<template>
<!--  <v-rating-->
<!--      color="primary"-->
<!--      empty-icon="$mdiStarOutline"-->
<!--      full-icon="$mdiStar"-->
<!--      half-icon="$mdiStarHalfFull"-->
<!--      half-increments-->
<!--      hover-->
<!--      length="5"-->
<!--  ></v-rating>-->

  <v-rating
      color="primary"
      background-color="primary"
      half-increments
      hover
      dense
      :ripple="false"
      v-bind="$attrs" v-on="$listeners"
  ></v-rating>
</template>

<script>
export default {
  name: 'doc-ratings',
  inheritAttrs: false,
}
</script>

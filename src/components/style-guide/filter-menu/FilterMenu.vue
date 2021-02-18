<template>
  <v-row justify="space-around">
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <v-btn :color="darken3" class="ma-5" v-bind="attrs" v-on="on"> {{ text }} Radius </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="item in items" :key="item" link>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-row>
</template>

<script>
export default {
  name: 'DxFilterMenu',
  inheritAttrs: true,
  props: {},
}
</script>

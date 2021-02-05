<template>
  <div>
    <dx-button color="#656565" outlined height="38px" min-width="18" width="38" small v-bind="$props" @click="changetheme">
      <v-icon regular>mdi-dock-left</v-icon>
    </dx-button>

    <dx-button color="#656565" outlined height="38px" min-width="18" width="38" small v-bind="$props" @click="resize('minus')">
      <v-icon>mdi-format-annotation-minus</v-icon>
    </dx-button>

    <dx-button color="#656565" outlined height="38px" min-width="18" width="38" small v-bind="$props" @click="resize('plus')">
      <v-icon>mdi-format-annotation-plus</v-icon>
    </dx-button>
 </div>
</template>

<script>
export default {
  name: 'DxIconsActions',
  inheritAttrs: false,
  methods: {
    resize(action) {
      var sz = document.body.style.fontSize, size;
      if (sz =='') sz = 14;
      if (action == "minus") size = parseFloat(sz) - 1;
      if (action == "plus") size = parseFloat(sz) + 1;
      document.body.style.fontSize = size + 'px';
    },
    changetheme (){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

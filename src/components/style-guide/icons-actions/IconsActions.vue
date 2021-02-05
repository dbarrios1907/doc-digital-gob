<template>
  <div>
    <dx-button 
      v-for="elem in items"
      :aria-label="elem.name"
      color = "#656565"
      outlined
      small
      height = 38
      min-width = 18
      width = 38
      :key="elem.name"
      v-bind="$props"
      class="mr-2"
      @click="call(elem.func)"
      >
      <v-icon regular>{{ elem.name }}</v-icon>
    </dx-button>
 </div>
</template>

<script>
export default {
  name: 'DxIconsActions',
  inheritAttrs: false,
  data() {
    return { 
      count: parseFloat(document.body.style.fontSize) || 14,
      items: [
        { name: 'mdi-dock-left', func: 'changetheme' },
        { name: 'mdi-format-annotation-minus', func: 'minus' },
        { name: 'mdi-format-annotation-plus', func: 'plus'},
        ]
      }
  },
  methods: {
    minus() { this.count -= 1; this.setfont()},
    plus() { this.count += 1; this.setfont()},
    changetheme (){ this.$vuetify.theme.dark = !this.$vuetify.theme.dark },
    call(name) {this[name]()},
    setfont(){document.body.style.fontSize = this.count + 'px'},
  }
}
</script>

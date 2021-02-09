<template>
  <div>
    <BackgroundChange @click="changetheme" />
    <MinusText @click="minus" />
    <PlusText @click="plus" />
 </div>
</template>

<script>
export default {
  name: 'DxIconsActions',
  inheritAttrs: false,
  data() {
    return { 
      count: parseFloat(document.body.style.fontSize) || 14,
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

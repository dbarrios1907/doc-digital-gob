<template>
  <div :items="items" class="dx-filtermenu">
    <dx-button color="darken3" outlined @click="toogleOptions">
      <div class="text-underline float-left">Filtro</div>
      <dx-icon right regular class="text-right float-right"> mdi-filter </dx-icon>
    </dx-button>
    <div v-show="toggled" @focusout="focusout" class="list-items-content mt-2" ref="menulist">
      <div v-for="item in items" :key="item">
        <v-checkbox v-model="selected" :label="item" :value="item" :ripple="false" @change="emitSelected"></v-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DxFiltermenu',
  inheritAttrs: false,
  props: {
    items: Array,
  },
  data() {
    return {
      toggled: false,
      selected: [],
    }
  },
  methods: {
    toogleOptions() {
      this.toggled = !this.toggled
      // if (this.$refs.menulist.$el.focus() == true) {
      //   this.toggled = true
      // }
    },
    focusout(e) {},
    emitSelected() {
      this.$emit('get-selected', this.selected)
    },
  },
  computed: {
    isTootgled() {
      return this.toggled
    },
  },
}
</script>

<style lang="scss">
@include theme(v-application--wrap) using($material) {
  $text-color: map-deep-get($material, 'v_filtermenu', 'darken3');
  .dx-filtermenu,
  .dx-filtermenu .v-btn {
    width: 100% !important;
  }
  .dx-filtermenu .v-btn {
    height: 48px !important;
  }
  .dx-filtermenu .v-btn__content {
    justify-content: normal !important;
  }
  .dx-filtermenu .v-btn > .v-btn__content i.v-icon {
    font-size: rem-calc(24px) !important;
    position: absolute;
    right: 0;
    top: 1px;
  }
  .dx-filtermenu .list-items-content {
    border: 1px solid !important;
    padding: 0px 12px !important;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.2);
  }
  .dx-filtermenu .v-input--selection-controls {
    margin-top: 12px !important;
  }
  .dx-filtermenu .v-input {
    padding: 0px 0px 0 0 !important;
    height: 36px !important;
  }
  .dx-filtermenu .v-label {
    // .dx-filtermenu .theme--light.v-icon {
    color: $text-color !important;
  }
  .dx-filtermenu .theme--light.v-icon {
    color: $text-color;
  }
  .dx-filemenu.v-chip.tertiary {
    padding: 13px 20px !important;
    height: 48px !important;
    max-width: 300px !important;
    font-weight: 700 !important;
    margin-right: 10px;
    float: left !important;
  }
}
</style>

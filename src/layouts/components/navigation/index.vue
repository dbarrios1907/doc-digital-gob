<template>
  <v-navigation-drawer ref="navbar" color="#093F75" width="100%" permanent v-bind="$attrs" v-on="$listeners">
    <perfect-scrollbar :style="{ height: scrollHeight }">
      <slot :slot-scope="{}" name="top-section">
        <NavListItem class="px-3">
          <v-list-item-icon>
            <v-icon large class="light--text"> mdi-account </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Entidad Seleccionada</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </NavListItem>

        <v-divider />

        <div class="py-4" style="display: flex; justify-content: center">
          <dx-button large color="primary" outlined v-bind="$props" class="light">
            <dx-icon left regular> mdi-send </dx-icon>
            <span class="text-underline"> Enviar Documento </span>
          </dx-button>
        </div>
      </slot>
      <slot name="menu">
        <v-list>
          <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
        </v-list>
      </slot>
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

<script>
import NavListItem from './components/NavListItem.vue'
import SidebarItem from './components/SidebarItem.vue'
export default {
  name: 'DxNavigation',
  components: {
    NavListItem,
    SidebarItem,
  },
  inheritAttrs: true,
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({
    scrollHeight: '100%',
  }),
  watch: {
    '$refs.navbar.scrollHeight'() {
      this.scrollHeight = this.$refs.navbar.scrollHeight + 'px'
    },
  },
  mounted() {
    this.scrollHeight = this.$refs.navbar.scrollHeight + 'px'
  },
}
</script>

<style lang="scss">
.v-navigation-drawer__content {
  overflow: hidden;
}
</style>

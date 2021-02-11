<template>
  <dx-scroll-bar wrap-class="scrollbar-wrapper">
    <v-navigation-drawer color="#093F75" width="325" permanent :mini-variant.sync="mini" v-bind="$attrs" v-on="$listeners">
      <slot :slot-scope="{}" name="top-section">
        <dx-nav-list-item class="px-3">
          <v-list-item-icon>
            <v-icon large class="light--text"> mdi-account </v-icon>
          </v-list-item-icon>

          <v-list-item-title>Entidad Seleccionada</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </dx-nav-list-item>

        <v-divider />

        <div class="py-4" style="display: flex; justify-content: center">
          <v-button large color="primary" outlined v-bind="$props" class="light">
            <dx-icon left regular> mdi-send </dx-icon>
            <span class="text-underline"> Enviar Documento </span>
          </v-button>
        </div>
      </slot>
      <slot name="menu">
        <v-list>
          <dx-nav-list-item v-for="item in routes" :key="item.title" active-class="light--text" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </dx-nav-list-item>

          <dx-nav-list-group :ripple="false" :value="true" active-class="light--text" prepend-icon="mdi-account-circle" no-action>
            <template v-slot:activator>
              <v-list-item-title>Users</v-list-item-title>
            </template>

            <dx-nav-list-group active-class="light--text" sub-group no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>Admin</v-list-item-title>
                </v-list-item-content>
              </template>

              <dx-nav-list-item v-for="item in routes" :key="item.title" link>
                <v-list-item-title v-text="item.title" />

                <v-list-item-icon>
                  <v-icon v-text="item.icon" />
                </v-list-item-icon>
              </dx-nav-list-item>
            </dx-nav-list-group>

            <dx-nav-list-item v-for="({ title, icon }, i) in routes" :key="i" link>
              <v-list-item-title v-text="title" />

              <v-list-item-icon>
                <v-icon v-text="icon" />
              </v-list-item-icon>
            </dx-nav-list-item>
          </dx-nav-list-group>

          <dx-nav-list-item v-for="item in routes" :key="item.title" active-class="light--text" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </dx-nav-list-item>
        </v-list>
      </slot>
    </v-navigation-drawer>
  </dx-scroll-bar>
</template>

<script>
export default {
  name: 'DxNavigation',
  inheritAttrs: true,
  props: {
    routes: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

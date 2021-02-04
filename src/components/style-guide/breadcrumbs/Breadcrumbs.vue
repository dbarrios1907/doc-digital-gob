<template>
  <div class="d-flex-inline">
    <template v-if="firstItem">
      <span :href="firstItem.href">
        <dx-icon dense color="primary">mdi-arrow-left</dx-icon>
      </span>
      <v-breadcrumbs class="d-inline pl-1 pr-2" :items="items" v-bind="$attrs" v-on="$listeners">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :to="item.href" class="primary--text" active-class="dark--text">
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </template>
  </div>
</template>

<script>
import './Breadcrumbs.scss'
export default {
  name: 'DxBreadcrumbs',
  inheritAttrs: false,
  props: {
    items: Array,
  },
  computed: {
    firstItem() {
      return this.items.length > 0 ? this.items[0] : undefined
    },
  },
}
</script>

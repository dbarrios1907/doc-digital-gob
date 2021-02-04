<template>
  <div>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
  </div>
</template>

<script>
  import './Breadcrumbs.scss'
  export default {
    name: 'BreadCrumbs',
    inheritAttrs: false,
    props: {
      items: Array()
    }
  }
</script>



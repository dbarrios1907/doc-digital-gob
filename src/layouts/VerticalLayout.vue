<template>
  <div class="wrapper">
    <header :class="{ 'd-flex': hasHeaderSlot }">
      <slot name="header">
        <div class="dark light--text text-h3 weight-400 px-4 py-4">header</div>
      </slot>
    </header>

    <slot name="main">
      <div class="light dark--text text-h2 weight-600 px-4 py-4">Main Content</div>
    </slot>

    <footer>
      <slot name="footer">
        <div class="dark light--text text-h6 px-4 py-2">Footer</div>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DxVerticalLayout',
  inheritAttrs: false,
  computed: {
    hasHeaderSlot() {
      return !!this.$slots.header
    },
  },
}
</script>

<style>
.wrapper {
  height: 100%;
  /*display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
  */
}

.wrapper header {
  grid-column: 1 / 4;
  height: 90px;
}

.wrapper main {
  grid-column: 2 / 3;
}

.wrapper footer {
  grid-column: 1 / 4;
  height: 58px;
}

.wrapper main > div,
.wrapper header > div,
.wrapper footer > div {
  height: 100%;
  max-height: 100%;
}
</style>

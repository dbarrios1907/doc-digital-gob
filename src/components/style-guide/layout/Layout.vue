<template>
  <div class="wrapper">
    <header :class="{ 'd-flex': hasHeaderSlot }">
      <slot name="header">
        <div class="dark light--text text-h3 weight-400 px-4 py-4">header</div>
      </slot>
    </header>

    <div class="nav">
      <slot name="nav">
        <div class="primary light--text text-h3 weight-200 px-4 py-4">Left Sidebar</div>
      </slot>
    </div>

    <main>
      <slot name="main">
        <div class="light dark--text text-h2 weight-600 px-4 py-4">Main Content</div>
      </slot>
    </main>

    <footer>
      <slot name="footer">
        <div class="dark light--text text-h6 px-4 py-2">Footer</div>
      </slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DxLayout',
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
  display: grid;
  grid-template: auto 1fr auto / auto 1fr auto;
}

.wrapper header {
  grid-column: 1 / 4;
  height: 90px;
}

.wrapper .nav {
  grid-column: 1 / 2;
  width: 325px;
}

.wrapper main {
  grid-column: 2 / 3;
}

.wrapper footer {
  grid-column: 1 / 4;
  height: 58px;
}

.wrapper .nav > div,
.wrapper main > div,
.wrapper header > div,
.wrapper footer > div {
  height: 100%;
}
</style>

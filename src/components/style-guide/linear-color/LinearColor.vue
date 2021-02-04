<template>
  <label class="float-left" :style="{backgroundColor: color, width: width + 'px', height: '10px'}"></label>
</template>

<script>
export default {
  name: 'LinearColor',
  inheritAttrs: false,
  props: {
    color: String,
    width: String
  }
}
</script>
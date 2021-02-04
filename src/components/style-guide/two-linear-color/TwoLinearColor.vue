<template>
  <div style="position: relative;">
  	  <div :style="{position: 'absolute', top: pos === 'top' ? 0 : '', bottom: pos === 'bottom' ? 0 : ''}">
  	  	<LinearColor :color="color1" :width="width1" />
      	<LinearColor :color="color2" :width="width2" />
  	  </div>
      
      <div class="d-flex align-center" :style="{paddingTop: size + 'px', paddingBottom: size + 'px'}"><slot /></div>
  </div>
</template>

<script>
import LinearColor from '../linear-color/LinearColor';
export default {
  name: 'TwoLinearColor',
  inheritAttrs: false,
  components: { LinearColor },
  props: {
    color1: String,
    color2: String,
    width1: String,
    width2: String,
    size: String,
    pos: String
  }
}
</script>
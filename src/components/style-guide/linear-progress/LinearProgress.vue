<template>
  <v-progress-linear
      color="#0F69C4"
      background-color="#CFE1F3"
      v-model="knowledge"
      height="25"
      class="neutral--text"
      v-bind="$attrs"
      v-on="$listeners"
  >
    <strong>{{ Math.ceil(knowledge) }}%</strong>
  </v-progress-linear>
</template>

<script>
export default {
  name: 'doc-linear-progress',
  inheritAttrs: false,
}
</script>

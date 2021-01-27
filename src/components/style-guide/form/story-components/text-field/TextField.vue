<template>
  <ValidationProvider :name="name" :rules="rules" v-slot="v">
    <v-text-field label="Text Label" outlined dense v-bind="$attrs" v-on="$listeners">
      <template v-slot:prepend>
        <v-tooltip
            bottom
        >
          <template v-slot:activator="{ on }">
            <v-icon v-on="on">
              mdi-help-circle-outline
            </v-icon>
          </template>
          I'm a tooltip
        </v-tooltip>
      </template>
      <template v-slot:append>
        <v-slide-x-reverse-transition
            mode="out-in"
        >
          <v-icon
              :key="`icon-${isEditing}`"
              :color="isEditing ? 'success' : 'info'"
              v-text="isEditing ? 'mdi-check' : 'mdi-circle-edit-outline'"
              @click="log(v)"
          ></v-icon>
        </v-slide-x-reverse-transition>
      </template>
    </v-text-field>
<!--    <span>{{ errors[0] }}</span>-->
  </ValidationProvider>
</template>

<script>
export default {
  name: 'doc-text-field',
  inheritAttrs: false,
  data() {
    return {
      isEditing: false,
      isLoading: false
    }
  },
  props: {
    name: {
      type: String,
    },
    rules: {
      type: String,
    }
  },
  methods: {
    log(v) {
      console.log(v)
    }
  },
}
</script>

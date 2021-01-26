<template>
  <v-form>
    <v-row>
      <v-col
          cols="12"
          sm="6"
          md="4"
      >
        <v-text-field
            label="Outlined"
            color="error"
            outlined
            dense
        >
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
            <v-fade-transition leave-absolute @click="isLoading = !isLoading">
              <v-progress-circular
                  v-if="isLoading"
                  size="24"
                  color="info"
                  indeterminate

              ></v-progress-circular>
              <v-icon color="success" @click="isLoading = !isLoading">
                mdi-check
              </v-icon>
            </v-fade-transition>
            <v-slide-x-reverse-transition
                mode="out-in"
            >
              <v-icon
                  :key="`icon-${isEditing}`"
                  :color="isEditing ? 'success' : 'info'"
                  @click="isEditing = !isEditing"
                  v-text="isEditing ? 'mdi-check' : 'mdi-circle-edit-outline'"
              ></v-icon>
            </v-slide-x-reverse-transition>
          </template>

        </v-text-field>
      </v-col>
    </v-row>
  </v-form>

</template>

<script>
export default {
  name: 'gob-text-field',
  data() {
    return {
      isEditing: false,
      isLoading: false
    }
  },
}
</script>

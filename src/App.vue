<template>
  <v-app>
    <div class="notificationCenter" />
    <v-app-bar app color="primary" dark>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>l
        <v-icon>open_in_new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-row class="mx-4 my-4">
        <v-col cols="12" sm="6" lg="4">
          <Button color="primary"> Testing Style Guide Plugin </Button>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>

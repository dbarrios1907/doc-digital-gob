<template>
  <v-item-group mandatory>
    <v-sheet max-height="600" tile>
      <v-item v-for="[c, font, text, size, weight, spacing, margin, key] in classes" :key="key">
        <template v-slot:default="{ active, toggle }">
          <v-sheet
            :color="active ? ($vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4') : undefined"
            class="px-4 pt-5 pb-3"
            tile
            style="cursor: pointer"
            @click="toggle"
          >
            <div
              :class="[`text-${c}`, `weight-${weight}`, active && `mb${margin}`]"
              class="transition-swing pb-4"
              style="display: table"
              v-text="text"
            />

            <v-expand-transition>
              <v-responsive v-if="active" max-width="350">
                <div class="d-flex justify-space-between caption">
                  <div>
                    <div class="grey--text mb-2">Font</div>

                    <div v-text="font" />
                  </div>

                  <div>
                    <div class="grey--text mb-2">Weight</div>

                    <div v-text="weight" />
                  </div>

                  <div>
                    <div class="grey--text mb-2">Size</div>

                    <div v-text="size" />
                  </div>

                  <div>
                    <div class="grey--text text-darken-1 mb-2">Letter spacing</div>

                    <div v-text="spacing" />
                  </div>
                </div>
              </v-responsive>
            </v-expand-transition>
          </v-sheet>
        </template>
      </v-item>
    </v-sheet>
  </v-item-group>
</template>

<script>
export default {
  data: () => ({
    model: null,
    classes: [
      ['h1', 'Roboto Slab', 'Heading 1', '3.052rem', '200', '-.015625em', -1, 1],
      ['h1', 'Roboto Slab', 'Heading 1', '3.052rem', '400', '-.015625em', -1, 2],
      ['h1', 'Roboto Slab', 'Heading 1', '3.052rem', '600', '-.015625em', -1, 3],
      ['h2', 'Roboto Slab', 'Heading 2', '3.75rem', '200', '-.0083333333em', 0, 4],
      ['h2', 'Roboto Slab', 'Heading 2', '3.75rem', '400', '-.0083333333em', 0, 5],
      ['h2', 'Roboto Slab', 'Heading 2', '3.75rem', '600', '-.0083333333em', 0, 6],
      ['h3', 'Roboto Slab', 'Heading 3', '3rem', '200', 'normal', 1, 7],
      ['h3', 'Roboto Slab', 'Heading 3', '3rem', '400', 'normal', 1, 8],
      ['h3', 'Roboto Slab', 'Heading 3', '3rem', '600', 'normal', 1, 9],
      ['h4', 'Roboto Slab', 'Heading 4', '2.125rem', '200', '.0073529412em', 2, 10],
      ['h5', 'Roboto', 'Heading 5', '1.5rem', '400', 'normal', 2, 11],
      ['h6', 'Roboto', 'Heading 6', '1.25rem', '500', '.0125em', 3, 12],
      ['subtitle-1', 'Roboto', 'Subtitle 1', '1rem', '400', '.009375em', 4, 13],
      ['subtitle-2', 'Roboto', 'Subtitle 2', '0.875rem', '500', '.0071428571em', 4, 14],
      ['body-1', 'Roboto', 'Body 1', '1rem', '400', '.03125em', 4, 15],
      ['body-2', 'Roboto', 'Body 2', '0.875rem', '400', '.0178571429em', 4, 16],
      ['button', 'Roboto', 'Button', '0.875rem', '500', '.0892857143em', 4, 17],
      ['caption', 'Roboto', 'Caption', '0.75rem', '400', '.0333333333em', 4, 18],
      ['overline', 'Roboto', 'Overline', '0.75rem', '500', '.1666666667em', 4, 19],
    ],
  }),
}
</script>

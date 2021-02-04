import Vue from 'vue'
import { addDecorator } from '@storybook/vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/vee-validate'
import styleGuidePlugin from '@/plugins/style-guide'

import 'vuetify/src/styles/main.sass'

Vue.use(styleGuidePlugin)

addDecorator(() => ({
  vuetify,
  template: `
    <v-app>
      <v-main>
        <v-container fluid style="height: 80%">
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `,
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

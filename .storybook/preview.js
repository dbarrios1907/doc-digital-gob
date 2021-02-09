import Vue from 'vue'
import { addDecorator } from '@storybook/vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/vee-validate'
import styleGuidePlugin from '@/plugins/style-guide'
Vue.use(styleGuidePlugin)
import '@/assets/styles/main.scss'

addDecorator(() => ({
  vuetify,
  template: `
    <v-app>
      <div class="dx-notification-container py-2 px-3" />
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

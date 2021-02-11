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
      <div class="dx-notification-container" style="width: auto; max-height: 100%; position: absolute;"/>
      <v-container fluid class="px-0 py-0 mx-0">
        <story/>
      </v-container>
    </v-app>
    `,
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

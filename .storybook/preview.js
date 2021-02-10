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
      <v-main>
        <v-container fluid class="px-0 py-0" style="height: calc(100% - 32px); width: calc(100% - 32px);">
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `,
}))

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

import Vue from 'vue'
import { addDecorator } from '@storybook/vue'
import vuetify from '@/plugins/vuetify'
import '@/plugins/vee-validate'
import ToastNotificationPlugin from '@/plugins/toast-notification'
import styleGuidePlugin from '@/plugins/style-guide'
Vue.use(styleGuidePlugin)
Vue.use(ToastNotificationPlugin)
import '@/assets/styles/main.scss'

import NotificationVuejs from '../src/components/style-guide/VueNotification'

Vue.use(NotificationVuejs, {
  timer: 20,
  title: 'Vue notification',
  position: 'topRight',
})

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

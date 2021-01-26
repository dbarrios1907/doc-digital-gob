import { addDecorator } from '@storybook/vue';
import vuetify from '@/plugins/vuetify';
import '@/plugins/vee-validate';

import 'vuetify/src/styles/main.sass';

addDecorator(() => ({
  vuetify,
  template: `
    <v-app>
      <v-main>
        <v-container fluid >
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `,
}));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

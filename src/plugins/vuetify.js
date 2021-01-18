import Vue from 'vue';
import Vuetify, {
  VApp,
  VContainer,
  VBtn,
  VMain
} from 'vuetify/lib'

import es from 'vuetify/lib/locale/es';

Vue.use(Vuetify, {
  components: {
    VApp,
    VContainer,
    VBtn,
    VMain
  }
});

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#006FB3',
        secondary: '#FE6565',
        tertiary: '#0A132D',
        accent: '#A8B7C7',
        error: '#FE6565',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        neutral: '#EEEEEE',
        grayA: '#4A4A4A',
        grayB: '#8A8A8A',
        black: '#111111',


      },
    },
  },
    lang: {
      locales: { es },
      current: 'es',
    },
  icons: {
    iconfont: 'md',
  },
});

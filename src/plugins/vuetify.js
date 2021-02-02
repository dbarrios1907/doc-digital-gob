import Vue from 'vue';
import * as _Vuetify from 'vuetify/lib';

const Vuetify = _Vuetify.default

const isVueComponent = obj => obj.name === 'VueComponent'

const VComponents = Object.keys(_Vuetify).reduce((acc, key) => {
  if (isVueComponent(_Vuetify[key])) {
    acc[key] = _Vuetify[key]
  }
  return acc
}, {})

import {
  Button,
  Badge,
  Alert,
  Icon,
} from '../components/style-guide';

import es from 'vuetify/lib/locale/es';
import {themes} from '@/shared/theme/color-palette';
import '@mdi/font/css/materialdesignicons.min.css';

const styleGuideComponents = {
  Button,
  Badge,
  Icon,
  Alert,
}

Vue.use(Vuetify, {
  components: {
    ...VComponents,
    VExpandTransition: _Vuetify.VExpandTransition,
    VSlideXReverseTransition: _Vuetify.VSlideXReverseTransition,
    ...styleGuideComponents
  },
});

export default new Vuetify({
  treeShake: true,
  customVariables: ['@/assets/styles/main.scss'],
  global: {
    ripple: false
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes
  },
  lang: {
    locales: { es },
    current: 'es',
  },
  icons: {
    iconfont: 'mdi',

  }
});

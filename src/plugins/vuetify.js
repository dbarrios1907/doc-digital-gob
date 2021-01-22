import Vue from 'vue';
import Vuetify, {
  VApp,
  VContainer,
  VBtn,
  VMain,
  VItem,
  VItemGroup,
  VSheet,
  VExpandTransition,
  VResponsive,
  VChip,
  VIcon,
  VAlert

} from 'vuetify/lib'

import es from 'vuetify/lib/locale/es';
import {themes} from '@/shared/theme/color-palette';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.use(Vuetify, {
  components: {
    VApp,
    VContainer,
    VBtn,
    VMain,
    VItem,
    VItemGroup,
    VSheet,
    VExpandTransition,
    VResponsive,
    VIcon,
    VAlert,
    VChip
  },

});

export default new Vuetify({
  treeShake: true,
  customVariables: ['@/assets/styles/main.scss'],
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
  },
});

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
  VChip

} from 'vuetify/lib'

import es from 'vuetify/lib/locale/es';
import {themes} from '@/shared/theme/color-palette';

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
    iconfont: 'md',
  },
});

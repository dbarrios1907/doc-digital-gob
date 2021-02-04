import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import vuetify from './plugins/vuetify'
import router from './plugins/vue-router'
import store from './plugins/vuex'
import './plugins/vee-validate'
import styleGuidePlugin from '@/plugins/style-guide'

Vue.use(styleGuidePlugin)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

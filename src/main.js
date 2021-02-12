import Vue from 'vue'
import App from './App.vue'
import '@babel/polyfill'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import store from './plugins/vuex'
import './plugins/vee-validate'
import styleGuidePlugin from '@/plugins/style-guide'
import '@/assets/styles/main.scss'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

Vue.use(PerfectScrollbar)
Vue.use(styleGuidePlugin)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

import Vue from 'vue'
import Button from '../../components/style-guide/button/Button'
import NavTree from '../components/navigation/NavTree'
import Navigation from './Navigation'
import { storyPath } from './_settings'

export default {
  title: storyPath + 'Navigation',
  argTypes: {},
}

Vue.component('v-button', Button)
Vue.component('v-nav-tree', NavTree)
Vue.component('Navigation', Navigation)

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Usuarios', icon: 'mdi-account-supervisor-circle' },
        { title: 'Documentos', icon: 'mdi-file-multiple' },
        { title: 'Oficina de Partes', icon: 'mdi-bank' },
      ],
      right: null,
      open: [1, 2],
      tree: null,
      caseSensitive: false,
    }
  },
  template: `
    <v-card>
      <Navigation v-model="drawer" :routes="items"/>
    </v-card>
  `,
})

export const Default = Template.bind({})
Default.args = {}

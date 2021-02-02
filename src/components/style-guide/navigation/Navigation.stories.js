import Vue from 'vue';
import Button from '../button/Button';
import NavTree from './NavTree';

export default {
  title: 'Style Guide/Navigation',
  argTypes: {
  },
};

Vue.component('v-button', Button);
Vue.component('v-nav-tree', NavTree);

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Usuarios', icon: 'mdi-file-document-outline' },
        { title: 'Documentos', icon: 'mdi-file-document-outline' },
        { title: 'Oficina de Partes', icon: 'mdi-office-building' },
        { title: 'Usuarios', icon: 'mdi-file-document-outline' },
        { title: 'Documentos', icon: 'mdi-file-document-outline' },
        { title: 'Oficina de Partes', icon: 'mdi-office-building' },
        { title: 'Usuarios', icon: 'mdi-file-document-outline' },
        { title: 'Documentos', icon: 'mdi-file-document-outline' },
        { title: 'Oficina de Partes', icon: 'mdi-office-building' }
      ],
      right: null,
      menuItems: [
        {
          id: 1,
          name: 'Vuetify Human Resources',
          children: [
            {
              id: 2,
              name: 'Core team',
              children: [
                {
                  id: 201,
                  name: 'John',
                },
                {
                  id: 202,
                  name: 'Kael',
                },
                {
                  id: 203,
                  name: 'Nekosaur',
                },
                {
                  id: 204,
                  name: 'Jacek',
                },
                {
                  id: 205,
                  name: 'Andrew',
                },
              ],
            },
            {
              id: 3,
              name: 'Administrators',
              children: [
                {
                  id: 301,
                  name: 'Mike',
                },
                {
                  id: 302,
                  name: 'Hunt',
                },
              ],
            },
            {
              id: 4,
              name: 'Contributors',
              children: [
                {
                  id: 401,
                  name: 'Phlow',
                },
                {
                  id: 402,
                  name: 'Brandon',
                },
                {
                  id: 403,
                  name: 'Sean',
                },
              ],
            },
          ],
        },
      ],
      open: [1, 2],
      tree: null,
      caseSensitive: false,
    }
  },
  template: `
    <v-card>
    <v-navigation-drawer
        color="#093F75"
        width="325"
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
    >
      <v-list-item class="px-3">
        
        <v-list-item-icon>
          <v-icon large class="light--text"> mdi-account </v-icon>
        </v-list-item-icon>
        
        <v-list-item-title class="light--text">Entidad Seleccionada</v-list-item-title>

        <v-btn
            icon
            @click.stop="mini = !mini"
        >
          <v-icon class="light--text">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <div class="py-4" style="display: flex; justify-content: center;">
        <v-button large color="primary" outlined v-bind="$props" class="light">
          <Icon left regular>
            mdi-send
          </Icon>
          <span class="text-underline"> Enviar Documento </span>
        </v-button>
      </div>

      <v-list dense>
        <v-list-item
            v-for="item in items"
            :key="item.title"
            link
        >
          <v-list-item-icon>
            <v-icon class="light--text">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="light--text">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

<!--      <v-list-item-group v-model="group" class="light&#45;&#45;text">-->
<!--        <v-list-item>-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>mdi-home</v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-title>Home</v-list-item-title>-->
<!--        </v-list-item>-->
<!--        <v-list-item>-->
<!--          <v-list-item-icon>-->
<!--            <v-icon>mdi-account</v-icon>-->
<!--          </v-list-item-icon>-->
<!--          <v-list-item-title>Account</v-list-item-title>-->
<!--        </v-list-item>-->
<!--      </v-list-item-group>-->

      <v-nav-tree
          :v-model="tree"
          class="light--text"
          :items="menuItems"
          selected-color="indigo"
          open-on-click
          return-object
          expand-icon="mdi-chevron-down"
          :open.sync="open"
          dark
      >
      </v-nav-tree>
      
    </v-navigation-drawer>
    </v-card>
  `
});

export const Default = Template.bind({});
Default.args = {};

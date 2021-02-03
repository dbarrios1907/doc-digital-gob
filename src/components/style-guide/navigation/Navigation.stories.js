import Vue from 'vue';
import Button from '../button/Button';
import NavTree from './NavTree';
import Navigation from './Navigation';

export default {
  title: 'Style Guide/Navigation',
  argTypes: {
  },
};

Vue.component('v-button', Button);
Vue.component('v-nav-tree', NavTree);
Vue.component('Navigation', Navigation);

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
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
      right: null,
      open: [1, 2],
      tree: null,
      caseSensitive: false,
    }
  },
  template: `
    <v-card>
    <Navigation
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
            active-class="light--text"
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

      <v-list dark>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-group
            :value="true"
            active-class="light--text"
            prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>Users</v-list-item-title>
          </template>

          <v-list-group
              :value="true"
              no-action
              sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Admin</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="([title, icon], i) in admins"
                :key="i"
                link
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
          <v-list-group
              no-action
              sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Actions</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
                v-for="([title, icon], i) in cruds"
                :key="i"
                link
            >
              <v-list-item-title v-text="title"></v-list-item-title>

              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
      
    </Navigation>
    </v-card>
  `
});

export const Default = Template.bind({});
Default.args = {};

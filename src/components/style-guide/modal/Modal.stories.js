import './Modal.scss';
import Button from '../button/Button.vue';

export default {
  title: 'Style Guide/Modal',
  argTypes: {},
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      dialog: false,
      dialog1: false,
    }
  },
  template: `
    <v-row justify="center">
      <v-btn
          color="primary"
          class="ma-2"
          dark
          @click="dialog = true"
      >
        Open Dialog 1
      </v-btn>

      <v-btn
          color="primary"
          class="ma-2"
          dark
          @click="dialog1 = true"
      >
        Open Dialog 2
      </v-btn>

      <v-dialog
          v-model="dialog"
          max-width="600px">
        <v-card>
          <v-card-title>
            <h5 class="font-title weight-700">
              ¿Qué es la ClaveÚnica?
            </h5>
            
            <v-spacer></v-spacer>
            <v-btn
                icon
                @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            Phasellus nec aliquet neque, ac feugiat dolor. Maecenas convallis quam urna. Suspendisse ultrices ullamcorper ante vel euismod. Morbi eu quam vitae nunc rhoncus euismod ut sed libero. Cras at tincidunt mi, sit amet molestie quam.
            Phasellus nec aliquet neque, ac feugiat dolor.
          </v-card-text>
          
          <v-card-actions>
            <v-row justify="d-flex justify-space-around">
              <Button color="primary" plain v-bind="$props">
                <span class="text-underline"> Terciaria </span>
              </Button>
              <Button color="primary" plain v-bind="$props">
                <span class="text-underline"> Terciaria </span>
              </Button>
              <Button color="primary" v-bind="$props">
                <span class="text-underline"> Terciaria </span>
              </Button>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog
          v-model="dialog1"
          max-width="700px">
        <v-card>
          <v-card-title>
            <v-btn
                icon>
              <v-icon>mdi-alert-circle-outline</v-icon>
            </v-btn>

            <h5 class="font-title weight-700">
              Suspendisse ultrices ullamcorper ante vel euismod.
            </h5>
            
            <v-spacer></v-spacer>
            <v-btn
                icon
                @click="dialog1 = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            Phasellus nec aliquet neque, ac feugiat dolor. Maecenas convallis quam urna. Suspendisse ultrices ullamcorper ante vel euismod. Morbi eu quam vitae nunc rhoncus euismod ut sed libero. Cras at tincidunt mi, sit amet molestie quam.
            Phasellus nec aliquet neque, ac feugiat dolor.
          </v-card-text>

          <v-card-actions>
            <v-row justify="d-flex justify-space-around">
              <Button color="primary" plain v-bind="$props">
                <span class="text-underline"> Terciaria </span>
              </Button>
              <Button color="primary" plain v-bind="$props">
                <span class="text-underline"> Terciaria </span>
              </Button>
              <Button color="primary" v-bind="$props">
                <span class="text-underline"> Terciaria </span>
              </Button>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    
    </v-row>
  `
});

export const Default = Template.bind({});
Default.args = {};

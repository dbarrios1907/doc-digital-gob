import Button from './Button.vue';
import Icon from '../icon/Icon.vue';

export default {
  title: 'Style Guide/Button',
  component: Button,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button, Icon },
  template: `
    <v-container fluid>
    
      <h3>Primary</h3>
      <v-row>
        <v-col>
          <Button small v-bind="$props"> BUTTON </Button>
          <Button v-bind="$props"> BUTTON </Button>
          <Button large v-bind="$props"> BUTTON </Button>
          <Button rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            BUTTON
          </Button>
          <Button fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button text v-bind="$props">
            BUTTON
          </Button>
          <Button outlined v-bind="$props">
            <span class="text-underline">BUTTON</span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3>Secondary</h3>
      <v-row>
        <v-col>
          <Button color="secondary" v-bind="$props"> BUTTON </Button>
          <Button color="secondary" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            BUTTON
          </Button>
          <Button color="secondary" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="secondary" text v-bind="$props">
            BUTTON
          </Button>
          <Button color="secondary" outlined v-bind="$props">
            <span class="text-underline">BUTTON</span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3>Success</h3>
      <v-row>
        <v-col>
          <Button color="success" v-bind="$props"> BUTTON </Button>
          <Button color="success" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            BUTTON
          </Button>
          <Button color="success" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="success" text v-bind="$props">
            BUTTON
          </Button>
          <Button color="success" outlined v-bind="$props">
            <span class="text-underline">BUTTON</span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3>Error</h3>
      <v-row>
        <v-col>
          <Button color="error" v-bind="$props"> BUTTON </Button>
          <Button color="error" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            BUTTON
          </Button>
          <Button color="error" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="error" text v-bind="$props">
            BUTTON
          </Button>
          <Button color="error" outlined v-bind="$props">
            <span class="text-underline">BUTTON</span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3 class="m-3">Warning</h3>
      <v-row>
        <v-col>
          <Button color="warning" v-bind="$props"> BUTTON </Button>
          <Button color="warning" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            BUTTON
          </Button>
          <Button color="warning" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="warning" text v-bind="$props">
            BUTTON
          </Button>
          <Button color="warning" outlined v-bind="$props">
            <span class="text-underline">BUTTON</span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>

      <h3 class="m-3">Info</h3>
      <v-row>
        <v-col>
          <Button color="info" v-bind="$props"> BUTTON </Button>
          <Button color="info" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            BUTTON
          </Button>
          <Button color="info" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="info" text v-bind="$props">
            BUTTON
          </Button>
          <Button color="info" outlined v-bind="$props">
            <span class="text-underline">BUTTON</span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
    </v-container>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral',
};

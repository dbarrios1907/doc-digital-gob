import Button from './Button.vue';
import Icon from '../icon/Icon.vue';

export default {
  title: 'Style Guide/Button',
  component: Button,
  argTypes: {
    label: {control: { type: 'text' }},
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
          <Button color="primary" small v-bind="$props"> {{label}} </Button>
          <Button color="primary" v-bind="$props"> {{label}}  </Button>
          <Button color="primary" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button color="primary" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="primary" disabled v-bind="$props"> {{label}} </Button>
          <Button color="primary" text v-bind="$props">
            {{label}}
          </Button>
          <Button color="primary" outlined v-bind="$props">
            <span class="text-underline">{{label}} </span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3>Secondary</h3>
      <v-row>
        <v-col>
          <Button class="primary--text" color="secondary" v-bind="$props"> {{label}}  </Button>
          <Button class="primary--text" color="secondary"  rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button class="primary--text" color="secondary" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button class="primary--text" color="secondary" disabled v-bind="$props"> {{label}}  </Button>
        </v-col>
      </v-row>

      <h3>Neutral</h3>
      <v-row>
        <v-col>
          <Button color="neutral"  v-bind="$props"> {{label}}  </Button>
          <Button color="neutral"  rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button color="neutral"  fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="neutral"  disabled v-bind="$props"> {{label}} </Button>
        </v-col>
      </v-row>
      
      <h3>Success</h3>
      <v-row>
        <v-col>
          <Button color="success" v-bind="$props"> {{label}} </Button>
          <Button color="success" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button color="success" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="success" disabled v-bind="$props"> {{label}} </Button>
          <Button color="success" text v-bind="$props">
            {{label}}
          </Button>
          <Button color="success" outlined v-bind="$props">
            <span class="text-underline"> {{label}} </span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3>Error</h3>
      <v-row>
        <v-col>
          <Button color="error" v-bind="$props"> {{label}}  </Button>
          <Button color="error" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button color="error" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="error" disabled v-bind="$props"> {{label}}  </Button>
          <Button color="error" text v-bind="$props">
            {{label}}
          </Button>
          <Button color="error" outlined v-bind="$props">
            <span class="text-underline"> {{label}} </span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>
      
      <h3 class="m-3">Warning</h3>
      <v-row>
        <v-col>
          <Button color="warning" v-bind="$props"> {{label}}  </Button>
          <Button color="warning" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button color="warning" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="warning"  disabled v-bind="$props"> {{label}}  </Button>
          <Button color="warning" text v-bind="$props">
            {{label}}
          </Button>
          <Button color="warning" outlined v-bind="$props">
            <span class="text-underline">{{label}} </span>
            <Icon right regular>
              mdi-chevron-down
            </Icon>
          </Button>
        </v-col>
      </v-row>

      <h3 class="m-3">Dark</h3>
      <v-row>
        <v-col>
          <Button color="dark" v-bind="$props"> {{label}}  </Button>
          <Button color="dark" rounded v-bind="$props">
            <Icon left>
              mdi-pencil
            </Icon>
            {{label}}
          </Button>
          <Button color="dark" fab v-bind="$props">
            <Icon dark>
              mdi-pencil
            </Icon>
          </Button>
          <Button color="dark" disabled v-bind="$props"> {{label}}  </Button>
          <Button color="dark" text v-bind="$props">
            {{label}}
          </Button>
          <Button color="dark" outlined v-bind="$props">
            <span class="text-underline"> {{label}} </span>
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
  label: 'Button'
};

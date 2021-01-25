export default {
  title: 'Style Guide/Form Fields',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <v-form>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-text-field
              label="Outlined"
              color="error"
              outlined
              dense
          >
            <template v-slot:prepend>
              <v-tooltip
                  bottom
              >
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">
                    mdi-help-circle-outline
                  </v-icon>
                </template>
                I'm a tooltip
              </v-tooltip>
            </template>
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="info"
                    indeterminate
                ></v-progress-circular>
                <v-icon color="success">
                  mdi-check
                </v-icon>
              </v-fade-transition>
            </template>
            
          </v-text-field>
        </v-col>
      </v-row>
    </v-form>
  `
});

export const Default = Template.bind({});
Default.args = {};


import './Collapse.scss';

export default {
  title: 'Style Guide/Collapse',
  argTypes: {},
};

const Template = (args, {argTypes}) => ({
  props: Object.keys(argTypes),
  data() {
    return {}
  },
  template: `
    <v-row justify="center">
      <v-expansion-panels flat>
        <v-expansion-panel active-class="active-collapse-item">
          <v-expansion-panel-header>
            <h2 class="h2">
              ¿Qué es la ClaveÚnica?
            </h2>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel active-class="active-collapse-item">
          <v-expansion-panel-header>
            <div>
              ¿Cómo solicito mi Clave?
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  `
});

export const Default = Template.bind({});
Default.args = {};

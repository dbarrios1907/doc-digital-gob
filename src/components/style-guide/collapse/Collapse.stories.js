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
        <v-expansion-panel style="background: #EEEEEE" active-class="active-collapse-item">
          <v-expansion-panel-header>
            <div style="font-size: 1.25rem !important; font-weight: 500; line-height: 2rem; letter-spacing: 0.0125em !important;">
              ¿Qué es la ClaveÚnica?
            </div>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <div style="height: 15px; width: 100%;"/>
      
      <v-expansion-panels flat>
        <v-expansion-panel style="background: #EEEEEE" active-class="active-collapse-item">
          <v-expansion-panel-header>
            <div style="font-size: 1.25rem !important; font-weight: 500; line-height: 2rem; letter-spacing: 0.0125em !important;">
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

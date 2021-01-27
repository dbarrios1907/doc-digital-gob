export default {
  title: 'Style Guide/Checkbox',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      selected: []
    }
  },
  template: `
    <v-container fluid>
      <p>{{ selected }}</p>
      <v-checkbox
          v-model="selected"
          :ripple="false"
          indeterminate
          label="Text de Ejemplo 1"
          value="Text1"
      ></v-checkbox>
      <v-checkbox
          v-model="selected"
          :ripple="false"
          label="Text de Ejemplo 2"
          value="Text2"
      ></v-checkbox>
      <v-checkbox
          v-model="selected"
          :ripple="false"
          label="Text de Ejemplo 3"
          value="Text3"
      ></v-checkbox>
      <v-checkbox
          v-model="selected"
          :ripple="false"
          label="Text de Ejemplo 4"
          value="Text4"
      ></v-checkbox>
    </v-container>
  `
});

export const Checkbox = Template.bind({});
Checkbox.args = {};

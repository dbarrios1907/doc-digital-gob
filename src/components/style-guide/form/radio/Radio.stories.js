export default {
  title: 'Style Guide/Form',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      column: null,
      row: null,
    }
  },
  template: `
    <v-container fluid>
      <v-radio-group
          v-model="column"
          column
      >
        <v-radio
            label="Option 1"
            value="radio-1"
            :ripple="false"
        ></v-radio>
        <v-radio
            label="Option 2"
            value="radio-2"
            :ripple="false"
        ></v-radio>
      </v-radio-group>
      <hr>
      <v-radio-group
          v-model="row"
          row
      >
        <v-radio
            label="Option 1"
            value="radio-1"
            :ripple="false"
        ></v-radio>
        <v-radio
            label="Option 2"
            value="radio-2"
            :ripple="false"
        ></v-radio>
      </v-radio-group>
    </v-container>
  `,
})

export const Radio = Template.bind({})
Radio.args = {}

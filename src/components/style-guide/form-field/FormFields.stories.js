import Vue from 'vue';
import GobTextField from './story-components/text-field/GobTextField.vue';

Vue.component('gob-text-field', GobTextField);

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
    <gob-text-field />
  `
});

export const Default = Template.bind({});
Default.args = {};

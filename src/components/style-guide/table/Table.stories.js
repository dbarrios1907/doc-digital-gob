import Vue from 'vue';
import DataTable from './story-components/DataTable.vue';

Vue.component('datatable', DataTable);

export default {
  title: 'Style Guide/Table',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <datatable />
  `
});

export const Sample1 = Template.bind({});
Sample1.args = {};

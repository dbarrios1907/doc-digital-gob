import Vue from 'vue';
import DataTable from './DataTable.vue';
import TableStory from './story-components/DataTable.vue';

Vue.component('DataTable', DataTable);
Vue.component('table-story', TableStory);

export default {
  title: 'Style Guide/DataTable',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <table-story />
  `
});

export const Sample1 = Template.bind({});
Sample1.args = {};

import Typography from './Typography.vue';

export default {
  title: 'Vuetify/Style Guide/Typography',
  component: Typography,
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Typography },
  template: '<Typography />',
});

export const Primary = Template.bind({});
Primary.args = {
};

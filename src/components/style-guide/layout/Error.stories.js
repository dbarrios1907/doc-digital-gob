export default {
  title: 'Style Guide/Layout',
  argTypes: {},
  argTypes: {
    color: { control: {type: 'color'} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <ErrorPage />
  `
});

export const Error = Template.bind({});
Error.args = {};

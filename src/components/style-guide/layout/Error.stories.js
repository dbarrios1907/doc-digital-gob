export default {
  title: 'Style Guide/Layout',
  argTypes: {},
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <ErrorPage />
  `
});

export const Error = Template.bind({});
Error.args = {};

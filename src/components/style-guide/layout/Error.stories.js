export default {
  title: 'Style Guide/Layout',
  argTypes: {
    color: { control: {type: 'color'} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      page: 1,
      pageCount: 3,
    }
  },
  template: `
    <ErrorPage />
  `
});

export const Error = Template.bind({});
Error.args = {};

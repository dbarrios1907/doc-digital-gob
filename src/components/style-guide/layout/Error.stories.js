export default {
  title: 'Style Guide/Layout',
<<<<<<< HEAD
  argTypes: {},
=======
  argTypes: {
    color: { control: {type: 'color'} },
  },
>>>>>>> 635f4fa46039c512bd21bfbdb5314ef755c0fac9
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
<<<<<<< HEAD
=======
  data() {
    return {
      page: 1,
      pageCount: 3,
    }
  },
>>>>>>> 635f4fa46039c512bd21bfbdb5314ef755c0fac9
  template: `
    <ErrorPage />
  `
});

export const Error = Template.bind({});
Error.args = {};

import Footer from './Footer';

export default {
  title: 'Style Guide/Footer',
  argTypes: {
    color: { control: {type: 'color'} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <dx-footer :color="color"/>
  `
});

export const Default = Template.bind({});
Default.args = {color: "white"};

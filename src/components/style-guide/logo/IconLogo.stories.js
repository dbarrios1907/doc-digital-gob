import IconLogo from './IconLogo';

export default {
  title: 'Style Guide/Logo',
  component: IconLogo,
  argTypes: {
    color: { control: {type: 'color'} },
    width: { control: {type: 'range', max: 200} },
    height: { control: {type: 'range', max: 40} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { IconLogo },
  template: `
    <IconLogo :color="color" :width="width" :height="height" />
  `
});

export const Default = Template.bind({});
Default.args = {color: 'red', width: 200, height: 40};

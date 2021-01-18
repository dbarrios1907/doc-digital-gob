import Button from './Button.vue';

export default {
  title: 'Vuetify/Style Guide/Button',
  component: Button,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button },
  template: '<Button v-bind="$props"> BUTTON </Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral',
};

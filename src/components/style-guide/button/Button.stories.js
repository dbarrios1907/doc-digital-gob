import Button from './Button.vue';
import Icon from '../icon/Icon.vue';

export default {
  title: 'Style Guide/Button',
  component: Button,
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Button, Icon },
  template: `
    <div>
      <Button v-bind="$props"> BUTTON </Button>
      <Button rounded v-bind="$props">
        <Icon left>
          mdi-pencil
        </Icon>
        BUTTON 
      </Button>
      <Button fab v-bind="$props">
        <Icon dark>
          mdi-pencil
        </Icon>
      </Button>
      <Button text v-bind="$props"> 
        BUTTON
      </Button>
      <Button outlined v-bind="$props"> 
        <span class="text-underline">BUTTON</span>
        <Icon right regular>
          mdi-chevron-down
        </Icon>
      </Button>
    </div>
  `
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Neutral = Template.bind({});
Neutral.args = {
  color: 'neutral',
};

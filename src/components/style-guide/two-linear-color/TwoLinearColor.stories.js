import TwoLinearColor from './TwoLinearColor';
import IconLogo from '../logo/IconLogo';

export default {
  title: 'Style Guide/TwoLinearColor',
  component: TwoLinearColor,
  argTypes: {
    color1: { control: {type: 'color'} },
    color2: { control: {type: 'color'} },
    width1: { control: {type: 'range', max: 200} },
    width2: { control: {type: 'range', max: 200} },
    pos: { control: { type: 'select', options: ['top', 'bottom'] } },
    size: { control: {type: 'range', max: 40} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TwoLinearColor, IconLogo },
  template: `
    <TwoLinearColor :color1="color1" :color2="color2" :width1="width1" :width2="width2" :pos="pos" :size="size">
      <IconLogo color="red" width="200" height="40" />

      <!-- test -->
        <label style="width: 205px; fontSize: 14px; height: 40px; margin-left: 20px; border-left: 2px solid red; padding-left:5px" class="d-flex align-center">Plataforma de Comunicaciones oficiales del Estado</label>
      <!-- test -->
    </TwoLinearColor>
  `
});

export const Default = Template.bind({});
Default.args = {pos: 'top', color1: 'blue', width1: 77, color2: 'red', width2: 92, size: "30"};

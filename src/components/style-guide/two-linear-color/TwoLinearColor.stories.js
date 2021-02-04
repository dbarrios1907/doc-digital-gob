import TwoLinearColor from './TwoLinearColor';
import IconLogo from '../logo/IconLogo';

export default {
  title: 'Style Guide/TwoLinearColor',
  component: TwoLinearColor,
  argTypes: {
    colorlinea1: { control: {type: 'color'} },
    colorlinea2: { control: {type: 'color'} },
    coloricon: { control: {type: 'color'} },
    widthlinea1: { control: {type: 'range', max: 200} },
    widthlinea2: { control: {type: 'range', max: 200} },
    widthicon: { control: {type: 'range', max: 200} },
    heighticon: { control: {type: 'range', max: 40} },
    pos: { control: { type: 'select', options: ['top', 'bottom'] } },
    size: { control: {type: 'range', max: 40} },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TwoLinearColor, IconLogo },
  template: `
    <TwoLinearColor :color1="colorlinea1" :color2="colorlinea2" :width1="widthlinea1" :width2="widthlinea2" :pos="pos" :size="size">
      <IconLogo :color="coloricon" :width="widthicon" :height="heighticon" />
      <label style="lineHeight:16px; width: 205px; fontSize: 14px; height: 40px; margin-left: 20px; border-left: 2px solid red; padding-left:5px" class="d-flex align-center">Plataforma de Comunicaciones oficiales del Estado</label>
    </TwoLinearColor>
  `
});

export const Default = Template.bind({});
Default.args = {pos: 'top', colorlinea1: 'blue', widthlinea1: 77, colorlinea2: 'red', widthlinea2: 92, size: "30", coloricon: 'red', widthicon: 200, heighticon: 40};

import LinearColor from './LinearColor';

export default {
  title: 'Style Guide/LinearColor',
  component: LinearColor,
  argTypes: {
    color1: { control: {type: 'color'} },
    color2: { control: {type: 'color'} },
    width1: { control: {type: 'range', max: 200} },
    width2: { control: {type: 'range', max: 200} },
    pos: { control: { type: 'select', options: ['top', 'bottom'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LinearColor },
  template: `
    <div style="position: relative; border: 1px solid #ccc; height: 100px">
        <div :style="{position: 'absolute', top: pos === 'top' ? 0 : '', bottom: pos === 'bottom' ? 0 : ''}">
          <LinearColor :color="color1" :width="width1" />
          <LinearColor :color="color2" :width="width2" />
        </div>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {pos:'top', color1: 'blue', width1: 77, color2: 'red', width2: 92};

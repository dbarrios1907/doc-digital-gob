export default {
  title: 'Style Guide/Layout',
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <dx-layout />
  `,
})

export const Default = Template.bind({})
Default.args = {}

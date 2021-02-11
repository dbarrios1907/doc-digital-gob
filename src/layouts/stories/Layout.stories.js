import { storyPath } from './_settings'

export default {
  title: storyPath,
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

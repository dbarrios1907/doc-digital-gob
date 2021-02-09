export default {
  title: 'Style Guide/Svg/Icons',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div>
      <alert-error-icon color="error" />
      <alert-warning-icon color="warning" />
      <alert-success-icon color="success" />
      <alert-info-icon color="primary" />
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {}

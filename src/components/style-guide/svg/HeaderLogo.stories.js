import Vue from 'vue'
import HeaderLogo from './components/HeaderLogo.svg'
import Icon from '../icons/Icon'

Vue.component('HeaderLogo', HeaderLogo)

export default {
  title: 'Style Guide/Icon',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <div class="dark">
      <HeaderLogo />
    </div>
  `,
})

export const HeaderIcon = Template.bind({})
HeaderIcon.args = {}

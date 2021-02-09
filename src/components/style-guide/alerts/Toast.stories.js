import ToastService from './ToastService'

export default {
  title: 'Style Guide/Alerts',
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  methods: {
    showToast() {
      ToastService.error({
        message: 'My custom Message !!!!',
      })

      ToastService.info({
        message: 'My custom Message !!!!',
      })

      ToastService.warning({
        message: 'My custom Message !!!!',
      })

      ToastService.success({
        message: 'My custom Message !!!!',
      })
    },
  },
  template: `
    <dx-button color="primary" @click="showToast">
     Open Toast
    </dx-button>
  `,
})

export const toastNotification = Template.bind({})
toastNotification.args = {}

import Alert from './Alert.vue'

export default {
  title: 'Style Guide/Alert',
  component: Alert,
  argTypes: {},
}

export const Demo = () => ({
  components: { Alert },
  data: () => ({
    properties: {
      visible: false,
      message: 'My timeout is set to 2000.',
      timeout: 2000,
      absolute: true,
      bottom: true,
      type: 'success',
      outlined: true,
      transition: true,
    },
  }),
  template: `
    <div>
      <dx-button @click="properties.visible = true">
        Open Snackbar
      </dx-button>
<!--      <Alert -->
<!--          :value="true" -->
<!--          absolute-->
<!--          centered -->
<!--          type="success"-->
<!--      >¡Sus cambios se han guardado exitosamente!</Alert>-->
      <Alert :visible="visible">
        ¡Sus cambios se han guardado exitosamente!
      </Alert>
<!--      <Alert :value="true"-->
<!--             absolute-->
<!--             bottom-->
<!--             left-->
<!--             type="error">Ha ocurrido un error, intente guardar nuevamente.</Alert>-->
<!--      <Alert :value="snackbar"-->
<!--             absolute-->
<!--             bottom-->
<!--             right-->
<!--             type="error" outlined>Ha ocurrido un error, intente guardar nuevamente.</Alert>-->
<!--      <Alert :value="snackbar"-->
<!--             absolute-->
<!--             top-->
<!--             lef-->
<!--             type="warning">¡Por favor revise sus cambios antes de continuar!</Alert>-->
<!--      <Alert :value="snackbar"-->
<!--             absolute-->
<!--             top-->
<!--             right-->
<!--             type="warning" outlined>¡Por favor revise sus cambios antes de continuar!</Alert>-->
<!--      <Alert :value="snackbar" type="info">Tu sesión terminará en 30 segundos por inactividad, realiza cambios en la página para mantenerte contectado</Alert>-->
<!--      <Alert :value="snackbar" type="info" outlined>Tu sesión terminará en 30 segundos por inactividad, realiza cambios en la página para mantenerte contectado</Alert>-->
    </div>
  `,
})

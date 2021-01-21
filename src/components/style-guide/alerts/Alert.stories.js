import Alert from './Alert.vue';

export default {
  title: 'Style Guide/Alert',
  component: Alert,
  argTypes: {},
};

export const Demo = () => ({
  components: {Alert},
  template: `
    <div>
      <Alert v-bind="$props"  type="success">¡Sus cambios se han guardado exitosamente!</Alert>
      <Alert v-bind="$props"  type="success" outlined>¡Sus cambios se han guardado exitosamente!</Alert>
      <Alert v-bind="$props"  type="error">Ha ocurrido un error, intente guardar nuevamente.</Alert>
      <Alert v-bind="$props"  type="error" outlined>Ha ocurrido un error, intente guardar nuevamente.</Alert>
      <Alert v-bind="$props"  type="warning">¡Por favor revise sus cambios antes de continuar!</Alert>
      <Alert v-bind="$props"  type="warning" outlined>¡Por favor revise sus cambios antes de continuar!</Alert>
      <Alert v-bind="$props"  type="info">Tu sesión terminará en 30 segundos por inactividad, realiza cambios en la página para mantenerte contectado</Alert>
      <Alert v-bind="$props"  type="info" outlined>Tu sesión terminará en 30 segundos por inactividad, realiza cambios en la página para mantenerte contectado</Alert>
    </div>
  `,
});

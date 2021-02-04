import Breadcrumbs from './Breadcrumbs';
export default {
  title: 'Style Guide/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
  },
}
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Breadcrumbs },
  template: `
    <div class="bc-container">
          <a style="float:left">←</a>
          <Breadcrumbs :items="items" />
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  items: [
  {
    text: 'Administración',
    disabled: false,
    href: 'breadcrumbs_dashboard',
  },
  {
    text: 'Documentos',
    disabled: false,
    href: 'breadcrumbs_link_1',
  },
  {
    text: 'Enviados Pendientes',
    disabled: true,
    href: 'breadcrumbs_link_2',
  },
], };

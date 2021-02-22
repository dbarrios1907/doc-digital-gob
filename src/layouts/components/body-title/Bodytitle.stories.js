export default {
  title: 'layouts/components/Bodytitle',
  argTypes: {},
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
      <div>
        <dx-bodytitle>
          <template v-slot:title>
            <div class="weight-700 text-md-h4 line-height-31">Estás en el Módulo de Administración</div>
          </template>
          <template v-slot:subtitle>
            <div class="weight-400 mt-4 font-16">Aquí podrás crear o modificar usuarios y revisar los documentos que se tramitan en tu Institución.</div>
          </template>
        </dx-bodytitle>
      </div>
    `,
})

export const Bodytitle = Template.bind({})
Bodytitle.args = {}

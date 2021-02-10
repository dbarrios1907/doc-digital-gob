export default {
  title: 'Style Guide/layout/Components/Dashboard Items',
  argTypes: {},
}

export const Demo = () => ({
  data: () => ({
    itemClasses: 'px-10 primary--text col-md-4',
  }),
  template: //html
  `
    <div>
      <v-container> 
        <dx-dashboard></dx-dashboard>
      </v-container>
    </div>
  `,
})
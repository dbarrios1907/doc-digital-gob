import Vue from 'vue'

export default {
  title: 'Style Guide/Form/Select',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'success', 'warning', 'error'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
}

const wrapper = {
  template: `
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <slot></slot>
      </v-col>
    </v-row>
  `,
}

const Template = (args, { argTypes }) => ({
  components:{
    wrapper
  },
  props: Object.keys(argTypes),
  data () {
    return {
      value: ['Option 1'],
      items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    }
  },
  methods: {
    removeItem(item){
      this.value = this.value.filter(function(val) {
        return item !== val
    })
    }
  },
  template: `
    <div>
      <wrapper>
        <dx-select
            :items="items"
            label="Selección Simple"
            solo
            flat
            outlined
            v-bind="$props"
            ripple="false"
            :menu-props="{ bottom: true, offsetY: true, openOnClick:false }"
        ></dx-select>
      </wrapper>
  
      <wrapper>
        <dx-select
            :ripple="false"
            v-bind="props"
            v-model="value"
            :items="items"
            chips
            label="Multi Selección"
            persistent-hint
            multiple
            persistent-hint
            flat
            outlined
            :menu-props="{ bottom: true, offsetY: true, openOnClick:false }"
        >
          <template v-slot:selection="{ item, index }">
            <Badge type="tertiary" label outlined class="ma-0">
              <div class="darken3--text font-16 line-height-22 weight-400">{{item}}</div>
              <dx-icon left class="darken3--text ml-2 mr-0" @click.prevent="removeItem(item)">  mdi-close </dx-icon>
            </Badge>
          </template>
        </dx-select>
      </wrapper>
      
      <wrapper>
        <dx-select
            :ripple="false"
            v-bind="$props"
            v-model="value"
            :items="items"
            label="Filtro"
            solo
            flat
            outlined
            multiple
            :menu-props="{ bottom: true, offsetY: true, openOnClick:false }"
        >
        <template v-slot:selection="{ item, index }">
            <v-chip> <span>{{ item }}</span> </v-chip>
        </template>
       
        </dx-select>
      </wrapper>
    </div>
  `,
})

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
}

import Vue from 'vue';

export default {
  title: 'Style Guide/Form/Select',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'success', 'warning', 'error'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const wrapper = {
  template: `
    <v-row>
      <v-col cols="12" sm="6" lg="4">
        <slot></slot>
      </v-col>
    </v-row>
  `
}

Vue.component('wrapper',  wrapper);


const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data: () => ({
    value: ['Option 1'],
    items: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
  }),
  template: `
    <div>
      <wrapper>
        <v-select
            :items="items"
            label="Selección Simple"
            solo
            flat
            outlined
            v-bind="$props"
            ripple="false"
        ></v-select>
      </wrapper>
  
      <wrapper>
        <v-select
            :ripple="false"
            v-bind="props"
            v-model="value"
            :items="items"
            chips
            label="Multi Selección"
            multiple
            solo
            flat
            outlined
        ></v-select>
      </wrapper>
      
      <wrapper>
        <v-select
            :ripple="false"
            v-bind="$props"
            v-model="value"
            :items="items"
            label="Personalizado"
            solo
            flat
            outlined
            multiple
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item }}</span>
            </v-chip>
            <span
                v-if="index === 1"
                class="grey--text caption"
            >
          (+ otros {{ value.length - 1 }})
        </span>
          </template>
        </v-select>
      </wrapper>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  color: 'primary'
};

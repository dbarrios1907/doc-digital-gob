export default {
  title: 'Style Guide/Tab Panel',
  argTypes: {
    backgroundColor: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
  },
}

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    return {
      tab: null,
      items: [
        { tab: 'Resueltos', number: 0},
        { tab: 'Pendientes', number: 2 },
        { tab: 'Borradores', number: 3 },
      ],
    }
  },
  //html
  template: `
    <div>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item.tab" :ripple="false" >
          <div>
            <span class="tab-title">{{ item.tab }}</span>
            <div class="tab-number" v-if="item.number > 0">{{ item.number }}</div>
          </div>
        </v-tab>
      </v-tabs>  
      <v-tabs-items v-model="tab" :ripple="false">
        <v-tab-item v-for="item in items" :key="item.tab">
          <table-story-2 />
        </v-tab-item>
      </v-tabs-items>
    </div>
  `,
})

export const Neutral = Template.bind({})
Neutral.args = {
  color: 'primary',
}

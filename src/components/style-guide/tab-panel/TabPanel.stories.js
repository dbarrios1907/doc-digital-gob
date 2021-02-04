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
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
        { tab: 'Five', content: 'Tab 5 Content' },
      ],
    }
  },
  template: `
    <div>
      <v-tabs
          v-model="tab"
      >
        <v-tab
            v-for="item in items"
            :key="item.tab"
            :ripple="false"
        >
          {{ item.tab }}
        </v-tab>
      </v-tabs>
  
      <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="item in items"
            :key="item.tab"
        >
          <v-card flat>
            <v-card-text>{{ item.content }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
  `,
})

export const Neutral = Template.bind({})
Neutral.args = {
  color: 'neutral',
}

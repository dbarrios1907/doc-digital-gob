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
        { tab: 'One', number: 1, content: 'Tab 1 Content' },
        { tab: 'Two', number: 2, content: 'Tab 2 Content' },
        { tab: 'Three', number: 3, content: 'Tab 3 Content' },
        { tab: 'Four', number: 4, content: 'Tab 4 Content' },
        { tab: 'Five', number: 5, content: 'Tab 5 Content' },
      ],
    }
  },
  template: //html 
  `
    <div>
      <v-tabs v-model="tab">
        <v-tab v-for="item in items" :key="item.tab" :ripple="false" >
          <div>
            <span class="tab-title">{{ item.tab }}</div>
            <div class="tab-number">{{ item.number }}</div>
          </div>
        </v-tab>
      </v-tabs>  
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="item in items" :key="item.tab">
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
  color: 'primary',
}

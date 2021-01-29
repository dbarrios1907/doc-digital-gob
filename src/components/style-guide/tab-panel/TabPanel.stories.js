export default {
  title: 'Style Guide/Tab Panel',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      tab: null,
      items: [
        { tab: 'One', content: 'Tab 1 Content' },
        { tab: 'Two', content: 'Tab 2 Content' },
        { tab: 'Three', content: 'Tab 3 Content' },
        { tab: 'Four', content: 'Tab 4 Content' },
        { tab: 'Five', content: 'Tab 5 Content' },
        { tab: 'Six', content: 'Tab 6 Content' },
        { tab: 'Seven', content: 'Tab 7 Content' },
        { tab: 'Eight', content: 'Tab 8 Content' },
        { tab: 'Nine', content: 'Tab 9 Content' },
        { tab: 'Ten', content: 'Tab 10 Content' },
      ],
    }
  },
  template: `
    <v-card>
        <v-tabs
            v-model="tab"
            background-color="primary"
            dark
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
    </v-card>
  `
});

export const Default = Template.bind({});
Default.args = {};
export default {
  title: 'Style Guide/Circular Progress',
  argTypes: {
    color: { control: { type: 'select', options: ['primary', 'secondary', 'neutral'] } },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      interval: {},
      value: 0,
    }
  },
  beforeDestroy () {
    clearInterval(this.interval)
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value = 0)
      }
      this.value += 10
    }, 1000)
  },
  template: `
    <div class="text-center">
    <v-progress-circular
        :rotate="180"
        :size="70"
        :width="5"
        :value="value"
        color="primary"
    >
      <span class="font-large weight-600 darken-4" style="color: #373737;">{{ value }}%</span>
    </v-progress-circular>

    <v-progress-circular
        :rotate="180"
        :size="70"
        :width="5"
        :value="value"
        color="success"
    >
      <span class="font-large weight-600 darken-4" style="color: #373737;">{{ value }}%</span>
    </v-progress-circular>

    <v-progress-circular
        :rotate="180"
        :size="70"
        :width="5"
        :value="value"
        color="error"
    >
      <span class="font-large weight-600 darken-4" style="color: #373737;">{{ value }}%</span>
    </v-progress-circular>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {};

import VButton from './Button.vue';

export default {
  title: 'Vuetify/Style Guide/Button',
  component: VButton,
};

export const ButtonStory = () => ({
  components: { VButton },
  template: '<v-button color="primary"> Daniel Button </v-button>',
});

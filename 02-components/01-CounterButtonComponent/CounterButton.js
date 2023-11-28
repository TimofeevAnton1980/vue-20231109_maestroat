import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  // Компонент должен иметь входной параметр и порождать событие
  props: {
    count: {
      type: Number,
      // required: true,
      default: 0
    },
  },
  emits: {
    'update:count': ['select'],
  },

  methods: {
    select(count) {
      this.$emit('update:count', count += 1);
    },
  },
  template: `<button type="button" @click="select(count)" > {{ count }}</button>`,
});

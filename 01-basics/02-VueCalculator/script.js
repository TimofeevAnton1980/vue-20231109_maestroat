import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',
  data() {
    return {
      operation: null,
      numb_1: null,
      numb_2: null,
    };
  },
  computed: {
    funcCalc() {
      switch (this.operation) {
        case 'sum':
          return this.numb_1 + this.numb_2
        case 'subtract':
          return this.numb_1 - this.numb_2
        case 'multiply':
          return this.numb_1 * this.numb_2
        case 'divide':
          return this.numb_1 / this.numb_2
        default:
          return 0
      }
    },
  },
})

const app = createApp(App);
const vm = app.mount('#app');



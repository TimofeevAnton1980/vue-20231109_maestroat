import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const App = defineComponent({
  name: 'App',
  data() {
    return {
      operation: null,
      numb_1: null,
      numb_2: null,
      calc: 0
    };
  },
  computed: {
    funcCalc() {
      switch (this.operation) {
        case 'sum':
          this.calc = this.numb_1 + this.numb_2
          break;
        case 'subtract':
          this.calc = this.numb_1 - this.numb_2
          break;
        case 'multiply':
          this.calc = this.numb_1 * this.numb_2
          break;
        case 'divide':
          this.calc = this.numb_1 / this.numb_2
          break;
        default:
          this.calc = 0
          break;
      }
    },
  },
})

const app = createApp(App);
const vm = app.mount('#app');



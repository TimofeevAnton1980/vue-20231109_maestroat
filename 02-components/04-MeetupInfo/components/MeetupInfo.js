import { defineComponent } from '../vendor/vue.esm-browser.js';
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};
export default defineComponent({
  name: 'MeetupInfo',
  props: {
    organizer: {
      type: String,
      required: true
    },
    place: {
      type: String,
      required: true
    },
    date: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatAsLocalDate(date) {
      return new Date(date).toLocaleDateString(navigator.language, options);
    },
  },

  template: `
    <ul class="meetup-info">
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{ organizer }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{ place }}
      </li>
      <li>
        <img class="icon meetup-info__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="formatAsLocalDate(date)">{{ formatAsLocalDate(date) }}</time>
      </li>
    </ul>`,
});

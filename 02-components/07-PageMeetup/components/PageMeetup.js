import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService';

export default defineComponent({
  name: 'PageMeetup',

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },
  props: {
    meetupId: Number,
    // required: true,
  },
  data() {
    return {
      meetup: null,
    }
  },

  watch: {
      async meetupId() {
        this.meetup= await fetchMeetupById(this.meetupId);
      }
  },
  async mounted() {
    this.meetup = await fetchMeetupById(this.meetupId);
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView v-if="meetup" :meetup = 'meetup'/>
      <UiContainer v-else>
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer v-if="meetup === 'Not found'">
        <UiAlert>error</UiAlert>
      </UiContainer>
    </div>`,
});

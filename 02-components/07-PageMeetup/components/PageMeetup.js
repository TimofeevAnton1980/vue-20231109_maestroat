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
      error: null,
      newMeetapId: null
    }
  },

  watch: {
    meetupId: {
      immediate: true,
      async handler(newValue, oldValue) {
        try {
          this.meetup = await fetchMeetupById(newValue);
          this.newMeetapId = newValue;
        } catch (err) {
          this.error = err;
        }
      }
    }
  },

  template: `
    <div class="page-meetup">
      <!-- meetup view -->
      <MeetupView v-if="meetup && !error && meetupId === newMeetapId" :meetup = 'meetup'/>
      <UiContainer v-else-if="!error">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>

      <UiContainer  v-else-if="error" >
        <UiAlert>{{ error?.message }}</UiAlert>
      </UiContainer>
    </div>`,
});

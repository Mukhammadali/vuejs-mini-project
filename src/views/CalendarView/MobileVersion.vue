<template>
  <div class="w-100">
    <div class="d-flex justify-content-center mb-3 w-100">
      <Datepicker
        class="date-picker"
        :value="date"
        @selected="onDateChange"
        :bootstrap-styling="true"
      />
    </div>
    <EventsList :events="events" />
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import EventsList from '@/components/EventsList';

export default {
  name: "MobileCalendarView",
  components: {
    Datepicker,
    EventsList
  },
  data(){
    return {
      date: moment().format('YYYY-MM-DD'),
      events: [],
    }
  },
  computed: {
    filteredEvents(){
      return this.$store.getters.filteredEventsByDate(this.date);
    },
  },
  mounted(){
    // Initial events based on today's date
    this.onDateChange(this.date)
  },
  methods: {
    onDateChange(val){
      const payload = moment(val).format('YYYY-MM-DD');
      const filteredEvents = this.$store.getters.filteredEventsByDate(payload);
      this.events = filteredEvents;
    }
  }
}
</script>
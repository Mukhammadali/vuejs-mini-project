<template>
  <div>
    <FullCalendar
      defaultView="dayGridMonth"
      :plugins="calendarPlugins"
      :events="events"
      :header="calendarParams.header"
      :editable="calendarParams.editable"
      :eventRender="eventRender"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

export default {
  name: "DesktopCalendarView",
  components: {
    FullCalendar
  },
  data() {
    return {
      calendarPlugins: [ dayGridPlugin, interactionPlugin ],
      calendarParams: {
        header: {
          left:   'today',
          center: 'title',
          right:  'prev,next'
        },
        editable: true
      }
    }
  },
  computed: mapState(['events']),
  methods: {
    eventRender: function(event, element) {
      event.el.innerHTML = `
        <div class="fc-content d-flex justify-content-between align-items-center px-1 bg-dark" style="height:30px;">
          <span class="fc-title text-white text-truncate">${event.event.title}</span>
        </div>
        <div class="fc-resizer fc-end-resizer"></div>
      `
    }
  }
}
</script>

<style scoped>
@import '~@fullcalendar/core/main.css';
@import '~@fullcalendar/daygrid/main.css';
</style>
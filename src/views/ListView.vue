<template>
  <div class="w-100">
      <EventsList :events="parsedEvents" />
  </div>
  
</template>

<script>

import moment from 'moment';
import { mapGetters } from 'vuex';
import EventsList from '@/components/EventsList';

export default {
  name: "ListView",
  components: {
    EventsList
  },
  computed: mapGetters(['parsedEvents']),
}
</script>
<template>
  <div class="w-100">
    <MobileVersion v-if="config.isMobile"/>
    <DesktopVersion v-else/>
  </div>
</template>

<script>

import { mapState } from 'vuex';
import DesktopVersion from './DesktopVersion';
import MobileVersion from './MobileVersion';
export default {
  name: "CalendarView",
  components: {
    DesktopVersion,
    MobileVersion
  },
  computed: mapState(['config'])
}
</script>
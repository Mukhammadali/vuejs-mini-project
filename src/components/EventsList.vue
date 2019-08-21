<template>
  <b-list-group>
      <h3 v-show="events.length === 0" class="text-center">No any events!</h3>
      <div :key="event.id" v-for="event in events" >
        <b-list-group-item class="d-flex justify-content-between align-items-center mb-1">
          <b-row class="d-flex align-items-center w-100">
            <div class="d-flex align-items-center px-3 px-sm-4 px-lg-4 border-right">
              <div class="d-flex flex-column align-items-center">
                <div class="text-primary font-weight-light text-uppercase text-responsive">
                  {{ event.start.month }}
                </div>
                <div class="text-dark font-weight-bold text-responsive">
                  {{ event.start.date }}
                </div>
                <div class="text-secondary text-responsive">
                  {{ event.start.year }}
                </div>
              </div>
              <div v-if="event.end" class="mx-2 mx-lg-3 text-muted text-responsive">
                <i class="fa fa-angle-right"></i>
              </div>
              <div v-if="event.end" class="d-flex flex-column align-items-center">
                <div class="text-primary font-weight-light text-uppercase text-responsive">
                  {{ event.end.month }}
                </div>
                <div class="text-dark font-weight-bold text-responsive">
                  {{ event.end.date }}
                </div>
                <div class="text-secondary text-responsive">
                  {{ event.end.year }}
                </div>
              </div>
            </div>
            <div class="col text-capitalize text-dark text-responsive">
              {{ event.title }}
            </div>
          </b-row>
        </b-list-group-item>
      </div>
    </b-list-group>
</template>

<script>
export default {
  name: "EventsList",
  props: {
    events: Array
  }
}
</script>

<style scoped>

</style>
import Vue from 'vue';
import Vuex from 'vuex'
import events from './modules/events';
import config from './modules/config';

Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    events,
    config,
  }
});
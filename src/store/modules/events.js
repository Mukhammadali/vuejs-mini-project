import Axios from 'axios';
import moment from 'moment';

const state = {
  events: []
};

const getters = {
  parsedEvents: state => {
    return state.events.map(o => {
      const sameDate = moment(o.start).isSame(moment(o.end));
      const payload = {
        id: o.id,
        title: o.title,
        start: {
          month: moment(o.start).format('MMM'),
          year: moment(o.start).format('YYYY'),
          date: moment(o.start).format('DD')
        },
        start_raw: o.start,
        end_raw: o.end,
        end: null
      };
      if (!sameDate) {
        payload.end = {
          month: moment(o.end).format('MMM'),
          year: moment(o.end).format('YYYY'),
          date: moment(o.end).format('DD')
        }
      }
      return payload;
    }).sort((a, b) => new Date(a.start_raw) - new Date(b.start_raw))
  },
  filteredEventsByDate: (state, getters) => val => {
    return  getters.parsedEvents.filter(event => {
      if(event.end) {
        const startDate = moment(event.start_raw).format('YYYY-MM-DD')
        const endDate   = moment(event.end_raw).format('YYYY-MM-DD');
        const date  = moment(val, 'YYYY-MM-DD');
        const isValid = date.isBetween(startDate, endDate, null, '[]');
        return isValid
      }
      return val === event.start_raw
    }).sort((a, b) => new Date(a.start_raw) - new Date(b.start_raw))
  }
};

const actions = {
  async fetchEvents({ commit }){
    const response = await Axios.get('https://www.mocky.io/v2/5d5d971b330000078057baaf');
    commit('setEvents', response.data.data)
  }
};

const mutations = {
  setEvents: (state, events) => state.events = events,
};

export default {
  state,
  getters,
  actions,
  mutations
}
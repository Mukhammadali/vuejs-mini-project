// import Axios from 'axios';
import moment from 'moment';

const state = {
  events: [
    {
      id: 1,
      title: 'Show Your Support Night',
      start: '2019-08-26',
      end: '2019-08-30',
    },
    {
      id: 2,
      title: 'Startup Pitch Party',
      start: '2019-08-15',
      end: '2019-08-17',
    },
    {
      id: 3,
      title: "Helen's Birthday Party",
      start: '2019-08-17',
      end: '2019-08-17',
    },
    {
      id: 4,
      title: 'Hackathon Day',
      start: '2019-08-17',
      end: '2019-08-17',
    },
    {
      id: 5,
      title: 'Orientation Day',
      start: '2019-08-15',
      end: '2019-08-24',
    }
  ]
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

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
}
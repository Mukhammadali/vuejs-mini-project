import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


export default new Router({
  mode: 'history',
  linkActiveClass: "active",
  routes: [
    {
      path: '/',
      redirect: '/calendar-view',
    },
    {
      path: '/list-view',
      name: 'ListView',
      component: () => import('./views/ListView.vue')
    },
    {
      path: '/calendar-view',
      name: 'Calendar View',
      component: () => import('./views/CalendarView')
    }
  ]
})
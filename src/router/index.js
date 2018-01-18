import Vue from 'vue'
import Router from 'vue-router'
import Event from '@/components/Event/Event.vue'
import EventList from '@/components/EventList/EventList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/events/:id',
      name: 'Event',
      component: Event
    }, {
      path: '/events',
      name: 'EventList',
      component: EventList
    }, {
      path: '*',
      name: 'EventList',
      component: EventList
    }
  ]
})

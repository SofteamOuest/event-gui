import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home/Home.vue'
import Login from '@/components/Login/Login.vue'
import Event from '@/components/Event/Event.vue'
import EventList from '@/components/EventList/EventList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/events/:id',
      name: 'Event',
      component: Event
    },
    {
      path: '/events',
      name: 'EventList',
      component: EventList
    },
    {
      path: '*',
      name: 'Home',
      component: Home
    }
  ]
})

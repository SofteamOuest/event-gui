// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome/styles.css'

import authorize from 'oauth2-implicit/build'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);


const credentials = authorize({
  auth_uri: 'https://littlebitscloud.cc/oauth/authorize',
  client_id: 'cloudbit-visualizer',
  scope: ['read'],
  state: {
    location: window.location
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

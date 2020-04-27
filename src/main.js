import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { store } from './store'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=e0620bd4&page=1&type=movie&Content-Type=application/json'

new Vue({
  vuetify,
  render: h => h(App),
  store,
  router
}).$mount('#app')

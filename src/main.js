import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BootstrapVue } from 'bootstrap-vue'



Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

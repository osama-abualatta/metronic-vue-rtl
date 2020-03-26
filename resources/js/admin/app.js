import Vue from 'vue'
import router from './router'
import './component'
import {i18n} from './views/i18n'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
//import Vue from 'vue';
import VCalendar from 'v-calendar';



Vue.use(VueGoodTablePlugin);
Vue.use(VCalendar);

Vue.config.productionTip = false;
export const EventBus = new Vue();


new Vue({
    i18n,
  el: '#app',
  router,

})

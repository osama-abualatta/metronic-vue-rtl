import Vue from 'vue'
import router from './router'
import './component'
import {i18n} from './views/i18n'
import VueGoodTablePlugin from 'vue-good-table'
import 'vue-good-table/dist/vue-good-table.css'
import BootstrapVueTreeview from 'bootstrap-vue-treeview'

//import Vue from 'vue';
import VCalendar from 'v-calendar';
import VueAgile from 'vue-agile'

Vue.use(VueAgile);
Vue.use(VueGoodTablePlugin);
Vue.use(VCalendar);
Vue.use(BootstrapVueTreeview)

Vue.config.productionTip = false;
export const EventBus = new Vue();


new Vue({
    i18n,
  el: '#app',
  router,

})

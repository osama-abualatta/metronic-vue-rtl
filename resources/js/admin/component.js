import Vue from 'vue'
import Layout from './views/Layout'
import Loader from './views/partials/Loader'
import Header from'./views/partials/Header'
import SubHeader from'./views/partials/SubHeader'
import DeleteUser from'./views/partials/DeleteUser'

import Footer from'./views/partials/Footer'
import SideBar from'./views/partials/SideBar'
import Nav from'./views/partials/Nav'
import ScrollTop from'./views/partials/ScrollTop'
import Brand from'./views/partials/header/header-top/Brand'
import TopBar from'./views/partials/header/header-top/TopBar'
import MHeader from'./views/partials/header/header-top/MHeader'
import HorMenu from'./views/partials/header/header-top/HorMenu'
import Lang from'./views/partials/Lang'
import LogIn from'./views/partials/header/LogIn'
import SignUp from'./views/partials/header/SignUp'
import UserDetails from './views/partials/UserDetails'
////////////////////////////
import DashboardContainer from'./views/partials/DashboardContainer'

/////////////////////////////////////////////
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker';

import Verte from 'verte';
import 'verte/dist/verte.css';
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css';


Vue.component('dashboard-container',DashboardContainer)
Vue.component('layout',Layout)
Vue.component('loader',Loader)
Vue.component('appHeader',Header)
Vue.component('subHeader',SubHeader)
Vue.component('ffooter',Footer)
Vue.component('sidebar',SideBar)
Vue.component('qnav',Nav)
Vue.component('scrolltop',ScrollTop)
Vue.component('brand',Brand)
Vue.component('topbar',TopBar)
Vue.component('m-header',MHeader)
Vue.component('horMenu',HorMenu)
Vue.component('lang',Lang)
Vue.component('login',LogIn)
Vue.component('SignUp',SignUp)

Vue.component('delete-user',DeleteUser)
Vue.component('user-details',UserDetails)
Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
Vue.component('verte', Verte);
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker);


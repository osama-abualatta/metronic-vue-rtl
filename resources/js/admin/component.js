import Vue from 'vue'
import Layout from './views/Layout'
import Loader from './views/partials/Loader'
import Header from'./views/partials/Header'
import SubHeader from'./views/partials/SubHeader'
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
////////////////////////////
import DashboardContainer from'./views/partials/DashboardContainer'

/////////////////////////////////////////////

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
Vue.component('mHeader',MHeader)
Vue.component('horMenu',HorMenu)
Vue.component('lang',Lang)
Vue.component('login',LogIn)
Vue.component('SignUp',SignUp)

<template>
    <div class="m-stack__item m-stack__item--fluid m-header-menu-wrapper">
        <button
            class="m-aside-header-menu-mobile-close  m-aside-header-menu-mobile-close--skin-light "
            id="m_aside_header_menu_mobile_close_btn"
        >
            <i class="la la-close"></i>
        </button>
        <div
            id="m_header_menu"
            class="m-header-menu m-aside-header-menu-mobile m-aside-header-menu-mobile--offcanvas  m-header-menu--skin-dark m-header-menu--submenu-skin-light m-aside-header-menu-mobile--skin-light m-aside-header-menu-mobile--submenu-skin-light "
        >
            <ul class="m-menu__nav  m-menu__nav--submenu-arrow ">
                <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/dashboard"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("DASHBOARD")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>
                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-support"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("Dashboard1")
                                    }}</span></a
                                >
                            </li>
                            <li
                                class="m-menu__item  m-menu__item--active "
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-file"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("Dashboard2")
                                    }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>

                <li
                    class="m-menu__item  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/customer"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("Customers")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>

                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-settings-1"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("customer")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </li>
                <li
                    class="m-menu__item  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/table"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("DataTable")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>

                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-settings-1"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("DataTable")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </li>
                <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/calender"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("CalenderPeker")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>
                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-support"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("CalenderPeker")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </li>
                <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/picker"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("Pickers")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>
                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <router-link
                                    to="/dashboard/Dashboard1"
                                    class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-support"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("DateTimePicker")
                                    }}</span></router-link
                                >
                            </li>
                            <li
                                class="m-menu__item  m-menu__item--active "
                                aria-haspopup="true"
                            >
                                <router-link to="" class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-file"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("ColorPicker")
                                    }}</span>
                                </router-link>
                            </li>
                            <li
                                class="m-menu__item  m-menu__item--active "
                                aria-haspopup="true"
                            >
                                <router-link to="" class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-file"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("DataPicker")
                                    }}</span>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/classification"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("ادارة التصنيفات")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>
                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-support"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("ادارة التصنيفات")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </li>
                <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/slider"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{
                            $t("Slider Card")
                        }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>
                    <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-support"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t(" Slider Card")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                </li>
                <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/item/preview"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{ $t("ITEMS") }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>
                                        <div
                        class="m-menu__submenu m-menu__submenu--classic m-menu__submenu--left m-menu__submenu--tabs"
                    >
                        <span
                            class="m-menu__arrow m-menu__arrow--adjust"
                        ></span>
                        <ul class="m-menu__subnav">
                            <li
                                class="m-menu__item "
                                m-menu-link-redirect="1"
                                aria-haspopup="true"
                            >
                                <a class="m-menu__link "
                                    ><i
                                        class="m-menu__link-icon flaticon-support"
                                    ></i
                                    ><span class="m-menu__link-text">{{
                                        $t("Items")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>

                </li>
                 <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/RegisterDealer"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{ $t("Register AS Dealer") }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>


                </li>
                                 <li
                    class="m-menu__item  m-menu__item--active  m-menu__item--active-tab  m-menu__item--submenu m-menu__item--tabs"
                    m-menu-submenu-toggle="tab"
                    aria-haspopup="true"
                >
                    <router-link
                        to="/dashboard/chat"
                        class="m-menu__link m-menu__toggle"
                        title="Non functional dummy link"
                        ><span class="m-menu__link-text">{{ $t("chat") }}</span
                        ><i class="m-menu__hor-arrow la la-angle-down"></i
                        ><i class="m-menu__ver-arrow la la-angle-right"></i
                    ></router-link>


                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.m-menu__link-text {
    font-size: 30ps;
}
</style>

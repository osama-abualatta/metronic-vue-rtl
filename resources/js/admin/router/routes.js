import Dashboard from "../views/partials/Dashboard";
import Dashboard2 from "../views/partials/Dashboard2";
import Customer from "../views/partials/Customer";
import UserDetails from "../views/partials/UserDetails";
import Picker from "../views/partials/Picker";
import ClassificationManagement from "../views/partials/ClassificationManagement";
import CalenderPicker from "../views/partials/CalenderPicker"
import Table from "../views/partials/Table";
import SignUp from "../views/partials/header/SignUp";
import LogIn from "../views/partials/header/LogIn";
import DashboardContainer from "../views/partials/DashboardContainer";
// import Layout from "../views/Layout";

export default [
    //    { path: "/layout",
    //     redirect: "/Layout"
    //         },
    //    {path:"/LogIn",component:LogIn} ,
    { path: "/", component: LogIn },
    {path:"/userdetails",component:UserDetails},
    {
        path: "/dashboard",
        component: DashboardContainer,
        children: [
            {
                path: "/",
                component: Dashboard
             },
             {
                 path:"picker" , component: Picker
             },
             {
                 path:"table", component:Table
             },
             {
                 path:"calender",component :CalenderPicker
             },
             {
                path:"classification",component :ClassificationManagement
            },
                {
                    path :"customer",component:Customer
                },
                {
                    path:"dashboard",component:Dashboard2
                }
            // {
            //     path: "Dashboard1",
            //     component: Dashboard
            // },
            // {
            //     path: "Dashboard2",
            //     component: Dashboard2
            // },
            // {
            //     path: "Customer",
            //     component: Customer
            // }
        ]
    },
    { path: "/signup", component: SignUp },
    { path: "/login", component: LogIn }

    ////
];

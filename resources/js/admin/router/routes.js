import Dashboard from "../views/partials/Dashboard";
import Dashboard2 from "../views/partials/Dashboard2";
import Customer from "../views/partials/Customer";
import UserDetails from "../views/partials/UserDetails";
import Slider from "../views/partials/Slider";
import Picker from "../views/partials/Picker";
import ClassificationManagement from "../views/partials/ClassificationManagement";
import CalenderPicker from "../views/partials/CalenderPicker";
import Table from "../views/partials/Table";
import SignUp from "../views/partials/header/SignUp";
import LogIn from "../views/partials/header/LogIn";
import Commit from "../views/partials/Item/Commit";
import Evaluation from "../views/partials/Item/Evaluation";
import OptionsFeatures from "../views/partials/Item/OptionsFeatures";
import Preview from "../views/partials/Item/Preview";
import DashboardContainer from "../views/partials/DashboardContainer";
import BasicData from "../views/partials/RegisterAsDealer/BasicData";
import Item from "../views/partials/Item/ItemContainer";

// import Layout from "../views/Layout";

export default [
    //    { path: "/layout",
    //     redirect: "/Layout"
    //         },
    //    {path:"/LogIn",component:LogIn} ,
    { path: "/", component: LogIn },
    { path: "/userdetails", component: UserDetails },
    {
        path: "/dashboard",
        component: DashboardContainer,
        children: [
            {
                path: "/",
                component: Dashboard
            },
            {
                path: "picker",
                component: Picker
            },
            {
                path: "table",
                component: Table
            },
            {
                path: "basicData",
                component: BasicData
            },
            {
                path: "slider",
                component: Slider
            },
            {
                path: "calender",
                component: CalenderPicker
            },
            {
                path: "classification",
                component: ClassificationManagement
            },
            {
                path: "customer",
                component: Customer
            },
            {
                path: "dashboard",
                component: Dashboard2
            },
            {
                path: "item",
                component: Item,
                children:[
                    {
                    path:"preview",component:Preview
                },
                {
                    path:"evaluation",component:Evaluation
                },
                {
                    path:"optionFeatures",component:OptionsFeatures
                },
                {
                    path:"commit",component:Commit
                }
            ]

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

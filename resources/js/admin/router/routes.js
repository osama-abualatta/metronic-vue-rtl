import Dashboard from "../views/partials/Dashboard";
import Dashboard2 from "../views/partials/Dashboard2";
import Customer from "../views/partials/Customer";
import LogIn from "../views/partials/header/LogIn";
import Layout from "../views/Layout";

export default [
//    { path: "/layout",
//     redirect: "/Layout"
//         },
   {path:"/LogIn",component:LogIn} ,
  { path:"/Layout",component:Layout} ,
  { path: "/Dashboard", component: Dashboard },
  { path: "/Dashboard2", component: Dashboard2 },
  { path: "/Customer", component: Customer }

  ////
];

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Product from "../pages/Product";
import Home from "../pages/Home";
import SignUp from "../components/register/SignUp";
import SignIn from "../components/register/SignIn";
import Dashboard from "../components/dashbord/Dashboard";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:'/about',
                element:<About/>,
            },
            {
                path:'/product',
                element:<Product/>,
            },
            {
                path:'/signup',
                element:<SignUp/>,
            },
            {
                path:'/signin',
                element:<SignIn/>,
            },
            {
                path:'/dashboard',
                element:<Dashboard/>,
            },
        ]

    },
    // {
    //     path:'/home',
    //     element:<App/>,


    // },
    // {roduct
    //     path:'/about',
    //     element:<About/>

    // },
]);


export default router;
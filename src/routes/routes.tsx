import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Product from "../pages/Product";
import Home from "../pages/Home";

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
        ]

    },
    // {
    //     path:'/home',
    //     element:<App/>,


    // },
    // {
    //     path:'/about',
    //     element:<About/>

    // },
]);


export default router;
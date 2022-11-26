import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Suzuki from "../../Pages/Suzuki/Suzuki";
import Yamaha from "../../Pages/Yamaha/Yamaha";
import RoyalDetail from "../../Pages/RoyalDetail/RoyalDetail"
import Royal from "../../Pages/Royal/Royal";
import SignUp from "../../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/royal',
                element:<Royal></Royal>
            },
            {
                path:'/suzuki',
                element:<Suzuki></Suzuki>
            },
            {
                path:'/Yamaha',
                element:<Yamaha></Yamaha>
            },
            {
                path:'/royalDetail',
                element:<RoyalDetail></RoyalDetail>
            },
        ]
    }
])
export default router;
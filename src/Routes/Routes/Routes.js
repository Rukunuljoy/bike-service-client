import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Suzuki from "../../Pages/Suzuki/Suzuki";
import Yamaha from "../../Pages/Yamaha/Yamaha";
import RoyalDetail from "../../Pages/RoyalDetail/RoyalDetail"
import Royal from "../../Pages/Royal/Royal";
import SignUp from "../../Pages/SignUp/SignUp";
import SuzukiDetails from "../../Pages/SuzukiDetails/SuzukiDetails";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                path:'/royalDetails/:id',
                element:<RoyalDetail></RoyalDetail>,
                loader:({params})=>fetch(`http://localhost:5000/royalBikes/${params.id}`)
            },
            {
                path:'/suzuki',
                element:<Suzuki></Suzuki>
            },
            {
                path:'/suzukiDetails/:id',
                element:<SuzukiDetails></SuzukiDetails>,
                loader:({params})=>fetch(`http://localhost:5000/suzukiBike/${params.id}`)
            },
            {
                path:'/Yamaha',
                element:<Yamaha></Yamaha>
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
    }
])
export default router;
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Suzuki from "../../Pages/Suzuki/Suzuki";
import Yamaha from "../../Pages/Yamaha/Yamaha";
import RoyalDetail from "../../Pages/RoyalDetail/RoyalDetail"
import Royal from "../../Pages/Royal/Royal";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SuzukiDetail from "../../Pages/SuzukiDetail/SuzukiDetail";
import YamahaDetail from "../../Pages/YamahaDetail/YamahaDetail";
import DashboardLayout from "../../Layout/DashboardLayout";

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
                path:'/suzukiDetail/:id',
                element:<SuzukiDetail/>,
                loader:({params})=>fetch(`http://localhost:5000/suzukiBike/${params.id}`)
            },
            {
                path:'/Yamaha',
                element:<Yamaha></Yamaha>
            },
            {
                path:'/yamahaDetail/:id',
                element:<YamahaDetail/>,
                loader:({params})=>fetch(`http://localhost:5000/yamahaBike/${params.id}`)
            },
        ]
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            }
        ]
    }
])
export default router;
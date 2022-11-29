import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import RoyalDetail from "../../Pages/RoyalDetail/RoyalDetail"
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SuzukiDetail from "../../Pages/SuzukiDetail/SuzukiDetail";
import YamahaDetail from "../../Pages/YamahaDetail/YamahaDetail";
import DashboardLayout from "../../Layout/DashboardLayout";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import AddProduct from "../../Pages/Dashboard/SellerDashboard/AddProduct";
import MyProduct from "../../Pages/Dashboard/SellerDashboard/MyProduct";
import MyBuyer from "../../Pages/Dashboard/SellerDashboard/MyBuyer";
import AdminRoute from "../AdminRoute/AdminRoute"
import Payment from "../../Pages/Dashboard/Payment/CheckOut";
import About from "../../Pages/Home/About/About";
import AllProduct from "../../Pages/AllProduct/AllProduct";
import Shop from "../../Pages/Shop/Shop";
import Royal from "../../Pages/Items/Royal/Royal";
import Suzuki from "../../Pages/Items/Suzuki/Suzuki";
import Yamaha from "../../Pages/Items/Yamaha/Yamaha";


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
                path: '/about',
                element:<About></About>
            },
            {
                path: '/shop',
                element:<Shop></Shop>
            },
            {
                path: '/allProduct',
                element:<AllProduct></AllProduct>
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
                path: '/royal',
                element:<Royal></Royal>
            },
            
            {
                path:'/royalDetails/:id',
                element:<RoyalDetail></RoyalDetail>,
                loader:({params})=>fetch(`http://localhost:5000/royalBikes/${params.id}`)
            },
            {
                path: '/suzuki',
                element:<Suzuki></Suzuki>
            },
            
            {
                path:'/suzukiDetail/:id',
                element:<SuzukiDetail/>,
                loader:({params})=>fetch(`http://localhost:5000/suzukiBike/${params.id}`)
            },
            {
                path: '/yamaha',
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
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path:'/dashboard',
                element:<Dashboard></Dashboard>
            },
            {
                path: '/dashboard/addProduct',
                element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
            },
            {
                path: '/dashboard/myProduct',
                element: <AdminRoute><MyProduct></MyProduct></AdminRoute>
            },
            {
                path: '/dashboard/myBuyer',
                element: <AdminRoute><MyBuyer></MyBuyer></AdminRoute>
            },
            {
                path:'/dashboard/payment/:id',
                element:<AdminRoute><Payment></Payment></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]

    }
])
export default router;
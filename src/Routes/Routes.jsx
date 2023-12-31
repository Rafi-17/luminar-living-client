import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Apartment from "../Pages/Apartment/Apartment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Profile from "../Pages/Dashboard/User/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AllRequests from "../Pages/Dashboard/Admin/AgreementRequests/AllRequests";
import AdminProfile from "../Pages/Dashboard/Admin/AdminProfile/AdminProfile";
import ManageMember from "../Pages/Dashboard/Admin/ManageMember/ManageMember";
  

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/apartment',
            element:<Apartment></Apartment>,
            loader: ()=>fetch('http://localhost:5000/apartmentsCount')
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
      ]
    },
    {
      path: '/dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'/dashboard/userProfile',
          element:<Profile></Profile>
        },
        // admin
        {
          path:'/dashboard/allRequests',
          element:<AllRequests></AllRequests>
        },
        {
          path:'/dashboard/adminProfile',
          element:<AdminProfile></AdminProfile>
        },
        {
          path:'/dashboard/manageMember',
          element:<ManageMember></ManageMember>
        },
      ]
    }
  ]);
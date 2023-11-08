import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './components/MainLayOut/MainLayOut';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Services from './components/Services/Services';
import Dashboard from './components/Dashboard/Dashboard';
import AuthProvider from './components/AuthProvider/AuthProvider';
import MyService from './components/My-Service/MyService';
import MySchedules from './components/My-schedules/MySchedules';
import AddServices from './components/Add-services/AddServices';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShowAllService from './components/Home/ShowAllService';
import ServiceDetailsButton from './components/Home/ServiceDetailsButton';
import Update from './components/Update/Update';
import PendingBooking from './components/My-schedules/PendingBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'Login',
        element: <Login></Login>
      },
      {
        path: '/Register',
        element: <Register></Register>
      },
      {
        path: '/Service',
        element: <Services></Services>
      },
      {
        path: '/Dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/MySevice',
        element: <MyService></MyService>
      },
      {
        path: '/MySchedules',
        element: <MySchedules></MySchedules>
      },
      {
        path: '/AddServices',
        element: <AddServices></AddServices>
      },
      {
        path: '/ShowAllService',
        element: <ShowAllService></ShowAllService>
      },
      {
        path: '/ServiceDetailsButton/:id',
        element: <ServiceDetailsButton></ServiceDetailsButton>,
        loader: ({params})=>fetch(`http://localhost:5000/allService/${params.id}`)
      },
      {
        path: '/Update/:id',
        element: <Update></Update>,
        loader: ({params})=>fetch(`http://localhost:5000/PurchaseData/${params.id}`)
      },
      {
        path: '/Pending',
        element: <PendingBooking></PendingBooking>
      }
    ]
  },
]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

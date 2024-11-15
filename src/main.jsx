import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Login from './Login.jsx'
import Home from './Home.jsx'
import React from 'react'
import Product from './Product/Productpage.jsx'
import Register from './Register.jsx'
import { FirebaseProvider } from './Firebase/Firebase.jsx'
import Sell from './Sell.jsx'
import Profile from './Profile.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
const LazyHome = React.lazy(() => import('./App.jsx'))

const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/",
    element: <React.Suspense fallback='Loading..'>
      <LazyHome />
      </React.Suspense>,
  },
  {
    path: "product/view/:id",
    element: <Product />,
  },
  {
    path: "sell",
    element: <Sell />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </StrictMode>,
)

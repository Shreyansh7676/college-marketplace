import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Login from './Login.jsx'
import React from 'react'
import Product from './Product/Productpage.jsx'
import Register from './Register.jsx'
import { FirebaseProvider } from './Firebase/Firebase.jsx'
import Sell from './Sell.jsx'
import Admin from './Admin.jsx'
import Profile from './Profile.jsx'
import App from './App.jsx'
import ViewOrders from './ViewOrders.jsx'
import Landing from './Hero.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContextProvider } from './Product/AuthContext.jsx'
import Chats from './Chats.jsx'
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
    path: "admin",
    element: <Admin />,
  },
  {
    path: "/products",
    element: <App />,
  },
  {
    path: "product/view/:id",
    element: <Product />,
  },
  {
    path: "chat/:id",
    element: <Chats />,
  },
  {
    path: "product/orders/:id",
    element: <ViewOrders />,
  },
  {
    path: "sell",
    element: <Sell />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "/",
    element: <Landing />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthContextProvider>
        <FirebaseProvider>
          <RouterProvider router={router} />
        </FirebaseProvider>
      </AuthContextProvider>
  </StrictMode>,
)

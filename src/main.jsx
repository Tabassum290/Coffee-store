import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'
import AddCoffee from './Components/AddCoffee'
import UpdateCoffee from './Components/UpdateCoffee'
import Signup from './Components/Signup'
import Login from './Components/Login'
import AuthProvider from './Providers/AuthProvider'
import Users from './Components/Users'

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    loader:()=> fetch('http://localhost:4000/coffee')
  },
  {
    path:"/addcoffee",
    element:<AddCoffee/>,
  },
  {
    path:"/updatecoffee/:id",
    element:<UpdateCoffee/>,
    loader:({params}) => fetch(`http://localhost:4000/coffee/${params.id}`)
  },
  {
    path:"/signup",
    element:<Signup/>,
  },
  {
    path:"/login",
    element:<Login/>,
  },
  {
    path:"/users",
    element:<Users/>,
    loader:()=>fetch('http://localhost:4000/users')
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router}></RouterProvider>
   </AuthProvider>
  </StrictMode>,
)

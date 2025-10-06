import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorLayout from './Layout/ErrorLayout.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import CompanyDetails from './Pages/CompanyDetails.jsx'

const appRoutes=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorLayout/>,
    children:[
      {
      path:"/",
      element:<Home/>
    }
  ,
  {
      path:"/details/:id",
      element:<CompanyDetails/>
  },
    {
      path:"/about",
      element:<About/>
    }
]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}/>
)

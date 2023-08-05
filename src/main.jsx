import React from 'react'
import { RouterProvider} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routers from './router/routesConfig'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routers}/>
  </React.StrictMode>,
)

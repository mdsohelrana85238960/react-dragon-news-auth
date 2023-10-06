import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import {RouterProvider} from "react-router-dom";

import router from "./router/router";
import AuthProviders from "./conponent/providers/AuthProviders";





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
     <AuthProviders>  <RouterProvider router={router} /> </AuthProviders>
      
  </React.StrictMode>
);
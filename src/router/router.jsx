import { createBrowserRouter } from "react-router-dom";
import Root from "../conponent/Root";
import Home from "../conponent/Home";
import Login from "../conponent/Login/Login";
import Register from "../conponent/Login/Register";
import NewsDetails from "../conponent/NewsDetails";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader: () => fetch('/news.json')
        },
        {
          path:'/news/:id',
          element: <PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
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
  ]);

export default router;
import React from "react";
import Assignment from './common/Assignment/Assignment';
import News from "./common/news/News";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./common/errorPAge/ErrorPage";
import UsersStudents from "./common/Users/UsersStudents";
import Login from "./common/auth/Login";
import ResetPassword from "./common/auth/components/ResetPassword";
import Activity from "./common/Activity/Activity";
import Groups from "./common/Users/Groups";
import ForgetPassword from "./common/auth/components/ForgetPassword";

const ContentRouter = createBrowserRouter([
  {
    errorElement: <ErrorPage /> 
  },
  {
    path: "/",
    element: <News />, 
  },
  {
    path: "/forget",
    element: <ForgetPassword />, 
  },
  {
    path: "/tests",
    element: <News />, 
  },
  
  {
    path: "/notifications",
    element: <News />, 
  },
  {
    path: "/activity",
    element: <Activity />
    
  },
  
  {
    path: "/groups",
    element: <Groups />
  },
  {
    path: "/students",
    element: <UsersStudents />,
  },
  {
    path: "/assignment",
    element: <Assignment />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/reset",
    element: <ResetPassword />
  },
]
);

function Router() {
  return (
    <React.StrictMode>
      <RouterProvider router={ContentRouter} />
    </React.StrictMode>
  );
}

export default Router;

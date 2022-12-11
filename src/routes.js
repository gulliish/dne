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
import Tests from "./common/Assignment/Tests";
import Schedule from "./common/SChedule/Schedule";
import Courses from "./common/courses/Courses";
// import { Redirect } from 

const ContentRouter = createBrowserRouter([
  {
    errorElement: <ErrorPage />
  },
  {
    path: "/",
    // element: <News /> 
    element: localStorage.getItem("token") ? <News /> : < Login />,
  },
  {
    path: "/forget",
    element: <ForgetPassword />,
  },
  {
    path: "/tests",
    element: <Tests/>,
  },

  {
    path: "/notifications",
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
    element: localStorage.getItem("token") ? <News /> : < Login />,
  },
  {
    path: "/reset",
    element: <ResetPassword />
  },
  
  {
    path: "/schedule",
    element: <Schedule />
  },
  {
    path: "/courses",
    element: <Courses/>
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

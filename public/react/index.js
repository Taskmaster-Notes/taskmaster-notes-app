import React from "react";
import * as ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import 'regenerator-runtime/runtime'
import { App } from './components/App';
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";
import { Dashboard } from "./components/Dashboard";

const router = createBrowserRouter([
    {
        path: "/dashboard",
        element: <Dashboard />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/Signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <Login />
    },
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
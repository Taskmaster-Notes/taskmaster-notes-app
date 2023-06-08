import React from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Navbar";

export const App = () => {
    return (
        <>
        <Navbar />
        <Login />
        {/* <Dashboard /> */}
        </>
    );
}
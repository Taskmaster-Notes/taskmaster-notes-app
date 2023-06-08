import React, { useState } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";

export const App = () => {
    const [displayIntro, setDisplayIntro] = useState(true);
    const [user, setUser] = useState();
    return (
        <>
        <Navbar />
        {displayIntro ? <Intro />: null}
        {!displayIntro ? <Dashboard /> : null}
        {/* <Dashboard /> */}
        </>
    );
}
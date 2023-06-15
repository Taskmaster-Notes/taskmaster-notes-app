import React, { useState, useEffect } from "react";
import { Login } from "./Login";
import { Dashboard } from "./Dashboard";
import { Navbar } from "./Navbar";
import { Intro } from "./Intro";

export const App = () => {
    const [displayIntro, setDisplayIntro] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        const username = localStorage.getItem("username")
        if (username) { 
        handleLogin(username)     
        }
    },[])
    const handleLogin = async (username) => {
        const response = await fetch(`http://localhost:3000/api/users/username/${username}`);
        const data = await response.json();
        console.log(data);
        setUser(data[0]);
        setDisplayIntro(!displayIntro);
        localStorage.setItem("id", user.id);
    }

    return (
        <>
        <Navbar user={user} setUser={setUser} />
        <Intro user={user} setUser={setUser} displayIntro={displayIntro} setDisplayIntro={setDisplayIntro} />
        {!displayIntro ? <Dashboard user={user} setUser={setUser} /> : null}
        {/* <Dashboard /> */}
        </>
    );
}
import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Intro = ({ user, setUser, setDisplayIntro, displayIntro}) => {
    const [displayLogin, setDisplayLogin] = useState(false);
    const [display, setDisplay] = useState(true);
    return (
        <>
        { display ? displayLogin ? <Login setDisplayLogin={setDisplayLogin} displayLogin={displayLogin}  user={user} setUser={setUser} displayIntro={displayIntro} setDisplayIntro={setDisplayIntro} /> : <Signup setDisplayLogin={setDisplayLogin} displayLogin={displayLogin}  user={user} setUser={setUser} displayIntro={displayIntro} setDisplayIntro={setDisplayIntro} /> : null}
        </>
    )
};
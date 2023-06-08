import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Login } from "./Login";
import { Signup } from "./Signup";

export const Intro = () => {
    const [displayLogin, setDisplayLogin] = useState(false);
    const [display, setDisplay] = useState(true);
    return (
        <>
        { display ? displayLogin ? <Login setDisplayLogin={setDisplayLogin} displayLogin={displayLogin} /> : <Signup setDisplayLogin={setDisplayLogin} displayLogin={displayLogin} /> : null}
        </>
    )
};
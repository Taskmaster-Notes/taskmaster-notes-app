import React, { useState } from 'react';
import { Navbar } from './Navbar';
import img from "../images/loginImage.svg";
import timeManagement from "../images/timeManagement.svg";


export const Signup = ({displayLogin, setDisplayLogin, user, setUser, setDisplayIntro, displayIntro}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:3000/api/users';
        const newUser = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        }
        const res =  await fetch(url, {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
                 },
        body: JSON.stringify(
        newUser
        )
        });
        const data = await res.json();
        setFirstName('');
        setLastName('');
        setUsername('');
        setPassword('');
        localStorage.setItem("username", username);
        setUser({firstName, lastName, username, password});
        setDisplayIntro(!displayIntro);
        location.href='/dashboard';
       }

    return (
        <>
        {/* <Navbar /> */}
        <div style={styles.background}>
            <div style={styles.loginContainer}>
                <div style={styles.container}>
                    <form style={styles.container1} onSubmit={handleForm}>
                        <div style={styles.loginTitleContainer}>
                            <h1 style={{ color: "grey", fontFamily: "sans-serif", paddingTop: "10%" }}>Welcome!</h1>
                            <h2 style={styles.loginTitle}>Time to join Taskmaster</h2>
                        </div>
                        <div>
                        </div>
                        <div style={styles.inputContainer}>
                            <input style={styles.input} type='text' placeholder='FIRST NAME' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <input style={styles.input} type='text' placeholder='LAST NAME' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <input style={styles.input} type='text' placeholder='USERNAME' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <input style={styles.input} type='text' placeholder='PASSWORD' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div style={styles.loginBtnContainer}>
                            <button style={styles.loginButton} type="submit">Create Account</button>
                        </div>
                        <div>
                            <h2 style={styles.accountsubtext} >Already have an Account? 
                            <button style={styles.newAccount} onClick={() => setDisplayLogin(!displayLogin)} > Login</button>
                            </h2>
                        </div>
                    </form>
                    <div style={styles.container2}>
                        <div style={styles.imageContainer}>
                        <img src={img} width="90%" height="450vh" />
                        </div>
                        <div>
                            <h2 style={styles.accountsubtext2} >Got Questions? 
                                <a style={styles.newAccount2} href='#'> 1(800)-DEV-HELP </a>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

const styles = {
    background: {
        backgroundColor: "#F0FFF0",
    },
    backgroundTwo: {
        backgroundColor: "#F0FFF0",
    },
    loginContainer: {
        backgroundColor: "#F0FFF0",
        margin: "auto",
        width: "90%",
        height: "80%",
        marginTop: "3%",
        paddingTop: "2vh",
        border: "solid 1px white"
        },
    loginHeaderContainer: {
        display: "flex",
    },
    loginHeaderTitleContainer: {
        display: "flex",
        color: "grey",
        fontFamily: "sans-serif",
        paddingLeft: "10%",
        paddingTop: "2%"
    },
    loginTitleContainer: {
        backgroundColor: "#F0FFF0",
        width: "100%",
        textAlign: "center",
        marginTop: "3.5vh",
        paddingBottom: "15%"
    },
    loginTitle: {
        backgroundColor: "#F0FFF0",
        color: "#393e46",
        fontFamily: "sans-serif",
        paddingTop: "2%",
    },
    inputContainer: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        textAlign: "center",
        width: "60%",
        marginTop: "1vh"
    },
    input: {
        backgroundColor: "#CCCCCC",
        color: "#8F8FA1",
        fontWeight: "bold",
        marginTop: "1vh",
        padding: "2vh",
        border: "none",
        borderRadius: "5px",
    },
    loginBtnContainer: {
        backgroundColor: "#F0FFF0",
        margin: "auto",
        textAlign: "center",
        marginTop: "5%",
    },
    loginButton: {
        backgroundColor: "#39993A",
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "2vh",
        borderRadius: "5px",
        border: "none",
        width: "28vw",
        height: "5vh",
        "&:hover": {
            backgroundColor: "#39993A"
        }
    },
    subTextContainer: {
        width: "100%",
        paddingTop: "1%",
        paddingRight: "20%",
        textAlign: "right",
    },
    subtext: {
        color: "#39993A"
    },
    container: {
        display: "flex",

    },
    container1: {
        width: "50%"

    },
    container2: {
        width: "50%"

    },
    imageContainer: {
        paddingTop: "20%",
    },
    newAccount: {
        color: "#39993A",
        textDecoration: "none",
        border: "none",
    },
    accountsubtext: {
        color: "#393e46",
        fontFamily: "sans-serif",
        fontSize: "1vh",
        paddingTop: "10vh",
        paddingLeft: "9vw",
    },
    newAccount2: {
        color: "#39993A",
        textDecoration: "none",
    },
    accountsubtext2: {
        color: "#393e46",
        fontFamily: "sans-serif",
        fontSize: "1vh",
        paddingTop: "8.5vh",
        paddingLeft: "19vw",
        paddingBottom: "10%"
    }
}
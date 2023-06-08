import React from 'react';
import { Navbar } from './Navbar';
import img from "../images/loginImage.svg";
import timeManagement from "../images/timeManagement.svg";


export const Signup = () => {
    return (
        <>
        {/* <Navbar /> */}
        <div style={styles.background}>
            <div style={styles.loginContainer}>
                <div style={styles.loginHeaderContainer}>
                    <div style={styles.loginHeaderTitleContainer}>
                    {/* <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-checklist-stay-at-home-flatart-icons-outline-flatarticons.png" alt="external-checklist-stay-at-home-flatart-icons-outline-flatarticons"/> */}
                    <img src={timeManagement} width="48vw" />
                    <h2>Taskmaster </h2>
                    </div>
                    <div>

                    </div>
                </div>
                <div style={styles.container}>
                    <div style={styles.container1}>
                        <div style={styles.loginTitleContainer}>
                            <h1 style={{ color: "white", fontFamily: "sans-serif", paddingTop: "10%" }}>Welcome!</h1>
                            <h2 style={styles.loginTitle}>Time to join Taskmaster</h2>
                        </div>
                        <div>
                        </div>
                        <div style={styles.inputContainer}>
                            <input style={styles.input} type='text' placeholder='USERNAME' />
                            <input style={styles.input} type='text' placeholder='PASSWORD' />
                        </div>
                        <div style={styles.loginBtnContainer}>
                            <button style={styles.loginButton}>LOGIN</button>
                        </div>
                        <div>
                            <h2 style={styles.accountsubtext} >Already have an Account? 
                            <a style={styles.newAccount} href='/login'> Login</a>
                            </h2>
                        </div>
                    </div>
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
        marginTop: "5%",
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
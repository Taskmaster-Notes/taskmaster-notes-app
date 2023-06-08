import React from 'react';

export const Login = () => {
    return (
        <>
        <div style={styles.background}>
            <div style={styles.loginContainer}>
                <div style={styles.loginTitleContainer}>
                    <h1 style={styles.loginTitle}>LOGIN</h1>
                </div>
                <div>
                </div>
                <div style={styles.inputContainer}>
                    <input style={styles.input} type='text' placeholder='USERNAME' />
                    <input style={styles.input} type='text' placeholder='PASSWORD' />
                </div>
                <div style={styles.subTextContainer}>
                    <p style={styles.subtext}>forgot/new account?</p>
                    <p></p>
                </div>
                <div style={styles.loginBtnContainer}>
                    <button style={styles.loginButton}>LOGIN</button>
                </div>
            </div>
        </div>
        </>
    )
}

const styles = {
    background: {
        backgroundColor: "#dde1e7",
    },
    backgroundTwo: {
        backgroundColor: "#dde1e7",
    },
    loginContainer: {
        backgroundColor: "#dde1e7",
        margin: "auto",
        width: "50%",
        height: "43vh",
        marginTop: "30%",
        paddingTop: "2vh",
        boxShadow: "-10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.12)"
        },
    loginTitleContainer: {
        backgroundColor: "#dde1e7",
        width: "100%",
        textAlign: "center"
    },
    loginTitle: {
        backgroundColor: "#dde1e7",
        color: "#393e46",
        fontFamily: "sans-serif"
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
        backgroundColor: "#E6E6E6",
        color: "#8F8FA1",
        fontWeight: "bold",
        marginTop: "1vh",
        padding: "2vh",
    },
    loginBtnContainer: {
        backgroundColor: "#dde1e7",
        margin: "auto",
        textAlign: "center",
        marginTop: "5%",
    },
    loginButton: {
        backgroundColor: "#39993A",
        color: "#ffffff",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "3vh",
        borderRadius: "5px",
        border: "none",
        width: "30vw",
        height: "7vh",
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
    }
}
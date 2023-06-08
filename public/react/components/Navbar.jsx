import React from 'react';
import timeManagement from "../images/timeManagement.svg";
import pages from "../images/pages.svg";

export const Navbar = () => {
    return (
        <>
            <div style={styles.navbarContainer}>
                <div style={styles.navbarTitleContainer}>
                <img src={timeManagement} width="48vw" />
                <h1 style={styles.navbarTitle}>Taskmaster
                </h1> 
                {/* <img width="48" height="45" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-checklist-stay-at-home-flatart-icons-outline-flatarticons.png" alt="external-checklist-stay-at-home-flatart-icons-outline-flatarticons"/> */}
                </div>
                <div style={styles.iconContainer}>
                    <div style={styles.icons}>
                        <img style={styles.icon} width="32" height="32" src="https://img.icons8.com/ios/32/home--v1.png" alt="home--v1"/>
                    </div>
                    <div style={styles.icons}>
                    <img style={styles.icon} width="32" height="32" src="https://img.icons8.com/ios/32/terms-and-conditions.png" alt="terms-and-conditions"/>
                    {/* <img style={styles.icon} src={pages} width="32" height="32" /> */}
                    </div>
                    <div style={styles.icons}>
                    <img style={styles.icon} width="32" height="32" src="https://img.icons8.com/ios/32/calendar--v1.png" alt="calendar--v1"/>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    navbarContainer: {
        display: "flex",
        justifyContent: "space-between",
        boxShadow: "-10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.12)",
        backgroundColor: "#0D0D0D",
        height: "8vh",
        paddingTop: "2vh",
    },
    navbarTitleContainer: {
        display: "flex",
        // boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
        height: "5.5vh",
        paddingTop: "1vh",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "15px",
        marginBottom: "15px",
        marginLeft: "2vw",

    },
    navbarIcon: {

    },
    navbarTitle: {
        color: "#39993A",
        fontFamily: "sans-serif",
    },
    iconContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    icons: {
        // boxShadow: "-10px -10px 15px rgba(255,255,255,0.5), 10px 10px 15px rgba(70,70,70,0.12)",
        marginRight: "2vh",
        height: "4vh",
        width: "5vw",
        alignItems: "center",
        paddingTop: "1vh",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        paddingBottom: "1vh",
        color: "white",
        backgroundColor: "white",
        borderRadius: "5px",
        border: "solid 1px grey"
    },
    icon: {
        alignItems: "center",
        backgroundColor: "white",
    }
}
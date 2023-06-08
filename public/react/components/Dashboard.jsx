import React from 'react';
import { Navbar } from './Navbar';

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div style={styles.dashboardContainer}>
                <h1 style={{color: "white", fontFamily: "sans-serif"}}>Hi, Emil De'leon</h1>
                <div style={styles.progressBarContainer}>
                    <div style={styles.statusbarContainer}>
                        <div>
                            <h3 style={styles.greenStatus}>still have time</h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "23px"}}></h3>
                        </div>
                    </div>
                    <div style={styles.statusbarContainer}>
                        <div>
                        <h3 style={styles.yellowStatus}>Day of</h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "23px"}}></h3>
                        </div>
                    </div>
                    <div style={styles.statusbarContainer}>
                        <div>
                            <h3 style={styles.redStatus}>Overdue</h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "23px"}}></h3>
                        </div>
                    </div>
                </div>
                <div style={styles.tasksContainer}>
                    <div>
                        <div style={styles.greenTaskContainer}>
                            <h4>Rewrite Query Caching Logic</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.greenTaskContainer}>
                            <h4>Trello Import</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.greenTaskContainer}>
                            <h4>SQL Reports</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.greenTaskContainer}>
                            <h4>Debug Slow Queries</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.newTaskContainer}>
                            <p style={styles.newTask}>New +</p>
                        </div>
                    </div>
                    <div>
                        <div style={styles.yellowTaskContainer}>
                            <h4>Add Authentication Options</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.yellowTaskContainer}>
                            <h4>Improve Third Party Integrations</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.newTaskContainer}>
                            <p style={styles.newTask}>New +</p>
                        </div>
                    </div>
                    <div>
                        <div style={styles.redTaskContainer}>
                            <h4>Deploy Project</h4>
                            <p>due - 8-20-23</p>
                        </div>
                        <div style={styles.newTaskContainer}>
                            <p style={styles.newTask}>New +</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const styles = {
    dashboardContainer: {
        paddingTop: "2vh",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "5%",
        marginLeft: "10%",
        marginRight: "10%",
        width: "80%",
        height: "70vh",
    },
    progressBarContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "4vh",
        paddingTop: "2vh",
        borderTop: "solid #222831"
    },
    statusbarContainer: {
        display: "flex",
        justifyContent: "space-between",
    },
    greenStatus: {
        backgroundColor: "#CFE1DC",
        fontFamily: "sans-serif",
        marginRight: "4vw",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    yellowStatus: {
        backgroundColor: "#FBEAD4",
        fontFamily: "sans-serif",
        marginRight: "4vw",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    redStatus: {
        backgroundColor: "#FFCED1",
        fontFamily: "sans-serif",
        marginRight: "4vw",
        paddingLeft: "1vw",
        paddingRight: "1vw",
    },
    tasksContainer: {
        height: "80%",
        display: "flex",
        justifyContent: "space-between",
    },
    greenTaskContainer: {
        borderRadius: "5px",
        width: "19vw",
        height: "20%",
        marginTop: "2vh",
        marginBottom: "1vh",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        paddingTop: "2vh",
        paddingLeft: "2vw",
    },
    yellowTaskContainer: {
        borderRadius: "5px",
        width: "19vw",
        height: "20%",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        marginBottom: "1vh",
        marginTop: "2vh",
        paddingTop: "2vh",
        paddingLeft: "2vw",
    },
    redTaskContainer: {
        borderRadius: "5px",
        width: "19vw",
        height: "20%",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        marginBottom: "1vh",
        marginTop: "2vh",
        paddingTop: "2vh",
        paddingLeft: "2vw",
    },
    newTaskContainer: {
        backgroundColor: "#DDE1E7",
        paddingLeft: "1vw",
    },
    newTask: {
        fontWeight: "bold",
        fontSize: "1.5vh",
        fontFamily: "sans-serif",
        color: "#39993A",
    }
}
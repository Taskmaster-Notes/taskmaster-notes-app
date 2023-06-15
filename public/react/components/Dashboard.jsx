import React, { useState, useEffect } from 'react';
import { Navbar } from './Navbar';
import { SingleTask } from './SingleTask';
import { NewTask } from './newTask';

export const Dashboard = () => {
    const [show, setShow] = useState(false);
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
    console.log(user);

    return (
        <>
        <Navbar />
            <div style={styles.dashboardContainer}>
                <h1 style={{color: "grey", fontFamily: "sans-serif"}}>Hi, {user ? user.firstName : null} {user? user.lastName: null}</h1>
                <div style={styles.progressBarContainer}>
                    <div style={styles.statusbarContainer}>
                        <div>
                            <h3 style={styles.greenStatus}>
                                <div style={{display: "flex", backgroundColor: "#DBEDDB"}}>
                                <div 
                                    style={{height: "1px",
                                    width: "1px",
                                    backgroundColor: "#6C9B7D",
                                    paddingTop: "5px",
                                    paddingRight: "5px",
                                    marginRight: "5px",
                                    margin: "8px",
                                    border: "1px solid #6C9B7D",
                                    borderRadius: "20px"
                                    }}
                                    >
                                </div>
                                <div style={{backgroundColor: "#DBEDDB"}}>still have time</div>
                                </div>
                            </h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "23px"}}></h3>
                        </div>
                    </div>
                    <div style={styles.statusbarContainer}>
                        <div style={{display: "flex", backgroundColor: "#D3E4EF", borderRadius: "15px"}}>
                        <div 
                                    style={{height: "1px",
                                    width: "1px",
                                    backgroundColor: "#5B96BD",
                                    paddingTop: "5px",
                                    paddingRight: "5px",
                                    marginRight: "5px",
                                    margin: "8px",
                                    border: "1px solid #5B96BD",
                                    borderRadius: "20px"
                                    }}
                                    >
                                </div>
                        <h3 style={styles.yellowStatus}>Today</h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "23px"}}></h3>
                        </div>
                    </div>
                    <div style={styles.statusbarContainer}>
                        <div style={{display: "flex", backgroundColor: "#FFCED1", borderRadius: "15px"}}>
                        <div 
                                    style={{height: "1px",
                                    width: "1px",
                                    backgroundColor: "#f06a73",
                                    paddingTop: "5px",
                                    paddingRight: "5px",
                                    marginRight: "5px",
                                    margin: "8px",
                                    border: "1px solid #f06a73",
                                    borderRadius: "20px"
                                    }}
                                    >
                                </div>
                            <h3 style={styles.redStatus}>Overdue</h3>
                        </div>
                        <div>
                            <h3 style={{ fontSize: "23px"}}></h3>
                        </div>
                    </div>
                </div>
                <div style={styles.tasksContainer}>
                    <div>
                    {user ? user.Tasks.map((task) => {
                        return task.status === 'Still Have Time' ?  <SingleTask task={task} containerStyle={styles.greenTaskContainer} /> : null}
                    ) : null}
                        <div style={styles.newTaskGreenContainer}>
                            <button style={styles.newGreenTask} onClick={() => setShow(!show)}>+ New</button>
                        </div>
                    </div>
                    <div>
                    {user ? user.Tasks.map((task) => {
                        return task.status === 'In Progress' ?  <SingleTask task={task} containerStyle={styles.yellowTaskContainer} /> : null}
                    ): null}
                        <div style={styles.newTaskContainer}>
                            <button style={styles.newYellowTask} onClick={() => setShow(!show)}>+ New</button>
                        </div>
                    </div>
                    <div>
                    {user ? user.Tasks.map((task) => {
                        return task.status === 'Overdue' ?  <SingleTask task={task} containerStyle={styles.redTaskContainer} /> : null}
                    ): null}

                        <div style={styles.newTaskContainer}>
                            <button style={styles.newRedTask} onClick={() => setShow(!show)}>+ New</button>
                        </div>
                    </div>
                </div>
            </div>
            {show ? <NewTask setShow={setShow} show={show} /> : null}
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
        backgroundColor: "#DBEDDB",
        fontFamily: "sans-serif",
        marginRight: "4vw",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        borderRadius: '15px',
    },
    yellowStatus: {
        backgroundColor: "#D3E4EF",
        fontFamily: "sans-serif",
        marginRight: "4vw",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        borderRadius: '15px',
    },
    redStatus: {
        backgroundColor: "#FFCED1",
        fontFamily: "sans-serif",
        marginRight: "4vw",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        borderRadius: '15px',
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
        boxShadow: "rgba(240, 255, 240, 1) 0px 1px 0px, rgba(240, 255, 240, 1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        paddingTop: "2vh",
        paddingLeft: "2vw",
    },
    yellowTaskContainer: {
        borderRadius: "5px",
        width: "19vw",
        height: "20%",
        boxShadow: "rgba(240, 255, 240, 1) 0px 1px 0px, rgba(240, 255, 240, 1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        marginBottom: "1vh",
        marginTop: "2vh",
        paddingTop: "2vh",
        paddingLeft: "2vw",
    },
    redTaskContainer: {
        borderRadius: "5px",
        width: "19vw",
        height: "20%",
        boxShadow: "rgba(240, 255, 240, 1) 0px 1px 0px, rgba(240, 255, 240, 1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        marginBottom: "1vh",
        marginTop: "2vh",
        paddingTop: "2vh",
        paddingLeft: "2vw",
    },
    newTaskContainer: {
        backgroundColor: "#E7F5E7",
        paddingLeft: "1vw",
    },
    newTaskGreenContainer: {
        backgroundColor: "#E7F5E7",
        paddingLeft: "1vw",
    },
    newTaskYellowContainer: {
        backgroundColor: "#E7F5E7",
        paddingLeft: "1vw",
    },
    newYellowTask: {
        fontWeight: "bold",
        fontSize: "1.5vh",
        fontFamily: "sans-serif",
        color: "#7BA48A",
        boxShadow: "rgba(240, 255, 240, 1) 0px 1px 0px, rgba(240, 255, 240, 1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        backgroundColor:  '#D3E4EF',
        borderRadius: "15px",
        width: "19vw",
        height: "10vh",
        paddingTop: "2%",
        paddingLeft: "2%",
        border: "none",
    },
    newGreenTask: {
        fontWeight: "bold",
        fontSize: "1.5vh",
        fontFamily: "sans-serif",
        color: "#7BA48A",
        boxShadow: "rgba(240, 255, 240, 1) 0px 1px 0px, rgba(240, 255, 240, 1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        backgroundColor: "#DBEDDB",
        borderRadius: "15px",
        width: "19vw",
        height: "10vh",
        paddingTop: "2%",
        paddingLeft: "2%",
        border: "none",
    },
    newRedTask: {
        fontWeight: "bold",
        fontSize: "1.5vh",
        fontFamily: "sans-serif",
        color: "#7BA48A",
        boxShadow: "rgba(240, 255, 240, 1) 0px 1px 0px, rgba(240, 255, 240, 1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
        backgroundColor: "#FFCED1",
        borderRadius: "15px",
        width: "19vw",
        height: "10vh",
        paddingTop: "2%",
        paddingLeft: "2%",
        border: "none",
    }
}
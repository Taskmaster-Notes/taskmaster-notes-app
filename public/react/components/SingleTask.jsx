import React, { useState } from "react";


export const SingleTask = ({ containerStyle, task }) => {
    return (
        <>
            <div style={containerStyle}>
                <h4>{task.title}</h4>
                <p>{task.description}</p>
                <p>{task.due_date}</p>
                <p>{task.status}</p>
            </div>
        </>
    )
}

const styles = {
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
}
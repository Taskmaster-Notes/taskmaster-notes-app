import React, { useState } from "react";


export const SingleTask = ({ containerStyle }) => {
    return (
        <>
            <div style={containerStyle}>
                <h4>Rewrite Query Caching Logic</h4>
                <p>due - 8-20-23</p>
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
import React, { useState } from "react";


export const SingleNote = ({ note, noteShow, setNoteShow }) => {
    return (
        <>
            <div style={styles.modal}>
            <div>
                <button onClick={() => setNoteShow(!noteShow)}>x</button>
            </div>
            <div style={styles.inputContainer}>
                <h4>{note.title}</h4>
                <textarea style={styles.inputText}>{note.content}</textarea>
            </div>
            </div>
        </>
    )
}

const styles = {
    modal: {
        position: "fixed",
        left: "0",
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255,255,255,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        display: 'flex',
        flexDirection: "column",
    },
    inputText: {
        width: "80vw",
        height: "50vh"
    }
}
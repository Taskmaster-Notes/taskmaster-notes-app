import React, { useState } from "react";


export const NotesModal = ({ setShow, show }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleForm = async (e) => {
        const id = localStorage.getItem("id");
        const newNote = {
        title: title,
        content: content,
        UserId: id
        }
        const res =  await fetch(`http://localhost:3000/api/notes/user/${id}`, {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
                 },
        body: JSON.stringify(
        newNote
        )
        });
        const data = await res.json();
        setTitle('');
        setContent('');
        setShow(!show);
    }

    return (
        <>
        <div style={styles.modal}>
            <form style={{backgroundColor: "black"}} onSubmit={handleForm}>
                <div>
                    <h3>Create a new Note</h3>
                </div>
                <div style={styles.inputContainer}>
                    <input style={styles.input} type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea style={styles.inputText} type='text' placeholder='content' value={content} onChange={(e) => setContent(e.target.value)} />
                </div>
                <button>Create New Note</button>
            </form>
            <div>
                <button onClick={() => setShow(!show)}>x</button>
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
import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { NotesModal } from "./NotesModal";
import { SingleNote } from "./SingleNote";

export const Notes = () => {
    const [user, setUser] = useState();
    const [show, setShow] = useState(false);
    const [noteShow, setNoteShow] = useState(false);

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
        localStorage.setItem("id", data[0].id);
    }
    console.log(user)

    return (
        <>
        <Navbar />
        <div style={styles.notesContainer}>
            <div style={styles.notesContainerTitle}>
                <h2 style={{paddingRight: "2%",paddingBottom: "3%"}}>Notes</h2>
            </div>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div>    
                    {user ? user.Notes.map(u => <p style={{ paddingBottom: "3%" }} onClick={() => setNoteShow(!noteShow)}>{u.title}</p>) : null}
                    {user && noteShow ? user.Notes.map(u => <SingleNote note={u} noteShow={noteShow} setNoteShow={setNoteShow} />) : null}
                </div>
                <div>
                    <button onClick={() => setShow(!show)}>
                        new note
                    </button>
                </div>
            </div>
        </div>
        {show ? <NotesModal show={show} setShow={setShow} />: null}
        </>
    )
};

const styles = {
    notesContainer: {
        width: "90vw",
        padding: "10%"
    },
    notesContainerTitle: {
        display: "flex",

    }
}
import React, { useState } from "react";


export const NewTask = ({ setShow, show }) => {
    const options = ['Still Have Time', 'In Progress', 'Overdue']
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(options[0]);
    const [dueDate, setDueDate] = useState('');

    const handleForm = async (e) => {
        const id = localStorage.getItem("id");
        const newTask = {
        title: title,
        description: description,
        status: status,
        due_date: dueDate,
        UserId: id
        }
        const res =  await fetch(`http://localhost:3000/api/tasks/user/${id}`, {
        method: "POST",
        headers: {
                'Content-Type': 'application/json'
                 },
        body: JSON.stringify(
        newTask
        )
        });
        const data = await res.json();
        setTitle('');
        setDescription('');
        setStatus('');
        setDueDate('');
        setShow(!show);
    }

    return (
        <>
        <div style={styles.modal}>
            <form style={{backgroundColor: "black"}} onSubmit={handleForm}>
                <div>
                    <h3>Create a new Task</h3>
                </div>
                <div style={styles.inputContainer}>
                    <input style={styles.input} type='text' placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                    <input style={styles.input} type='text' placeholder='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    >
                        {options.map((value) => (
                            <option value={value} key={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                    <input style={styles.input} type='text' placeholder='due date' value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
                </div>
                <button>Create New Task</button>
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
    }
}
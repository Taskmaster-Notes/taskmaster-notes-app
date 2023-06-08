// const { Task, User, Note } = require('../models/index');
const { Task } = require('../models/Task');
const { User } = require('../models/User');
const { Note } = require('../models/Note');
const express = require('express');
const app = express();
const { sequelize } = require('../db');

describe("Adding multiple Tasks to one User", () =>{
    beforeAll(async ()=> {
        await sequelize.sync({force:true});
    })

    test("can create User", async () =>{
        const newUser = await User.create({
            firstName: "John",
            lastName: "Doe 2",
            username: "johndoe",
            password:"password"
        })
        expect(newUser).toBeInstanceOf(User);
        expect(newUser.firstName).toBe("John");
        expect(newUser.lastName).toBe("Doe 2");
        expect(newUser.password).toBe("password")

//         let newTask = await Task.create({
//             title: "Example Task to add to user",
//             description: "This is an example description",
//             status: "Done",
//             due_date: "11/22/23",
//         })
//         expect(newTask).toBeInstanceOf(Task);
//         expect(newTask.title).toBe("Example Task to add to user");
//         expect(newTask.description).toBe("This is an example description");
//         expect(newTask.status).toBe("Done");
//         expect(newTask.due_date).toBeInstanceOf(Date);

//         let newTask2 = await Task.create({
//             title: "Example Task to add to user 2",
//             description: "This is an example description",
//             status: "Done",
//             due_date: "11/22/23",
//         })
//         expect(newTask2).toBeInstanceOf(Task);
//         expect(newTask2.title).toBe("Example Task to add to user 2");
//         expect(newTask2.description).toBe("This is an example description");
//         expect(newTask2.status).toBe("Done");
//         expect(newTask2.due_date).toBeInstanceOf(Date);

//         await newUser.addTasks([newTask, newTask2]);
//         const newUserTasks = await newUser.getTasks();

//         expect(newUserTasks.length).toBe(2);
//         expect(newUserTasks[0] instanceof Task).toBeTruthy;
//     })

// })

// describe("Adding multiple Notes to one User", () =>{
//     beforeAll(async ()=> {
//         await sequelize.sync({force:true});
//     })

//     test("can create User", async () =>{
//         const newUser = await User.create({
//             firstName: "John",
//             lastName: "Doe 2",
//             username: "johndoe",
//             password:"password"
//         })
//         expect(newUser).toBeInstanceOf(User);
//         expect(newUser.firstName).toBe("John");
//         expect(newUser.lastName).toBe("Doe 2");
//         expect(newUser.password).toBe("password")

//         const newNote = await Note.create({
//             title: "Example Title",
//             content: "This is an example description",
//         })
//         expect(newNote).toBeInstanceOf(Note);
//         expect(newNote.title).toBe("Example Title");
//         expect(newNote.content).toBe("This is an example description");


//         const newNote2 = await Note.create({
//             title: "Example Title 2",
//             content: "This is an example description",
//         })
//         expect(newNote2).toBeInstanceOf(Note);
//         expect(newNote2.title).toBe("Example Title 2");
//         expect(newNote2.content).toBe("This is an example description");

//         await newUser.addNotes([newNote, newNote2]);
//         const newUserNotes = await newUser.getNotes();

//         expect(newUserNotes.length).toBe(2);
//         expect(newUserNotes[0] instanceof Task).toBeTruthy;
    })
})

const request = require('supertest');
const express = require('express');
const app = express();
const { Note } = require('../models/Note');
const { sequelize } = require('../db');


// Test for GET /notes
describe('GET /notes', () => {
  beforeAll(async ()=> {
    await sequelize.sync({force:true});
})
        test("can create Note", async () =>{
        const newTask = await Note.create({
            title: "Example Title",
            content: "This is an example description",
            userID: 1
        })
        expect(newTask).toBeInstanceOf(Note);
        expect(newTask.title).toBe("Example Title");
        expect(newTask.content).toBe("This is an example description");
        expect(newTask.userID).toBe(1);
    })
})

// test("can create Notes", async () =>{
//   const newTask = await Task.create({
//       title: "Example Title",
//       description: "This is an example description",
//       status: "Done",
//       due_date: "11/22/23",
//   })
//   expect(newTask).toBeInstanceOf(Task);
//   expect(newTask.title).toBe("Example Title");
//   expect(newTask.description).toBe("This is an example description");
//   expect(newTask.status).toBe("Done");
//   expect(newTask.due_date).toBeInstanceOf(Date);
// })
// })

// const { Task } = require('../models/index');
// const { sequelize } = require('../db');

// describe("Task model", () =>{
//     beforeAll(async ()=> {
//         await sequelize.sync({force:true});
//     })
//         test("can create Task", async () =>{
//         const newTask = await Task.create({
//             title: "Example Title",
//             description: "This is an example description",
//             status: "Done",
//             due_date: "11/22/23",
//         })
//         expect(newTask).toBeInstanceOf(Task);
//         expect(newTask.title).toBe("Example Title");
//         expect(newTask.description).toBe("This is an example description");
//         expect(newTask.status).toBe("Done");
//         expect(newTask.due_date).toBeInstanceOf(Date);
//     })
// })
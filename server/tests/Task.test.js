const { Task } = require('../models/index');
const { sequelize } = require('../db');

describe("Task model", () =>{
    beforeAll(async ()=> {
        await sequelize.sync({force:true});
    })
        test("can create Task", async () =>{
        const newTask = await Task.create({
            title: "Example Title",
            description: "This is an example description",
            status: "Done",
            due_date: "11/22/23",
            userID: 1
        })
        expect(newTask).toBeInstanceOf(Task);
        expect(newTask.title).toBe("Example Title");
        expect(newTask.description).toBe("This is an example description");
        expect(newTask.status).toBe("Done");
        expect(newTask.due_date).toBeInstanceOf(Date);
        expect(newTask.userID).toBe(1);
    })
})
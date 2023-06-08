const express = require('express');
const { User } = require('../models');
const router = express.Router();
const { Task } = require('../models/Task');

// get tasks
router.get("/", async (req, res, next)=>{
    if(!await Task.findAll()){
        res.sendStatus(404)
    }
    else{
        res.json(await Task.findAll())
    }
})

// get one task by id
router.get("/:id", async (req, res, next)=>{
    if(!await Task.findByPk(req.params.id)){
        res.sendStatus(404);
    }
    else{
        res.json(await Task.findByPk(req.params.id))
    }
});

//add task (POST)
router.post('/', async (req,res,next)=>{
    const { title, description, status, due_date, userID } = req.body;
    const newTask = await Task.create({
        title,
        description,
        status,
        due_date,
        userID
    });
    res.status(201).send({newTask});
})

//update Task (PUT)
router.put('/:id', async (req,res)=> {
    const task = await Task.findByPk(req.params.id);
    const { title, description, status, due_date, userID } = req.body;
    await task.update({ title, description, status, due_date, userID });
    res.status(201).send(task);
})

//delete a task by task ID
router.delete("/:id", async (req, res) => {
    const taskToDelete = await Task.findByPk(req.params.id);
    await taskToDelete.destroy();
    res.sendStatus(204);
  })

module.exports = router;
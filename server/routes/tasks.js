const express = require('express');
const router = express.Router();
const { Task, User } = require('../models/index');

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
router.post('/user/:id', async (req,res,next)=>{
    const { title, description, status, due_date } = req.body;
    const id = req.params.id;
    const newTask = await Task.create({
        title,
        description,
        status,
        due_date,
        UserId: id
    });
    res.status(201).send({newTask});
})

//update Task (PUT)
router.put('/:id', async (req,res)=> {
    const task = await Task.findByPk(req.params.id);
    const { title, description, status, due_date } = req.body;
    await task.update({ title, description, status, due_date });
    res.status(201).send(task);
})

//delete a task by task ID
router.delete("/:id", async (req, res) => {
    const taskToDelete = await Task.findByPk(req.params.id);
    await taskToDelete.destroy();
    res.sendStatus(204);
  })

module.exports = router;
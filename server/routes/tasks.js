// Initialize express router and import task model
const router = require('express').Router();
const Task = require('../models/Task');


// Create a task
router.post('/', async (req, res) => {
    try {
        const newTask = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            task_id: req.body.task_id
        });
        res.status(200).json({
            task: newTask
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
);

// Get a task by id
router.get('/:id', async (req, res) => {
    try {
        const task = await Task.findByPk(req.params.id);
        res.status(200).json({
            task: task
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
);

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json({
            tasks: tasks
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
);

// Put route to update a task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.update({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            task: task
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
);

// Delete route to delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({
            task: task
        });
    } catch (err) {
        res.status(500).json({
            error: err
        });
    }
}
);

module.exports = router;
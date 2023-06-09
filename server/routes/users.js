const express  = require('express');
const router = express.Router();
const { User, Task, Note } = require('../models/index');


//no auth yet

//GET all users
router.get("/", async (req, res, next)=>{
    if(!await User.findAll()){
        res.sendStatus(404)
    }
    else{
        res.json(await User.findAll())
    }
})
//GET one user by id
router.get("/:id", async (req, res, next)=>{
    if(!await User.findByPk(req.params.id)){
        res.sendStatus(404);
    }
    else{
        res.json(await User.findByPk(req.params.id, { include: [Task,Note] }))
    }
});
//GET one user by name
router.get("/username/:username", async (req, res, next)=>{
    const userToFind = await User.findOne({where: {username: req.params.username}})
    console.log(userToFind)
    if(!userToFind) 
            res.sendStatus(404);
        

     else{ 
        res.json(await User.findAll({
            where: {username: req.params.username}, include: [Task,Note] 
        }))
    }
});
//POST user
router.post('/', async (req,res,next)=>{
        const { firstName, lastName, username, password } = req.body;
        const newUser = await User.create({
            firstName,
            lastName,
            username,
            password
        });
        res.status(201).send({newUser});
    })
//POST user with note
// router.post('/:id/task', async (req,res,next) => {

// })
//PUT user
router.put('/:id', async (req,res)=> {
    const user = await User.findByPk(req.params.id);
    const { firstName, lastName, username, password } = req.body;
    await user.update({ firstName, lastName, username, password });
    res.status(201).send(user);
})
//delete -- example
router.delete("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    await user.destroy();
    res.sendStatus(204);
  });

//get a specific user's tasks
router.get("/:id/tasks", async (req, res) => {
    const currentUser = await User.findByPk(req.params.id);
    const userTasks = await currentUser.getTasks()
    res.json(userTasks);
});

//get a specific user's notes
router.get("/:id/notes", async (req, res) => {
    const currentUser = await User.findByPk(req.params.id);
    const userNotes = await currentUser.getNotes()
    res.json(userNotes);
});

module.exports = router;
  
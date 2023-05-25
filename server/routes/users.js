const express  = require('express');
const router = express.Router();
const { User } = require('../models/User');

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
//GET one user
router.get("/:id", async (req, res, next)=>{
    if(!await User.findByPk(req.params.id)){
        res.sendStatus(404);
    }
    else{
        res.json(await User.findByPk(req.params.id))
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

module.exports = router;
  
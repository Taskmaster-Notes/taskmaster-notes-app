const express  = require('express');
const router = express.Router();
const { User } = require('../models/User');

//no auth yet

//GET all users
// router.get("/", async (req, res, next)=>{
//     if(!await User.findAll()){
//         res.sendStatus(404)
//     }
//     else{
//         res.json(await User.findAll())
//     }
// })
//GET one user
router.get("/:id", async (req, res, next)=>{
    if(!await User.findByPk(req.params.id)){
        res.sendStatus(404);
    }
    else{
        res.json(await User.findByPk(req.params.id))
    }
});
//delete -- example
// router.delete("/:id", async (req, res) => {
//     const user = await User.findByPk(req.params.id);
//     await user.destroy();
//     res.sendStatus(204);
//   });

//   router.delete('/:id', authenticateJWT, async (req, res, next)=>{
    
//         const toDelete = await Recipe.findByPk(req.params.id);
//         await toDelete.destroy();
//         console.log(isAdmin)
//         res.json(toDelete)
    
    
// });

module.exports = router;
  
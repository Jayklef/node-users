
const express = require('express');

const router = express.Router();

const users = require('../../users');

router.get('/', (req, res) =>{
    res.json(users)
})

// Get single user

router.get('/:id', (req, res) => {

    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found){
        res.json(users.filter(user => user.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg: `No user with id of ${params.user.id}`})
    }
});

//create user
router.post('/', (req, res) =>{
    const newUser = {
        id: uuid.v4,
        name: req.body.name,
        DOB: req.body.DOB,
        tribe: req.body.tribe
    };

    if(!newUser.name || !newUser.DOB || !newUser.tribe){
        return res.status(400).json({message: `please enter the details`});
    }

    users.push(newUser);
    res.json(users)
});


//update user

router.put('/:id', (req, res) => {

    const found = users.some(user => user.id === parseInt(req.params.id));

    if (found){
        const updateUser = req.body;
        users.forEach(user => {
            if (user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name: user.name;
                user.DOB = updateUser.DOB ? updateUser.DOB : user.DOB;
                user.tribe = updateUser.tribe ? updateUser.tribe : user.tribe;

                res.json({message: 'user updated', user});
            }
        })
    }else{
        res.status(400).json({msg: `No user with id of ${params.user.id}`})
    }


    router.delete('/:id', (req, res) => {

        const found = users.some(user => user.id === parseInt(req.params.id));
    
        if (found){
            res.json({
                message: 'User deleted', users: users.filter(user => user.id === parseInt(req.params.id))
            })
        }else{
            res.status(400).json({msg: `No user with id of ${params.user.id}`})
        }
    });
});

module.exports = router;
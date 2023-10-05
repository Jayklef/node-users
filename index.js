
const express = require('express');

const users = require('./users')

const app = express();

app.get('/api/users', (req, res) =>{
    res.json(users)
})

app.get('/api/users/:id', (req, res) => {
    res.json(users.filter(user => user.id === parseInt(req.params.id)))
});

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
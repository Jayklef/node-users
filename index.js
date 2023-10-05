
const express = require('express');

const users = require('./users')

const app = express();

app.get('/api/users', (req, res) =>{
    res.json(users)
})

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
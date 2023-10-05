const express = require('express');
const uuid = require('uuid')


const app = express();

app.use('api/users', require('./routes/api/users'));

app.use(express.json);
app.use(express,express.urlencoded({extended: false}))

const port = process.env.port || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
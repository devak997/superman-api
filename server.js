const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const routes = require('./app/routes');

const app = express();
app.use(cors());
app.use(bodyParser.json())

const connection = mysql.createConnection({
    user: 'root',
    database: 'startup',
    host: 'localhost'
});

connection.connect(err => {
    if (err)
        console.log(err);
});

app.listen(5000, () => {
    console.log("API running at port 5000");
});


routes(app);
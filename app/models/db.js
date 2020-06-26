const mysql = require('mysql');

const connection = mysql.createConnection({
    user: 'root',
    database: 'startup',
    host: 'localhost'
});

connection.connect(err => {
    if (err)
        console.log(err);
});

module.exports = connection;
const sql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'your user',
    password: 'your password',
});

db.connect();

module.exports = db;
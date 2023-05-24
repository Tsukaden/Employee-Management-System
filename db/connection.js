const mysql = require('mysql2');

const connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Origami2003!',
  database: 'Workers'
});

module.exports = connect;
const mysql = require('mysql2');

const conexao = mysql.createConnection({
  host: 'localhost',
  port:3305,
  user: 'root',
  password: 'leo120780',
  database: 'db_ford'
});

module.exports = conexao;


//working
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_URL) {
connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "PasswordRoot",
  database: "burgers_db"
});
};

//connection.connect();

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//allowing us to use connection file to be able to use it elsewhere
module.exports = connection;
/**
 * Created by panxianwen on 2017/6/27.
 */
var mysql = require('mysql');

var options = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'jianshu'
}

var connection = mysql.createConnection(options)

module.exports = connection

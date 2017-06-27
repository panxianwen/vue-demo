/**
 * Created by panxianwen on 2017/6/27.
 */
var connection  = require('./dbConnection')

var userDbUtils = {}

/*保存用户*/
userDbUtils.saveUser = function (user) {
    var promise = new Promise(function (resolve, reject) {
      var sql = 'insert into users(email, nickname, password) values(?, ?, ?)'
      var params = [user.email, user.nickname, user.password]
      connection.connect(function () {
        connection.query(sql, params, function (error, response) {
          if (error) {
            reject(error)
          } else {
            resolve(response)
          }
        })
      })
    })

    return promise
}

/*登录时查找用户*/
userDbUtils.getUserByLogin = function (email, password) {
  var promise = new Promise(function (resolve, reject) {
    var sql, params
    sql = 'select * from users where email = ? and password = ?'
    params = [email, password]
    connection.query(sql, params, function (error, response) {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

  return promise
}

/*登录时,查找用户*/
userDbUtils.getUserByLogin = function (email, password) {
  var promise = new Promise(function (resolve, reject) {
    var sql, params
    sql = 'select * from users where email = ? and password = ?'
    params = [email, password]
    connection.query(sql, params, function (error, response) {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

  return promise
}

/*注册时，查找用户*/
userDbUtils.getUserByLogin = function (email, nickname) {
  var promise = new Promise(function (resolve, reject) {
    var sql, params
    sql = 'select * from users where email = ? and nickname = ?'
    params = [email, nickname]
    connection.query(sql, params, function (error, response) {
      if (error) {
        reject(error)
      } else {
        resolve(response)
      }
    })
  })

  return promise
}

module.exports = userDbUtils

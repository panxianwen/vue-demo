/**
 * Created by GP-GROUP2 on 2017/6/30.
 * 基于express 自定义有关user操作的server，处理来自vue的请求
 */

var userDbUtil = require('../dbUtil/userDbUtil')
var appResponse = require('./app-response')

module.exports = function (app) {

  app.get('/home/article/:type', function (req, res) {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end('hello world')
  })

  //用户注册
  app.post('/user/register', function (req, res) {
    var user = req.body
    userDbUtil.getUserByRegister(user.email, user.nickname).then(function (response) {
      var responseResult = {}
      if(response[0]) {
        responseResult = {
          status: 0,
          message: '邮箱/电话/昵称已注册,请重新注册!'
        }

      } else {
        userDbUtil.saveUser(user).then(function () {
          responseResult = {
            status: 1,
            message: '恭喜您，注册成功!'
          }

        })

        appResponse(res, JSON.stringify(responseResult))
      }
    }, function () {
        var responseResult = {
          status: 0,
          message: '注册失败!'
        }
        appResponse(res, JSON.stringify(responseResult))
    })
  })

}

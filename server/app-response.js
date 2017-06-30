/**
 * Created by GP-GROUP2 on 2017/6/30.
 */
moduel.export = function (response, responseBody) {
    response.writeHead('Content-type', 'application/json')
    response.end(responseBody)
}

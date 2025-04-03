/* index.js 역할
  모듈 모으기
  서버 시작
*/

let server = require('./server.js');
let router = require('./router.js');
let requestHandler = require('./requestHandler.js');

server.start(router.route, requestHandler.handler);
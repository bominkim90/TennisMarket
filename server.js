
let http = module.require('http'); // http 모듈
let url = require('url'); // url 모듈

function start(){

  function onRequest(request, response){
    let pathname = url.parse(request.url).pathname; // 문자열 캐치
    console.log("pathname : ",pathname);
    if(pathname == '/favicon.ico') return;

    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    response.write('Hello 김보민');
    response.end();
  }

  http.createServer( onRequest ).listen(8888);
  // localhost:8080
}


// module.exports = {start : start};
exports.start = start;
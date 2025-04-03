/* requestHandler.js
  router.js에서 URL에 따라 "무엇"을 실행할지 결정했을때 -> 그 "무엇"의 함수들을 정의
*/


function main(response){
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  response.write('메인 page');
  response.end();
}

function login(response){
  response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  response.write('로그인 page');
  response.end();
}

function error(response){
  response.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
  response.write('없는 page 입니다~');
  response.end();
}


let handler = {
  '/' : main,
  '/login' : login,
  '/error' : error,
};

exports.handler = handler;
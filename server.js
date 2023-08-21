// 필요한 모듈 가져옴
const express = require('express'); // Express 웹 프레임워크 모듈
const http = require('http'); // Node.js의 내장 http 모듈
const socketIo = require('socket.io'); // WebSocket 모듈

// Express 애플리케이션 생성
const app = express();
// HTTP 서버 생성
const server = http.createServer(app);
// WebSocket 서버 생성
const io = socketIo(server);

// 정적 파일들을 제공하기 위해 Express의 'static' 미들웨어를 사용
app.use(express.static(__dirname + '/public'));

// 루트 URL('/')로 접속하여 'index.html' 파일을 제공
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// WebSocket 연결을 설정
io.on('connection', (socket) => {
    // 클라이언트가 'chat message' 이벤트를 보낼 때의 동작을 정의
    socket.on('chat message', (message) => {
        // 받은 메시지를 모든 클라이언트에게 다시 보냄.
        io.emit('chat message', message);
    });
});

// 서버를 시작
const PORT = process.env.PORT || 3000; // 포트 번호 설정
server.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});

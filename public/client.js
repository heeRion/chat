// WebSocket 연결 생성, scoket 객체 생성
const socket = io();

// 폼 제출 이벤트 처리
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // 폼 제출 시 기본 동작을 막음
    if (input.value) { // 입력 필드에 값이 있는 경우
        socket.emit('chat message', input.value); // 서버로 메시지 전송
        input.value = ''; // 입력 필드 비움
    }
});



socket.on('chat message', (message) => {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
});

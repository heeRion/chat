// WebSocket 연결 생성, scoket 객체 생성
const socket = io();

// Handle form submission
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});


socket.on('chat message', (message) => {
    const messages = document.getElementById('messages');
    const li = document.createElement('li');
    li.textContent = message;
    messages.appendChild(li);
});

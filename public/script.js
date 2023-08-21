// HTML에서 id가 'message-input'인 입력 필드를 가져옴
const messageInput = document.getElementById('message-input');
// HTML에서 id가 'send-button'인 버튼을 가져홈
const sendButton = document.getElementById('send-button');
// HTML에서 id가 'chat-messages'인 엘리먼트를 가져옴
const chatMessages = document.getElementById('chat-messages');

// 'send-button' 버튼에 'click' 이벤트 리스너를 추가
sendButton.addEventListener('click', () => {
  // 입력된 메시지 텍스트를 가져옵니다.
  const messageText = messageInput.value.trim();
  if (messageText !== '') { // 메시지 텍스트가 비어있지 않은 경우
    // 새로운 메시지 엘리먼트를 생성
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'sent'); // 'message', 'sent' 클래스 추가

    // 메시지 길이에 따라 클래스를 추가하여 스타일을 지정
    if (messageText.length < 20) {
      messageElement.classList.add('short');
    } else if (messageText.length < 50) {
      messageElement.classList.add('medium');
    } else {
      messageElement.classList.add('long');
    }

    // 메시지 엘리먼트의 텍스트 내용을 입력된 메시지 텍스트로 설정
    messageElement.textContent = messageText;
    
    // 채팅 메시지 엘리먼트 채팅 메시지 컨테이너에 추가
    chatMessages.appendChild(messageElement);
    
    // 입력 필드를 비웁니다.
    messageInput.value = '';
    
    // 채팅 메시지 컨테이너를 맨 아래로 스크롤하여 최신 메시지를 보여줌
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});

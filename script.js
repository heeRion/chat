const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const chatMessages = document.getElementById('chat-messages');

sendButton.addEventListener('click', () => {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'sent');

      if (messageText.length < 20) {
          messageElement.classList.add('short');
      } else if (messageText.length < 50) {
          messageElement.classList.add('medium');
      } else {
          messageElement.classList.add('long');
      }

      messageElement.textContent = messageText;
      chatMessages.appendChild(messageElement);
      messageInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
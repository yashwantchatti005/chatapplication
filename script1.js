function sendMessage() {
    const input = document.getElementById('message');
    const chatBox = document.getElementById('chat-box');
    const message = input.value.trim();
  
    if (message !== '') {
      const msgElement = document.createElement('div');
      msgElement.className = 'chat-message user';
      msgElement.textContent = message;
      chatBox.appendChild(msgElement);
      chatBox.scrollTop = chatBox.scrollHeight;
  
      input.value = '';
    }
  }
  
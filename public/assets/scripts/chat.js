document.addEventListener("DOMContentLoaded", () => {
  let chatCount = 0;
  const chatList = document.getElementById("chat-list");
  const addChatBtn = document.getElementById("add-chat");

  // Función para obtener hora actual en formato HH:MM
  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    return `${hours}:${minutes}`;
  }

  // Evento: Añadir nuevo chat
  addChatBtn.addEventListener("click", () => {
    chatCount += 1;

    const newChat = document.createElement("div");
    newChat.classList.add("chat-item");
    newChat.innerHTML = `
      <span>Chat #${chatCount}</span>
      <span>${getCurrentTime()}</span>
    `;

    chatList.appendChild(newChat);
    chatList.scrollTop = chatList.scrollHeight; // Scroll automático hacia el final
  });
});

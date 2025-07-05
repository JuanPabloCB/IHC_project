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
const messageContainer = document.querySelector('.MindEcho-Talks-Box');
let answerBot = "";
/* scroll chat behaviour */
let scrollBtm = () => {
  messageContainer.scrollTop = messageContainer.scrollHeight
}
const messageInput = document.querySelector('.text');
const sendButton = document.querySelector('.send-btn');
sendButton.addEventListener('click', () => {

  if (messageInput.value === "") {
    alert("Please write a message before sending.");
    return;
  }

  createChat(messageInput.value)

  scrollBtm()

})
let createChat = (mssg) => {

  const humanGloveCnt = document.createElement('div');
  const humanGlove = document.createElement('div');
  const textGlove = document.createTextNode(mssg);

  humanGlove.classList.add('HumanMenssages');
  imgHuman.src = "assets/images/usuario.png";
  imgHuman.alt = "VirtualHumanPicture";
  imgHuman.classList.add('imgHuman');
  imgHumanContainer.classList.add('HumanAsistentPicture');
  humanGloveCnt.classList.add('Human-Talks-Container');

  imgHumanContainer.appendChild(imgHuman);
  humanGloveCnt.appendChild(imgHumanContainer)
  humanGlove.appendChild(textGlove);
  humanGloveCnt.appendChild(humanGlove);
  messageContainer.appendChild(humanGloveCnt);

  
  chatBox(mssg);//call the function to get the answer

  const messageAIBox = document.createElement('div');
  const messageAI = document.createElement('div');
  const textAI = document.createTextNode(answerBot);
  const imgAIContainer = document.createElement('div');
  const imgAI = document.createElement('img');
  

  imgAI.src = "assets/images/logo.png";
  imgAI.alt = "VirtualAsistentPicture";
  imgAI.classList.add('imgVA');
  imgAIContainer.classList.add('VirtualAsistentPicture');
  messageAI.classList.add('VAMenssages');
  messageAIBox.classList.add('MindEcho-Talks-Container');


  imgAIContainer.appendChild(imgAI);
  messageAI.appendChild(textAI);
  messageAIBox.appendChild(imgAIContainer);
  messageAIBox.appendChild(messageAI);
  messageContainer.appendChild(messageAIBox);
  messageContainer.scrollTop = messageContainer.scrollHeight; //scroll to the bottom of the container
  messageContainer.scrollIntoView({ behavior: 'smooth' });
  messageContainer.style.overflowY = "scroll"; //enable scroll bar
  messageContainer.style.overflowX = "hidden"; //disable scroll bar
  
  messageInput.value = ""; //clear the input box

}
const chatBox = (sentence) => {
  let finalAnsw = "";

    sentence = sentence.trim();

    if (sentence.includes("hello") || sentence.includes("Hello") || sentence.includes("hi")) {
     finalAnsw = "Hello! How can I assist you today?";
    }
    else {
      finalAnsw = "I'm sorry, I didn't understand that. I can answer you just about company things. like services, location, contact, etc.";
    }

  answerBot = finalAnsw;
}

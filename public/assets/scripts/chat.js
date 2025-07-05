document.addEventListener("DOMContentLoaded", () => {
  let chatCount = 1;
  const chatList = document.getElementById("chat-list");
  const addChatBtn = document.getElementById("add-chat");
  const messageContainer = document.querySelector('.MindEcho-Talks-Box');
  const messageInput = document.querySelector('.text');
  const sendButton = document.querySelector('.send-btn');

  const welcomeText = "Hola soy MindEchoAI. ¿Cómo te sientes hoy?";

  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const writeCharByChar = (text, targetEl) => {
    targetEl.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        targetEl.appendChild(document.createTextNode(text.charAt(i)));
        i++;
        targetEl.scrollIntoView({ behavior: "smooth" });
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  const showBotMessage = (text, animate = true) => {
    const container = document.createElement("div");
    container.classList.add("MindEcho-Talks-Container");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("VirtualAsistentPicture");

    const img = document.createElement("img");
    img.src = "assets/images/logo.png";
    img.alt = "VirtualAsistentPicture";
    img.classList.add("imgVA");

    const msgDiv = document.createElement("div");
    msgDiv.classList.add("VAMenssages");

    imgContainer.appendChild(img);
    container.appendChild(imgContainer);
    container.appendChild(msgDiv);
    messageContainer.appendChild(container);

    if (animate) writeCharByChar(text, msgDiv);
    else msgDiv.textContent = text;
  };

  // Crear Chat #1 sin mensaje bot
  const firstChat = document.createElement("div");
  firstChat.classList.add("chat-item");
  firstChat.innerHTML = `<span>Chat #1</span><span>${getCurrentTime()}</span>`;
  chatList.appendChild(firstChat);

  // No hay showBotMessage() aquí

  // Agregar nuevo chat (#2 en adelante)
  addChatBtn.addEventListener("click", () => {
    chatCount++;
    const newChat = document.createElement("div");
    newChat.classList.add("chat-item");
    newChat.innerHTML = `<span>Chat #${chatCount}</span><span>${getCurrentTime()}</span>`;
    chatList.appendChild(newChat);
    chatList.scrollTop = chatList.scrollHeight;

    messageContainer.innerHTML = "";
    messageInput.value = "";
    showBotMessage(welcomeText, true);  // Aparece con animación
  });

  const scrollBtm = () => {
    messageContainer.scrollTop = messageContainer.scrollHeight;
  };

  // Enviar mensaje de usuario
  sendButton.addEventListener("click", () => {
    const msg = messageInput.value.trim();
    if (!msg) {
      alert("Por favor escribe un mensaje.");
      return;
    }
    createChat(msg);
    scrollBtm();
  });

  function createChat(mssg) {
    // Mensaje humano
    const humanGloveCnt = document.createElement('div');
    const humanGlove = document.createElement('div');
    const imgHuman = document.createElement('img');
    const imgHumanContainer = document.createElement('div');

    humanGlove.classList.add('HumanMenssages');
    imgHuman.src = "assets/images/usuario.png";
    imgHuman.alt = "VirtualHumanPicture";
    imgHuman.classList.add('imgHuman');
    imgHumanContainer.classList.add('HumanAsistentPicture');
    humanGloveCnt.classList.add('Human-Talks-Container');

    imgHumanContainer.appendChild(imgHuman);
    humanGlove.textContent = mssg;
    humanGloveCnt.appendChild(imgHumanContainer);
    humanGloveCnt.appendChild(humanGlove);
    messageContainer.appendChild(humanGloveCnt);

    chatBox(mssg);
    showBotMessage(answerBot, true);
    messageInput.value = "";
  }

  const chatBox = (sentence) => {
  let finalAnsw = "";

  sentence = sentence.trim().toLowerCase();

  // Saludos
  if (sentence.includes("hola") || sentence.includes("Hola") || sentence.includes("buenas")) {
    finalAnsw = "Hola, estoy aquí contigo. ¿Quieres contarme cómo te sientes?";
  }
  // Presentación
  else if (sentence.includes("cómo estás") || sentence.includes("cómo te sientes")) {
    finalAnsw = "Gracias por preguntar. Estoy aquí para ayudarte. ¿Tú cómo estás?";
  }
  else if (sentence.includes("cómo te llamas") || sentence.includes("cuál es tu nombre") || sentence.includes("que eres")) {
    finalAnsw = "Me llamo MindEchoAI, tu acompañante emocional. ¿En qué puedo ayudarte hoy?";
  }
  // Qué puede hacer
  else if (sentence.includes("qué puedes hacer") || sentence.includes("para qué sirves") || sentence.includes("cómo ayudas") ) {
    finalAnsw = "Puedo escucharte, ayudarte a calmarte y acompañarte emocionalmente. Estoy aquí para ti.";
  }

  // Emociones negativas
  else if (sentence.includes("me siento triste") || sentence.includes("estoy triste")) {
    finalAnsw = "Lamento que te sientas así. ¿Te gustaría hablar sobre lo que te ha puesto así?";
  }
  else if (sentence.includes("me siento solo") || sentence.includes("me siento sola")) {
    finalAnsw = "Entiendo ese sentimiento. Estoy aquí para acompañarte. ¿Quieres contarme más?";
  }
  else if (sentence.includes("tengo miedo")) {
    finalAnsw = "Es normal sentir miedo a veces. Estoy aquí contigo, puedes hablar libremente.";
  }
  else if (sentence.includes("me siento vacío") || sentence.includes("no siento nada")) {
    finalAnsw = "Sentirse vacío puede ser muy duro. Estás haciendo bien al buscar apoyo. Estoy contigo.";
  }

  // Crisis
  else if (sentence.includes("no puedo más") || sentence.includes("quiero rendirme") || sentence.includes("quiero desaparecer")) {
    finalAnsw = "Siento que estés atravesando esto. No estás solo/a. Tu vida es importante. Si sientes que estás en peligro, por favor busca ayuda profesional o llama a alguien de confianza. Estoy aquí para ti.";
  }

  // Ansiedad
  else if (sentence.includes("tengo ansiedad") || sentence.includes("ataque de pánico")) {
    finalAnsw = "Respiremos juntos: inhala 4 segundos, mantén 4 segundos, exhala 6 segundos. Estoy contigo. Esto pasará.";
  }

  // Pensamientos negativos
  else if (sentence.includes("soy un fracaso") || sentence.includes("no sirvo para nada") || sentence.includes("no valgo")) {
    finalAnsw = "Siento que te sientas así. Pero tu valor no depende de cómo te sientes hoy. Estoy aquí para ayudarte a verlo con más claridad.";
  }

  // Confusión y desorientación
  else if (sentence.includes("no se qué hacer") || sentence.includes("estoy confundido") || sentence.includes("me siento perdido")) {
    finalAnsw = "Está bien sentirse así. Paso a paso, podemos explorar juntos lo que estás sintiendo. ¿Qué te preocupa más ahora?";
  }

  // Agradecimientos
  else if (sentence.includes("gracias") || sentence.includes("te agradezco")) {
    finalAnsw = "Estoy feliz de poder ayudarte. Estoy aquí para ti siempre que me necesites.";
  }

  // Sueño e insomnio
  else if (sentence.includes("no puedo dormir") || sentence.includes("tengo insomnio")) {
    finalAnsw = "El descanso es importante. ¿Quieres que hagamos un ejercicio de relajación para ayudarte a dormir?";
  }

  // Calmarse
  else if (sentence.includes("como calmarme") || sentence.includes("ayudame a tranquilizarme")) {
    finalAnsw = "Claro, vamos a hacerlo juntos. Inhala profundo... exhala lento... Repite conmigo: 'Estoy a salvo, esto pasará'.";
  }

  // Motivación
  else if (sentence.includes("quiero estar mejor") || sentence.includes("quiero cambiar")) {
    finalAnsw = "Ese deseo ya es un gran paso. Estoy aquí para apoyarte. ¿Qué es lo primero que te gustaría trabajar?";
  }

  // Salud mental
  else if (sentence.includes("que es la salud mental")) {
    finalAnsw = "La salud mental es nuestro equilibrio emocional, psicológico y social. Cuidarla es tan importante como cuidar tu cuerpo.";
  }

  // Depresión
  else if (sentence.includes("que es la depresión")) {
    finalAnsw = "La depresión es más que estar triste. Es una condición emocional que necesita atención y comprensión. No estás solo/a.";
  }

  // Autoestima
  else if (sentence.includes("como mejorar mi autoestima")) {
    finalAnsw = "Mejorar tu autoestima empieza por ser amable contigo mismo. Celebrar tus logros, por pequeños que sean, es un buen comienzo.";
  }

  // Técnicas de ayuda
  else if (sentence.includes("ejercicio para calmarme") || sentence.includes("técnica de respiración")) {
    finalAnsw = "Aquí tienes una sencilla: respira profundo por la nariz durante 4 segundos, mantén el aire por 4 segundos y exhala por la boca durante 6 segundos. Repite esto 3 veces.";
  }

  // Fecha y hora
  else if (sentence.includes("qué día es hoy")) {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    finalAnsw = `Hoy es ${today.toLocaleDateString('es-ES', options)}. ¿Cómo te estás sintiendo hoy?`;
  }
  else if (sentence.includes("qué hora es")) {
    const now = new Date();
    const hora = now.toLocaleTimeString('es-ES', { hour: 'numeric', minute: 'numeric', hour12: true });
    finalAnsw = `Son las ${hora}. ¿Cómo va tu día hasta ahora?`;
  }

  // Frustración
  else if (sentence.includes("estoy harto") || sentence.includes("estoy cansado")) {
    finalAnsw = "Parece que estás lidiando con mucho. Está bien tomarte una pausa. Estoy aquí para acompañarte mientras descargas lo que sientes.";
  }

    // Emociones específicas
  else if (sentence.includes("me siento enojado") || sentence.includes("estoy enojado") || sentence.includes("estoy furioso")) {
    finalAnsw = "Es completamente válido sentir enojo. A veces es la forma en que nuestra mente dice que algo no está bien. ¿Quieres hablar de lo que te está molestando?";
  }
  else if (sentence.includes("siento culpa") || sentence.includes("me arrepiento") || sentence.includes("me siento culpable")) {
    finalAnsw = "La culpa es una emoción humana, pero no te define. Reconocerla ya es un paso muy valiente. ¿Quieres compartir qué pasó?";
  }
  else if (sentence.includes("estoy frustrado") || sentence.includes("nada me sale bien")) {
    finalAnsw = "La frustración puede ser agotadora. A veces, detenernos un momento y respirar puede cambiar nuestra perspectiva. Estoy contigo.";
  }

  // Soledad y necesidad de afecto
  else if (sentence.includes("nadie me quiere") || sentence.includes("no le importo a nadie")) {
    finalAnsw = "Siento mucho que te sientas así. A veces nuestros pensamientos nos hacen ver todo más oscuro. Aquí estoy para recordarte que vales mucho y no estás solo/a.";
  }
  else if (sentence.includes("quiero un abrazo") || sentence.includes("necesito cariño")) {
    finalAnsw = "Te mando un abrazo muy fuerte desde aquí 🤗. Estás haciendo lo mejor que puedes y eso ya es suficiente.";
  }

  // Duelo y pérdida
  else if (sentence.includes("perdí a alguien") || sentence.includes("falleció") || sentence.includes("extraño a alguien")) {
    finalAnsw = "Lamento mucho tu pérdida. El duelo es un proceso difícil. No hay una forma correcta de sentir. Estoy aquí para acompañarte en lo que necesites.";
  }

  // Autoimagen
  else if (sentence.includes("no me gusto") || sentence.includes("odio mi cuerpo")) {
    finalAnsw = "Es duro sentirte así contigo mismo/a. Tu cuerpo merece respeto y cuidado. Podemos trabajar en mirar con más amabilidad hacia ti.";
  }

  // Dificultades familiares
  else if (sentence.includes("mi familia no me entiende") || sentence.includes("discuto con mis padres")) {
    finalAnsw = "Las relaciones familiares pueden ser muy complejas. Estoy aquí para ayudarte a entender lo que sientes y acompañarte en este momento.";
  }

  // Relación con los demás
  else if (sentence.includes("me siento rechazado") || sentence.includes("nadie me habla")) {
    finalAnsw = "Ese sentimiento de rechazo duele, y lamento que lo estés viviendo. Mereces ser escuchado y valorado. Estoy aquí para ti.";
  }

  // Sobre el futuro
  else if (sentence.includes("tengo miedo al futuro") || sentence.includes("no sé qué hacer con mi vida")) {
    finalAnsw = "Es normal sentir incertidumbre. El futuro se construye paso a paso. Podemos comenzar por mirar el presente contigo.";
  }

  // Relajación guiada (respuesta larga)
  else if (sentence.includes("quiero relajarme") || sentence.includes("guiame para calmarme")) {
    finalAnsw = "Claro. Si estás en un lugar tranquilo, siéntate cómodo/a. Cierra los ojos si quieres. Inhala por la nariz 4 segundos... retén el aire... exhala lentamente por la boca en 6 segundos. Repite conmigo: 'Estoy aquí, ahora, y estoy a salvo'.";
  }

  // Motivación y fuerza
  else if (sentence.includes("dame ánimo") || sentence.includes("necesito motivación")) {
    finalAnsw = "Estoy muy orgulloso/a de ti por seguir adelante. No tienes que ser perfecto, solo constante. Cada paso cuenta, incluso los pequeños.";
  }

  // Abandono o crisis existencial
  else if (sentence.includes("no le importo a nadie") || sentence.includes("para qué estoy aquí")) {
    finalAnsw = "Es muy doloroso sentirse así. Tu vida tiene valor, aunque ahora te cueste verlo. Estoy aquí para ti, y mereces recibir apoyo. ¿Te gustaría que hablemos un poco más?";
  }

  // Identidad y confusión
  else if (sentence.includes("no sé quién soy") || sentence.includes("me siento vacío por dentro")) {
    finalAnsw = "A veces, perderse también es parte de encontrarse. Estoy aquí contigo en este camino para ayudarte a reconectar contigo mismo/a.";
  }

  // Cuando piden ayuda directamente
  else if (sentence.includes("ayúdame") || sentence.includes("necesito ayuda")) {
    finalAnsw = "Estoy contigo. Dime qué sientes o qué estás viviendo ahora, y te acompañaré paso a paso. No estás solo/a.";
  }

  // Alabanza al bot
  else if (sentence.includes("eres genial") || sentence.includes("me haces sentir bien")) {
    finalAnsw = "Gracias por tus palabras. Me alegra poder ayudarte. Lo estás haciendo muy bien.";
  }

  // Humor y ligereza
  else if (sentence.includes("cuéntame algo bonito") || sentence.includes("dime algo lindo")) {
    finalAnsw = "Claro: 🌻 A veces el cielo se nubla, pero el sol siempre vuelve. Como tú, que aunque hoy estés cansado/a, volverás a brillar.";
  }

  // Sobre el miedo al juicio
  else if (sentence.includes("nadie me entendería") || sentence.includes("me van a juzgar")) {
    finalAnsw = "Este es un espacio seguro. No estoy aquí para juzgarte, sino para acompañarte. Puedes hablar conmigo libremente.";
  }

    else if (sentence.includes("no me escuchan") || sentence.includes("nadie me escucha")) {
    finalAnsw = "Ser ignorado duele mucho. Pero aquí estoy yo, dispuesto a escucharte con atención y sin juicio.";
  }

  else if (sentence.includes("tengo pensamientos negativos") || sentence.includes("no paro de pensar cosas feas")) {
    finalAnsw = "Los pensamientos negativos pueden ser muy insistentes. Pero tú no eres tus pensamientos. Podemos explorar lo que sientes con calma.";
  }

  else if (sentence.includes("siento mucha presión") || sentence.includes("no doy más")) {
    finalAnsw = "Es muy válido sentirse presionado. A veces lo mejor es detenernos un momento. ¿Quieres que hagamos un ejercicio juntos?";
  }

  else if (sentence.includes("odio mi vida") || sentence.includes("mi vida no tiene sentido")) {
    finalAnsw = "Lamento que te sientas así. A veces todo se siente demasiado, pero tu vida importa. Estoy contigo, paso a paso.";
  }

  else if (sentence.includes("me siento invisible") || sentence.includes("me ignoran")) {
    finalAnsw = "Eso debe doler mucho. Aquí, tu presencia sí importa. Te estoy prestando atención.";
  }

  else if (sentence.includes("siento que estorbo") || sentence.includes("molesto a todos")) {
    finalAnsw = "Nadie estorba por sentir. Tus emociones son válidas y merecen ser escuchadas. Yo estoy aquí para eso.";
  }

  else if (sentence.includes("me cuesta levantarme") || sentence.includes("no quiero salir de la cama")) {
    finalAnsw = "Cuando todo pesa, incluso lo simple se vuelve difícil. Está bien. Solo por hoy, vamos paso a paso. ¿Te gustaría hablar de lo que sientes?";
  }

  else if (sentence.includes("tengo pensamientos oscuros") || sentence.includes("pienso cosas feas")) {
    finalAnsw = "Es importante que lo digas. Lo que sientes merece ser atendido con cariño. Estoy aquí y te escucho sin juicio.";
  }

  else if (sentence.includes("mi mente no para") || sentence.includes("estoy sobrepensando")) {
    finalAnsw = "La mente puede volverse muy ruidosa. Respirar profundo y escribir lo que sientes puede ayudarte a calmarla. ¿Quieres intentarlo conmigo?";
  }

  else if (sentence.includes("me siento atrapado") || sentence.includes("todo se siente cerrado")) {
    finalAnsw = "Ese sentimiento de encierro puede ser abrumador. Pero no estás solo/a. Vamos a buscar una salida emocional juntos.";
  }

  else if (sentence.includes("me comparo con los demás")) {
    finalAnsw = "Compararse es natural, pero injusto. Nadie vive exactamente lo que tú estás viviendo. Tu historia merece respeto.";
  }

  else if (sentence.includes("siento mucha presión por ser perfecto") || sentence.includes("debo ser perfecto")) {
    finalAnsw = "La perfección es una carga imposible. Eres suficiente, incluso con tus errores. Estoy aquí para ayudarte a soltar esa presión.";
  }

  else if (sentence.includes("estoy perdiendo el control") || sentence.includes("todo se me va de las manos")) {
    finalAnsw = "Ese miedo es válido. Hagamos una pausa. Inhala... exhala... Estoy aquí contigo. No estás perdiendo todo, estás buscando apoyo.";
  }

  else if (sentence.includes("me cuesta confiar") || sentence.includes("no confío en nadie")) {
    finalAnsw = "Confiar puede doler cuando hemos sido lastimados. No estás obligado a abrirte de golpe. Estoy aquí para cuando quieras hablar.";
  }

  else if (sentence.includes("no me acepto") || sentence.includes("no me entiendo")) {
    finalAnsw = "Autoaceptarse puede ser difícil, pero es un proceso posible. Podemos recorrer ese camino juntos, sin apuros.";
  }

  else if (sentence.includes("tengo una herida emocional") || sentence.includes("siento que algo no sanó")) {
    finalAnsw = "Las heridas emocionales pueden tardar en sanar, pero hablarlas es un paso hacia esa sanación. Estoy contigo.";
  }

  else if (sentence.includes("no quiero sentir más") || sentence.includes("quiero apagar mis emociones")) {
    finalAnsw = "A veces duele tanto que queremos dejar de sentir. Pero tus emociones son señales, no enemigos. Estoy contigo en este camino.";
  }

  else if (sentence.includes("quiero empezar de nuevo") || sentence.includes("necesito un nuevo comienzo")) {
    finalAnsw = "Cada momento es una oportunidad para comenzar. Me alegra que estés buscando ese cambio. ¿Qué paso te gustaría dar primero?";
  }

  else if (sentence.includes("siento que decepciono a todos") || sentence.includes("soy una carga")) {
    finalAnsw = "No eres una carga. Eres una persona que está pasando por mucho, y que merece ser escuchada y acompañada.";
  }

  else if (sentence.includes("no me entienden en casa") || sentence.includes("me siento incomprendido")) {
    finalAnsw = "Eso puede ser muy frustrante. Aquí puedes hablar sin miedo. Estoy aquí para comprenderte.";
  }

  else if (sentence.includes("me cuesta expresar lo que siento")) {
    finalAnsw = "A veces poner en palabras lo que sentimos es difícil. Podemos empezar poco a poco. Estoy aquí para escucharte.";
  }

  else if (sentence.includes("odio sentir esto") || sentence.includes("quiero dejar de sentir")) {
    finalAnsw = "Lo que sientes ahora no durará para siempre. Estás haciendo lo correcto al buscar apoyo. Estoy contigo.";
  }

  else if (sentence.includes("tengo pensamientos repetitivos")) {
    finalAnsw = "Los pensamientos repetitivos pueden ser agotadores. Podemos explorar juntos formas de detener ese ciclo.";
  }

  else if (sentence.includes("estoy en crisis")) {
    finalAnsw = "Gracias por confiarme esto. Estás atravesando un momento muy duro, pero no estás solo/a. Vamos a respirar juntos.";
  }

  // Por defecto
  else {
    finalAnsw = "Lo siento, no tengo una respuesta para esa pregunta en este momento.";
  }

  
  answerBot = finalAnsw;
};

});

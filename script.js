let player1 = "";
let player2 = "";
let currentPlayer = "";
let timer;
let timeLeft = 60;

const questions = {
  truth: [
   "¿Cuál es tu tipo de abrazo favorito?",
    "¿Cuál es tu lugar favorito para un beso?",
    "¿Qué parte de tu cuerpo te gustaría que te acariciaran más?",
    "¿Te gusta el juego previo o prefieres ir directo al grano?¿Cual?",
    "Si te pidieran que bailaras de forma seductora, ¿cómo lo harías?",
    "¿Te gusta el juego previo o prefieres ir directo al grano?¿Cual?",
    "¿Has tenido sexo en un lugar público?",
    "¿Te excitaría más hacer el amor con alguien mayor o menor que tú?",
    "¿Alguna vez has usado un vibrador o algo similar?",
    "¿Cuál es tu fantasía sexual más recurrente?",
    "¿Cuál es la parte de mi cuerpo que más te excita?",
    "¿Cuál es tu posición sexual favorita y por qué?",
    "¿Cuál es el lugar más extraño donde te gustaría tener sexo?",
    "¿Qué sonido te excita más?",
    "¿Cuál es tu fantasía sexual más atrevida?",
    "¿Qué te gustaría que me susurrase al oído durante el sexo?",
    "¿Cuál es tu parte favorita de mi cuerpo y por qué?",
    "¿Qué te excita más, un beso lento o uno apasionado?",
    "¿Cuál es tu fantasía sexual más húmeda?",
    "¿Cuál es tu zona erógena más sensible?",
    "¿Cuál es tu fantasía sexual más sucia?",
    "Si pudieras cambiar algo de mi cuerpo, ¿qué sería y por qué?",
    "¿Qué personaje famoso te gustaría que yo interpretara en la cama?",
    "Si pudiéramos tener sexo en cualquier lugar público sin que nos vieran, ¿dónde sería?",
    "¿Qué objeto cotidiano podrías convertir en un juguete sexual?",
    "¿Cuál es la posición sexual más difícil que te gustaría intentar?",
    "¿Cuál es tu mayor secreto para seducir a alguien?",
    "¿Te gustaría tener sexo al aire libre? ¿En dónde?",
    "¿Alguna vez has fantaseado con un trío? ¿Con quién?",
    "¿Te gustaría que te dominara por completo o prefieres tomar las riendas?",
    "¿Cuál es la posición sexual más incómoda que te gustaría probar?",
    "¿¿Qué palabra o frase te excita al instante?",
    "¿Qué personaje de película o novela te gustaría interpretar en la cama?",
    "¿Te gustaría que te atara y te hiciera sentir completamente indefenso/a?",
    "¿Qué olor te vuelve loco/a?",
    "¿Te gusta el juego previo o prefieres ir directo al grano?¿Cual?"
  ],
  dare: [
    "Haz 20 sentadillas.",
    "Envía un mensaje misterioso a un ex.",
    "Abre una pagina XXX y muestra tus 3 categorias de videos favoritas",
    "Besa a la otra persona apasionadamente por un minuto sin parar",
    "Quítate una prenda de ropa.",
    "Quítate dos prendas de ropa.",
    "Muéstra una parte no visible del cuerpo que más te gusta.",
    "Déja tocarte donde la otra persona quiera.",
    "Beso con lengua por 20 segundos.",
    "Susurrale algo sucio al oído a la otra persona.",
    "Baila sensualmente",
    "Realiza un masaje sensual, enfocándote en las zonas más sensibles.",
    "Quítate una prenda de ropa.",
    "Quítate una prenda de ropa.",
    "Explora el cuerpo de tu pareja con las manos por 45 segundos.",
    "Busca una imagen sensual en una revista o en internet y trata de recrear de recrear la pose con tu pareja.",
    "cubrete los ojos por 60 segundos y deja que tu pareja explore tu cuerpo",
    "Baila lentamente, explorando cada centímetro del cuerpo de tu pareja y termina mostrando una parte intima que desees",
    "Has un striptease en calzones o Quítate el sujetador lentamente, sin dejar de mirar a los ojos de tu pareja. Una vez que estés desnud@, bésate los pezones con pasión por 30 segundos.",
    "Has que te aten o tendras que tocar los senos de tu pareja por 10 segundos, elige",
    "Has lo que te digan por 20 segundos.",
    "Un beso profundo y exploratorio, recorriendo cada centímetro de los labios de tu pareja.",
    "Quítate toda la ropa y deja que admiren tu belleza por 10 segundos.",
    "Cierra los ojos y abre la boca. Deja que coloquen tres objetos en la lengua. Tendras que adivinar que cosas son o masturba a la persona de tu lado hasta que se venga",
    "Coloca algo dulce 2 en diferentes partes intimas de tu cuerpo y deja que la otra persona los saque con la lengua.",
    "Susurra al oído de tu pareja las palabras más sucias que puedas imaginar.",
    "Masturbate durante 30 segundos quitandote todo lo de abajo o masturba a la persona de tu lado hasta que se venga, tu elige",
    "Toca la zona erógena más sensible de tu pareja.",
    "Te encienden los videos porno de tipo step mom and son, incest, family, brothers, orgias? abre una pagina porno y muestrame 3 videos de las 2 categorias que mas te gusten.",
    "Haz realidad una de mis fantasías más secretas.",
    "Frotemos nuestras partes intimas sin penetracion durante 30 segundos",
    "Déjate llevar por completo durante 30 y confía en la otra persona.",
    "Muestrame 3 posiciones sexuales que siempre hayas querido intentar.",
    "Cumple la fantasia sexual mas loca que tenga tu pareja en mente",

  ]
};

function startGame() {
  player1 = document.getElementById("player1").value;
  player2 = document.getElementById("player2").value;
  
  if (!player1 || !player2) {
    alert("Por favor, ingresa los nombres de los dos jugadores.");
    return;
  }

  currentPlayer = player1;
  document.getElementById("nameForm").style.display = "none";
  document.getElementById("gameScreen").style.display = "block";
  document.getElementById("currentPlayer").innerText = `${currentPlayer}, es tu turno.`;
  
  // Mostrar icono del jugador actual
  document.getElementById("playerName").innerText = currentPlayer;
  document.getElementById("playerIcon").classList.add("icon-man");
  resetTimer();
}

function playTurn(action) {
  const question = action === "truth" ? getRandomQuestion("truth") : getRandomQuestion("dare");
  
  document.getElementById("questionText").innerText = question;
  
  startTimer();
}

function startTimer() {
  timeLeft = 60;
  document.getElementById("timeLeft").innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timeLeft").innerText = timeLeft;
    
    if (timeLeft === 0) {
      clearInterval(timer);
      changeTurn();
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("timeLeft").innerText = "60";
}

function changeTurn() {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  document.getElementById("currentPlayer").innerText = `${currentPlayer}, es tu turno.`;
  
  // Cambiar icono de jugador
  if (currentPlayer === player1) {
    document.getElementById("playerIcon").classList.remove("icon-woman");
    document.getElementById("playerIcon").classList.add("icon-man");
  } else {
    document.getElementById("playerIcon").classList.remove("icon-man");
    document.getElementById("playerIcon").classList.add("icon-woman");
  }
  
  document.getElementById("playerName").innerText = currentPlayer;
  resetTimer();
}

function getRandomQuestion(type) {
  const questionsList = questions[type];
  const randomIndex = Math.floor(Math.random() * questionsList.length);
  return questionsList[randomIndex];
}

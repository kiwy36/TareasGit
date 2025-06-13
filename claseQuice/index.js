const colores = ["verde", "rojo", "amarillo", "azul"];
let secuenciaJuego = [];
let secuenciaUsuario = [];
let nivel = 0;
let juegoIniciado = false;

document.addEventListener("keydown", iniciarJuego);

function iniciarJuego() {
  if (!juegoIniciado) {
    document.getElementById("level-title").textContent = `Nivel ${nivel + 1}`;
    siguienteColor();
    juegoIniciado = true;
  }
}

function siguienteColor() {
  secuenciaUsuario = [];
  nivel++;
  document.getElementById("level-title").textContent = `Nivel ${nivel}`;
  const colorAleatorio = colores[Math.floor(Math.random() * 4)];
  secuenciaJuego.push(colorAleatorio);
  animarBoton(colorAleatorio);
  reproducirSonido(colorAleatorio);
}

document.querySelectorAll(".btn").forEach(boton => {
  boton.addEventListener("click", (e) => {
    const colorElegido = e.target.id;
    secuenciaUsuario.push(colorElegido);
    animarBoton(colorElegido);
    reproducirSonido(colorElegido);
    verificarRespuesta(secuenciaUsuario.length - 1);
  });
});

function verificarRespuesta(indiceActual) {
  if (secuenciaUsuario[indiceActual] === secuenciaJuego[indiceActual]) {
    if (secuenciaUsuario.length === secuenciaJuego.length) {
      setTimeout(siguienteColor, 1000);
    }
  } else {
    reproducirSonido("error");
    document.body.classList.add("game-over");
    document.getElementById("level-title").textContent = "¡Perdiste! Presiona una tecla para reiniciar";
    setTimeout(() => document.body.classList.remove("game-over"), 300);
    reiniciarJuego();
  }
}

function animarBoton(color) {
  const boton = document.getElementById(color);
  boton.classList.add("pressed");
  setTimeout(() => boton.classList.remove("pressed"), 200);
}

function reproducirSonido(nombre) {
  let sonido;
  switch (nombre) {
    case "verde": sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"); break;
    case "rojo": sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"); break;
    case "amarillo": sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"); break;
    case "azul": sonido = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"); break;
    default: sonido = new Audio("https://www.soundjay.com/button/beep-07.wav");
  }
  sonido.play();
}

function reiniciarJuego() {
  nivel = 0;
  secuenciaJuego = [];
  juegoIniciado = false;
}

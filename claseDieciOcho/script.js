const imagenes = [
  './img/001.jpg',
  './img/000.jpg',
  './img/002.jpg'
];

let cards = [];
let firstCard = null;
let lockBoard = false;
let matchedPairs = 0;

document.getElementById('start').addEventListener('click', iniciarJuego);

function iniciarJuego() {
  const tablero = document.getElementById('tablero');
  tablero.innerHTML = '';
  firstCard = null;
  lockBoard = false;
  matchedPairs = 0;

  // ✅ Mezclar duplicados
  cards = [...imagenes, ...imagenes].sort(() => 0.5 - Math.random());

  cards.forEach((url, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.url = url; // guardamos la URL para compararlas
    card.dataset.index = index;

    card.addEventListener('click', () => manejarClick(card));
    tablero.appendChild(card);
  });
}

function manejarClick(card) {
  if (lockBoard || card.classList.contains('revealed')) return;

  // ✅ Crear imagen y mostrarla
  const img = document.createElement('img');
  img.src = card.dataset.url;
  img.alt = 'carta';
  img.classList.add('imagen-carta');
  card.innerHTML = '';
  card.appendChild(img);
  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
  } else {
    const segunda = card;
    if (firstCard.dataset.url === segunda.dataset.url) {
      firstCard = null;
      matchedPairs++;
      if (matchedPairs === imagenes.length) {
        setTimeout(() => alert("¡Ganaste! 🎉"), 300);
      }
    } else {
      lockBoard = true;
      setTimeout(() => {
        firstCard.innerHTML = '';
        segunda.innerHTML = '';
        firstCard.classList.remove('revealed');
        segunda.classList.remove('revealed');
        firstCard = null;
        lockBoard = false;
      }, 1000);
    }
  }
}

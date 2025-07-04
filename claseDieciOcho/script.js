const emojis = ['🐶', '🐱', '🦊'];
let cards = [];
let firstCard = null;
let lockBoard = false;
let matchedPairs = 0;

document.getElementById('start').addEventListener('click', iniciarJuego);

function iniciarJuego() {
  const tablero = document.getElementById('tablero');
  tablero.innerHTML = ''; // Limpiar tablero
  firstCard = null;
  lockBoard = false;
  matchedPairs = 0;

  // Crear y mezclar cartas
  cards = [...emojis, ...emojis].sort(() => 0.5 - Math.random());

  // Crear elementos de cartas
  cards.forEach((emoji, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.emoji = emoji;
    card.dataset.index = index;

    card.addEventListener('click', () => manejarClick(card));
    tablero.appendChild(card);
  });
}

function manejarClick(card) {
  if (lockBoard || card.classList.contains('revealed')) return;

  card.textContent = card.dataset.emoji;
  card.classList.add('revealed');

  if (!firstCard) {
    firstCard = card;
  } else {
    const segunda = card;
    if (firstCard.dataset.emoji === segunda.dataset.emoji) {
      firstCard = null;
      matchedPairs++;
      if (matchedPairs === emojis.length) {
        setTimeout(() => alert("¡Ganaste! 🎉"), 300);
      }
    } else {
      lockBoard = true;
      setTimeout(() => {
        firstCard.classList.remove('revealed');
        segunda.classList.remove('revealed');
        firstCard.textContent = '';
        segunda.textContent = '';
        firstCard = null;
        lockBoard = false;
      }, 1000);
    }
  }
}

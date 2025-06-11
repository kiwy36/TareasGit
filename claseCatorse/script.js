// Clase Plantilla (Molde)
class Personaje {
  constructor(nombre, nivel) {
    // Propiedades
    this.nombre = nombre;
    this.nivel = nivel;
  }

  // Método
  atacar() {
    return `${this.nombre} (Nivel ${this.nivel}) lanza un ataque!`;
  }
}

// Array para almacenar personajes
const personajes = [];

// DOM: Formulario y contenedor
const form = document.getElementById('form-personaje');
const contenedor = document.getElementById('personajes-container');

// Evento para crear personajes
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Obtener valores de los inputs
  const nombre = document.getElementById('nombre').value;
  const nivel = parseInt(document.getElementById('nivel').value);

  // Crear instancia con "new"
  const nuevoPersonaje = new Personaje(nombre, nivel);
  personajes.push(nuevoPersonaje); // Agregar al array

  // Limpiar inputs
  form.reset();

  // Mostrar en el DOM
  mostrarPersonajes();
});

// Función para renderizar personajes
function mostrarPersonajes() {
  contenedor.innerHTML = ''; // Limpiar contenedor

  personajes.forEach((personaje, index) => {
    const div = document.createElement('div');
    div.className = 'personaje';
    div.innerHTML = `
      <h3>${personaje.nombre}</h3>
      <p>Nivel: ${personaje.nivel}</p>
      <p>${personaje.atacar()}</p>
      <small>ID: ${index}</small>
    `;
    contenedor.appendChild(div);
  });
}
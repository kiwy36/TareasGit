function mostrarEjemplo(id) {
  const contenedor = document.getElementById(id);
  if (!contenedor) return; // Validación para evitar errores
  
  contenedor.classList.toggle("oculto");

  // Limpiar el contenido si ya está visible para forzar recarga
  if (!contenedor.classList.contains("oculto") && contenedor.innerHTML !== "") {
    return;
  }

  let contenido = "";

  switch (id) {
    case "funciones":
      contenido = `
        <h3>Función Declarada</h3>
        <p>Las funciones declaradas son aquellas que se definen utilizando la palabra clave <code>function</code> seguida de un nombre. Estas funciones son elevadas (hoisting), lo que significa que pueden ser llamadas antes de su declaración en el código.</p>
        <pre><code>function saludar(nombre) {
  return 'Hola ' + nombre;
}
console.log(saludar('Kevin'));</code></pre>

        <h3>Función Expresada</h3>
        <p>Son funciones que se asignan a una variable. No son elevadas, lo que significa que sólo puedes utilizarlas después de su definición.</p>
        <pre><code>const despedir = function(nombre) {
  return 'Chau ' + nombre;
};
console.log(despedir('Kevin'));</code></pre>
      `;
      break;

    case "letVar":
      contenido = `
        <h3>let</h3>
        <p><code>let</code> permite declarar variables con alcance limitado al bloque donde se define.</p>
        <pre><code>{
  let edad = 30;
  console.log('Edad: ' + edad);
}</code></pre>

        <h3>var</h3>
        <p><code>var</code> es una forma más antigua de declarar variables. Su alcance es de función (no de bloque).</p>
        <pre><code>function testVar() {
  var saludo = 'Hola';
  console.log(saludo);
}
testVar();</code></pre>
      `;
      break;

    case "hoisting":
      contenido = `
        <h3>Hoisting con funciones declaradas</h3>
        <pre><code>saludarAntes();
function saludarAntes() {
  console.log('Función llamada antes de ser definida');
}</code></pre>

        <h3>Hoisting NO aplica a funciones expresadas</h3>
        <pre><code>// saludarDespues(); // Esto da error
const saludarDespues = function() {
  console.log('No funciona antes de su definición');
};
saludarDespues();</code></pre>
      `;
      break;

    case "eventos":
      contenido = `
        <h3>Evento Click</h3>
        <pre><code>document.getElementById('miBoton')?.addEventListener('click', function() {
  console.log('¡Botón clickeado!');
});</code></pre>

        <h3>Evento Input</h3>
        <pre><code>document.getElementById('entrada')?.addEventListener('input', function(event) {
  console.log('Valor actual: ' + event.target.value);
});</code></pre>
      `;
      break;

    case "consts":
      contenido = `
        <h3>Uso básico de <code>const</code></h3>
        <pre><code>const PI = 3.1416;
const usuario = { nombre: 'Kevin' };
usuario.edad = 30;
console.log(usuario.nombre + ' tiene ' + usuario.edad + ' años');</code></pre>

        <h3><code>const</code> con funciones</h3>
        <pre><code>const sumar = function(a, b) {
  return a + b;
};
console.log('Resultado: ' + sumar(5, 3));</code></pre>
      `;
      break;

    case "eventProp":
      contenido = `
        <h3>Propiedades del objeto Event</h3>
        <pre><code>document.addEventListener('click', function(event) {
  console.log('Tipo: ' + event.type);
  console.log('Elemento: ' + event.target.tagName);
});</code></pre>

        <h3>Métodos importantes</h3>
        <pre><code>document.getElementById('enlace')?.addEventListener('click', function(event) {
  event.preventDefault();
  console.log('Enlace bloqueado!');
});</code></pre>
      `;
      break;

    case "firstClass":
      contenido = `
        <h3>Asignación a variables</h3>
        <pre><code>const saludar = function(nombre) {
  return 'Hola ' + nombre;
};
console.log(saludar('Mundo'));</code></pre>

        <h3>Array de funciones</h3>
        <pre><code>const operaciones = [
  (a, b) => a + b,
  (a, b) => a - b
];
console.log('Suma: ' + operaciones[0](5, 3));</code></pre>
      `;
      break;

    case "anonimas":
      contenido = `
        <h3>Callback anónimo</h3>
        <pre><code>setTimeout(function() {
  console.log('Ejecutado después de 1s');
}, 1000);</code></pre>

        <h3>IIFE</h3>
        <pre><code>(function() {
  const mensaje = 'Soy autoejecutable';
  console.log(mensaje);
})();</code></pre>
      `;
      break;

    case "funcParam":
      contenido = `
        <h3>Función con callback</h3>
        <pre><code>function procesar(arr, operacion) {
  return arr.map(operacion);
}
const resultado = procesar([1, 2, 3], function(x) {
  return x * x;
});
console.log(resultado);</code></pre>
      `;
      break;

    case "funcVariable":
      contenido = `
        <h3>Asignación básica</h3>
        <pre><code>const calcularIVA = function(precio) {
  return precio * 1.21;
};
console.log('IVA: ' + calcularIVA(100));</code></pre>

        <h3>Reasignación dinámica</h3>
        <pre><code>let operacion = (a, b) => a + b;
console.log('Suma: ' + operacion(2, 3));

operacion = (a, b) => a * b;
console.log('Multiplicación: ' + operacion(2, 3));</code></pre>
      `;
      break;

    case "formSubmit":
      contenido = `
        <h3>Prevenir envío tradicional</h3>
        <pre><code>document.getElementById('miForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);
  console.log('Datos: ' + formData.get('campo'));
});</code></pre>

        <h3>Envío asíncrono</h3>
        <pre><code>document.querySelector('form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const response = await fetch('/api', {
    method: 'POST',
    body: new FormData(e.target)
  });
  console.log('Respuesta: ' + await response.text());
});</code></pre>
      `;
      break;

    case "multiEvent":
      contenido = `
        <h3>Encadenamiento de eventos</h3>
        <pre><code>const input = document.createElement('input');
input.addEventListener('focus', () => console.log('Enfocado'));
input.addEventListener('blur', () => console.log('Perdió foco'));
document.body.appendChild(input);</code></pre>

        <h3>Debounce</h3>
        <pre><code>let timeout;
document.getElementById('busqueda')?.addEventListener('input', () => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    console.log('Búsqueda: ' + this.value);
  }, 500);
});</code></pre>
      `;
      break;

    default:
      contenido = `<p>Ejemplos no disponibles para esta sección.</p>`;
  }

  contenedor.innerHTML = contenido;
}

// Mejora: Cargar ejemplos al hacer clic en los enlaces de navegación
document.querySelectorAll('.nav-temas a').forEach(enlace => {
  enlace.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    mostrarEjemplo(targetId);
  });
});
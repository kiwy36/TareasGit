// CLASE 3 (TAREA 1)
// CLASE 3 (TAREA 1 adaptada a DOM)
const miNombre = "kiki"
const nombreCompañera= "ivy"
const nombreAmigo = "pepe"
const nombreHermano = "ezequiel"
const nombreAmorcito = "nayi"

// Escuchamos el submit del formulario
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtenemos el valor del input y lo normalizamos
    const nombreUsuario = document.querySelector('#nombre').value.trim().toLowerCase();

    // Seleccionamos el párrafo donde se mostrará el resultado
    const resultado = document.querySelector('#resultado');

    // Lógica para mostrar el saludo según el nombre ingresado
    if (nombreUsuario === "") {
        resultado.textContent = "Error, debes ingresar un nombre.";
    } else if (nombreUsuario === miNombre) {
        resultado.textContent = "¡Hola! Yo también me llamo " + nombreUsuario;
    } else if (nombreUsuario === nombreCompañera) {
        resultado.textContent = "¡Hola, " + nombreUsuario + "! Te llamas igual que mi compañera.";
    } else if (nombreUsuario === nombreAmigo) {
        resultado.textContent = "¡Hola, " + nombreUsuario + "! Te llamas igual que mi bestofrendo.";
    } else if (nombreUsuario === nombreHermano) {
        resultado.textContent = "¡Hola, " + nombreUsuario + "! Te llamas igual que mi hermano.";
    } else if (nombreUsuario === nombreAmorcito) {
        resultado.textContent = "¡Hola, " + nombreUsuario + "! Te llamas igual que mi amorcito.";
    } else {
        resultado.textContent = "¡Hola, " + nombreUsuario + "! Bienvenido.";
    }
});
// CLASE 3 (TAREA 2)
// Escucha el evento submit del nuevo formulario
document.querySelector('#formulario-saludo').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita recargar la página

    // Captura y procesa los valores ingresados
    const nombrePersona = document.querySelector('#nombre-saludo').value.trim();
    const edadUsuario = Number(document.querySelector('#edad-saludo').value);
    const resultado = document.querySelector('#resultado-saludo');

    // Verificación de campos
    if (nombrePersona === '' || isNaN(edadUsuario)) {
        resultado.textContent = 'Por favor, completá ambos campos correctamente.';
        return;
    }

    // Mensajes según la edad con palabras elegantes
    if (edadUsuario < 18) {
        resultado.textContent = `Hola joven ${nombrePersona}, qué bueno verte por aquí.`;
    } else if (edadUsuario >= 18 && edadUsuario < 40) {
        resultado.textContent = `Hola ${nombrePersona}, ¡un placer saludar a un adulto joven como vos!`;
    } else if (edadUsuario >= 40 && edadUsuario < 65) {
        resultado.textContent = `Saludos, señor/a ${nombrePersona}, ¡gracias por visitarnos!`;
    } else {
        resultado.textContent = `Muy buenas, estimado/a ${nombrePersona}. ¡Qué honor contar con su presencia!`;
    }
});

// CLASE 3 (TAREA 3)
document.querySelector('#formulario-edad').addEventListener('submit', function(event){
  // Prevenimos que el formulario se envíe y recargue la página
    event.preventDefault();
    // Obtenemos el valor del input de nombre, eliminando espacios innecesarios y en su forma original
    const nombrePersona = document.querySelector('#nombre-edad').value.trim();
    // Obtenemos el valor del input de edad y lo convertimos a número
    const edadUsuario = Number(document.querySelector('#edad').value);
    // Seleccionamos el elemento <p> donde se mostrará el resultado
    const resultado = document.querySelector('#resultado-edad');

    // Validamos que el nombre no esté vacío y que la edad sea un número válido
    if(nombrePersona === '' || isNaN(edadUsuario)){
        resultado.textContent = 'Por favor, completá ambos campos correctamente.'; // Mostramos mensaje de error
        return; // Cortamos la ejecución para evitar seguir evaluando condiciones
    }
    // Si la edad es menor a 18, no puede comprar alcohol
    if(edadUsuario < 18){
        resultado.textContent = "Lo siento " + nombrePersona + ", no podés comprar alcohol.";
    // Si tiene entre 18 y 65 años, puede comprar alcohol con responsabilidad
    } else if(edadUsuario >= 18 && edadUsuario <= 65){
        resultado.textContent = "Podés comprar alcohol " + nombrePersona + ", hacelo con responsabilidad.";
    // Si tiene más de 65 años, se recomienda consultar al médico
    } else if(edadUsuario > 65){
        resultado.textContent = "Hola " + nombrePersona + ", podrías consultar con tu médico antes de consumir alcohol.";
    }
});
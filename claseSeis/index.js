const nuevoElemento = document.getElementById('elemento').textContent = `nuevo elemento`//agrega elementos
const nuevasComidas = ['pizza','empanadas','milanesas']
/*
let resultado = ''; // Variable para almacenar todas las comidas

for (let i = 0; i < nuevasComidas.length; i++) {
    resultado += `comida nueva: ${nuevasComidas[i]}\n`;
}

document.getElementById('nuevacomida').textContent = `resultado`;*/
//cambios usando el dom
document.querySelector('img').src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nC2Q13MbGzC-ncnqIqsA4Vs4DVDXGU6TaA&s'
document.querySelector('img').height=250
document.querySelector('img').width=250
document.querySelector('section').style.backgroundColor='red'
document.querySelector('section').style.fontSize='25px'

//crear elementos desde el dom
const newDiv = document.querySelector('body'); // Ahora seleccionamos directamente el elemento
const newParrafo = document.createElement('p'); // Creamos el párrafo
const newText = document.createTextNode('ingresando nuevo texto'); // Creamos el nodo de texto

newParrafo.appendChild(newText); // Añadimos el texto al párrafo
newDiv.appendChild(newParrafo); // Añadimos el párrafo al body
//////////tarea.js
// Selección del formulario
document.addEventListener('DOMContentLoaded', function() {
    const $form = document.querySelector('#formulario');

    if ($form) {
        $form.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita que el formulario se envíe y recargue la página
            saludarPersona(); // Llama la función de saludo
        });
    }

    function saludarPersona() {
        const nombre = document.querySelector('#nombre').value;
        const apellido = document.querySelector('#apellido').value;
        const edad = document.querySelector('#edad').value;
        const saludo = `Hola ${nombre} ${apellido}, de edad ${edad}`;
        
        console.log(saludo);
        document.querySelector('#saludo').textContent = saludo;
    }
});

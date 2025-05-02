/*const $form = document.querySelector('form');
// Previene que el form se submittee, y nos permite quedarnos en la misma pagina
$form.addEventListener('submit', function(e){
    e.preventDefault();
    return false;
});

// const edadFueraDelEvento = document.querySelector('#edad').value;
// console.log(edadFueraDelEvento);



// // Una forma de escribirlo

// // const $saludar = document.querySelector('#saludar');
// // $saludar.addEventListener('click', function(){
// //     const edad = document.querySelector('#edad').value;
// //     console.log(edad);
// // });


// // Y otra

// function manejarClickSaludar(){
//     const nombre = document.querySelector('#nombre').value;
//     const apellido = document.querySelector('#apellido').value;
//     const edad = document.querySelector('#edad').value;
//     const saludo = `Hola ${nombre} ${apellido}, tu edad es ${edad}`;

//     document.querySelector('#saludo').textContent = saludo;
//     // const $saludo = document.createElement('p');
//     // $saludo.textContent = saludo;
//     // document.querySelector('body').appendChild($saludo);
// }

// const $saludar = document.querySelector('#saludar');
// $saludar.addEventListener('click', manejarClickSaludar);


///////////
// TAREA //
///////////

/*


const cantidadDeNumeros = Math.max(1, prompt('Cuantos numeros quieres promediar?'));

if(cantidadDeNumeros > 0){
    for(let i = 1; i < cantidadDeNumeros; i++){
        const $input = document.createElement('input');
        $input.type = 'number';
        $input.name = `numero-${i + 1}`;
        $input.id = $input.name;
        $input.placeholder = 'Ingresa un numero';

        document.querySelector('section').appendChild($input);
    }
}

function manejarClickCalcular(){
    let suma = 0;
    for(let i = 0; i < document.querySelectorAll('input').length; i++){
        suma += Number(document.querySelectorAll('input')[i].value);
    }

    const calculo = `El promedio de estos numeros es igual a ${suma / cantidadDeNumeros}`;
    document.querySelector('#calculo').textContent = calculo; 
}

const $calcular = document.querySelector('#calcular');
$calcular.addEventListener('click', manejarClickCalcular);*/
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

const $form = document.querySelector('form');
// Previene que el form se submittee, y nos permite quedarnos en la misma pagina
$form.addEventListener('submit', function(event){
    event.preventDefault();
    return false;
});

const cantidadDeIntegrantes = Math.max(1, prompt('Ingresa la cantidad de integrantes de tu grupo familiar'));

for(let i = 1; i <= cantidadDeIntegrantes; i++){
    const $input = document.createElement('input');
    $input.type = 'number';
    $input.name = `salario-${i}`;
    $input.id = $input.name;
    $input.placeholder = `Salario ${i}`;

    const $botonEliminar = document.createElement('button');
    $botonEliminar.id = `boton-borrar-${i}`;
    $botonEliminar.textContent = 'Eliminar integrante';
    $botonEliminar.className = 'boton-para-eliminar-integrante';

    if(i > 1){
        document.querySelector('body').appendChild(document.createTextNode('\xA0'));
        document.querySelector('body').appendChild(document.createTextNode('\xA0'));
        document.querySelector('body').appendChild(document.createTextNode('\xA0'));
        document.querySelector('body').appendChild(document.createTextNode('\xA0'));
        document.querySelector('body').appendChild(document.createTextNode('\xA0'));
        document.querySelector('body').appendChild(document.createTextNode('\xA0'));
    }
    document.querySelector('body').appendChild($input);
    document.querySelector('body').appendChild($botonEliminar);
}


const $botonCalcular = document.createElement('button');
$botonCalcular.id = 'boton-1';
$botonCalcular.textContent = 'Calcular';
const $botonRecargar = document.createElement('button');
$botonRecargar.id = 'boton-2';
$botonRecargar.textContent = 'Recargar Pagina';

const $myDiv1 = document.createElement('div');
$myDiv1.id = 'div-1';
$myDiv1.innerHTML = '<p>\n</p>';
document.querySelector('body').appendChild($myDiv1);
document.querySelector('body').appendChild($botonCalcular);
document.querySelector('body').appendChild($botonRecargar);



const $paragraph = document.createElement('p');
$paragraph.id = 'promedio';
document.querySelector('body').appendChild($paragraph);

function manejarClickCalcular(){
    let suma = 0;
    for(let i = 0; i < document.querySelectorAll('input').length; i++){
        suma += Number(document.querySelectorAll('input')[i].value);
    }

    const calculo = `El promedio de los salarios de tu grupo familiar es igual a ${suma / document.querySelectorAll('input').length}`;
    document.querySelector('#promedio').textContent = calculo; 
}

const $calcular = document.querySelector('#boton-1');
$calcular.addEventListener('click', manejarClickCalcular);

function manejarClickRecargar(){
    location.reload();
}

const $recargar = document.querySelector('#boton-2');
$recargar.addEventListener('click', manejarClickRecargar);


function manejarClickEliminar(event){
    // console.log(event.target.id.split('-')[2]);
    // Para que funcione, el formato del id de $botonEliminar tiene que ser el siguiente: boton-borrar-${i}
    const index = Number(event.target.id.split('-')[2]);

    const $input = document.getElementById(`salario-${index}`);
    const $boton = document.getElementById(`boton-borrar-${index}`);

    $input.remove();
    $boton.remove();
}

for(let i = 1; i <= cantidadDeIntegrantes; i++){
    document.querySelector(`#boton-borrar-${i}`).addEventListener('click', manejarClickEliminar);
}
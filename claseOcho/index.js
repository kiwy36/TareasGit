//fomularios no sumiteables
const $integrantes = document.querySelector('#integrantes')
const $contenedorResultado = document.querySelector('#contenedorResultado').style.display='none';

const $formIntegrantes = document.querySelector('#form-integrantes');
$formIntegrantes.addEventListener('submit',function(e){
    e.preventDefault();

    const cantidadIntegrantes = Number(document.querySelector('#cantidad-integrantes').value);

    for (let i = 0; i < cantidadIntegrantes; i++) {
        const IdIntegrante = 'integrante-'+i;
        const $label=document.createElement('label')
        $label.textContent='el salario del integrante es'+(i +1)
        $label.htmlFor=IdIntegrante

        const $input = document.createElement('input');
        $input.id= IdIntegrante;
        $input.className="integrante"
        $input.type= "number";
        $input.min= 0;
        const $removerIntegrante=document.createElement('button');
        $removerIntegrante.textContent= 'X'
        $removerIntegrante.addEventListener('click',function(){
            $label.remove();
            $input.remove();
            $br.remove();
            $removerIntegrante.remove();
        })
        const $br = document.createElement('br')

        $integrantes.appendChild($label)
        $integrantes.appendChild($input)
        $integrantes.appendChild($removerIntegrante)
        $integrantes.appendChild($br);
    }
});
//funcion de escucha
document.querySelector('#calcular').addEventListener('click',function(){
    console.log('calculiar')
    const $salarios = document.querySelectorAll('input.integrante')
    const salarios = [];
    for (let i = 0; i < $salarios.length; i++) {
        salarios.push(Number($salarios[i].value))
    }

    const promedio = calcularPromedio(salarios)
    document.querySelector('#promedio').textContent = promedio
    const $contenedorResultado = document.querySelector('#contenedorResultado').style.display='block';
})
//resetear
document.querySelector('#resetear').addEventListener('click', function () {
    $integrantes.innerHTML = ''; // elimina todos los inputs
    document.querySelector('#cantidad-integrantes').value = ''; // limpia cantidad ingresada
    document.querySelector('#promedio').textContent = ''; // limpia promedio
    document.querySelector('#contenedorResultado').style.display = 'none'; // oculta resultado
});

//calcular promedio
function calcularPromedio(numeros){
    let acumulador  = 0;
    for (let i = 0; i < numeros.length; i++) {
        acumulador += numeros[i];
    }
    return acumulador/numeros.length
}
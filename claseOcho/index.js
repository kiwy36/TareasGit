const cantidadIntegrantes = Number(prompt('cuantos son'))
console.log(cantidadIntegrantes);

for (let i = 0; i < cantidadIntegrantes; i++) {
    const $input = document.createElement('input')
    $input.type= "number";
    $input.min= 0;
}
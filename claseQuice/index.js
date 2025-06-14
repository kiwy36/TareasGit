const secuenciaCompu = [];
let secuenciaUsuario = [];
const COLORES = ['rojo','amarillo','azul','verde'];
//funcion que imprime el color elegido por la maquina
document.querySelector('#comenzar').addEventListener('click', function(){
  manejarSeleccionMaquina()
});
//funcion manejar funcion maquina
function manejarSeleccionMaquina(){
  const color = elegirColorAleatorio(COLORES);
  secuenciaCompu.push(color);
  console.log('maquina', color);
}
//funcion que hace elegir a la maquina un valor aleatorio
function elegirColorAleatorio(colores){
  const indiceColorAleatorio= Math.floor(Math.random()*colores.length);
  return colores[indiceColorAleatorio]
}
//toma los colores de los botones y los imprime en consola
const $colores = document.querySelectorAll('.color')
for (let i = 0; i<$colores.length; i++){
  const $color = $colores[i];
  $color.addEventListener('click',function(){
    const color = this.dataset.color;
    console.log('usuario', color);
    secuenciaUsuario.push(color)
    //validacion comparativa de secuencia
    if (color !== secuenciaCompu[secuenciaUsuario.length - 1]) {
      console.log('perdiste');
      secuenciaCompu = [];
      secuenciaUsuario = [];
      return;
    }
    if(secuenciaUsuario.length === secuenciaCompu.length){
      console.log('turno maquina');
      secuenciaUsuario=[];
      manejarSeleccionMaquina()
    }
  });
}
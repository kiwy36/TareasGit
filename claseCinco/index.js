// TAREA: Ahora te toca a vos! — Obtené la etiqueta h1 de la página y guardala en una variable
//       variable llamada nuestroTitulo.
//       Utilizá console.log para ver lo que obtuviste!
/*
const nuestroTitulo = document.querySelector('h1')
console.log(nuestroTitulo);


// TAREA: Obtené todos los elementos <li> de la página en una variable llamada mediaLinks.

const listaLi = document.querySelectorAll('li');
console.log(listaLi)

// TAREA: Ahora utilizá console.log para ver la cantidad de 
// elementos li que hay con mediaLinks.length

console.log(listaLi.length)*/
document.getElementById("titulo").textContent = "Clase cinco";
document.getElementById('titulo').style.color = "green"
document.getElementById('text').textContent = "La idea es intervenir en elementos del html utilizando el dom, aca por ejemplo hice modificaciones por id , mas abajo vere de cambiar colores y luego como tomar varias etiquetas al mismo tiempo"
document.getElementById('text').style.fontSize = "30px";
document.querySelector('h2').textContent = "subtitulo aqui";
document.querySelector("h2").style.color = "red"
document.querySelectorAll("li").forEach((item, index) => {
    item.textContent = `Elemento ${index + 1}`;
});
//////////////Aqui creare un elemento de yapa
const elementoNuevo = document.createElement("h3")
elementoNuevo.textContent = "texto nuevo"
const seccion = document.querySelector("section")
seccion.appendChild(elementoNuevo)
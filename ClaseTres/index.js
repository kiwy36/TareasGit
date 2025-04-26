// CLASE 3 (TAREA 1)
const miNombre = "tomas"
const nombreTia = "eugenia"
const nombreAmigo = "agustin"
const nombreHermano = "facundo"
const nombreHermana = "celeste"

let nombreUsuario = prompt("Me dirias tu nombre?").trim().toLowerCase();;

if (nombreUsuario === miNombre) {
    console.log("Hola, Tocayo! Yo tambien me llamo " + nombreUsuario)
} else if (nombreUsuario === nombreTia) {
    console.log("Hola, " + nombreUsuario + "! Te llamas igual que mi tia")
} else if (nombreUsuario === nombreAmigo) {
    console.log("Hola, " + nombreUsuario + "! Te llamas igual que mi amigo")
} else if (nombreUsuario === nombreHermano) {
    console.log("Hola, " + nombreUsuario + "! Te llamas igual que mi hermano")
} else if (nombreUsuario === nombreHermana) {
    console.log("Hola, " + nombreUsuario + "! Te llamas igual que mi hermana")
} else if (nombreUsuario === "") {
    console.log("Error, Debes ingresar un nombre")
} else {
console.log("Hola, " + nombreUsuario + "! Bienvenido")
}


// CLASE 3 (TAREA 2)

let nombrePersona = prompt("Ingresa tu nombre");
let edadUsuario = Number(prompt("Ingresa tu edad"));


if(edadUsuario === "22") {
    console.log("Tienes mi misma edad, genial " + nombrePersona)
} else if (edadUsuario > 22) {
    console.log("Eres mayor que yo " + nombrePersona)
} else if (edadUsuario === 22) {
    console.log("Genial "+ nombrePersona + " tenemos la misma edad.")
}
else {
    console.log("Soy mayor que vos " + nombrePersona)
}



// CLASE 3 (TAREA 3)
let respuesta = prompt("usted posee documento? (si-no)")

if (respuesta === "si") {
    let edad = prompt("Que edad tenes?")
    if(edad >= 18) {
        console.log("Puedes ingresar al bar")
    } else {
        console.log("No puedes ingresar al bar")
    } 
} else if (respuesta === "no") {
    console.log("Lo siento sin documento no podes entrar al bar")
} else if (respuesta !== "si" && respuesta !== "no" ) {
    console.log("Lo siento no entendi tu respuesta, vuelva a intentarlo")
}
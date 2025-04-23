// TAREA: Creá 2 variables indefinidas, llamadas numeroUno y numeroDos.
let numeroUno = undefined;
let numeroDos = undefined;

/*
    Podés usar el nombre de tus variables pare representar qué información tienen adentro, por ejemplo:

    let saludo = 'Hola Mundo';
    alert(saludo);

    Esto va a mostrar un cartelito con el texto 'Hola Mundo!'
*/

// Crear 2 variables nuevas, una con tu nombre, la segunda con tu edad. Dales un nombre apropriado y
// mostralas con un alert.

let nombre = "kiki";
let edad = 33;

alert(nombre);
alert(edad);

let nombreUsuario = prompt("Escribí tu nombre:");
let saludo = "Hola, bienvenido " + nombreUsuario
alert('gracias '+ nombre)

alert(saludo)

// Crear una función que tome como parámetro el año actual y el año de nacimiento
// Y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola

function edadUsuario(anioActual, anioNacimiento){
    return anioActual - anioNacimiento;
}

const ingreseAnioActual = Number(prompt("¿Cual es el año actual?"));
const ingreseAnioNacimiento = Number(prompt("¿En qué año naciste?"));
const edadUsuario = edadUsuario(ingreseAnioActual, ingreseAnioNacimiento);
console.log("La edad del usuario es: " + edadUsuario);

// Preguntar el salario anual y calcular el salario mensual
function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}

const ingreseSalarioAnual = Number(prompt("Ingrese su salario anual."));
const salarioMensualConsulta = calcularSalarioMensual(ingreseSalarioAnual);
promt("Su salario mensual es de: " + salarioMensualConsulta);

// Preguntar el salario mensual y calcular el anual
function calcularSalarioAnual(salarioMensual){
    return salarioMensual * 12;
}

const ingreseSalarioMensual = Number(prompt("Ingrese su salario mensual."));
const salarioMensual = calcularSalarioAnual(ingreseSalarioMensual);
console.log("Su salario anual es de: " + salarioMensual);

// diario... semanal, por hora. etc.
function calcularSalarioSemanal(salarioDiario){
    return salarioDiario * 7;
}

const ingreseSalarioDiario = Number(prompt("Ingrese su salario diario."));
const salarioSemanal = calcularSalarioSemanal(ingreseSalarioDiario);
console.log("Su salario semanal es de: " + salarioSemanal);
const horasDiarias = Number(prompt("Ingrese las horas que trabaja por dia."));
function calcularSalarioPorHora(salarioDiario){
    return salarioDiario / horasDiarias
}

const salarioPorHora = calcularSalarioPorHora(ingreseSalarioDiario);
console.log("Su salario por hora es de: " + salarioPorHora);

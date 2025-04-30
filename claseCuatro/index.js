for (let i = 1; i <=50; i++) {
    if(i%3===0 && i%5===0){
        console.log('fizz buzz');
    }else if(i%3===0){
    console.log('fizz')
    }else if(i%5===0){
        console.log('buzz');
    }else{
        console.log(i);
    }
}
// TAREA: Imprimí cada 3er número del 3 al 22 usando un 'bucle for'.

for (let i = 3; i <= 22; i += 3) {
	console.log(i);
}

// TAREA: Usando un bucle 'while', decile a tu computadora que registre los números de diez a uno.

numero = 10;
while (numero >= 1) {
	console.log(numero);
	numero--;
}

// TAREA: Ha llegado el momento de un ejercicio clásico: 'FizzBuzz'.
// Cuenta del 1 al 50 e imprime los números:
// * Si un número es múltiplo de tres, imprime 'Fizz'.
// * Si es un múltiplo de 5, imprime 'Buzz'.
// * Si es un múltiplo de 3 y 5, imprime 'FizzBuzz'.
// * Para todo lo demás, imprime el número mismo.
// NOTA: Es posible que desees utilizar el operador aritmético modulo (%):
// Calcula el resto al dividir.
// 10% 3 = 1 - en 10 tenemos 3 * 3 + 1
// 16% 4 = 0 - en 16 tenemos 4 * 4
// 19% 4 = 3 - en 19 tenemos 4 * 4 + 3, etc.

for (let i = 1; i <= 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log("FizzBuzz");
	} else if (i % 5 === 0) {
		console.log("Buzz");
	} else if (i % 3 === 0) {
		console.log("Fizz");
	} else {
		console.log(i);
	}
}

// TAREA: Calcular el promedio de todos los números en un array de números. (y ponerlo en una función)
document.querySelector('#formulario-promedio').addEventListener('submit', function(event){
    event.preventDefault();

    const inputsNotas = document.querySelectorAll('.nota');
    const resultado = document.querySelector('#resultado-promedio');

    let notas = [];
    inputsNotas.forEach(input => {
        const valor = parseFloat(input.value);
        if (!isNaN(valor)) {
        notas.push(valor);
        }
    });

    if (notas.length === 0) {
        resultado.textContent = "Por favor, ingresá al menos una nota válida.";
        return;
    }
    let total = 0;
    notas.forEach(nota => total += nota);

    const promedio = total / notas.length;

    // Mostrar el resultado
    resultado.textContent = "El promedio es: " + promedio.toFixed(2);
});

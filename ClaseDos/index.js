function sumar(a, b) {
    return a + b;
}

// Función para restar dos números
function restar(a, b) {
    return a - b;
}

// Función que determina qué operación realizar
function calcular() {
    // Obtener los valores del formulario
    const num1 = Number(document.getElementById('num1').value);
    const operador = document.getElementById('operador').value;
    const num2 = Number(document.getElementById('num2').value);

    let resultadoCalculadora;

    // Verificar el operador y realizar la operación correspondiente
    if (operador === '+') {
        resultadoCalculadora = sumar(num1, num2);
    } else if (operador === '-') {
        resultadoCalculadora = restar(num1, num2);
    } else {
        resultadoCalculadora = "Operador no válido. Usa '+' o '-'.";
    }

    // Mostrar el resultado en la consola
    console.log(`Resultado: ${resultado}`);

    // Mostrar el resultado en el HTML
    document.getElementById('resultadoCalculadora').textContent = `Resultado: ${resultadoCalculadora}`;
}

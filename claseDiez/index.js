function mostrarEjemplo(id) {
  const contenedor = document.getElementById(id);
  contenedor.classList.toggle("oculto");

  if (contenedor.innerHTML !== "") return;

  let contenido = "";

  switch (id) {
    case "funciones":
      contenido = `
        <h3>Función Declarada</h3>
        <p>Las funciones declaradas son aquellas que se definen utilizando la palabra clave <code>function</code> seguida de un nombre. Estas funciones son elevadas (hoisting), lo que significa que pueden ser llamadas antes de su declaración en el código. Son ampliamente utilizadas cuando se necesita reutilizar lógica varias veces y tener una estructura clara del flujo del programa.</p>
        <p><strong>Precaución:</strong> Aunque puedes usarlas antes de definirlas, es recomendable mantener un orden lógico para la legibilidad del código.</p>
        <pre><code>function saludar(nombre) {
  return 'Hola ' + nombre;
}
document.write(saludar('Kevin'));</code></pre>

        <h3>Función Expresada</h3>
        <p>Son funciones que se asignan a una variable. No son elevadas, lo que significa que sólo puedes utilizarlas después de su definición. Este enfoque es útil para funciones de corto alcance o cuando se quiere evitar conflictos con funciones globales.</p>
        <p><strong>Precaución:</strong> Intentar llamarlas antes de su definición arrojará un error.</p>
        <pre><code>const despedir = function(nombre) {
  return 'Chau ' + nombre;
};
document.write('<br>' + despedir('Kevin'));</code></pre>
      `;
      break;

    case "letVar":
      contenido = `
        <h3>let</h3>
        <p><code>let</code> permite declarar variables con alcance limitado al bloque donde se define (por ejemplo, dentro de una función o una estructura condicional). No permite redeclarar la misma variable en el mismo bloque y es más seguro que <code>var</code> en muchos casos.</p>
        <p><strong>Aplicación:</strong> Usar <code>let</code> cuando la variable deba ser reasignada pero no redeclarada.</p>
        <pre><code>{
  let edad = 30;
  document.write('Edad: ' + edad);
}</code></pre>

        <h3>var</h3>
        <p><code>var</code> es una forma más antigua de declarar variables. Su alcance es de función (no de bloque) y permite ser redeclarada dentro del mismo ámbito, lo cual puede causar errores difíciles de detectar.</p>
        <p><strong>Precaución:</strong> Evitar usar <code>var</code> en código moderno a menos que sea estrictamente necesario.</p>
        <pre><code>function testVar() {
  var saludo = 'Hola';
  document.write('<br>' + saludo);
}
testVar();</code></pre>
      `;
      break;

    case "hoisting":
      contenido = `
        <h3>Hoisting con funciones declaradas</h3>
        <p>El hoisting es un comportamiento de JavaScript por el cual las declaraciones de funciones y variables se "elevan" al principio de su contexto (función o script). En el caso de funciones declaradas, esto permite que puedan ser invocadas antes de su declaración en el código.</p>
        <p><strong>Aplicación:</strong> Útil para definir funciones que se usarán en varios lugares del archivo sin preocuparse por el orden.</p>
        <pre><code>saludarAntes();
function saludarAntes() {
  document.write('Función llamada antes de ser definida');
}</code></pre>

        <h3>Hoisting NO aplica a funciones expresadas</h3>
        <p>Cuando las funciones están asignadas a variables (funciones expresadas), sólo se eleva la declaración de la variable, no su asignación. Por eso, llamarlas antes de definirlas da error.</p>
        <p><strong>Precaución:</strong> Nunca llames funciones expresadas antes de su definición.</p>
        <pre><code>// saludarDespues(); // Esto da error
const saludarDespues = function() {
  document.write('<br>No funciona antes de su definición');
};
saludarDespues();</code></pre>
      `;
      break;
  }

  contenedor.innerHTML = contenido;
}

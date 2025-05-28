document.addEventListener('DOMContentLoaded', function () {
    mostrarCuentas();
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
    const cuentaHaciaId = document.querySelector('#cuenta-hacia').value;
    const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
    const cuentaHacia = encontrarCuentaPorId(cuentaHaciaId);
    const montoSolicitado = parseFloat(document.querySelector('#monto').value);

    if (!montoSolicitado || montoSolicitado <= 0) {
        mostrarMensaje('Ingrese un monto mayor a cero', 'error');
        return;
    }

    if (cuentaDesde.id === cuentaHacia.id) {
        mostrarMensaje('No se puede transferir entre la misma cuenta', 'error');
        return;
    }

    if (montoSolicitado > cuentaDesde.saldo) {
        mostrarMensaje('Saldo insuficiente para realizar la transferencia', 'error');
        return;
    }

    // Actualizamos los saldos
    cuentaDesde.saldo -= montoSolicitado;
    cuentaHacia.saldo += montoSolicitado;

    // Actualizamos las opciones del select con los nuevos saldos
    mostrarCuentas();

    // Mensaje de éxito
    mostrarMensaje('Transferencia realizada con éxito', 'exito');

    // Reiniciamos el campo de monto
    document.querySelector('#monto').value = '';
});

function mostrarMensaje(mensaje, tipo) {
    const $mensaje = document.querySelector('#mensaje');
    $mensaje.textContent = mensaje;
    $mensaje.style.color = tipo === 'error' ? 'red' : 'green';

    setTimeout(() => {
        $mensaje.textContent = '';
    }, 10000);
}

function mostrarCuentas() {
    const $cuentasDesde = document.querySelector('#cuenta-desde');
    const $cuentasHacia = document.querySelector('#cuenta-hacia');

    // Limpiamos las opciones actuales
    $cuentasDesde.innerHTML = '<option value="">Elegir opción</option>';
    $cuentasHacia.innerHTML = '<option value="">Elegir opción</option>';

    // Volvemos a insertar las opciones actualizadas
    for (let i = 0; i < cuentas.length; i++) {
        const cuenta = cuentas[i];

        const $cuentaDesde = document.createElement('option');
        $cuentaDesde.value = cuenta.id;
        $cuentaDesde.textContent = `${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
        $cuentasDesde.appendChild($cuentaDesde);

        const $cuentaHacia = document.createElement('option');
        $cuentaHacia.value = cuenta.id;
        $cuentaHacia.textContent = `${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
        $cuentasHacia.appendChild($cuentaHacia);
    }
}

function encontrarCuentaPorId(id) {
    return cuentas.find(cuenta => cuenta.id.toString() === id);
}

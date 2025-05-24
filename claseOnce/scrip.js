document.addEventListener('DOMContentLoaded',function(){
    mostrarCuentas()
})
//evitar el submit
document.querySelector('form').addEventListener('submit',function(event){
    event.preventDefault();
    const cuentaDesdeId = document.querySelector('#cuenta-desde').value;
    const cuantaHaciaId = document.querySelector('#cuenta-hacia').value;
    const cuentaDesde = encontrarCuentaPorId(cuentaDesdeId);
    const cuentaHacia = encontrarCuentaPorId(cuantaHaciaId);
    const montoSolicitado = document.querySelector('#monto').value
    
    if(cuentaDesde.id === cuentaHacia.id){
        console.log('no se puede tranferir entre la misma cuenta');
        return false
    }
    if(montoSolicitado <= 0){
        console.log('ingrese un monto mayor a cero');
        return false
    }
    if (cuentaDesde.saldo >= montoSolicitado){
        console.log('transferencia exitosa')
        // ↓↓↓ LÓGICA PARA TRANSFERIR SALDO ↓↓↓
        // cuentaDesde.saldo -= montoSolicitado; // Resta el monto de la cuenta origen
        // cuentaHacia.saldo += montoSolicitado; // Suma el monto en la cuenta destino

        // Opcional: actualizar el DOM con los nuevos saldos
        // document.querySelector('#cuenta-desde').innerHTML = '';
        // document.querySelector('#cuenta-hacia').innerHTML = '';
        // mostrarCuentas(); // Vuelve a mostrar las cuentas con los saldos actualizados
    }else{
        console.log('saldo insuficiente');
    }
})

function mostrarCuentas(){
    // Selecciona los elementos <select> del formulario
    const $cuentasDesde = document.querySelector('#cuenta-desde');
    const $cuentasHacia = document.querySelector('#cuenta-hacia');
    // Recorre todas las cuentas disponibles
    for (let i= 0; i < cuentas.length; i++) {
        const cuenta = cuentas[i];
        // Crea una <option> para el <select> de cuenta desde
        const $cuentaDesde = document.createElement('option');
        $cuentaDesde.setAttribute('id','cuenta-'+ cuenta.id);
        $cuentaDesde.setAttribute('value',cuenta.id)
        $cuentaDesde.textContent=`${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
        $cuentasDesde.appendChild($cuentaDesde)
        // Crea una <option> para el <select> de cuenta hacia (mismo contenido)
        const $cuentaHacia = document.createElement('option');
        $cuentaHacia.setAttribute('id','cuenta-'+ cuenta.id);
        $cuentaHacia.setAttribute('value',cuenta.id)
        $cuentaHacia.textContent=`${cuenta.nombre} tiene en su saldo ${cuenta.saldo}`;
        $cuentasHacia.appendChild($cuentaHacia)
    }
}
function encontrarCuentaPorId(id){
    // Recorre el array de cuentas y devuelve la que coincide con el ID recibido
    for (let i = 0; i < cuentas.length; i++) {
        if(cuentas[i].id.toString()===id)
            return cuentas[i]
    }
}
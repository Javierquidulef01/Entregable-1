
function obtenerTiempos(vueltas) {
    let readlineSync = require('readline-sync');
    let tiempos = new Array(vueltas); 

    for (let i = 0; i < tiempos.length; i++) {
        tiempos[i] = readlineSync.questionInt(`Ingrese el tiempo para la vuelta Nro${i+1}: `);
    }  

    return tiempos;
}


function calcularTiempoTotal (tiempos) {
    let total = 0;

    tiempos.forEach(tiempo => {
        total += tiempo;
    });

    return total;
}

/*-------------------------------------------------------------*/

let cantVueltas = 4;
let tiemposVueltas = obtenerTiempos(cantVueltas);
let tiempoTotal = calcularTiempoTotal(tiemposVueltas);
let tiempoPromedio = tiempoTotal / cantVueltas;

console.log(`El tiempo total de vueltas es de: ${tiempoTotal}`);
console.log(`El tiempo promedio de vueltas es de: ${tiempoPromedio}`);
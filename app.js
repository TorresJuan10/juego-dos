let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);


    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);

        //boton de nuevo juego
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}


function limpiarCaja() {
    //opcion 1
    /*
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
    */

    //opcion 2 
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros // evita problemas con recursividad
    if(listaNumerosSorteados.length == numeroMaximo){
        //colocar mensaje en pantalla
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //seguimos jugando
        //si el numero generado esta en la lista //recursividad
            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            } else {
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        
    }

}

function condicionesIniciales() {

    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;


}

function reiniciarJuego() {
    //PASO 1* limpiar la caja 
    limpiarCaja();
    //PASO 2*indicar mensaje de intervalo de numeros
    //PASO 3*generar numero aleatorio
    //PASO 5*inicializar el numero de intentos
    condicionesIniciales();
    //PASO 4*deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true);

}

condicionesIniciales();


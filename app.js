let numeroSecreto = 0;
let intentos = 0;
 console.log(numeroSecreto);


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
        return Math.floor(Math.random() * 10) + 1

    }

    function condicionesIniciales() {

        asignarTextoElemento('h1', 'juego del numero secreto');
        asignarTextoElemento('p', 'Indica un numero del 1 al 10');
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
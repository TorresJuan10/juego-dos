let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
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

    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function intentoDeusuario(){
    alert("click desde la funcion");
}

asignarTextoElemento('h1','juego del numero secreto');
asignarTextoElemento('p','Indica un numero del 1 al 10');

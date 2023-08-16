//Este script esta asociado a cursos.html

// querySelector
const heading = document.querySelector('.header__texto h2')
heading.textContent = 'Nuevo Heading'
heading.classList.add('nueva-clase')
console.log(heading);


// querySelectorAll y // enlaces[0].href
const enlaces = document.querySelectorAll('.navegacion a')
enlaces[0].textContent = 'Nuevo Texto para Enlace'
enlaces[0].classList.add('nueva-clase')
// enlaces[0].classList.remove('navegacion__enlace')

// Generar un nuevo enlace

const nuevoEnlace = document.createElement('A')

console.log(nuevoEnlace);
// AGREAGAR EL HREF
nuevoEnlace.href = 'nuevo-enlace.html'
// AGREGAR EL TEXTO
nuevoEnlace.textContent = 'Un Nuevo Enlace'
// AGREGAR LA CLASE
nuevoEnlace.classList.add('navegacion__enlace')
// AGREGARLO AL DOCUMENTO
const navegacion = document.querySelector('.navegacion')
navegacion.appendChild(nuevoEnlace)


// EVENTOS

console.log(1);

window.addEventListener('load', function() {//Load espera a que el JS y los archivos que dependen del HTML esten listos
    console.log(2);
}
)

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function() {//DOMContentLoaded espera a que el HTML este listo, pero no espera CSS o imagenes
    console.log(4);
}
)   


console.log(5);

window.onscroll = function() {//Cada vez que se hace scroll se ejecuta la funcion 
    console.log('scrolling...');
}

// Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario')
btnEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault()//Previene la accion por defecto del elemento
    console.log('enviando formulario');
}
)









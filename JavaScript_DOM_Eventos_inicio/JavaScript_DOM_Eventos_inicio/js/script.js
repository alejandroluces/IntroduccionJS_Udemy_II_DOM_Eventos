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

/* 



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



*/




// Seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario')
// btnEnviar.addEventListener('click', function(evento) {
//     console.log(evento);
//     evento.preventDefault()//Previene la accion por defecto del elemento
//     console.log('enviando formulario');
// }
// )

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre') 
const email = document.querySelector('#email')
const mensaje = document.querySelector('#mensaje')
const formulario = document.querySelector('.formulario')

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

// El evento de submit
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault()//Previene la accion por defecto del elemento
    
    

    // Validar el formulario
    const {nombre, email, mensaje} = datos

    if(nombre === '' || email === '' || mensaje === '') {
        
        mostrarAlerta('Todos los campos son Obligatorios',true)
        return; // Corta la ejecucion del codigo
    }

 // crear la alerta de Enviado Correctamente
    
        mostrarAlerta('Enviado Correctamente')
})

function leerTexto(e){
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;

}

// Mostrar alerta de error o de envio correcto en el DOM

// function mostrarMensaje(mensaje){
//     const alerta = document.createElement('P')
//     alerta.textContent = mensaje
//     alerta.classList.add('correcto')
//     formulario.appendChild(alerta);

//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         alerta.remove()
//     }
//     , 5000);

// }

// function mostrarError(mensaje) {
   
//     const error = document.createElement('P')
//     console.log(error);
    
//     error.textContent = mensaje
//     error.classList.add('error')

//     formulario.appendChild(error)

//     // Desaparezca despues de 5 segundos
//     setTimeout(() => {
//         error.remove()
//     }, 5000);



// }

function mostrarAlerta(mensaje, error = null) {
   
    const alerta = document.createElement('P')
    alerta.textContent = mensaje


    if(error) {
        alerta.classList.add('error')
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta)

    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove()
    }, 5000);

}


    


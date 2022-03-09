//querySelector retorna 0 ó 1 elementos
const heading = document.querySelector('.header__texto h2');//retorna 0 ó 1 elementos
heading.textContent ='nuevo heading'//modificando el html con javascript
console.log(heading);

//querySelectorAll
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'nuevo texto para enlace';//modifica
enlaces[0].classList.add('nueva clase');//crea
enlaces[0].classList.remove('navegacion__enlace');//elimina

/////////////////////////////////////////////////////////////

//generar un nuevo enlace
const nuevoEnlace = document.createElement('A');

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent ='tienda virtual';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);

//Eventos

/* console.log(1);

window.addEventListener('load' , function(){
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMcontentLoaded' , function() {
    console.log(4);
});


console.log(5);*/

window.onscroll = function(){
    console.log('scrolling....');
}


//seleccionar elementos y asociarles un evento
const btnEnviar = document.querySelector('.boton--primario');
btnEnviar.addEventListener('click', function(evento){
    console.log(evento);
    evento.preventDefault();



//validar un formulario

console.log('enviando formulario');

}) 

//eventos de los inputs y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}


const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');


nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;

//    console.log(datos);
}

//el evento sumbit
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();//prevenir accion por default

    //validar el formulario
    const{nombre, email, mensaje} =datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('todos los campos son obligatorios', 'error');

        return; //corta la ejecucion del codigo
    }

    //crear alerta de enviar formulario
    mostrarAlerta('mensaje enviado correctamente');

});

function mostrarAlerta(mensaje, error = null) {
    const alerta = document.createElement('P');
    alerta.textContent= mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta)

        //desaparezca deaspues de 5 minutos
        setTimeout(() => {
            alerta.remove();
        }, 5000);
}
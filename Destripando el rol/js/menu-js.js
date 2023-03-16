//Función para mostrar página con un efecto fade-in
// window.onload = () => document.querySelector('body').className = 'muestra';

// Menú hamburguesa
let boton = document.querySelector('#icono i');
let enlaces = document.querySelector('#enlaces');

boton.addEventListener('click', function(){
  enlaces.classList.toggle('open');
  
  setTimeout(function(){
      boton.classList.toggle('fa-xmark');
  },600);
});


// Formulario
const FORMULARIO = document.querySelector('#formulario1');

const EXPRESIONES = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-,]+$/,
    telefono: /^([0-9]{3}[\s-]?){3}$/,
    
}

const CAMPOS = {
    nombre: false,
    apellidos: false,
    correo: false,
    telefono: false 
}

const INPUTS = document.querySelectorAll('#formulario1 input');

INPUTS.forEach(function(input) {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

function validarFormulario(e) {
    switch (e.target.name) {
        case 'nombre':
            validarCampo(EXPRESIONES.nombre, e.target, 'nombre');
            break;
        case 'apellidos':
            validarCampo(EXPRESIONES.nombre, e.target, 'apellidos');
            break;
        case 'correo':
            validarCampo(EXPRESIONES.correo, e.target, 'correo');
            break;
        case 'telefono':
            validarCampo(EXPRESIONES.telefono, e.target, 'telefono');
            break;
       
    }
}

function validarCampo(expresion, input, campo) {
    if (expresion.test(input.value)) {
        document.querySelector(`#campo_${campo}`).classList.remove('campo_incorrecto');
        document.querySelector(`#campo_${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#campo_${campo}`).classList.add('campo_correcto');
        document.querySelector(`#campo_${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#campo_${campo} .dato_entrada_error`).classList.remove('dato_entrada_error_activo');
        CAMPOS[campo] = true;
    } else {
        document.querySelector(`#campo_${campo}`).classList.add('campo_incorrecto');
        document.querySelector(`#campo_${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#campo_${campo}`).classList.remove('campo_correcto');
        document.querySelector(`#campo_${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#campo_${campo} .dato_entrada_error`).classList.add('dato_entrada_error_activo');
        CAMPOS[campo] = false;
    }
}

FORMULARIO.addEventListener('submit', function(e) {
    e.preventDefault();
    const TERMINOS = document.querySelector('#terminos');
    if (CAMPOS.apellidos && CAMPOS.correo && CAMPOS.telefono && TERMINOS.checked) {
        FORMULARIO.submit();
    } else {
         document.querySelector('#mensaje_error').classList.add('mensaje_error_activo');
    }
});



// Modal

let modal = document.querySelector('#modal');
let abrir = document.querySelector('#abrir');
let cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', function(){
    modal.classList.remove('oculta-modal');
});


cerrar.addEventListener('click', function(){
    modal.classList.add('oculta-modal');
});

window.addEventListener('click', function(e){
    if(e.target == modal){
        modal.classList.add('oculta-modal');
    }
});



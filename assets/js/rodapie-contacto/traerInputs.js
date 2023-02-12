import { validando } from "./validando.js";

const traerInputs = document.querySelectorAll('.rodapie__formulario-contacto__contenido__nombre');
const traerForm = document.getElementsByClassName('rodapie__formulario-contacto');

traerInputs.forEach(e => {

    e.addEventListener('blur', () => {

        validando(e);
    })
})

traerForm[0].addEventListener('submit', () => {

    alert('mensaje prueba enviado');
    traerInputs.forEach(e => {

        e.value = '';
    })
})
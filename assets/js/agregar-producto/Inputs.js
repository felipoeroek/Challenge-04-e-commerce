import { validar } from "./validaciones.js";

const traerInputs = document.querySelectorAll('.formulario-agregar-producto__contenido__nombre');

traerInputs.forEach( e => {

    e.addEventListener('blur', () => {

        validar(e);
    })
})
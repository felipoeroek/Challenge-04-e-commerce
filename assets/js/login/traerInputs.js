import { validacion } from "./validando.js";

const traerInputs = document.querySelectorAll('.formulario-contacto__contenido__nombre');

traerInputs.forEach(input => {

    input.addEventListener('blur', () => {

        validacion(input);
    })
})
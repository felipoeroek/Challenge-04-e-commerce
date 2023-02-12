export function validacion(input) {
    
    const traerSpan = input.nextSibling;
    const tipoDeInput = input.dataset.input;
    const inputValidity = input.validity;
    if(!inputValidity.valid){

        traerSpan.nextSibling.style.display = 'block';
        mensajeCustomizado(inputValidity,tipoDeInput,input,traerSpan);
    } else {

        input.setCustomValidity('');
    }
}

function mensajeCustomizado(inputValidity,tipoDeInput,input,span) {
    
    let comprobarValidaciones = true;

    tipoDeErrores.forEach(element => {

        if(inputValidity[element]){

            span.nextSibling.innerHTML = mensajeError[tipoDeInput][element];
            input.setCustomValidity(mensajeError[tipoDeInput][element]);
            comprobarValidaciones = false;
        }
    })
    
    if(comprobarValidaciones){

        span.nextSibling.style.display = 'none';
        input.setCustomValidity('');
    }
}

const tipoDeErrores = ['valueMissing', 'typeMismatch'];

const mensajeError = {

    email: {

        valueMissing: 'este campo no puede estar vacio',
        typeMismatch: 'ejemplo: text@text.com',
    },

    password: {

        valueMissing: 'este campo no puede estar vacio',
    }
}
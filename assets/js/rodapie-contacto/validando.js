export function validando(input) {

    const tipoInput = input.dataset.name;
    const inputValidity = input.validity;
    const traerSpan = input.nextElementSibling.nextElementSibling;

    if(!inputValidity.valid) {

        mostrarMensajeError(inputValidity, tipoInput, traerSpan);
    } else {

        traerSpan.style.display = 'none';
    }
}

const tipoError = ['valueMissing'];

function mostrarMensajeError(inputValidity, tipoInput, traerSpan) {
    
    tipoError.forEach(e => {

        if(inputValidity[e]) {

            traerSpan.style.display = 'block';
            traerSpan.innerHTML = mensajeError[tipoInput][e];
        }
    })
}

const mensajeError = {

    name: {

        valueMissing: 'este campo no puede estar vacio'
    },

    area: {

        valueMissing: 'este campo no puede estar vacio'
    }
}
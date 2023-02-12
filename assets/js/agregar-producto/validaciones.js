export function validar(input) {
    
    const tipoDeInput = input.dataset.input;
    const inputValidity = input.validity;
    const traerSpan = input.nextElementSibling;

    if(!inputValidity.valid) {

        mostrarMensajeError(inputValidity,tipoDeInput,traerSpan)
    } else {

        traerSpan.style.display = 'none';
    }
}

const tipoError = ['valueMissing', 'typeMismatch'];

function mostrarMensajeError(inputValidity,tipoDeInput,span) {
    
    tipoError.forEach( e => {

        if(inputValidity[e]) {

            span.style.display = 'block';
            span.innerHTML = error[tipoDeInput][e];
        }
    })
}

const error = {

    url: {

        valueMissing: 'Este campo no puede estar vacio',
        typeMismatch: 'Introduce una url de imagen valida'
    },

    name: {

        valueMissing: 'Este campo no puede estar vacio'
    },
    
    price: {

        valueMissing: 'Este campo no puede estar vacio'
    },

    description: {

        valueMissing: 'Este campo no puede estar vacio'
    }
}
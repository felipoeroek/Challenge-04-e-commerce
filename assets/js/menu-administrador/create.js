const crearProducto = (url, nombre, precio) => 

    fetch('http://localhost:3000/producto', {

    method: 'POST',
    headers: {

        'Content-Type': 'application/json'
    },
    body: JSON.stringify({url, nombre, precio, id: uuid.v4()})
})

const traerFormulario = document.getElementsByClassName('formulario-agregar-producto');

traerFormulario[0].addEventListener('submit', (evento) => {

    evento.preventDefault();
    const url = document.getElementById('url-input').value;
    const nombre = document.getElementById('name-input').value;
    const precio = document.getElementById('precio-input').value;

    crearProducto(url, nombre, precio).then(() => {

        window.location.href = '../../../screens/menu-administrador.html';
    });
})
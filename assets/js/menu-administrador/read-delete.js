const crearProducto = (url, nombre, precio, id) => {

    const padreDiv = document.getElementsByClassName('productos');
    const nuevoDiv = document.createElement('div');
    padreDiv[0].appendChild(nuevoDiv);
    nuevoDiv.classList.add('productos__divisor-tarjeta');

    const linea = 
    `<img class="productos__divisor-tarjeta__imagen" src="${url}">
    <h2 class="productos__divisor-tarjeta__titulo">${nombre}</h2>
    <p class="productos__divisor-tarjeta__precio">&dollar; ${precio}</p>
    <button class="productos__boton-eliminar" id="${id}">Eliminar</button>
    <a href="./editar-producto.html?id=${id}" class="productos__enlace-editar">Editar</a>`;

    nuevoDiv.innerHTML = linea;
    const traerBotonEliminar = nuevoDiv.getElementsByClassName('productos__boton-eliminar');
    const idBoton = traerBotonEliminar[0].id;
    traerBotonEliminar[0].addEventListener('click', () => {

        eliminarProducto(idBoton);
    })
}

const leerProductos = () => fetch('http://localhost:3000/producto').then(respuesta => respuesta.json())

leerProductos().then(data => {

    data.forEach(({url, nombre, precio,id}) => {
        
        crearProducto(url, nombre, precio,id);
    });
}).catch(e => alert('ocurrio un error'));

const eliminarProducto = (id) => 

    fetch(`http://localhost:3000/producto/${id}`, {

        method: 'DELETE'
    });

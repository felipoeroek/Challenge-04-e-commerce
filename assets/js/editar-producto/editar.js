const detalleProducto = (id) =>

    fetch(`http://localhost:3000/producto/${id}`).then(respuesta => respuesta.json());

const actualizarProducto = (url, nombre, precio, id) =>

    fetch(`http://localhost:3000/producto/${id}`, {

        method: 'PUT',

        headers: {

            'Content-Type': 'application/json'
        },

        body: JSON.stringify({ url, nombre, precio })
    })

const obtenerInformacion = async () => {

    const url = new URL(window.location);
    const searchParams = url.searchParams.get('id');
    const traerUrl = document.getElementById('url-input');
    const traerNombre = document.getElementById('name-input');
    const traerPrecio = document.getElementById('precio-input');

    try {

        const valores = await detalleProducto(searchParams);

        traerUrl.value = valores.url;
        traerNombre.value = valores.nombre;
        traerPrecio.value = valores.precio;
    } catch {

        alert('Ocurrio un error');
    }
}

obtenerInformacion();

const traerFormulario = document.querySelector("[data-form]");

traerFormulario.addEventListener('submit', async(evento) => {

    evento.preventDefault();
    const url = new URL(window.location);
    const searchParams = url.searchParams.get('id');
    const traerUrl = document.getElementById('url-input').value;
    const traerNombre = document.getElementById('name-input').value;
    const traerPrecio = document.getElementById('precio-input').value;

    try{

        actualizarProducto(traerUrl, traerNombre, traerPrecio, searchParams);
        window.location.href = '../../../screens/menu-administrador.html';
    } catch {

        alert('Ocurrio un error');
    }
});
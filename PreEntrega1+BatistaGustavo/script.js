// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
});

const productos = [
    { id: 1, nombre: "Smartwatch Modelo A", precio: 100 },
    { id: 2, nombre: "Smartwatch Modelo B", precio: 150 },
    { id: 3, nombre: "Smartwatch Modelo C", precio: 200 }
];

function agregarAlCarrito(id, cantidad, factura) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = productos.find(p => p.id === id);
    const precioConImpuesto = factura ? producto.precio * 1.21 : producto.precio;
    const item = { ...producto, cantidad, precioTotal: precioConImpuesto * cantidad };

    carrito.push(item);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function mostrarProductos() {
    const contenedorProductos = document.getElementById('productos');
    productos.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.innerHTML = `<h4>${producto.nombre}</h4><p>$${producto.precio}</p><button class='btnAgregar' data-id='${producto.id}'>Agregar al Carrito</button>`;
        contenedorProductos.appendChild(productoElemento);
    });

    document.querySelectorAll('.btnAgregar').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.getAttribute('data-id'));
            const cantidad = 1;
            const factura = document.getElementById('checkFactura').checked;
            agregarAlCarrito(id, cantidad, factura);
        });
    });
}

function actualizarCarrito() {
    const contenedorCarrito = document.getElementById('carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    contenedorCarrito.innerHTML = '';
    carrito.forEach(item => {
        const itemElemento = document.createElement('div');
        itemElemento.innerHTML = `<h4>${item.nombre} - Cantidad: ${item.cantidad}</h4><p>Total: $${item.precioTotal.toFixed(2)}</p>`;
        contenedorCarrito.appendChild(itemElemento);
    });
}

document.getElementById('btnBuscar').addEventListener('click', () => {
    const query = document.getElementById('inputBuscar').value;
    buscarProducto(query);
});

function buscarProducto(query) {
    const resultados = productos.filter(p => p.nombre.toLowerCase().includes(query.toLowerCase()));
    const contenedorProductos = document.getElementById('productos');
    contenedorProductos.innerHTML = '';
    resultados.forEach(producto => {
        const productoElemento = document.createElement('div');
        productoElemento.innerHTML = `<h4>${producto.nombre}</h4><p>$${producto.precio}</p><button class='btnAgregar' data-id='${producto.id}'>Agregar al Carrito</button>`;
        contenedorProductos.appendChild(productoElemento);
    });
}







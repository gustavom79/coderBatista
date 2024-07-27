let carrito = [];

const productos = [
  { nombre: "Smartwatch A", precio: 100 },
  { nombre: "Smartwatch B", precio: 150 },
  { nombre: "Smartwatch C", precio: 200 },
];

function agregarAlCarrito() {
  let opciones = "Selecciona el smartwatch que deseas agregar:\n";
  productos.forEach((producto, index) => {
    opciones += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });

  const seleccion = parseInt(prompt(opciones)) - 1;

  if (seleccion >= 0 && seleccion < productos.length) {
    const productoSeleccionado = productos[seleccion];
    const cantidad = parseInt(
      prompt(
        `¿Cuántos ${productoSeleccionado.nombre} deseas agregar al carrito?`
      )
    );

    if (!isNaN(cantidad) && cantidad > 0) {
      carrito.push({
        nombre: productoSeleccionado.nombre,
        precio: productoSeleccionado.precio,
        cantidad,
      });
      let totalGastado = carrito.reduce(
        (total, item) => total + item.precio * item.cantidad,
        0
      );
      alert(
        `${cantidad} ${productoSeleccionado.nombre} agregados al carrito. Total gastado: $${totalGastado}`
      );
    } else {
      alert("Cantidad no válida.");
    }
  } else {
    alert("Selección no válida.");
  }
}

function verCarrito() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  let mensaje = "Carrito de compras:\n";
  let total = 0;

  carrito.forEach((item) => {
    let subtotal = item.precio * item.cantidad;
    total += subtotal;
    mensaje += `${item.nombre} - $${item.precio} x ${item.cantidad} = $${subtotal}\n`;
  });

  mensaje += `\nTotal: $${total}`;
  alert(mensaje);
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
  } else {
    let total = carrito.reduce(
      (total, item) => total + item.precio * item.cantidad,
      0
    );
    alert(
      `Compra finalizada. Total gastado: $${total}. Gracias por tu compra.`
    );
    carrito = []; // Vaciar el carrito después de la compra
  }
}

function iniciarTienda() {
  let opcion;
  do {
    opcion = prompt(
      "Selecciona una opción:\n1. Agregar al carrito\n2. Ver carrito\n3. Finalizar compra\n4. Salir"
    );
    switch (opcion) {
      case "1":
        agregarAlCarrito();
        break;
      case "2":
        verCarrito();
        break;
      case "3":
        finalizarCompra();
        break;
      case "4":
        alert("Gracias por visitar la tienda.");
        break;
      default:
        alert("Opción no válida. Intenta de nuevo.");
    }
  } while (opcion !== "4");
}

iniciarTienda();

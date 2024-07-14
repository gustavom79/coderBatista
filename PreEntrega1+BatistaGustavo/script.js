

function comprarSmartwatch() {
    let nombre = prompt("Bienvenido a nuestro e-commerce de smartwatches. ¿Cuál es tu nombre?");
    alert("Hola, " + nombre + ". Tenemos una variedad de smartwatches disponibles.");

    let modelo = prompt("¿Qué modelo de smartwatch te interesa? (Introduce 'Modelo A' o 'Modelo B')").toUpperCase();
    let color;
    let precio;

    switch (modelo) {
        case "MODELO A":
            color = "negro";
            precio = 299;
            break;
        case "MODELO B":
            color = "blanco";
            precio = 349;
            break;
        default:
            alert("Lo siento, no tenemos ese modelo disponible.");
            return; // Finaliza la función si el modelo no es válido
    }

    let confirmacion = confirm(`Has seleccionado el ${modelo} en color ${color} por $${precio}. ¿Deseas continuar con la compra?`);

    if (confirmacion) {
        alert("Gracias por tu compra, " + nombre + ". Tu nuevo smartwatch será enviado pronto.");
    } else {
        alert("No hay problema, " + nombre + ". Puedes seguir mirando nuestros productos. ¡Gracias por visitarnos!");
    }
}

comprarSmartwatch();






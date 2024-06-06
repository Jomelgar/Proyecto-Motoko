import Producto from './Producto.js';

let listado = [];

// La idea es que lo cree en el div, ya el CSS por defecto lo decora.

function createVisualProduct() {    
    // Crea arreglo que contendrá los productos

    let contenedorProductos = document.getElementById('contenedorProductos');

    listado.forEach((element, index) => {
        var nuevoProducto = document.createElement("div");
        nuevoProducto.classList.add("producto");

        // Crear elementos para el producto
        var nuevoTitulo = document.createElement("h1");
        nuevoTitulo.textContent = element.Nombre;

        var nuevoParrafo = document.createElement("p");
        nuevoParrafo.textContent = element.Descripcion;

        var nuevaImagen = document.createElement("img");
        nuevaImagen.src = element.Imagen;
        nuevaImagen.alt = element.Nombre;

        var nuevoPrecio = document.createElement("p");
        nuevoPrecio.textContent = "Precio: $" + element.Precio;

        var nuevoLabelCantidad = document.createElement("label");
        nuevoLabelCantidad.textContent = "Cantidad:";

        var nuevoSliderCantidad = document.createElement("input");
        nuevoSliderCantidad.type = "range";
        nuevoSliderCantidad.id = "cantidad" + index;
        nuevoSliderCantidad.name = "cantidad";
        nuevoSliderCantidad.min = "1";
        nuevoSliderCantidad.max = "10";
        nuevoSliderCantidad.value = "1";

        var nuevoSpanCantidad = document.createElement("span");
        nuevoSpanCantidad.id = "cantidadMostrada" + index;
        nuevoSpanCantidad.textContent = "1";

        var nuevoBotonComprar = document.createElement("button");
        nuevoBotonComprar.textContent = "Comprar";

        // Agregar los elementos al div de producto
        nuevoProducto.appendChild(nuevoTitulo);
        nuevoProducto.appendChild(nuevoParrafo);
        nuevoProducto.appendChild(nuevaImagen);
        nuevoProducto.appendChild(nuevoPrecio);
        nuevoProducto.appendChild(nuevoLabelCantidad);
        nuevoProducto.appendChild(nuevoSliderCantidad);
        nuevoProducto.appendChild(nuevoSpanCantidad);
        nuevoProducto.appendChild(nuevoBotonComprar);

        // Agregar el nuevo producto al contenedor de productos
        contenedorProductos.appendChild(nuevoProducto);

        // Actualizar el span de cantidad mostrada cuando se cambia el slider
        nuevoSliderCantidad.addEventListener('input', function() {
            nuevoSpanCantidad.textContent = this.value;
        });
    });
}

document.addEventListener('DOMContentLoaded',createVisualProduct());

export default listado; 

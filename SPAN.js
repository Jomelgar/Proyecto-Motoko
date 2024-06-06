document.addEventListener("DOMContentLoaded", function() {
    var cantidadSlider = document.getElementById("cantidad");
    var cantidadMostrada = document.getElementById("cantidadMostrada");

    // Actualiza el valor mostrado cuando el slider cambia
    cantidadSlider.addEventListener("input", function() {
        cantidadMostrada.textContent = cantidadSlider.value;
    });
});



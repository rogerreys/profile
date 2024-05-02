document.addEventListener("DOMContentLoaded", function () {
    screenSize();
});

function screenSize() {
    // Obtener el ancho y el largo de la pantalla
    let widthScreen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let heightScreen = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
    document.documentElement.style.setProperty("--var-width", widthScreen - 5 + "px");
    document.documentElement.style.setProperty("--var-height", heightScreen + "px");
}

// Obtener el ancho y el largo de la pantalla
var widthScreen = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var heightScreen = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


console.log(widthScreen+"px "+heightScreen+"px");
document.documentElement.style.setProperty("--var-width", widthScreen-17+"px");
document.documentElement.style.setProperty("--var-height", heightScreen+"px");
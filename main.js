const comprarLouis = document.getElementById("comprarLouis");
const comprarVicent = document.getElementById("comprarVicent");
const comprarEdvard = document.getElementById("comprarEdvard");

// Función para manejar el clic
function redireccionarAContacto() {
    window.location.href = "contacto.html";
}
//Listener a cada boton
if (comprarLouis) {
    comprarLouis.addEventListener("click", redireccionarAContacto);
}
if (comprarVicent) {
    comprarVicent.addEventListener("click", redireccionarAContacto);
}
if (comprarEdvard) {
    comprarEdvard.addEventListener("click", redireccionarAContacto);
}

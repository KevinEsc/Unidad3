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
// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        const nombre = document.getElementById("nombre").value.trim();
        const apellido = document.getElementById("apellido").value.trim();
        const email = document.getElementById("email").value.trim();
        const solicitud = document.getElementById("solicitud").value;
        const comentario = document.getElementById("comentario").value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let errores = [];

        if (nombre === "") errores.push("El nombre es obligatorio.");
        if (apellido === "") errores.push("El apellido es obligatorio.");
        if (!emailRegex.test(email)) errores.push("El correo electrónico no es válido.");
        if (solicitud === "") errores.push("Debe seleccionar un tipo de solicitud.");
        if (comentario === "") errores.push("Debe escribir su solicitud en el comentario.");
        if (errores.length > 0) {
            e.preventDefault(); // Evita el envío del formulario
            alert("Corrija los siguientes errores:\n\n" + errores.join("\n"));
        }
    });
});

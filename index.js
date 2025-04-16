const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

abrir.addEventListener("click",() =>{
    nav.classList.add("visible");
})
cerrar.addEventListener("click",() =>{
    nav.classList.remove("visible");    
})
/*botones de aceptar y rechazar ciras en citas pendientes*/
document.addEventListener("DOMContentLoaded", function () {
    const botonesAceptar = document.querySelectorAll(".accept");
    const botonesRechazar = document.querySelectorAll(".decline");

    botonesAceptar.forEach((boton) => {
      boton.addEventListener("click", function () {
        alert("✅ ¡Cita agendada exitosamente!");
      });
    });

    botonesRechazar.forEach((boton) => {
      boton.addEventListener("click", function () {
        alert("❌ Cita rechazada");
      });
    });
  });


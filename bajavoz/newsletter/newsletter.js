// =========================================================
// BAJA VOZ · newsletter: reservar silla baja el contador
// y contesta en voz baja.
// =========================================================

const boton = document.getElementById("reservar");                         // el botón
const cuenta = document.getElementById("cuenta");                          // «quedan 12 sillas»
let sillas = 12;                                                           // las que quedan

boton.addEventListener("click", () => {
  sillas -= 1;                                                             // una menos
  boton.textContent = "tu silla te espera";                                // el botón cambia
  boton.disabled = true;                                                   // y ya no se puede volver a pulsar
  cuenta.innerHTML = `quedan <b>${sillas}</b>. no se lo digas a mucha gente.`; // contesta bajito
});

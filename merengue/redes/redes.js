// =========================================================
// MERENGUE · redes: el reel va cambiando de escena solo, en bucle,
// y se para o sigue con un toque.
// =========================================================

// ---------- El reel ----------
const reel = document.getElementById("reel");                               // el móvil
const escenas = reel.querySelectorAll(".escena");                           // las escenas, en orden
const progreso = document.getElementById("progreso");                       // la barra de arriba
const DURACION = [1800, 1100, 1300, 1300, 1300, 2400];                      // cuánto dura cada escena (ms): 9,2 s en total
const TOTAL = DURACION.reduce((a, b) => a + b, 0);                          // duración del reel entero
let escena = 0;                                                             // la que se ve
let reloj = null;                                                           // el temporizador
let pausado = false;                                                        // si se ha parado con un toque
let transcurrido = 0;                                                       // ms ya vistos del reel (para la barra)

function mostrar(i) {                                                       // enseña la escena i
  escenas.forEach((e, j) => e.classList.toggle("activa", j === i));         // solo esa, activa
  transcurrido = DURACION.slice(0, i).reduce((a, b) => a + b, 0);           // lo que llevamos hasta aquí
  progreso.style.transition = "none";                                       // la barra salta a su sitio…
  progreso.style.width = (transcurrido / TOTAL) * 100 + "%";
  requestAnimationFrame(() => requestAnimationFrame(() => {                 // …y luego avanza hasta el final de la escena
    progreso.style.transition = `width ${DURACION[i]}ms linear`;
    progreso.style.width = ((transcurrido + DURACION[i]) / TOTAL) * 100 + "%";
  }));
}
function siguiente() {                                                      // pasa a la siguiente (y vuelve a empezar al final)
  escena = (escena + 1) % escenas.length;
  mostrar(escena);
  reloj = setTimeout(siguiente, DURACION[escena]);                          // programa la próxima
}
reel.addEventListener("click", () => {                                      // un toque para o sigue
  pausado = !pausado;
  reel.classList.toggle("pausado", pausado);                               // enseña el icono de pausa
  if (pausado) {
    clearTimeout(reloj);                                                    // para el temporizador
    progreso.style.width = getComputedStyle(progreso).width;                // y congela la barra donde está
  } else {
    mostrar(escena);                                                        // sigue desde el principio de la escena
    reloj = setTimeout(siguiente, DURACION[escena]);
  }
});

mostrar(0);                                                                 // empieza
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {              // si no se pide menos movimiento
  reloj = setTimeout(siguiente, DURACION[0]);                               // arranca solo
} else {
  escena = escenas.length - 1;                                              // si no: se queda en el cierre con el logo
  mostrar(escena);
}

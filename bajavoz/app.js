// =========================================================
// BAJA VOZ · el logo que baja la voz
// Con volumen alto, todas las letras miden lo mismo.
// Con volumen bajo, cada letra es más pequeña que la anterior (el logo de verdad).
// =========================================================

const svg = document.getElementById("logo");                               // donde se dibuja
const control = document.getElementById("volumen");                        // el deslizador
const susurro = document.getElementById("susurro");                        // la frase de abajo
const NS = "http://www.w3.org/2000/svg";
const BAJADA = 0.09;                                                       // cuánto encoge cada letra con el volumen al mínimo
const HUECO = 133;                                                         // el espacio entre "baja" y "voz"
const quieto = matchMedia("(prefers-reduced-motion: reduce)").matches;      // si se pide menos movimiento

// Crea un trazo por letra
const trazos = LETRAS.map((l) => {
  const p = document.createElementNS(NS, "path");
  p.setAttribute("d", l.d);                                                // el dibujo de la letra
  svg.appendChild(p);
  return p;
});

// Coloca las letras para un "silencio" q (0 = alto, 1 = el logo) y una entrada e (cuántas letras se ven, 0 a 7)
function pintar(q, e) {
  let x = 0; const pos = [];
  LETRAS.forEach((l, i) => {
    if (i === 4) x += HUECO;                                               // el espacio antes de "voz"
    const s = 1 - i * BAJADA * q;                                          // tamaño de esta letra
    pos.push({ x, s });
    x += l.avance * s - s * 10;                                            // avanza lo que mide
  });
  const ancho = 3140;                                                      // ancho con todo al máximo (fijo, así el logo encoge hacia el centro)
  const margen = (ancho - x) / 2;                                          // centra la palabra
  svg.setAttribute("viewBox", `-40 -760 ${ancho + 80} 1080`);
  trazos.forEach((p, i) => {
    const vis = Math.max(0, Math.min(1, e - i));                           // 0 = aún no ha salido, 1 = ya está
    p.setAttribute("transform", `translate(${margen + pos[i].x} ${(1 - vis) * 60}) scale(${pos[i].s})`); // sube un poco al aparecer
    p.style.opacity = vis;
  });
}

// Estado y animación suave
let q = 0, qMeta = 0, e = 0, eMeta = 0;                                    // lo que hay y adonde va
function bucle() {
  q += (qMeta - q) * 0.08;                                                 // se acerca poco a poco (suave)
  e += (eMeta - e) * 0.12;
  pintar(q, e);
  requestAnimationFrame(bucle);
}

// Frase según el volumen
function frase(v) {
  susurro.textContent = v > 80 ? "baja la voz." : v < 15 ? "así, bajito." : " ";
}

// La entrada: las letras salen una a una a todo volumen y luego el festival baja la voz
function entrada() {
  q = 0; qMeta = 0; e = 0; eMeta = 0; control.value = 100; frase(100);
  LETRAS.forEach((_, i) => setTimeout(() => { eMeta = i + 1; }, 250 + i * 160)); // una letra cada 0,16 s
  setTimeout(() => { qMeta = 1; control.value = 0; frase(0); }, 1900);    // y después, shhh
}

control.addEventListener("input", () => { qMeta = 1 - control.value / 100; frase(+control.value); }); // el deslizador manda

if (quieto) { q = qMeta = 1; e = eMeta = LETRAS.length; pintar(1, LETRAS.length); frase(0); } // sin animación: el logo tal cual
else { entrada(); bucle(); }

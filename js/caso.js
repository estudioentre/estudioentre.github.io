// =============================================================
// ENTRE — Página de caso de estudio
// Lee ?p=id de la dirección y rellena la página con ese proyecto.
// Ejemplo: proyecto.html?p=proyecto-03
// =============================================================

const parametros = new URLSearchParams(window.location.search);   // lee lo que va después del "?"
const idPedido = parametros.get("p");                               // el valor de "p"
let posicion = PROYECTOS.findIndex((p) => p.id === idPedido);       // busca su posición en la lista
if (posicion === -1) posicion = 0;                                  // si no existe, enseña el primero
const proyecto = PROYECTOS[posicion];                               // el proyecto elegido
const siguiente = PROYECTOS[(posicion + 1) % PROYECTOS.length];     // el siguiente (después del último vuelve al primero)

// Color del proyecto: van rotando los cuatro de la marca (bolita del título, números de los bloques…)
const COLORES = [["azul", "crema"], ["coral", "negro"], ["amarillo", "negro"], ["negro", "crema"]]; // [color, texto encima]
const [color, tinta] = COLORES[posicion % COLORES.length];          // el que le toca a este proyecto
const caso = document.querySelector(".caso");                       // el <main> de la página
caso.style.setProperty("--c", `var(--${color})`);                   // color del proyecto
caso.style.setProperty("--t", `var(--${tinta})`);                   // color del texto sobre ese color

// Título de la pestaña y descripción para Google
document.title = `${proyecto.titulo} — ENTRE`;                       // "[Proyecto 01] — ENTRE"
document.querySelector('meta[name="description"]').setAttribute("content", proyecto.resumen); // descripción

// Quita los corchetes de los nombres provisionales y añade la bolita al final de la última palabra
function conBolita(texto) {
  const palabras = texto.split(" ");                                // separa las palabras
  const ultima = palabras.pop();                                    // saca la última
  return `${palabras.join(" ")} <span class="sin-corte">${ultima}<span class="bolita"></span></span>`; // la une a su bolita
}

// Textos
document.getElementById("caso-numero").textContent = String(posicion + 1).padStart(2, "0"); // "01", "02"…
document.getElementById("caso-ejemplo").hidden = !proyecto.ejemplo;  // la pastilla "Ejemplo" solo en proyectos de muestra
document.getElementById("caso-titulo").innerHTML = conBolita(proyecto.titulo); // nombre con su bolita
document.getElementById("caso-resumen").textContent = proyecto.resumen;      // resumen
document.getElementById("caso-categoria").textContent = proyecto.categoria;  // categoría
document.getElementById("caso-anio").textContent = proyecto.anio;            // año
document.getElementById("caso-servicios").textContent = proyecto.servicios;  // qué hicimos

// Imagen principal (foto o cubierta tipográfica) y su pie
document.getElementById("caso-visual").innerHTML = pintarVisual(proyecto);
document.getElementById("caso-pie").textContent = proyecto.imagen
  ? `Fig. 01 — ${proyecto.ejemplo ? "Foto de ejemplo · Unsplash" : proyecto.alt}` // con foto: aviso de ejemplo o su descripción
  : "Fig. 01 — Cubierta provisional";                               // sin foto: cubierta tipográfica

// Galería: mientras no haya fotos propias, dos de otros proyectos para ver cómo queda la composición
const otros = PROYECTOS.filter((p) => p.id !== proyecto.id);        // todos menos este
const galeria = [otros[posicion % otros.length], otros[(posicion + 2) % otros.length]]; // dos distintos
document.getElementById("caso-galeria").innerHTML = galeria
  .map((p) => `<div data-revela>${pintarVisual(p)}</div>`)          // cada uno en su hueco
  .join("");                                                         // juntos

// Enlace al siguiente proyecto: su nombre con bolita y su foto en un círculo
document.getElementById("caso-siguiente").href = `proyecto.html?p=${siguiente.id}`; // dirección
document.getElementById("caso-siguiente-titulo").innerHTML = conBolita(siguiente.titulo); // nombre
const fotoSiguiente = document.getElementById("caso-siguiente-foto");  // el círculo
const posSiguiente = PROYECTOS.indexOf(siguiente);                    // posición del siguiente
if (siguiente.imagen) {
  fotoSiguiente.innerHTML = pintarVisual(siguiente);                  // con foto: su foto en el círculo
} else {                                                              // sin foto (cubierta): una bolita de su color con su número
  const [c, t] = COLORES[posSiguiente % COLORES.length];              // su color
  fotoSiguiente.style.background = `var(--${c})`;                    // fondo del círculo
  fotoSiguiente.style.color = `var(--${t})`;                         // color del número
  fotoSiguiente.innerHTML = `<span class="caso__siguiente-num">${String(posSiguiente + 1).padStart(2, "0")}</span>`; // "03"
}

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

// Título de la pestaña y descripción para Google
document.title = `${proyecto.titulo} — ENTRE`;                       // "[Proyecto 01] — ENTRE"
document.querySelector('meta[name="description"]').setAttribute("content", proyecto.resumen); // descripción

// Textos
document.getElementById("caso-titulo").textContent = proyecto.titulo;        // nombre
document.getElementById("caso-resumen").textContent = proyecto.resumen;      // resumen
document.getElementById("caso-categoria").textContent = proyecto.categoria;  // categoría
document.getElementById("caso-anio").textContent = proyecto.anio;            // año

// Imagen principal (foto o dibujo de muestra)
document.getElementById("caso-visual").innerHTML = pintarVisual(proyecto);

// Galería: mientras no haya fotos, dos dibujos de otros proyectos para ver cómo queda la composición
const otros = PROYECTOS.filter((p) => p.id !== proyecto.id);        // todos menos este
const galeria = [otros[posicion % otros.length], otros[(posicion + 2) % otros.length]]; // dos distintos
document.getElementById("caso-galeria").innerHTML = galeria
  .map((p) => `<div data-revela>${pintarVisual(p)}</div>`) // cada uno en su hueco
  .join("");                                                         // juntos

// Enlace al siguiente proyecto
document.getElementById("caso-siguiente").href = `proyecto.html?p=${siguiente.id}`; // dirección
document.getElementById("caso-siguiente-titulo").textContent = `${siguiente.titulo} →`; // nombre con flecha

// =========================================================
// MERENGUE · huecos de foto, fotos que siguen al ratón y apariciones
// =========================================================

// 1. Huecos de foto: si la imagen todavía no existe, se queda el bloque de color con su nombre
document.querySelectorAll(".foto img").forEach((img) => {
  const marcar = () => img.closest(".foto").classList.add("sin-foto");   // marca el hueco como vacío
  if (img.complete && img.naturalWidth === 0) marcar();                    // ya falló antes de llegar aquí
  img.addEventListener("error", marcar);                                   // o falla ahora
});

// 2. "dulce." va cambiando de sabor: violeta, glaseado y crema
const postre = document.getElementById("postre");                         // la palabra
const colores = ["#F2C35B", "#D8C8EC", "#F6EFE4"];                         // crema, violeta suave y glaseado
let turno = 0;                                                             // cuál toca
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {             // solo si no se pide menos movimiento
  setInterval(() => { turno = (turno + 1) % colores.length; postre.style.color = colores[turno]; }, 1800); // cambia cada 1,8 s
}

// 3. Los bloques aparecen suaves al entrar en pantalla
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((e) => {
    if (!e.isIntersecting) return;                                         // aún no se ve
    e.target.classList.add("visto");                                       // lo enseña
    observador.unobserve(e.target);                                        // y deja de vigilarlo
  });
}, { threshold: 0.15 });                                                   // cuando asoma un 15 %
document.querySelectorAll("[data-aparece]").forEach((el) => observador.observe(el));

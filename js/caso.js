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
document.getElementById("caso-cliente").textContent = proyecto.cliente;      // cliente
document.getElementById("caso-titulo").innerHTML = conBolita(proyecto.titulo); // nombre con su bolita
document.getElementById("caso-resumen").textContent = proyecto.resumen;      // resumen
document.getElementById("caso-categoria").textContent = proyecto.categoria;  // categoría
document.getElementById("caso-anio").textContent = proyecto.anio;            // año
document.getElementById("caso-servicios").textContent = proyecto.servicios;  // qué hicimos

// Imagen principal (foto o cubierta tipográfica) y su pie
document.getElementById("caso-visual").innerHTML = proyecto.portadaInteractiva // ¿la portada es una pieza interactiva?
  ? `<span class="pastilla-interactivo caso__pastilla-portada">Interactivo</span><iframe class="caso__portada-viva" src="${proyecto.portadaInteractiva}" title="${proyecto.titulo}, pieza interactiva"></iframe>` // sí: la pieza, en vivo
  : pintarVisual(proyecto);                                          // no: foto o cubierta
document.getElementById("caso-pie").textContent = proyecto.credito;  // crédito, si lo hay

// Los textos del caso
document.getElementById("caso-partida").textContent = proyecto.partida;       // punto de partida
document.getElementById("caso-desarrollo").innerHTML = proyecto.etapas        // ¿el desarrollo va por etapas?
  ? `<div class="caso__etapas">${proyecto.etapas.map((e) => `<article><strong>${e.fecha}</strong><h3>${e.titulo}</h3><p>${e.texto}</p></article>`).join("")}</div>
     <ul class="caso__aplicaciones">${proyecto.aplicaciones.map((a) => `<li>${a}</li>`).join("")}</ul>` // sí: etapas + dónde se aplicó
  : `<p class="caso__texto">${proyecto.desarrollo}</p>`;                       // no: un párrafo

// La estrategia: tres claves cortas, en columnas (solo si el proyecto la tiene)
if (proyecto.estrategia) {
  const cajaEstrategia = document.getElementById("caso-estrategia");  // el hueco
  cajaEstrategia.hidden = false;                                      // lo enseña
  cajaEstrategia.innerHTML = `
    <h2 class="caso__rotulo"><span class="caso__num" aria-hidden="true"></span>La estrategia</h2> <!-- sin número, como el logo -->
    ${proyecto.insight ? `<p class="caso__insight"><span class="etiqueta">El insight</span>${proyecto.insight}</p>` : ""} <!-- el insight, en grande (si lo hay) -->
    <div class="caso__estrategia">${proyecto.estrategia.map((e) => `<article><h3>${e.titulo}</h3><p>${e.texto}</p></article>`).join("")}</div>`; // cada clave, su columna
}

// La web del proyecto, dentro de un navegador dibujado (solo si el proyecto tiene web)
if (proyecto.web) {
  const cajaWeb = document.getElementById("caso-web");               // el hueco
  cajaWeb.hidden = false;                                            // lo enseña
  cajaWeb.innerHTML = `
    <div class="caso__web-barra">                                    <!-- barra del navegador -->
      <span class="caso__web-puntos" aria-hidden="true"><i></i><i></i><i></i></span> <!-- los tres botones -->
      <span class="pastilla-interactivo">Interactivo</span>          <!-- avisa de que se puede tocar -->
      ${proyecto.webEnlace === false ? "" : `<a class="enlace-flecha" href="${proyecto.web}" target="_blank" rel="noopener">Abrir la web <span aria-hidden="true">↗</span></a>`} <!-- a pantalla completa (si se quiere) -->
    </div>
    <iframe src="${proyecto.web}" title="Pieza interactiva de ${proyecto.titulo}" loading="lazy"></iframe>`; // la pieza de verdad
}

// Ejemplos de redes (carrusel, reel…), también navegables (solo si el proyecto los tiene)
if (proyecto.redes) {
  const cajaRedes = document.getElementById("caso-redes");          // el hueco
  cajaRedes.hidden = false;                                          // lo enseña
  cajaRedes.innerHTML = `
    <div class="caso__web-barra">                                    <!-- la misma barra que la web -->
      <span class="caso__web-puntos" aria-hidden="true"><i></i><i></i><i></i></span>
      <span class="caso__redes-titulo">${proyecto.redesTitulo || "Redes"}</span>                  <!-- qué es -->
      <span class="pastilla-interactivo">Interactivo</span>          <!-- avisa de que se puede tocar -->
    </div>
    <iframe src="${proyecto.redes}" title="${proyecto.redesTitulo || "Ejemplos de redes"} de ${proyecto.titulo}" loading="lazy"></iframe>`; // la pieza
}

// El logo: cómo se hizo, con sus dos versiones y sus colores (solo si el proyecto lo tiene)
if (proyecto.logo) {
  const l = proyecto.logo;                                           // atajo
  const cajaLogo = document.getElementById("caso-marca");            // el hueco
  cajaLogo.hidden = false;                                           // lo enseña
  cajaLogo.innerHTML = `
    <h2 class="caso__rotulo"><span class="caso__num" aria-hidden="true"></span>El logo</h2> <!-- rótulo sin número: es parte del desarrollo -->
    <p class="caso__texto">${l.texto}</p>
    ${l.animacion                                                    // ¿el logo tiene animación?
      ? `<div class="caso__web caso__web--logo">                       <!-- sí: el logo animado, navegable -->
           <div class="caso__web-barra"><span class="caso__web-puntos" aria-hidden="true"><i></i><i></i><i></i></span><span class="pastilla-interactivo">Interactivo</span></div>
           <iframe src="${l.animacion}" title="Logo animado de ${proyecto.titulo}" loading="lazy"></iframe>
         </div>`
      : `<div class="caso__logos">                                      <!-- no: las dos versiones, lado a lado -->
           <figure><img src="${l.imagen}" alt="Logo de ${proyecto.titulo}"></figure>
           <figure class="caso__logos-negativo" style="background: ${l.fondoNegativo || "#B5262B"}"><img src="${l.negativo}" alt="Logo de ${proyecto.titulo} en negativo"></figure>
         </div>`}
    ${l.construccion ? `<figure class="caso__construccion"><img src="${l.construccion}" alt="${l.construccionAlt || "Construcción del logo de " + proyecto.titulo}"></figure>` : ""} <!-- cómo está construido (si lo hay) -->
    <ul class="caso__franja">${l.colores.map((c) => `<li style="--m: ${c.hex}; --mt: ${textoSobre(c.hex)}"><span>${c.nombre}</span>${c.hex}</li>`).join("")}</ul>`; // los colores, de borde a borde
}

// El lema: la frase en grande, cómo se completa y cómo habla la marca (solo si el proyecto lo tiene)
if (proyecto.lema) {
  const m = proyecto.lema;                                           // atajo
  const cajaLema = document.getElementById("caso-lema");             // el hueco
  cajaLema.hidden = false;                                           // lo enseña
  cajaLema.innerHTML = `
    <h2 class="caso__rotulo"><span class="caso__num" aria-hidden="true"></span>El lema</h2> <!-- sin número, como el logo -->
    <p class="caso__texto">${m.texto}</p>
    <div class="caso__lema">                                         <!-- la frase, enorme, con la palabra tachada -->
      <p class="caso__lema-frase">${m.antes} <s>${m.tachada}</s>.</p>
      <ul class="caso__lema-respuestas">${m.respuestas.map((r) => `<li style="--m: ${r.hex}; --mt: ${textoSobre(r.hex)}">${r.texto}</li>`).join("")}</ul> <!-- y cómo se completa -->
    </div>
    <div class="caso__reglas">${m.reglas.map((r, i) => `<article><span>${String(i + 1).padStart(2, "0")}</span><h3>${r.titulo}</h3><p>${r.texto}</p></article>`).join("")}</div>`; // cómo habla
}

// Texto negro o crema según lo claro que sea el color de fondo
function textoSobre(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)); // rojo, verde y azul
  return (r * 299 + g * 587 + b * 114) / 1000 > 150 ? "#111111" : "#F4F0E8"; // brillo percibido
}

// Fotos a todo el ancho dentro del relato (solo si el proyecto las tiene)
[["caso-foto-idea", proyecto.fotoIdea], ["caso-foto-cierre", proyecto.fotoCierre]].forEach(([id, foto]) => {
  if (!foto) return;                                                 // sin foto, el hueco sigue oculto
  const hueco = document.getElementById(id);                         // el hueco
  hueco.hidden = false;                                              // lo enseña
  hueco.innerHTML = `<img src="${foto.imagen}" alt="${foto.alt}" loading="lazy" decoding="async">`; // y pone la imagen
});

// La idea: la primera frase va enorme (su punto es una bolita) y el resto, pequeño
const finFrase = proyecto.idea.indexOf(". ");                        // dónde acaba la primera frase
const fraseIdea = proyecto.idea.slice(0, finFrase);                  // la frase, sin el punto
document.getElementById("caso-idea-frase").innerHTML = conBolita(fraseIdea); // con su bolita
document.getElementById("caso-idea-resto").textContent = proyecto.idea.slice(finFrase + 2); // lo que queda

// Resultado: si hay datos, cifras grandes; si no, una frase
const cajaResultado = document.getElementById("caso-resultado");     // el hueco del resultado
cajaResultado.innerHTML = Array.isArray(proyecto.resultado)          // ¿es una lista de datos?
  ? `<ul class="caso__cifras">${proyecto.resultado.map((dato) => `<li><strong>${dato.cifra}</strong><span>${dato.texto}</span></li>`).join("")}</ul>` // sí: cifra + explicación
  : `<p class="caso__texto">${proyecto.resultado}</p>`;              // no: un párrafo

// Quién hizo qué: solo aparece si el proyecto lo indica
if (proyecto.autoria) {
  document.getElementById("caso-autoria-fila").hidden = false;       // enseña el bloque
  document.getElementById("caso-autoria").innerHTML = proyecto.autoria
    .map((persona) => `<div><dt>${persona.nombre}</dt><dd>${persona.rol}</dd></div>`) // nombre y papel
    .join("");                                                       // juntos
}

// Galería: solo aparece cuando el proyecto tiene imágenes propias
document.getElementById("caso-galeria").innerHTML = proyecto.galeria
  .map((foto) => `<div data-revela><img src="${foto.imagen}" alt="${foto.alt}" loading="lazy" decoding="async"></div>`) // cada imagen en su hueco
  .join("");                                                         // juntas

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

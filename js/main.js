// =============================================================
// ENTRE — Interacciones
// Sirve para la portada (index.html) y para el caso (proyecto.html).
// Cada bloque comprueba primero si su elemento existe en la página.
// =============================================================

// ¿La persona ha pedido menos animación en su sistema?
const menosMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// ¿Usa ratón (y no una pantalla táctil)?
const conRaton = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

// ---------- 1. Año del pie ----------
const anio = document.getElementById("anio");                  // el <span> del año
if (anio) anio.textContent = new Date().getFullYear();          // pone el año actual

// ---------- 2. Pintar los proyectos (datos de js/proyectos.js) ----------
const lista = document.getElementById("lista-proyectos");      // el contenedor vacío
if (lista && typeof PROYECTOS !== "undefined") {               // si existe y hay datos
  lista.innerHTML = PROYECTOS.map(tarjetaProyecto).join("");    // convierte cada proyecto en una tarjeta y las junta
}

// ---------- 3. Cabecera: fondo al bajar, se esconde al bajar y vuelve al subir ----------
const cabecera = document.getElementById("cabecera");          // la cabecera
let scrollAnterior = 0;                                         // dónde estaba el scroll la última vez
function actualizarCabecera() {
  const y = window.scrollY;                                     // scroll actual
  cabecera.classList.toggle("con-fondo", y > 40);               // a partir de 40 px, fondo crema
  const bajando = y > scrollAnterior && y > 400;                // bajando y ya lejos del principio
  cabecera.classList.toggle("oculta", bajando);                 // si baja, se esconde; si sube, aparece
  scrollAnterior = y;                                           // guarda la posición para la próxima vez
}

// ---------- 4. Menú móvil ----------
const menuBoton = document.getElementById("menu-boton");       // botón de las dos rayas
const menuMovil = document.getElementById("menu-movil");       // capa del menú
function cerrarMenu() {
  document.body.classList.remove("menu-abierto");               // quita la clase que lo abre
  menuBoton.setAttribute("aria-expanded", "false");             // avisa a lectores de pantalla
  menuBoton.querySelector(".sr-only").textContent = "Abrir menú"; // cambia el texto oculto
  menuMovil.inert = true;                                       // sus enlaces dejan de ser accesibles con el tabulador
}
if (menuBoton && menuMovil) {
  menuBoton.addEventListener("click", () => {                   // al pulsar el botón…
    const abrir = !document.body.classList.contains("menu-abierto"); // ¿estaba cerrado?
    if (!abrir) return cerrarMenu();                            // si estaba abierto, se cierra
    document.body.classList.add("menu-abierto");                // si no, se abre
    menuBoton.setAttribute("aria-expanded", "true");            // avisa de que está abierto
    menuBoton.querySelector(".sr-only").textContent = "Cerrar menú"; // texto oculto actualizado
    menuMovil.inert = false;                                    // enlaces accesibles
  });
  menuMovil.querySelectorAll("a").forEach((a) => a.addEventListener("click", cerrarMenu)); // al elegir sección, se cierra
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrarMenu(); });  // la tecla Esc también cierra
}

// ---------- 5. Aparecer al entrar en pantalla ----------
const observador = new IntersectionObserver((entradas) => {    // vigila qué entra en pantalla
  entradas.forEach((entrada) => {
    if (!entrada.isIntersecting) return;                        // si aún no se ve, nada
    entrada.target.classList.add("visible");                    // se ve: añade la clase que lo anima
    observador.unobserve(entrada.target);                       // y deja de vigilarlo (solo se anima una vez)
  });
}, { rootMargin: "0px 0px -8% 0px" });                           // se activa un poco antes del borde de abajo
document.querySelectorAll("[data-revela]").forEach((el) => observador.observe(el)); // vigila todos los marcados

// La portada se anima nada más cargar
requestAnimationFrame(() => document.body.classList.add("cargada")); // en el siguiente fotograma, para que la transición se vea

// ---------- 6. Menú: marcar la sección en la que estás ----------
const enlacesNav = [...document.querySelectorAll(".nav a[href^='#']")]; // enlaces del menú de escritorio
const seccionesNav = enlacesNav.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean); // sus secciones
function marcarSeccion() {                                      // se llama desde el bucle de scroll (punto 8)
  let actual = null;                                            // sección activa
  seccionesNav.forEach((s) => {
    const r = s.getBoundingClientRect();                        // posición de la sección
    if (r.top <= window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5) actual = s; // la que cruza el centro de la pantalla
  });
  enlacesNav.forEach((a) => a.classList.toggle("activo", actual !== null && a.getAttribute("href") === "#" + actual.id)); // marca su enlace
}

// ---------- 7. Titular de portada: las letras reaccionan al cursor ----------
const letras = [];                                              // aquí guardamos cada letra con su posición
document.querySelectorAll("[data-letras]").forEach((linea) => {
  const texto = linea.textContent;                              // "Las ideas"
  linea.textContent = "";                                       // vacía la línea
  [...texto].forEach((caracter) => {                            // recorre letra a letra
    if (caracter === " ") { linea.append(" "); return; }        // los espacios se quedan como texto
    const span = document.createElement("span");                // cada letra en su <span>
    span.className = "letra";                                   // con su clase
    span.textContent = caracter;                                // y su letra
    linea.append(span);                                         // la añade
    letras.push({ el: span, x: 0, y: 0 });                      // la guarda para el efecto
  });
});
function medirLetras() {                                        // calcula el centro de cada letra en la página
  letras.forEach((l) => {
    const r = l.el.getBoundingClientRect();                     // caja de la letra
    l.x = r.left + r.width / 2;                                 // centro horizontal
    l.y = r.top + r.height / 2 + window.scrollY;                // centro vertical (contando el scroll)
  });
}
if (letras.length && conRaton && !menosMovimiento) {            // solo con ratón y si no se pidió menos movimiento
  document.fonts.ready.then(medirLetras);                       // mide cuando la tipografía ya ha cargado
  window.addEventListener("resize", medirLetras);               // y otra vez si cambia el tamaño de la ventana
  let pendiente = false;                                        // para no calcular más de una vez por fotograma
  window.addEventListener("pointermove", (e) => {
    if (pendiente) return;                                      // ya hay un cálculo en cola
    pendiente = true;
    requestAnimationFrame(() => {                               // calcula en el próximo fotograma
      const py = e.clientY + window.scrollY;                    // posición del ratón en la página
      letras.forEach((l) => {
        const d = Math.hypot(e.clientX - l.x, py - l.y);        // distancia del ratón a la letra
        const fuerza = Math.max(0, 1 - d / 260);                // 1 justo encima, 0 a 260 px o más
        l.el.style.setProperty("--wdth", (100 - fuerza * 25).toFixed(1)); // cuanto más cerca, más estrecha (de 100 a 75)
      });
      pendiente = false;                                        // listo para el siguiente
    });
  });
}

// ---------- 7b. Texto del estudio: separar las palabras para encenderlas una a una ----------
const textoEstudio = document.getElementById("texto-estudio");  // el párrafo grande
const palabras = [];                                            // aquí guardamos cada palabra
if (textoEstudio) {
  [...textoEstudio.childNodes].forEach((nodo) => {              // recorre lo que hay dentro del párrafo
    if (nodo.nodeType === Node.TEXT_NODE) {                     // si es texto normal…
      const trozos = nodo.textContent.split(/(\s+)/);           // …lo corta en palabras, guardando los espacios
      const fragmento = document.createDocumentFragment();      // contenedor temporal
      trozos.forEach((t) => {
        if (!t) return;                                         // trozo vacío: nada
        if (/^\s+$/.test(t)) { fragmento.append(" "); return; } // espacio: se queda como espacio
        const span = document.createElement("span");            // palabra: en su <span>
        span.className = "palabra";
        span.textContent = t;
        fragmento.append(span);
        palabras.push(span);                                    // la guardamos en orden
      });
      nodo.replaceWith(fragmento);                              // cambia el texto por las palabras separadas
    } else if (nodo.nodeType === Node.ELEMENT_NODE) {           // si es un elemento (la pastilla "entre")…
      nodo.classList.add("palabra");                            // …cuenta como una palabra más
      palabras.push(nodo);
    }
  });
}
function encenderPalabras(alto) {                               // se llama desde el bucle de scroll
  if (!palabras.length) return;                                 // si no hay palabras, nada
  const r = textoEstudio.getBoundingClientRect();               // dónde está el párrafo
  const avance = limitar((alto * 0.85 - r.top) / (alto * 0.55), 0, 1); // 0 al asomar, 1 cuando ya está arriba
  const total = palabras.length + 3;                            // +3: así las últimas también llegan a encenderse del todo
  palabras.forEach((p, i) => {
    const luz = menosMovimiento ? 1 : limitar(avance * total - i, 0, 1); // cada palabra se enciende un poco después de la anterior
    p.style.setProperty("--luz", (0.15 + luz * 0.85).toFixed(2)); // de 0,15 (apagada) a 1 (encendida)
    if (p.classList.contains("pastilla")) p.classList.toggle("encendida", luz > 0.9); // la pastilla se rellena al encenderse
  });
}

// ---------- 8. Todo lo que depende del scroll, en un solo bucle ----------
const capasParalaje = [...document.querySelectorAll("[data-paralaje]")]; // elementos que se mueven a otra velocidad
const partida = document.getElementById("partida");             // "EN — TRE"
const pasos = document.getElementById("pasos");                 // la línea con las bolitas del proceso
const marcaContacto = document.getElementById("marca-contacto"); // los dos círculos grandes del contacto
const limitar = (n, min, max) => Math.min(max, Math.max(min, n)); // deja un número entre un mínimo y un máximo

function alHacerScroll() {
  const alto = window.innerHeight;                              // alto de la ventana
  if (cabecera) actualizarCabecera();                           // cabecera
  marcarSeccion();                                              // enlace activo del menú
  encenderPalabras(alto);                                       // texto del estudio, palabra a palabra

  if (!menosMovimiento) {
    capasParalaje.forEach((el) => {                             // paralaje: se desplazan un poco
      const r = el.getBoundingClientRect();                     // dónde está
      if (r.bottom < -200 || r.top > alto + 200) return;        // si está lejos de la pantalla, no lo toques
      const centro = r.top + r.height / 2 - alto / 2;           // distancia del centro del elemento al centro de la pantalla
      el.style.translate = `0 ${(centro * parseFloat(el.dataset.paralaje)).toFixed(1)}px`; // lo mueve según su factor
    });
  }

  if (partida) {                                                // la palabra que se abre
    const r = partida.getBoundingClientRect();                  // su posición
    const abre = limitar((alto * 0.95 - r.top) / (alto * 0.55), 0, 1); // 0 al asomar, 1 al llegar a media pantalla
    partida.style.setProperty("--abre", menosMovimiento ? 1 : abre.toFixed(3)); // se lo pasa al CSS
  }

  if (pasos) {                                                  // la línea que une las bolitas
    const r = pasos.getBoundingClientRect();                    // caja de los pasos
    const avance = limitar((alto * 0.85 - r.top) / (alto * 0.5), 0, 1); // 0 al asomar, 1 cuando ya están a media pantalla
    pasos.style.setProperty("--avance", menosMovimiento ? 1 : avance.toFixed(3)); // 0 = sin dibujar, 1 = completa
  }

  if (marcaContacto) {                                          // los dos círculos se acercan hasta formar el logo
    const r = marcaContacto.getBoundingClientRect();            // su posición
    const junta = limitar((alto * 0.95 - r.top) / (alto * 0.6), 0, 1); // 0 al asomar, 1 al llegar arriba
    marcaContacto.style.setProperty("--separa", menosMovimiento ? 0 : (1 - junta).toFixed(3)); // 1 = separados, 0 = juntos
  }
}
let scrollPendiente = false;                                    // evita repetir el cálculo en el mismo fotograma
window.addEventListener("scroll", () => {
  if (scrollPendiente) return;                                  // ya está en cola
  scrollPendiente = true;
  requestAnimationFrame(() => { alHacerScroll(); scrollPendiente = false; }); // calcula una vez por fotograma
}, { passive: true });                                          // "passive": el scroll va fluido
window.addEventListener("resize", alHacerScroll);               // recalcula si cambia la ventana
alHacerScroll();                                                // y una vez al empezar

// ---------- 9. Servicios: la tarjeta azul sigue al ratón dentro de su fila ----------
if (conRaton) {
  document.querySelectorAll(".servicio").forEach((fila) => {    // cada fila de servicio
    const tarjeta = fila.querySelector(".servicio__flotante");  // su tarjeta flotante
    if (!tarjeta) return;                                       // si no tiene, nada
    fila.addEventListener("pointermove", (e) => {               // al mover el ratón por la fila…
      const r = fila.getBoundingClientRect();                   // caja de la fila
      tarjeta.style.setProperty("--fx", (e.clientX - r.left) + "px"); // posición horizontal dentro de la fila
      tarjeta.style.setProperty("--fy", (e.clientY - r.top) + "px");  // posición vertical dentro de la fila
    });
  });
}

// ---------- 10. Cursor "Ver proyecto" ----------
const cursor = document.getElementById("cursor");              // el círculo coral
if (cursor && conRaton) {
  let x = -200, y = -200, cx = -200, cy = -200;                 // destino (ratón) y posición actual del círculo
  window.addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; }); // guarda dónde está el ratón
  (function seguir() {                                          // bucle de animación
    cx += (x - cx) * 0.2;                                       // se acerca un 20 % cada fotograma (movimiento suave)
    cy += (y - cy) * 0.2;
    cursor.style.setProperty("--x", cx.toFixed(1) + "px");      // mueve el círculo
    cursor.style.setProperty("--y", cy.toFixed(1) + "px");
    requestAnimationFrame(seguir);                              // repite en el siguiente fotograma
  })();
  document.querySelectorAll("[data-cursor]").forEach((el) => {  // cada elemento que lo activa
    el.addEventListener("pointerenter", () => {                 // al entrar con el ratón…
      cursor.firstElementChild.textContent = el.dataset.cursor; // pone su texto ("Ver proyecto")
      cursor.classList.add("activo");                           // y lo muestra
    });
    el.addEventListener("pointerleave", () => cursor.classList.remove("activo")); // al salir, lo esconde
  });
}

// ---------- 11. Cinta: se mueve sola, acelera con el scroll y cambia de sentido al subir ----------
const cinta = document.getElementById("cinta");                // la cinta
if (cinta && !menosMovimiento) {
  const pista = cinta.querySelector(".cinta__pista");           // lo que se desplaza
  const grupo = cinta.querySelector(".cinta__grupo");           // una de las dos copias (para saber cuánto mide)
  let x = 0;                                                    // posición horizontal actual
  let sentido = 1;                                              // 1 = hacia la izquierda (bajando), -1 = hacia la derecha (subiendo)
  let impulso = 0;                                              // velocidad extra que da el scroll
  let ultimoScroll = window.scrollY;                            // para calcular cuánto se ha movido el scroll
  let encima = false;                                           // ¿está el ratón encima? (entonces va más lenta)
  cinta.addEventListener("pointerenter", () => { encima = true; });   // ratón dentro
  cinta.addEventListener("pointerleave", () => { encima = false; });  // ratón fuera
  (function mover() {
    const delta = window.scrollY - ultimoScroll;                // cuánto se ha hecho scroll desde el último fotograma
    ultimoScroll = window.scrollY;                              // lo guarda para la próxima vez
    if (delta !== 0) sentido = delta > 0 ? 1 : -1;              // bajar → izquierda; subir → derecha
    impulso += (Math.min(Math.abs(delta), 80) - impulso) * 0.12; // el impulso sigue al scroll con suavidad
    const velocidad = (encima ? 0.25 : 0.7) + impulso * 0.35;   // velocidad base (más lenta con el ratón encima) + impulso
    x -= velocidad * sentido;                                   // avanza
    const ancho = grupo.offsetWidth;                            // lo que mide una copia
    if (x <= -ancho) x += ancho;                                // si ya ha pasado una copia entera, vuelve atrás sin que se note
    if (x > 0) x -= ancho;                                      // lo mismo en el otro sentido
    pista.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`; // mueve la cinta
    cinta.style.setProperty("--late", (1 + Math.min(impulso / 60, 0.5)).toFixed(3)); // las bolitas crecen con la velocidad
    requestAnimationFrame(mover);                               // y repite en el siguiente fotograma
  })();
}

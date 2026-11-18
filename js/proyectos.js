// =============================================================
// ENTRE — Proyectos
// Aquí viven los datos del portfolio. Para añadir o cambiar un
// proyecto solo hay que tocar la lista PROYECTOS de abajo.
// La portada y la página de caso de estudio leen de aquí.
// =============================================================

// ---------- 1. La lista de proyectos ----------
// Cada { ... } es un proyecto. Campos:
//   id        → palabra única, sin espacios ni tildes (sale en la URL: proyecto.html?p=id)
//   titulo    → nombre del proyecto
//   categoria → tipo de trabajo (la etiqueta que se ve)
//   anio      → año del proyecto
//   resumen   → una o dos frases para la cabecera del caso
//   servicios → qué hicimos, en pocas palabras (sale en la cubierta)
//   maqueta   → cubierta tipográfica mientras no haya foto: "revista", "cartel" o "indice"
//   fondo     → color de esa cubierta: "azul", "crema" o "negro"
//   imagen    → ruta de la foto real (ej. "img/proyectos/mi-proyecto.webp"). Si la pones, sustituye a la cubierta
//   alt       → descripción de la foto para quien no la ve (accesibilidad y SEO)
//   layout    → tamaño en la página: grande, vertical, panoramico, medio, alto o ancho
//   ejemplo   → true mientras sea de muestra (enseña la etiqueta "Ejemplo"). Ponlo a false con los reales
const PROYECTOS = [
  {
    id: "proyecto-01",                                   // identificador para la URL
    titulo: "[Proyecto 01]",                             // nombre provisional, entre corchetes para que se vea que es de muestra
    categoria: "Branding e identidad visual",            // tipo de proyecto
    anio: "20XX",                                        // año provisional
    resumen: "Espacio para un proyecto de marca: de qué iba, para quién era y qué hicimos. Sustituir por un caso real.", // texto provisional
    servicios: "Estrategia · Identidad",                 // qué hicimos
    maqueta: "revista",                                  // cubierta tipo revista
    fondo: "azul",                                       // en azul
    imagen: "img/ejemplos/proyecto-01.webp",       // foto de ejemplo (Unsplash)
    alt: "Arquitectura blanca con escaleras y cielo azul",
    layout: "grande",                                    // tarjeta grande a la izquierda
    ejemplo: true,                                       // es un ejemplo
  },
  {
    id: "proyecto-02",
    titulo: "[Proyecto 02]",
    categoria: "Dirección de arte",
    anio: "20XX",
    resumen: "Espacio para un proyecto de dirección de arte: sesión, campaña o universo visual. Sustituir por un caso real.",
    servicios: "Dirección de arte · Fotografía",
    maqueta: "cartel",                                   // número gigante cortado a sangre
    fondo: "crema",
    imagen: "img/ejemplos/proyecto-02.webp",
    alt: "Mujer con vestido amarillo frente a una pared amarilla",
    layout: "vertical",                                  // alta a la derecha, más abajo
    ejemplo: true,
  },
  {
    id: "proyecto-03",
    titulo: "[Proyecto 03]",
    categoria: "Campañas y comunicación",
    anio: "20XX",
    resumen: "Espacio para una campaña: la idea, el mensaje y dónde vivió. Sustituir por un caso real.",
    servicios: "Concepto · Campaña · Redes",
    maqueta: "indice",                                   // como el índice de una revista
    fondo: "negro",
    imagen: null,
    alt: "",
    layout: "panoramico",                                // ocupa todo el ancho
    ejemplo: true,
  },
  {
    id: "proyecto-04",
    titulo: "[Proyecto 04]",
    categoria: "Diseño gráfico",
    anio: "20XX",
    resumen: "Espacio para una pieza gráfica o editorial: cartel, libro, packaging… Sustituir por un caso real.",
    servicios: "Editorial · Packaging",
    maqueta: "revista",
    fondo: "crema",
    imagen: "img/ejemplos/proyecto-04.webp",
    alt: "Sombra dura sobre la fachada de hormigón de un edificio",
    layout: "medio",                                     // cuadrada, desplazada
    ejemplo: true,
  },
  {
    id: "proyecto-05",
    titulo: "[Proyecto 05]",
    categoria: "Diseño y desarrollo web",
    anio: "20XX",
    resumen: "Espacio para una web: diseño, desarrollo y lo que consiguió. Sustituir por un caso real.",
    servicios: "Diseño web · Desarrollo",
    maqueta: "cartel",
    fondo: "negro",
    imagen: "img/ejemplos/proyecto-05.webp",
    alt: "Mujer con chaqueta azul apoyada en una pared",
    layout: "alto",                                      // vertical a la derecha
    ejemplo: true,
  },
  {
    id: "proyecto-06",
    titulo: "[Proyecto 06]",
    categoria: "Proyectos digitales",
    anio: "20XX",
    resumen: "Espacio para un proyecto digital: contenido, redes o una experiencia online. Sustituir por un caso real.",
    servicios: "Contenido · Experiencia digital",
    maqueta: "indice",
    fondo: "azul",
    imagen: "img/ejemplos/proyecto-06.webp",
    alt: "Escalera con barandilla oscura y sombras de sol",
    layout: "ancho",                                     // apaisada, alineada a la derecha
    ejemplo: true,
  },
];

// ---------- 2. Cubiertas tipográficas ----------
// Mientras no haya fotos, cada proyecto se presenta como una portada
// de revista: retícula, titular grande y datos técnicos. Son HTML y
// CSS (clases .cubierta en estilos.css), así que se adaptan a cualquier tamaño.

// Número del proyecto a partir de su posición en la lista: 0 → "01"
function numeroDe(p) {
  return String(PROYECTOS.indexOf(p) + 1).padStart(2, "0");                  // busca su posición y le pone un cero delante
}

// Partes comunes a las tres maquetas
function cabezaCubierta(p) {                                                   // fila de arriba: marca, categoría, año
  return `<div class="cubierta__fila"><span>ENTRE / Nº ${numeroDe(p)}</span><span>${p.categoria}</span><span>${p.anio}</span></div>`;
}
function pieCubierta(p) {                                                      // fila de abajo: datos técnicos
  return `<div class="cubierta__fila"><span>Cliente — [Cliente]</span><span>${p.servicios}</span><span>Ver caso →</span></div>`;
}

const MAQUETAS = {
  // Revista: titular enorme en Instrument Sans abajo a la izquierda
  revista: (p) => `
    ${cabezaCubierta(p)}
    <p class="cubierta__titular cubierta__mueve">${p.titulo.replace(/[\[\]]/g, "")}</p>   <!-- el nombre, sin corchetes -->
    ${pieCubierta(p)}`,

  // Cartel: el número en Anton, gigante y cortado por el borde
  cartel: (p) => `
    ${cabezaCubierta(p)}
    <p class="cubierta__subtitulo">${p.titulo.replace(/[\[\]]/g, "")}</p>               <!-- nombre pequeño -->
    <span class="cubierta__numero cubierta__mueve" aria-hidden="true">${numeroDe(p)}</span> <!-- número a sangre -->
    ${pieCubierta(p)}`,

  // Índice: como la página de contenidos de una revista
  indice: (p) => `
    ${cabezaCubierta(p)}
    <div class="cubierta__indice">
      <p class="cubierta__titular cubierta__mueve">${p.titulo.replace(/[\[\]]/g, "")}</p> <!-- nombre -->
      <ol>                                                                               <!-- "contenidos" del caso -->
        <li><span>01</span>Punto de partida</li>
        <li><span>02</span>La idea</li>
        <li><span>03</span>Desarrollo</li>
        <li><span>04</span>Resultado</li>
      </ol>
    </div>
    ${pieCubierta(p)}`,
};

// ---------- 3. Funciones para pintar ----------

// Devuelve lo que va dentro del hueco visual: la foto si existe o, si no, la cubierta
function pintarVisual(p) {
  if (p.imagen) {                                                              // ¿tiene foto real?
    return `<img src="${p.imagen}" alt="${p.alt || p.titulo}" loading="lazy" decoding="async">`; // foto con carga diferida
  }
  const maqueta = MAQUETAS[p.maqueta] || MAQUETAS.revista;                     // maqueta elegida (o revista si el nombre no existe)
  return `<div class="cubierta cubierta--${p.maqueta} cubierta--${p.fondo}" aria-hidden="true">${maqueta(p)}</div>`; // la envuelve con sus clases
}

// Devuelve el HTML de una tarjeta de proyecto para la portada
function tarjetaProyecto(p) {
  return `
    <a class="proyecto" href="proyecto.html?p=${p.id}" data-layout="${p.layout}" data-revela data-cursor="Ver proyecto">
      ${p.ejemplo ? '<span class="etiqueta-ejemplo">Ejemplo</span>' : ""}         <!-- etiqueta que muerde el borde (solo si es de muestra) -->
      <div class="proyecto__visual">${pintarVisual(p)}</div>                     <!-- foto o cubierta -->
      <div class="proyecto__info">                                                <!-- datos debajo -->
        <span class="proyecto__num">${numeroDe(p)}</span>                         <!-- número -->
        <div>
          <h3 class="proyecto__titulo">${p.titulo} <span class="flecha" aria-hidden="true">↗</span></h3> <!-- nombre + flecha -->
          <p class="proyecto__cat">${p.categoria}</p>                             <!-- categoría -->
        </div>
        <span class="proyecto__anio">${p.anio}</span>                             <!-- año -->
      </div>
    </a>`;
}

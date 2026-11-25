// =============================================================
// ENTRE — Proyectos
// Aquí viven los datos del portfolio. Para añadir o cambiar un
// proyecto solo hay que tocar la lista PROYECTOS de abajo.
// La portada y la página de caso de estudio leen de aquí.
// =============================================================

// ---------- 1. La lista de proyectos ----------
// Cada { ... } es un proyecto. Campos:
//   id, titulo, cliente, anio, categoria → datos de la ficha (id: sin espacios ni tildes, sale en la URL)
//   conceptual → true si es un autoencargo (no se muestra en la web)
//   credito    → nota opcional bajo la imagen (por ejemplo, la agencia donde se hizo)
//   resumen    → la necesidad del cliente, en una frase
//   servicios  → las etiquetas del proyecto
//   partida, idea, desarrollo → textos del caso de estudio
//   etapas, aplicaciones → opcional, sustituyen al texto de desarrollo
//   fotoIdea, fotoCierre  → opcional, imágenes a todo el ancho dentro del relato
//   resultado  → un texto o, si hay datos, una lista [ { cifra: "316", texto: "pantallas…" } ]
//   maqueta    → cubierta mientras no haya imagen: "revista", "cartel" o "indice"
//   fondo      → color de esa cubierta: "azul", "crema" o "negro"
//   imagen, alt → foto principal y su descripción (imagen: null = se ve la cubierta)
//   galeria    → más imágenes del caso: [ { imagen: "ruta", alt: "descripción" } ]
//   autoria    → opcional, quién hizo qué: [ { nombre: "...", rol: "..." } ]
//   layout     → tamaño en la portada: grande, vertical, panoramico, medio, alto o ancho
//   visible    → false = guardado pero sin publicar (bórralo para que aparezca)
const TODOS_LOS_PROYECTOS = [
  {
    id: "open-house-madrid",                             // proyecto real
    titulo: "Open House Madrid",
    cliente: "Open House Madrid (festival de arquitectura y ciudad, red Open House Worldwide)",
    anio: "2021–2025",
    categoria: "Branding e identidad visual",
    conceptual: false,
    credito: "Proyecto desarrollado en ASG Agencia",     // crédito obligatorio de este caso
    resumen: "Una identidad que evoluciona cada año.",
    servicios: "Estrategia · Identidad · Digital · Rebranding",
    partida: "Un festival que abre cada año, gratis, los edificios y estudios de Madrid. El logo ya existía: el reto era dar a cada edición su propio sistema gráfico sin perder la coherencia de la marca y, en el décimo aniversario, reforzar su personalidad.",
    idea: "Una puerta entreabierta. Una identidad que invita a entrar, igual que el festival invita a descubrir la ciudad desde dentro.",
    etapas: [                                            // el desarrollo, por etapas
      { fecha: "2021–2024", titulo: "Una identidad por edición", texto: "Cada año, un sistema gráfico a partir del lema y el programa, que evoluciona sin romper con el anterior." },
      { fecha: "2025", titulo: "Rebranding del décimo aniversario", texto: "Una retícula flexible y modular que ordena toda la comunicación, animada con código." },
      { fecha: "2021–2025", titulo: "La marca, en todos los canales", texto: "La estrategia de cada edición, gestión de la web, gestión diaria con visitantes, creación y envío de newsletters, y el cuidado de que la marca se viera igual en cada soporte, del cartel a la pantalla." },
    ],
    aplicaciones: ["Campañas", "Redes", "Newsletters", "Señalética urbana", "Pantallas", "Publicaciones", "Merchandising", "Web", "Manual de marca"], // dónde vive la marca
    resultado: [                                         // cada dato: la cifra grande y su explicación
      { cifra: "+50.000", texto: "visitantes en 73 edificios, 37 estudios, 12 rutas y 10 itinerarios" },
      { cifra: "2,6 M", texto: "visitas a la web, con 11 minutos de media" },
      { cifra: "+20.700", texto: "suscriptores a la newsletter, con un 64 % de apertura" },
      { cifra: "316", texto: "pantallas de la ciudad con la campaña" },
      { cifra: "100 → 10 %", texto: "de materiales impresos, con más de 2.000 descargas del programa online" },
    ],
    maqueta: "revista", fondo: "azul",
    imagen: "img/proyectos/ohm-portada.webp",            // foto principal, del portfolio de Tania
    alt: "Tres chicas con camisetas y bolsas de Open House Madrid en una azotea bajo el cielo de Madrid",
    galeria: [                                           // imágenes del caso de estudio
      { imagen: "img/proyectos/ohm-banderola.webp", alt: "Banderola de Open House Madrid junto a la Puerta de Alcalá" },
      { imagen: "img/proyectos/ohm-programa.webp", alt: "Manos sosteniendo varios programas del festival" },
      { imagen: "img/proyectos/ohm-exposicion.webp", alt: "Punto de información del festival con carteles y expositores" },
      { imagen: "img/proyectos/ohm-senaletica.webp", alt: "Visitantes con bolsas del festival junto a la señalética en el suelo" },
      { imagen: "img/proyectos/ohm-paseo.webp", alt: "Voluntaria con camiseta y bolsa de Open House Madrid caminando por la ciudad" },
      { imagen: "img/proyectos/ohm-prensa.webp", alt: "Página de periódico con la campaña de Open House Madrid" },
      { imagen: "img/proyectos/ohm-skyline.webp", alt: "Equipo del festival de espaldas mirando las torres de Madrid desde una azotea" },
      { imagen: "img/proyectos/ohm-balcon.webp", alt: "Persona con camiseta del festival asomada a una terraza sobre la Puerta del Sol" },
    ],
    fotoIdea: { imagen: "img/proyectos/ohm-visita.webp", alt: "Grupo de visitantes con una guía del festival ante la entrada de un edificio histórico" }, // a todo el ancho, tras La idea
    fotoCierre: { imagen: "img/proyectos/ohm-presentacion.webp", alt: "Presentación del festival en un auditorio con una gran pantalla" },                  // a todo el ancho, antes del resultado
    autoria: [                                           // quién hizo qué
      { nombre: "Tania de Azevedo", rol: "Dirección de arte, diseño gráfico y diseño de interfaz y web" },
      { nombre: "Rebeca González", rol: "Brand manager del festival: estrategia de marca, digital y cuidado de la marca en todos los canales" },
    ],
    layout: "grande",
  },
  {
    id: "merengue",
    titulo: "Merengue",
    cliente: "Merengue",
    anio: "2026",
    categoria: "Diseño gráfico y lanzamiento",
    conceptual: true,
    credito: "",
    resumen: "Lanzar un producto nuevo y que se hable de él.",
    servicios: "Branding · Web · PR · Pop-up",
    logo: {                                               // apartado del logo: cómo se hizo
      imagen: "img/logos/merengue-logo.svg",
      negativo: "img/logos/merengue-logo-crema.svg", fondoNegativo: "#7F55B0", // crema sobre violeta
      texto: "Una palabra que ya sabe a pastelería. El logotipo es una cursiva gorda y blandita, de curvas redondas como las de una manga pastelera, que se lee igual en un tubo de cuatro centímetros que en un escaparate. Va en violeta sobre papel de envolver, y cada sabor tiene su color: lila, glaseado y crema.",
      colores: [                                          // la paleta de la marca
        { nombre: "Violeta", hex: "#6B4796" },
        { nombre: "Lila", hex: "#B79AD6" },
        { nombre: "Glaseado", hex: "#F1E8D8" },
        { nombre: "Crema", hex: "#F2C35B" },
        { nombre: "Chocolate", hex: "#2E1C13" },
      ],
    },
    partida: "Una marca madrileña de bálsamos labiales que quiere lanzarse en un mercado lleno de marcas que se parecen entre sí: tonos nude, frascos minimalistas y el mismo mensaje.",
    idea: "A nadie le amarga un dulce. Dulces de toda la vida, para los labios: sabores de pastelería castiza (violeta, rosquilla de Santa Clara y bartolillo) y un universo que mezcla cosmética y pastelería de barrio.",
    desarrollo: "Naming de la gama y una web que se recorre como el mostrador de una pastelería, con el papel y los cordeles de toda la vida. Para el lanzamiento, un plan de prensa e influencers con una caja PR con forma de caja de pasteles, y un pop-up de fin de semana en una pastelería de toda la vida para que la gente los pruebe. Cada sabor tiene su frase: Violeta de Domingo, «Dulce, discreta y muy de Madrid»; Santa Clara, «El glaseado más fino de Madrid»; y Bartolillo, «Lo juramos, está cremita».",
    resultado: "Una marca que no se explica con ingredientes, sino con antojos: a nadie le amarga un dulce, y menos si se lleva puesto.",
    maqueta: "cartel", fondo: "crema", layout: "vertical",
    imagen: "img/proyectos/merengue-portada.webp",        // los tres bálsamos en el mostrador
    alt: "Los tres bálsamos Merengue, lila, glaseado y amarillo, con tapa de merengue, sobre una blonda en una pastelería",
    galeria: [                                            // fotos del producto
      { imagen: "img/proyectos/merengue-violeta.webp", alt: "Bálsamo Violeta de Domingo sobre papel de seda lila con caramelos de violeta" },
      { imagen: "img/proyectos/merengue-mano.webp", alt: "Mano sosteniendo el bálsamo lila con su tapa de merengue" },
      { imagen: "img/proyectos/merengue-clara.webp", alt: "Bálsamo Santa Clara, nacarado, junto a dos rosquillas glaseadas" },
      { imagen: "img/proyectos/merengue-bolsa.webp", alt: "Bálsamo Bartolillo amarillo junto a una bolsa de papel lila atada con cordel" },
    ],
    fotoIdea: { imagen: "img/proyectos/merengue-bandeja.webp", alt: "Bandeja de pasteles de domingo con los tres bálsamos entre rosquillas, bartolillos y merengues" }, // a todo el ancho, tras La idea
    web: "merengue/",                                    // su web, hecha en código: sale navegable en la ficha
  },
  {
    id: "baja-voz",
    titulo: "Baja Voz",
    cliente: "Baja Voz",
    anio: "2026",
    categoria: "Diseño y dirección de arte",
    conceptual: true,
    credito: "",
    resumen: "Que la experiencia del evento sea la marca.",
    servicios: "Dirección de arte · Evento · Señalética · Motion",
    partida: "Un festival de música acústica en patios, azoteas y portales de Bilbao, con aforos de 50 personas. Sin cabezas de cartel ni gran presupuesto, en una agenda llena de festivales enormes.",
    idea: "Un festival para escuchar, no para gritar. Si todos los festivales compiten por hacer más ruido, Baja Voz se diferencia bajando el volumen: textos en minúscula, mensajes que se leen casi en susurro y mucho espacio en blanco.",
    desarrollo: "La marca se vive en el evento: un sistema tipográfico donde la letra baja como baja el volumen, entradas, señalética para encontrar cada patio por el barrio, un mapa para el móvil y piezas animadas para anunciar cada concierto.",
    resultado: "Una campaña que destaca justo por no levantar la voz, y un sistema que funciona igual en una pantalla que en un portal.",
    maqueta: "indice", fondo: "negro", layout: "panoramico",
    portadaInteractiva: "bajavoz/",                       // en la ficha, la portada es el logo animado
    imagen: "img/proyectos/bajavoz-portada.webp",         // en la tarjeta de la portada de ENTRE, el cartel
    alt: "Cartel casi vacío de baja voz en un muro de piedra del Casco Viejo de Bilbao, con la frase «shhh. ya está aquí.»",
    logo: {                                               // apartado del logo: cómo se hizo
      imagen: "img/logos/bajavoz-logo.svg",
      negativo: "img/logos/bajavoz-logo-blanco.svg", fondoNegativo: "#111111", // las dos versiones, estáticas
      texto: "Un logotipo que hace lo que dice: cada letra es un poco más pequeña que la anterior, como una voz que se va apagando. Una cursiva serif fina, de las que se leen de cerca, siempre en minúscula y con mucho aire alrededor. Arriba, en la portada, puedes subirle el volumen y ver qué pasa.",
      colores: [                                          // la paleta: papel, tinta y un solo acento
        { nombre: "Papel", hex: "#F5F3EE" },
        { nombre: "Tinta", hex: "#111111" },
        { nombre: "Verde ría", hex: "#6F8F7A" },
      ],
    },
    fotoIdea: { imagen: "img/proyectos/bajavoz-patio.webp", alt: "Concierto acústico en un patio interior de Bilbao, con el público sentado en silencio alrededor de un dúo de voz y guitarra" }, // a todo el ancho, tras La idea
    galeria: [                                            // las piezas
      { imagen: "img/proyectos/bajavoz-portada.webp", alt: "Cartel casi vacío de baja voz en un muro de piedra del Casco Viejo de Bilbao, con la frase «shhh. ya está aquí.»" },
      { imagen: "img/proyectos/bajavoz-entradas.webp", alt: "Dos entradas de baja voz con sus normas («llega en silencio. el móvil, en modo avión…») sobre una mesa de madera, junto a un vaso de txakoli" },
      { imagen: "img/proyectos/bajavoz-senal.webp", alt: "Señal de baja voz en el portal de un edificio antiguo: «el concierto es aquí. baja la voz.»" },
    ],
    fotoCierre: { imagen: "img/proyectos/bajavoz-cierre.webp", alt: "El mismo patio, ya vacío y de noche: sillas plegables, la alfombra, una funda de guitarra y las luces todavía encendidas" }, // a todo el ancho, antes del resultado
  },
  {
    id: "pinturas-tirso",
    titulo: "Pinturas Tirso",
    cliente: "Pinturas Tirso",
    anio: "2026",
    categoria: "Campañas y comunicación",
    conceptual: true,
    credito: "",
    resumen: "Hacerse notar frente a las grandes superficies.",
    servicios: "Insight · Campaña · Exterior · Naming",
    partida: "Una droguería de pinturas de Madrid abierta desde 1958. Cada vez vende más blanco roto, gris perla y beige, igual que las grandes superficies. Las casas, los locales y hasta las marcas se están volviendo todos del mismo color.",
    idea: "Madrid no es beige. Si la ciudad tiene color, sus paredes también deberían tenerlo. Tirso deja de competir en precio y se convierte en la tienda que defiende el color.",
    desarrollo: "Una carta de colores con nombres castizos sacados de la calle: Amarillo Butano, Verde Quiosco, Rojo Ultramarinos, Azul Mono de Obra. Con ella, botes, escaparate, carteles tipográficos por el barrio y reels donde se ve cómo se mezcla cada color.",
    resultado: "Una tienda de barrio con un discurso propio, que vende algo que una gran superficie no puede copiar: criterio y carisma.",
    maqueta: "revista", fondo: "crema", layout: "ancho",
    imagen: "img/proyectos/tirso-calle.webp",             // la calle: el color que ya tiene Madrid
    alt: "Plaza de Madrid llena de color: frutería con toldo rojo, quiosco verde, bombona de butano, fachadas roja y amarilla y un hombre con mono azul",
    logo: {                                               // apartado del logo: cómo se hizo
      imagen: "img/logos/tirso-logo.svg",
      negativo: "img/logos/tirso-logo-negativo.svg",
      texto: "Tirso ya tenía un nombre que el barrio conocía, así que no había que inventar otro. El logotipo recupera la letra gorda y estrecha de los rótulos de ultramarinos y droguerías de toda la vida, la que se leía desde la otra acera. Debajo, una franja con los cuatro primeros colores de la carta y el «Pinturas · desde 1958» de siempre. Una marca nueva que parece que siempre estuvo ahí.",
      colores: [                                          // los colores de la franja
        { nombre: "Amarillo Butano", hex: "#F2A900" },
        { nombre: "Verde Quiosco", hex: "#2E6B4F" },
        { nombre: "Rojo Ultramarinos", hex: "#B5262B" },
        { nombre: "Azul Mono de Obra", hex: "#2A4D8F" },
      ],
    },
    galeria: [                                            // fotos de la campaña
      { imagen: "img/proyectos/tirso-botes.webp", alt: "Cinco botes de Pinturas Tirso en amarillo, verde, rojo, azul y rosa sobre una estantería de madera" },
      { imagen: "img/proyectos/tirso-mezcla.webp", alt: "Tintes amarillo y naranja cayendo en un bote de pintura blanca y mezclándose en espiral" },
      { imagen: "img/proyectos/tirso-abanico.webp", alt: "Manos de un dependiente con bata azul abriendo la carta de los diez colores" },
    ],
    web: "tirso/", webEnlace: false,                      // la carta de colores, navegable en la ficha (sin enlace para abrirla aparte)
    fotoCierre: { imagen: "img/proyectos/tirso-pared.webp", alt: "Salón con una pared recién pintada de Amarillo Butano, un rodillo y un bote de Tirso en el suelo" }, // a todo el ancho, antes del resultado
  },
  {
    id: "donde-paco",
    titulo: "Donde Paco",
    cliente: "Donde Paco",
    anio: "2026",
    categoria: "Estrategia y rebranding",
    conceptual: true,
    credito: "",
    resumen: "Atraer público nuevo sin perder el de siempre.",
    servicios: "Estrategia · Posicionamiento · Tono de voz · Identidad",
    partida: "Un bar de barrio en Madrid, abierto desde 1978. Clientela fiel pero cada vez más mayor, y el barrio lleno de gente joven que pasa por delante sin entrar. El riesgo: modernizarlo tanto que deje de ser él.",
    idea: "Lo de siempre, pero mejor contado. No había que cambiar el bar, sino enseñar lo que ya tenía: la caña bien tirada, la tortilla de la casa y el Paco de siempre detrás de la barra. Quitamos el «Bar» del nombre y nos quedamos con lo que todo el barrio ya decía: «vamos a Paco».",
    desarrollo: "Empezamos por la estrategia: a quién hablar, qué mantener y qué contar. De ahí salen un tono cercano y con retranca, un logotipo que nace de la letra del rótulo original, una carta rediseñada, servilletas, vasos y un perfil de Instagram donde los protagonistas son los clientes de siempre.",
    resultado: "Una marca que no necesita explicarse: los de toda la vida la reconocen y los nuevos tienen un motivo para entrar.",
    maqueta: "cartel", fondo: "negro", imagen: null, alt: "", galeria: [], layout: "alto", visible: false,
  },
  {
    id: "embrague",
    titulo: "Embrague",
    cliente: "Embrague",
    anio: "2026",
    categoria: "Diseño y desarrollo web",
    conceptual: true,
    credito: "",
    resumen: "Ponerle las cosas fáciles al cliente en digital.",
    servicios: "Web · Experiencia de usuario · Tono de voz · Contenido",
    partida: "Una autoescuela de Bilbao con buenos profesores y muchos aprobados, pero con el mismo problema que todas: a la gente le da pánico examinarse. Muchos suspensos son por nervios, no por no saber conducir.",
    idea: "Suelta poco a poco. Igual que el embrague, los nervios se controlan sin prisa. Una autoescuela que no vende aprobar rápido, sino llegar tranquilo al examen.",
    desarrollo: "Una web pensada para el alumno: reservar clases, ver su progreso y hacer test, con mensajes que quitan hierro («Has fallado 3. Pasa en las mejores familias»). Una identidad con tono cercano, sin la estética de señal de tráfico de siempre, y contenido que resuelve las dudas típicas antes del examen.",
    resultado: "Una autoescuela que se elige por cómo te hace sentir y una web que hace más fácil el día a día a alumnos y profesores.",
    maqueta: "indice", fondo: "azul", imagen: null, alt: "", galeria: [], layout: "ancho", visible: false,
  },
];

// Solo se publican los que no tienen visible: false
const PROYECTOS = TODOS_LOS_PROYECTOS.filter((p) => p.visible !== false);

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
  return `<div class="cubierta__fila"><span>Cliente — ${p.titulo}</span><span>${p.servicios}</span><span>Ver caso →</span></div>`;
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

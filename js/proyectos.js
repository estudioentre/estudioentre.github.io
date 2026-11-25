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
//   lema → opcional, apartado de branding: la frase, cómo se completa y cómo habla la marca
//   estrategia → opcional, tres claves cortas [ { titulo, texto } ]; insight → opcional, una frase en grande encima
//   etapas, aplicaciones → opcional, sustituyen al texto de desarrollo
//   fotoIdea, fotoCierre  → opcional, imágenes a todo el ancho dentro del relato
//   resultado  → un texto o, si hay datos, una lista [ { cifra: "316", texto: "pantallas…" } ]
//   maqueta    → cubierta mientras no haya imagen: "revista", "cartel" o "indice"
//   fondo      → color de esa cubierta: "azul", "crema" o "negro"
//   web, redes → opcional, piezas hechas en código que se ven navegables en la ficha (redesTitulo: su nombre, «Redes» si no se pone)
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
    servicios: "Estrategia · Branding · Web · Pop-up",
    logo: {                                               // apartado del logo: cómo se hizo
      imagen: "img/logos/merengue-logo.svg",
      negativo: "img/logos/merengue-logo-crema.svg", fondoNegativo: "#7F55B0", // crema sobre violeta
      construccion: "img/logos/merengue-construccion.svg", construccionAlt: "Construcción del logo de Merengue: línea base, altura x, descendente, el mismo círculo en las tres e y una sola inclinación", // cómo está hecho: guías, el círculo de las «e» y la inclinación
      texto: "Una palabra que ya sabe a pastelería. El logotipo es una cursiva gorda y blandita, de curvas redondas como las de una manga pastelera, que se lee igual en un tubo de cuatro centímetros que en un escaparate. Todas las letras viven entre la línea base y la altura x, sin ascendentes, para que la palabra sea un bloque compacto y blandito; solo la g baja, como el pico de la manga. Las tres e salen del mismo círculo y todo va inclinado al mismo ángulo, como cuando se escribe con manga pastelera. Va en violeta sobre papel de envolver, y cada sabor tiene su color: lila, glaseado y crema.",
      colores: [                                          // la paleta de la marca
        { nombre: "Violeta", hex: "#6B4796" },
        { nombre: "Lila", hex: "#B79AD6" },
        { nombre: "Glaseado", hex: "#F1E8D8" },
        { nombre: "Crema", hex: "#F2C35B" },
        { nombre: "Chocolate", hex: "#2E1C13" },
      ],
    },
    partida: "Una marca madrileña de bálsamos labiales que quiere lanzarse en un mercado lleno de marcas que se parecen entre sí: tonos nude, frascos minimalistas y el mismo mensaje.",
    estrategia: [                                         // la estrategia, en corto: para quién, qué vimos y dónde nos colocamos
      { titulo: "Para quién", texto: "Mujeres de 20 a 40 años que compran cosmética por capricho y ya no distinguen un bálsamo nude de otro." },
      { titulo: "Lo que vimos", texto: "En los labios todo sabe a vainilla o a nada. Nadie había pensado el sabor como un recuerdo: el de la pastelería del barrio." },
      { titulo: "Dónde nos colocamos", texto: "Ni farmacia ni lujo: un capricho de pastelería de 4,5 g. Precio de antojo, tono cercano y con guasa, y lo castizo como algo que se presume." },
    ],
    idea: "A nadie le amarga un dulce. Dulces de toda la vida, para los labios: sabores de pastelería castiza (violeta, rosquilla de Santa Clara y bartolillo) y un universo que mezcla cosmética y pastelería de barrio.",
    desarrollo: "Naming de la gama y una web que se recorre como el mostrador de una pastelería, con el papel y los cordeles de toda la vida. Para el lanzamiento, un pop-up de fin de semana en una confitería de toda la vida de Lavapiés, para que la gente los pruebe. Cada sabor tiene su frase: Violeta de Domingo, «Dulce, discreta y muy de Madrid»; Santa Clara, «El glaseado más fino de Madrid»; y Bartolillo, «Lo juramos, está cremita».",
    resultado: "Una marca que no se explica con ingredientes, sino con antojos: a nadie le amarga un dulce, y menos si se lleva puesto.",
    maqueta: "cartel", fondo: "crema", layout: "vertical",
    imagen: "img/proyectos/merengue-portada.webp",        // los tres bálsamos en el mostrador
    alt: "Los tres bálsamos Merengue, lila, glaseado y amarillo, con tapa de merengue, sobre una blonda en una pastelería",
    galeria: [],                                          // sin galería: la bolsa sale en su web, junto a «Lo que pone el tubo»
    web: "merengue/",                                    // su web, hecha en código: sale navegable en la ficha
    redes: "merengue/redes/",                             // ejemplos de redes: un carrusel y un reel, navegables
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
    servicios: "Estrategia · Dirección de arte · Señalética · Motion",
    partida: "Un festival de música acústica en patios, azoteas y portales de Bilbao, con aforos de 50 personas. Sin cabezas de cartel ni gran presupuesto, en una agenda llena de festivales enormes.",
    estrategia: [                                         // la estrategia, en corto: para quién, qué vimos y dónde nos colocamos
      { titulo: "Para quién", texto: "Gente de 25 a 45 años que va a los conciertos a escuchar, cansada de colas, de móviles en alto y de oír más al de al lado que al grupo." },
      { titulo: "Lo que vimos", texto: "Un festival pequeño nunca va a ganar en tamaño. Pero en una ciudad llena de ruido, el silencio es escaso, y lo escaso se valora." },
      { titulo: "Dónde nos colocamos", texto: "El aforo de 50 deja de ser un límite y pasa a ser lo que se ofrece. Se comunica poco y bajito, donde importa: el barrio, el boca a boca y la lista de correo." },
    ],
    idea: "Un festival para escuchar, no para gritar. Si todos los festivales compiten por hacer más ruido, Baja Voz se diferencia bajando el volumen: textos en minúscula, mensajes que se leen casi en susurro y mucho espacio en blanco.",
    desarrollo: "La marca se vive en el evento: un sistema tipográfico donde la letra baja como baja el volumen, un logotipo animado, carteles, entradas con sus normas, señalética para encontrar cada patio por el barrio y una newsletter que avisa del próximo concierto en voz baja.",
    resultado: "Una campaña que destaca justo por no levantar la voz, y un sistema que funciona igual en una pantalla que en un portal.",
    maqueta: "indice", fondo: "negro", layout: "panoramico",
    portadaInteractiva: "bajavoz/",                       // en la ficha, la portada es el logo animado
    redes: "bajavoz/newsletter/", redesTitulo: "Newsletter", // la newsletter de la lista, navegable
    imagen: "img/proyectos/bajavoz-portada.webp",         // en la tarjeta de la portada de ENTRE, el cartel
    alt: "Cartel casi vacío de baja voz en un muro de piedra del Casco Viejo de Bilbao, con la frase «shhh. ya está aquí.»",
    logo: {                                               // apartado del logo: cómo se hizo
      imagen: "img/logos/bajavoz-logo.svg",
      negativo: "img/logos/bajavoz-logo-blanco.svg", fondoNegativo: "#111111", // las dos versiones, estáticas
      construccion: "img/logos/bajavoz-construccion.svg", construccionAlt: "Construcción del logo de Baja Voz: todas las letras sobre la misma línea base y cada una más bajita, del 100 % de la primera «a» al 50 % de la «z»",
      texto: "Un logotipo que hace lo que dice: cada letra es un poco más pequeña que la anterior, como una voz que se va apagando. Una cursiva serif fina, de las que se leen de cerca, siempre en minúscula y con mucho aire alrededor. Todas las letras apoyan en la misma línea base y solo baja su altura: la «z» mide la mitad que la primera «a». Así el logo se lee como una frase dicha cada vez más bajito. Arriba, en la portada, puedes subirle el volumen y ver qué pasa.",
      colores: [                                          // la paleta: papel, tinta y un solo acento
        { nombre: "Papel", hex: "#F5F3EE" },
        { nombre: "Tinta", hex: "#111111" },
        { nombre: "Verde ría", hex: "#6F8F7A" },
      ],
    },
    fotoIdea: { imagen: "img/proyectos/bajavoz-cierre.webp", alt: "Patio interior de Bilbao de noche, preparado para el concierto: sillas plegables, una alfombra, una funda de guitarra y guirnaldas de luces" }, // a todo el ancho, tras La idea
    galeria: [                                            // las piezas
      { imagen: "img/proyectos/bajavoz-portada.webp", alt: "Cartel casi vacío de baja voz en un muro de piedra del Casco Viejo de Bilbao, con la frase «shhh. ya está aquí.»" },
      { imagen: "img/proyectos/bajavoz-entradas.webp", alt: "Dos entradas de baja voz con sus normas («llega en silencio. el móvil, en modo avión…») sobre una mesa de madera, junto a un vaso de txakoli" },
    ],
  },
  {
    id: "pinturas-tirso",
    titulo: "Pinturas Tirso",
    cliente: "Pinturas Tirso",
    anio: "2026",
    categoria: "Estrategia e identidad",
    conceptual: true,
    credito: "",
    resumen: "Hacerse notar frente a las grandes superficies.",
    servicios: "Insight · Estrategia · Naming · Identidad",
    partida: "Una droguería de pinturas de Madrid abierta desde 1958. Cada vez vende más blanco roto, gris perla y beige, igual que las grandes superficies. Las casas, los locales y hasta las marcas se están volviendo todos del mismo color.",
    insight: "Nadie quiere una casa beige. Se elige porque da miedo equivocarse con el color.", // el insight, en grande dentro de la estrategia
    estrategia: [                                         // la estrategia, en corto: para quién, qué vimos y dónde nos colocamos
      { titulo: "Para quién", texto: "Vecinos que pintan su casa o su local, no quieren el mismo beige que todo el mundo y agradecen que alguien les aconseje." },
      { titulo: "Frente a la gran superficie", texto: "En precio y surtido, la gran superficie siempre gana. Lo que no tiene es criterio: nadie te dice qué color le va a tu salón." },
      { titulo: "Dónde nos colocamos", texto: "Tirso no vende pintura, vende color con opinión. El rival no es la competencia, es el beige. Y la voz, la del dependiente de barrio que te habla claro." },
    ],
    idea: "Madrid no es beige. Si la ciudad tiene color, sus paredes también deberían tenerlo. Tirso deja de competir en precio y se convierte en la tienda que defiende el color.",
    desarrollo: "Una carta de colores con nombres castizos sacados de la calle: Amarillo Butano, Verde Quiosco, Rojo Ultramarinos, Azul Mono de Obra. Cada nombre cuenta de dónde viene el color, y la carta se convierte en el centro de la marca: el logotipo lleva sus colores y en la tienda se recorre color a color, con un consejo para cada uno.",
    resultado: "Una tienda de barrio con un discurso propio, que vende algo que una gran superficie no puede copiar: criterio y carisma.",
    maqueta: "revista", fondo: "crema", layout: "ancho",
    imagen: "img/proyectos/tirso-calle.webp",             // la calle: el color que ya tiene Madrid
    alt: "Plaza de Madrid llena de color: frutería con toldo rojo, quiosco verde, bombona de butano, fachadas roja y amarilla y un hombre con mono azul",
    lema: {                                               // apartado de branding: el lema como sistema
      antes: "Madrid no es", tachada: "beige",            // la frase, con la palabra que se tacha
      texto: "Más que un eslogan, es la postura de la marca: Tirso no compite en precio, defiende el color. La frase siempre se completa con un color de la carta, y el beige sale, pero tachado. Así cualquier pieza, del escaparate a un post, se reconoce aunque no lleve el logo.",
      respuestas: [                                       // cómo se completa: un color de la carta
        { texto: "Es Butano.", hex: "#F2A900" },
        { texto: "Es Quiosco.", hex: "#2E6B4F" },
        { texto: "Es Ultramarinos.", hex: "#B5262B" },
        { texto: "Es Mono de Obra.", hex: "#2A4D8F" },
      ],
      reglas: [                                           // cómo habla la marca
        { titulo: "Nombres de la calle", texto: "Los colores se llaman como las cosas del barrio, nunca como en un catálogo." },
        { titulo: "Como el dependiente", texto: "Habla de tú y sin rodeos, como quien te atiende detrás del mostrador y te dice qué color le va a tu casa." },
        { titulo: "El beige, tachado", texto: "Siempre aparece para que se entienda contra qué va la marca, pero nunca gana." },
        { titulo: "Un color por mensaje", texto: "Cada pieza va de un solo color de la carta, a todo el fondo." },
      ],
    },
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
    galeria: [],                                          // sin galería: las piezas son el logo y la carta
    web: "tirso/", webEnlace: false,                      // la carta de colores, navegable en la ficha (sin enlace para abrirla aparte)
    fotoCierre: { imagen: "img/proyectos/tirso-pared.webp", alt: "Salón con una pared recién pintada de Amarillo Butano, un rodillo en su bandeja y un bote de Tirso sobre la lona" }, // a todo el ancho, antes del resultado
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

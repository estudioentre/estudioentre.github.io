// =========================================================
// PINTURAS TIRSO · la carta de colores
// =========================================================

// Los diez colores, con los nombres y frases de Rebe
const COLORES = [
  { nombre: "Amarillo Butano",      hex: "#F2A900", frase: "El de la bombona que subía por la escalera." },
  { nombre: "Verde Quiosco",        hex: "#2E6B4F", frase: "El de la prensa del domingo." },
  { nombre: "Rojo Ultramarinos",    hex: "#B5262B", frase: "El del toldo de la tienda de la esquina." },
  { nombre: "Azul Mono de Obra",    hex: "#2A4D8F", frase: "El de quienes levantan la ciudad." },
  { nombre: "Rosa Chicle de Fresa", hex: "#F49AC1", frase: "El de la salida del cole." },
  { nombre: "Naranja Mercado",      hex: "#E8772E", frase: "El de la fruta de la plaza." },
  { nombre: "Verde Sifón",          hex: "#8FBFAE", frase: "El de la mesa de la terraza." },
  { nombre: "Marrón Barra de Bar",  hex: "#6B3E26", frase: "La madera donde se apoya Madrid." },
  { nombre: "Granate Tasca",        hex: "#6E1E2B", frase: "El de las cortinas del fondo." },
  { nombre: "Blanco Azulejo",       hex: "#F2F0EA", frase: "El único blanco que vendemos: el de los azulejos." },
];
const BEIGE = { nombre: "Beige", hex: "#D9CBB0", frase: "Aquí no vendemos beige. Elige otro, anda." }; // la broma

// ¿El color es claro? Así se decide si el texto va en negro o en blanco
function esClaro(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16)); // rojo, verde y azul
  return (r * 299 + g * 587 + b * 114) / 1000 > 150;                       // brillo percibido
}

const tiras = document.getElementById("tiras");                           // donde van las tiras
const campos = ["num", "nombre", "frase", "hex"].map((id) => document.getElementById(id)); // textos que cambian

// Pinta las once tiras (diez colores + el beige tachado)
[...COLORES, BEIGE].forEach((c, i) => {
  const b = document.createElement("button");                             // cada tira es un botón
  b.className = "tira" + (c === BEIGE ? " tira--beige" : "");              // la del beige lleva su clase
  b.setAttribute("role", "tab");
  b.setAttribute("aria-label", c.nombre);
  if (c !== BEIGE) { b.style.setProperty("--c", c.hex); b.style.setProperty("--t", esClaro(c.hex) ? "#111" : "#F2F0EA"); } // su color y el del texto
  b.innerHTML = `<span class="tira__nombre">${c.nombre}</span>`;           // solo el nombre: el número sale arriba, en grande
  b.addEventListener("click", () => elegir(i));                           // al pulsar, se elige
  b.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover)").matches) elegir(i); }); // con ratón, basta con pasar
  tiras.appendChild(b);
});

const todas = [...tiras.children];                                         // las once tiras
let actual = -1;                                                           // ninguna elegida aún

// Elige un color: cambia el fondo de toda la página y los textos
function elegir(i) {
  if (i === actual) return;                                                // ya estaba elegido
  actual = i;
  const c = i < COLORES.length ? COLORES[i] : BEIGE;                       // el color (o el beige)
  const fondo = c === BEIGE ? "#F2F0EA" : c.hex;                           // con el beige, la página se queda en blanco azulejo
  document.documentElement.style.setProperty("--fondo", fondo);
  document.documentElement.style.setProperty("--texto", esClaro(fondo) ? "#111111" : "#F2F0EA");
  campos[0].textContent = c === BEIGE ? "Fuera de carta" : `Nº ${String(i + 1).padStart(2, "0")}`;
  campos[1].textContent = c.nombre;
  campos[1].classList.toggle("tachado", c === BEIGE);                      // el beige sale tachado en rojo
  campos[2].textContent = c.frase;
  campos[3].textContent = c === BEIGE ? "No disponible" : c.hex;
  campos.forEach((el) => { el.classList.remove("cambia"); void el.offsetWidth; el.classList.add("cambia"); }); // reinicia la animación
  todas.forEach((b, j) => b.setAttribute("aria-selected", j === i));      // marca la tira elegida
}

// Con las flechas del teclado también se recorre la carta
tiras.addEventListener("keydown", (e) => {
  if (!["ArrowRight", "ArrowLeft"].includes(e.key)) return;
  const sig = (actual + (e.key === "ArrowRight" ? 1 : -1) + todas.length) % todas.length; // la de al lado, dando la vuelta
  todas[sig].focus();
  elegir(sig);
});

elegir(0);                                                                 // empieza con el Amarillo Butano

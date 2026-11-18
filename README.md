# ENTRE · web del estudio

Web estática (HTML + CSS + JS, sin instalar nada).

**Ver en local** → vista previa «entre» (puerto 5570) o abrir `index.html` en el navegador.

## Qué cambiar
- **Proyectos** → `js/proyectos.js` (copiar un bloque `{ … }`; `imagen` sustituye a la cubierta; `ejemplo: false` quita la etiqueta)
- **Fotos del equipo** → `index.html`, buscar `persona-1.webp` / `persona-2.webp`
- **Fotos de «Qué hacemos»** → `img/ejemplos/area-*.webp` (una por área)
- **Nombres, especialidad y bio** → `index.html`, buscar `[Nombre Apellido]`
- **Email y redes** → buscar `hola@tuestudio.com` y `href="#"` (Instagram / LinkedIn) en todas las páginas
- **Colores** → `css/estilos.css`, arriba del todo (`--azul`, `--coral`…)

## Antes de publicar ✔
- [ ] Rellenar los `[corchetes]` de `aviso-legal.html` y `privacidad.html` (plantillas: mejor que las revise una gestoría)
- [x] Dirección puesta: `https://estudioentre.github.io/` (si compráis dominio, cambiarla en `index.html`, `robots.txt` y `sitemap.xml`)
- [x] `canonical` activado
- [ ] Cambiar las fotos de ejemplo por las vuestras y quitar los avisos «Foto de ejemplo» / «Ejemplo»

## Archivos
- `index.html` portada · `proyecto.html` caso de estudio (`?p=id`) · `aviso-legal.html` · `privacidad.html`
- `css/estilos.css` · `js/proyectos.js` datos · `js/main.js` interacciones · `js/caso.js` página de caso
- `fuentes/` tipografías alojadas aquí (Instrument Sans y Anton, licencia OFL): sin Google, sin cookies
- `img/compartir.png` imagen al compartir el enlace (1200×630) · `img/icono-180.png` icono del móvil
- `robots.txt` y `sitemap.xml` para buscadores

Fotos: mejor en `.webp`, ~1600 px de ancho, en `img/`.

**Fotos de ejemplo** → `img/ejemplos/` (Unsplash, licencia libre). Son provisionales.

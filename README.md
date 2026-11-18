# ENTRE · web del estudio

Web estática (HTML + CSS + JS, sin instalar nada).

**Ver en local** → vista previa «entre» (puerto 5570) o abrir `index.html` en el navegador.

## Qué cambiar
- **Proyectos** → `js/proyectos.js` (copiar un bloque `{ … }`; `imagen` sustituye al dibujo; `ejemplo: false` quita la etiqueta)
- **Fotos del equipo** → `index.html`, buscar `[ Foto retrato` (hay un comentario con el `<img>` listo)
- **Nombres, especialidad y bio** → `index.html`, buscar `[Nombre Apellido]`
- **Email y redes** → buscar `hola@tuestudio.com` y `href="#"` (Instagram / LinkedIn)
- **Colores** → `css/estilos.css`, arriba del todo (`--azul`, `--coral`…)
- **Al publicar** → activar `canonical` y `og:image` en `index.html`

## Archivos
- `index.html` portada · `proyecto.html` caso de estudio (`?p=id`)
- `css/estilos.css` · `js/proyectos.js` datos · `js/main.js` interacciones · `js/caso.js` página de caso

Fotos: mejor en `.webp`, ~1600 px de ancho, en `img/`.

**Fotos de ejemplo** → `img/ejemplos/` (Unsplash, licencia libre). Son provisionales: cambiadlas por las vuestras y quitad las etiquetas «Foto de ejemplo» / «Ejemplo».

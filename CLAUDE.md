# PHN Cosméticos — Guía completa de la página web

---

## Qué hay en este proyecto

```
pagina jairo PHN/
│
├── pagina jairo/          → Sitio principal (index.html, content.js, renderer.js…)
│
├── fvit-gel/              → Página individual: F.VIT GEL
├── vr4-gel/               → Página individual: VR-4 GEL
├── db6-crema/             → Página individual: DB-6 CREMA
├── colageno-8020/         → Página individual: COLÁGENO 80/20
├── colageno-5050/         → Página individual: COLÁGENO 50/50
├── mascarilla/            → Página individual: MASCARILLA PHN
│
├── catalogo-productos.js  → ✏️ Fuente única de todos los productos (nombres, precios, URLs)
└── recomendaciones/       → Módulo de sección "Descubre más productos"
    ├── recomendaciones.css
    └── recomendaciones.js
```

---

## Páginas individuales de producto

### Estructura de cada carpeta

```
fvit-gel/
├── fvit-gel.html    ← HTML de la página — NO MODIFICAR
├── content.js       ← ✏️ ÚNICO ARCHIVO A EDITAR (texto y precio)
└── assets/
    ├── SUBE_AQUI.txt    ← instrucciones de qué imágenes poner
    ├── galeria-1.webp   ← imagen principal del producto
    ├── galeria-2.webp   ← ángulo 2 (opcional)
    ├── galeria-3.webp   ← ángulo 3 (opcional)
    ├── galeria-4.webp   ← ángulo 4 (opcional)
    ├── banner.webp      ← imagen lifestyle/modelo (opcional)
    └── video.mp4        ← video del producto (opcional)
```

### Los 6 productos y sus páginas

| Producto | Carpeta | HTML | Texto | Imágenes |
|---|---|---|---|---|
| F.VIT GEL | `fvit-gel/` | `fvit-gel.html` | `content.js` | `assets/*.webp` |
| VR-4 GEL | `vr4-gel/` | `vr4-gel.html` | `content.js` | `assets/*.webp` |
| DB-6 CREMA | `db6-crema/` | `db6-crema.html` | `content.js` | `assets/*.webp` |
| COLÁGENO 80/20 | `colageno-8020/` | `colageno-8020.html` | `content.js` | `assets/*.webp` |
| COLÁGENO 50/50 | `colageno-5050/` | `colageno-5050.html` | `content.js` | `assets/*.webp` |
| MASCARILLA PHN | `mascarilla/` | `mascarilla.html` | `content.js` | `assets/*.webp` |

---

## Cómo cambiar cada cosa

### ✏️ Cambiar el texto o el precio

Abre `content.js` del producto y edita el campo que necesites:

```js
window.PRODUCTO = {
  pageTitle:        "NOMBRE — PHN Cosméticos",   // pestaña del navegador
  categoria:        "Gel Cosmético",              // texto pequeño encima del nombre
  nombre:           "F.VIT GEL",                 // nombre grande del producto
  presentacion:     "250 g",                      // etiqueta verde ("" para ocultar)
  precio:           "$250",                       // precio en verde
  descripcionCorta: "Frase corta...",             // debajo del nombre
  descripcionLarga: "Párrafo 1.\n\nPárrafo 2.",  // texto largo (\n\n = separar párrafos)
  videoTitulo:      "Conoce el producto",         // título sobre el video
  whatsappNumero:   "5217773460478",               // número sin + ni espacios
  mensajes: [
    { etiqueta: "1 unidad",   mensaje: "Hola, quiero comprar..." },
    { etiqueta: "2 unidades", mensaje: "Hola, quiero comprar..." },
  ],
  volverLink:  "../pagina jairo/index.html",
  volverTexto: "Volver al inicio",
};
```

### 🖼️ Cambiar las imágenes

Pon los archivos directamente en `assets/` con estos nombres exactos:

| Archivo | Descripción | Tamaño |
|---|---|---|
| `galeria-1.webp` | Foto principal del producto | 800 × 800 px |
| `galeria-2.webp` | Segunda foto (opcional) | 400 × 400 px |
| `galeria-3.webp` | Tercera foto (opcional) | 400 × 400 px |
| `galeria-4.webp` | Cuarta foto (opcional) | 400 × 400 px |
| `banner.webp` | Imagen lifestyle ancha (opcional) | 2400 × 600 px |

Si una imagen no existe, desaparece sola sin dar error.

### 🎬 Cambiar el video

Pon `video.mp4` en la carpeta `assets/`. Si no hay video, la sección del video se oculta automáticamente.

> Usa formato H.264 para máxima compatibilidad. Tamaño máximo recomendado: 80 MB.

---

## Diseño de la página (copia estructural de Dior MX)

Las páginas usan exactamente el mismo CSS que el sitio Dior MX, cargado desde `../Dior MX_files/`.  
**Solo se cambió el código** (se eliminaron los scripts de Salesforce y las plantillas Squirrelly); visualmente es idéntico.

### Secciones en orden

```
1. HEADER          — r-header de Dior: logo PHN (centro), botón Volver (izquierda)
2. PRODUCTO        — pdp__above-the-fold: 2 columnas igual que Dior
   ├─ Galería izquierda:  pdp-gallery con carousel secundario (thumbnails)
   │                       + carousel primario (imagen grande)
   └─ Detalles derecha:   pdp-details con categoría, nombre, descripción corta,
                           selector de cantidad, botón WhatsApp (mismas clases add-to-cart)
3. DESCRIPCIÓN     — pdp-description: texto largo del producto
4. BANNER          — imagen ancha (lifestyle), solo aparece si banner.webp existe
5. VIDEO           — player HTML5 nativo, solo aparece si video.mp4 existe
6. FOOTER          — r-footer de Dior: beneficios PHN, contacto, catálogo
```

### CSS y tipografía

El HTML referencia `../Dior MX_files/global.css` y `../Dior MX_files/pdp.css`.  
Los colores y fuentes son los del sistema Dior (variables CSS):

| Variable | Valor | Uso |
|---|---|---|
| `--color-content-primary` | `#33383c` (charcoal) | textos, bordes, botones |
| `--color-container-primary` | `#ffffff` | fondo |
| `--font-primary` | serif (Dior) | nombre del producto |
| `--font-secondary` | sans-serif (Dior) | todo lo demás |

### Clases HTML clave (no renombrar)

| Clase | Sección |
|---|---|
| `pdp__above-the-fold` | grid 2 columnas galería+detalles |
| `pdp-gallery` | contenedor de la galería |
| `pdp-gallery__carousel--secondary` | tira de thumbnails |
| `pdp-gallery__carousel--primary` | imagen grande activa |
| `pdp-details__header` | categoría + título + descripción corta |
| `pdp-details__main` | selector de cantidad + botón |
| `add-to-cart r-action-button--primary-filled` | botón WhatsApp (mismas clases que Dior) |
| `add-to-cart-infos__price` | precio dentro del botón |
| `pdp-description` | sección de descripción larga |
| `r-footer` | footer |

---

## Cómo modificar el diseño (HTML)

El HTML de los 6 productos es **idéntico** — solo el nombre del archivo cambia.  
Para modificar el diseño de todos a la vez, edita `fvit-gel/fvit-gel.html` y copia el archivo a los demás.

Secciones del HTML marcadas con comentarios:
```
<!-- HEADER — misma estructura que Dior -->
<!-- SECCIÓN PRINCIPAL — misma estructura que Dior -->
<!-- ── GALERÍA ── misma estructura carousel de Dior ── -->
<!-- ── DETALLES ── misma estructura que Dior ── -->
<!-- DESCRIPCIÓN — misma estructura que Dior -->
<!-- BANNER LIFESTYLE — opcional -->
<!-- VIDEO — opcional, player nativo HTML5 -->
<!-- FOOTER — misma estructura CSS que Dior -->
<!-- RENDERER — lee window.PRODUCTO y llena el DOM -->
```

> El bloque `<style>` al inicio del `<head>` solo contiene ajustes mínimos  
> (logo PHN, ocultar botones de Dior, selector de cantidad, banner, video).  
> **No tocar los CSS de Dior MX_files.**

---

## Sitio principal (`pagina jairo/`)

La documentación completa del sitio principal está en `pagina jairo/CLAUDE.md`.

**Archivos principales:**
- `pagina jairo/index.html` → estructura, no se edita
- `pagina jairo/content.js` → todo el contenido (textos, links, FAQ)
- `pagina jairo/renderer.js` → construye el HTML, no se edita

**Los 6 botones "Comprar" de la página principal** ya apuntan a estas nuevas páginas  
(se actualizaron en `pagina jairo/content.js` → `experiences.items[].ctaLink`).

---

## Módulo de recomendaciones ("Descubre más productos")

Sección editorial que aparece al final de cada página de producto (antes del footer), mostrando los otros 5 productos en carrusel.

### Archivos

| Archivo | Rol |
|---|---|
| `catalogo-productos.js` | ✏️ Fuente única — editar aquí nombre, precio, disponibilidad |
| `recomendaciones/recomendaciones.css` | Estilos scoped (`.recomendaciones-section`) |
| `recomendaciones/recomendaciones.js` | Lógica: filtra producto actual, renderiza carrusel |

### Cómo cambiar contenido

**Cambiar nombre, precio o imagen de un producto en las cards:**
Editar `catalogo-productos.js` → objeto en el array `productos`. Los cambios se reflejan en las 5 páginas sin tocar nada más.

**Cambiar eyebrow o título de la sección:**
Editar `catalogo-productos.js` → `global.section.eyebrow` / `global.section.title`.

**Marcar un producto como no disponible:**
En `catalogo-productos.js`, cambiar `available: false` en el producto. El carrusel mostrará "Consultar disponibilidad" en lugar del precio.

### Campo productId en cada content.js

Cada `{producto}/content.js` tiene un campo `productId` que debe coincidir con el `id` en `catalogo-productos.js`. El módulo usa este campo para excluir el producto actual de sus propias recomendaciones.

### Snippet insertado en los 6 HTML

```html
<!-- Recomendaciones -->
<link rel="stylesheet" href="../recomendaciones/recomendaciones.css">
<script src="../catalogo-productos.js"></script>
<section id="recomendaciones-mount"></section>
<script src="../recomendaciones/recomendaciones.js" defer></script>
```

El JS mueve el `<section>` antes del footer en tiempo de ejecución (sin tocar el HTML).

### Diseño

- Layout 2 columnas desktop (35% heading / 65% carrusel), apilado en mobile
- Desktop: 3 cards visibles + peek del 4°; tablet: 2 + peek; mobile: 1.15 cards
- Navegación: flechas chevron, touch swipe nativo (scroll-snap), teclado ← →
- Animación de entrada: fade + translateY al entrar en viewport (respeta prefers-reduced-motion)
- Cards son `<a>` reales — accesibles y rastreables

---

## Ver mapa completo de assets

`MAPA-ASSETS.md` — lista detallada de qué archivo va en cada carpeta.

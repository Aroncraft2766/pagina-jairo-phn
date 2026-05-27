/**
 * ╔══════════════════════════════════════════════════════╗
 * ║  F.VIT GEL — Único archivo que debes editar        ║
 * ║                                                      ║
 * ║  ✏️  Cambia aquí: textos, precio, WhatsApp          ║
 * ║  🖼️  Cambia imágenes: reemplaza archivos en assets/ ║
 * ║  🎬  Cambia video: reemplaza video.mp4 en assets/   ║
 * ╚══════════════════════════════════════════════════════╝
 */
window.PRODUCTO = {

  productId: "fvit-gel",

  // ──────────────────────────────────────────────
  // PESTAÑA DEL NAVEGADOR
  // ──────────────────────────────────────────────
  pageTitle: "F.VIT GEL — PHN Cosméticos",

  // ──────────────────────────────────────────────
  // DATOS DEL PRODUCTO
  // ──────────────────────────────────────────────
  categoria:    "Gel Cosmético",        // texto pequeño encima del nombre
  nombre:       "F.VIT GEL",
  presentacion: "250 g",                // etiqueta debajo del nombre ("" para ocultar)
  precio:       "$250",

  descripcionCorta:
    "Gel tonificante que reafirma tu piel, reduce tallas y destapa los poros para una piel renovada.",

  // Usa \n\n para separar párrafos (NO saltos de línea reales)
  descripcionLarga:
    "PHN F.VIT Gel reafirma y tonifica la piel con extracto de toronja, alga marina, mentol, alcanfor y colágeno.\n\n" +
    "Modo de uso: aplica sobre piel limpia y seca. Evitar contacto con cara, axilas, ingles, heridas y genitales.\n\n" +
    "Contraindicaciones: no usar durante embarazo ni lactancia. En caso de hipersensibilidad a algún componente, discontinúa su uso.",

  // Título de la sección de video (opcional)
  videoTitulo: "Descubre F.VIT GEL",

  // ──────────────────────────────────────────────
  // WHATSAPP
  // ──────────────────────────────────────────────
  whatsappNumero: "527775710124",   // código de país + número, sin + ni espacios

  mensajes: [
    { etiqueta: "1 unidad",   mensaje: "Hola, quiero comprar 1 F.VIT GEL ($250). ¿Me puedes dar más información?" },
    { etiqueta: "2 unidades", mensaje: "Hola, quiero comprar 2 F.VIT GEL ($250 c/u). ¿Me puedes dar más información?" },
    { etiqueta: "3 unidades", mensaje: "Hola, quiero comprar 3 F.VIT GEL ($250 c/u). ¿Me puedes dar más información?" },
  ],

  // ──────────────────────────────────────────────
  // NAVEGACIÓN
  // ──────────────────────────────────────────────
  volverLink:  "../pagina jairo/index.html",
  volverTexto: "Volver al inicio",
};

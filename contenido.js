// ================================================================
//  CONTENIDO.JS — EDITA SOLO ESTE ARCHIVO PARA CAMBIAR TEXTOS
//  Cada línea tiene una etiqueta que dice qué parte de la página
//  corresponde. Cambia el texto entre comillas "".
//  NO borres las comas al final ni las comillas.
// ================================================================

const TEXTO = {

  // ── NAVEGACIÓN / FOOTER ─────────────────────────────────────
  marca: "Cosmetics",


  // ── SECCIÓN 1: HERO (portada) ────────────────────────────────
  hero_etiqueta: "Cosmética 100% natural · PHN Cosmetics",
  hero_titulo:   "Tu piel en manos de la naturaleza. Cosmética natural que transforma desde el primer uso.",


  // ── SECCIÓN 2: DESCRIPCIÓN ───────────────────────────────────
  descripcion: "En PHN Cosmetics creemos que la piel sana cuando le damos lo que la naturaleza diseñó para ella. Cada producto de nuestra línea está formulado con activos botánicos seleccionados para rejuvenecer, tonificar e iluminar tu piel de forma natural.\n\nDescubre la línea completa: cremas de colágeno Q10, geles reafirmantes, crema corporal, exfoliante iluminador y más.",


  // ── SECCIÓN 3: BANNER PRINCIPAL ──────────────────────────────
  banner_etiqueta: "PHN Cosmetics",
  banner_titulo:   "Naturaleza que\ntransforma tu piel",


  // ── SECCIÓN 4: ESTADÍSTICAS ──────────────────────────────────
  stat1_etiqueta:    "Calidad garantizada",
  stat1_titulo:      "Fórmulas con activos botánicos de alta eficacia, sin parabenos ni ingredientes dañinos.",
  stat1_numero:      "100%",
  stat1_unidad:      "natural",
  stat1_descripcion: "sin parabenos ni colorantes artificiales",


  // ── SECCIÓN 5: BENEFICIOS ────────────────────────────────────
  stat2_etiqueta:    "Resultados reales",
  stat2_titulo:      "Una línea completa de cosmética natural para cuidar y transformar tu piel cada día",
  stat2_numero:      "250",
  stat2_unidad:      "g",
  stat2_descripcion: "por producto, uso diario garantizado",


  // ─────────────────────────────────────────────────────────────
  //  PRODUCTOS — orden: Colágeno Día · Colágeno Noche · VR4
  //              DB6 · F.VIT · PGMT20
  //  precio: número sin símbolo, usado en el carrito
  // ─────────────────────────────────────────────────────────────

  // ── PRODUCTO 1: COLÁGENO Q10 DE DÍA ─────────────────────────
  prod1_etiqueta:    "Cosmetics PHN · CLGQ10",
  prod1_nombre:      "CLGQ10 De Día – Crema Colágeno Q10",
  prod1_descripcion: "¡Activa la belleza natural de tu piel cada amanecer! PHN CLGQ10 De Día combina Colágeno Hidrolizado Q10, Sábila, Aceite de Jojoba y Vitamina C para proteger, nutrir y rejuvenecer tu piel durante el día, dejándola luminosa, firme y radiante desde el primer uso.\n\n✔ Rejuvenece y embellece la piel\n✔ Colágeno Hidrolizado Q10 + Vitamina C\n✔ Sábila + Aceite de Jojoba\n✔ Cont. 250 g · Aplicar cada mañana sobre piel limpia",
  prod1_precio:      350,
  prod1_boton:       "Ver producto",
  prod1_enlace:      "colageno-8020/colageno-8020.html",


  // ── PRODUCTO 2: COLÁGENO Q10 DE NOCHE ───────────────────────
  prod2_etiqueta:    "Cosmetics PHN · CLGQ10",
  prod2_nombre:      "CLGQ10 De Noche – Crema Colágeno Q10",
  prod2_descripcion: "¡Despierta cada día con una piel de ensueño! PHN CLGQ10 De Noche trabaja mientras duermes con Colágeno Hidrolizado Q10, Sábila, Aceite de Jojoba y Vitamina C para regenerar y restaurar tu piel en profundidad, combatiendo arrugas y pérdida de firmeza.\n\n✔ Regeneración intensiva nocturna\n✔ Colágeno Hidrolizado Q10 + Vitamina C\n✔ Combate arrugas y flacidez\n✔ Cont. 250 g · Aplicar cada noche como último paso del cuidado",
  prod2_precio:      350,
  prod2_boton:       "Ver producto",
  prod2_enlace:      "colageno-5050/colageno-5050.html",


  // ── PRODUCTO 3: VR4 — Gel Tonificante ───────────────────────
  prod3_etiqueta:    "Cosmetics PHN · PHN VR4",
  prod3_nombre:      "VR4 – Gel Tonificante",
  prod3_descripcion: "¿Cansada de las varices y la piel flácida en las piernas? PHN VR4 es un gel tonificante con extractos botánicos activos que mejora la circulación, reduce la apariencia de varices y devuelve firmeza a tus piernas desde la primera aplicación.\n\n✔ Tonifica y reafirma la piel\n✔ Reduce la apariencia de varices\n✔ Mejora la circulación local\n✔ Cont. 250 g · Aplicar con masaje circular mañana y noche",
  prod3_precio:      250,
  prod3_boton:       "Ver producto",
  prod3_enlace:      "vr4-gel/vr4-gel.html",


  // ── PRODUCTO 4: DB6 — Crema Corporal ────────────────────────
  prod4_etiqueta:    "Cosmetics PHN · PHN DB6",
  prod4_nombre:      "DB6 – Crema Corporal",
  prod4_descripcion: "Tu piel merece hidratación profunda y real. PHN DB6 Crema Corporal está formulada con activos botánicos que iluminan, humectan y regeneran la piel seca o agrietada, dejándola suave, nutrida y visiblemente renovada.\n\n✔ Ilumina y unifica el tono de la piel\n✔ Hidratación profunda y duradera\n✔ Regenera pieles secas y agrietadas\n✔ Cont. 200 g · Aplicar diariamente sobre piel limpia",
  prod4_precio:      300,
  prod4_boton:       "Ver producto",
  prod4_enlace:      "db6-crema/db6-crema.html",


  // ── PRODUCTO 5: F.VIT — Gel Reafirmante ─────────────────────
  prod5_etiqueta:    "Cosmetics PHN · PHN F.VIT",
  prod5_nombre:      "F.VIT – Gel Reafirmante",
  prod5_descripcion: "Reafirma, define y esculpe tu figura en su mejor versión. PHN F.VIT Gel Reafirmante combina Centella Asiática, Colágeno y activos botánicos para tonificar la piel, reducir la apariencia de celulitis y moldear tu silueta de forma natural.\n\n✔ Define y tonifica la figura\n✔ Reafirma la piel con Centella Asiática + Colágeno\n✔ Reduce la apariencia de celulitis\n✔ Cont. 250 g · Aplicar con masaje firme en zonas a tratar",
  prod5_precio:      250,
  prod5_boton:       "Ver producto",
  prod5_enlace:      "fvit-gel/fvit-gel.html",


  // ── PRODUCTO 6: PGMT20 — Crema Exfoliante Iluminadora ───────
  prod6_etiqueta:    "Cosmetics PHN · PHN PGMT20",
  prod6_nombre:      "PGMT20 – Crema Exfoliante Iluminadora",
  prod6_descripcion: "¡Recupera tu tono natural y despídete de las manchas para siempre! PHN PGMT20 es una crema exfoliante con Aceite de Coco y Aceite de Almendras que renueva la piel, elimina células muertas y unifica el tono para revelar una piel más clara, luminosa y perfecta.\n\n✔ Aclara manchas y tono irregular\n✔ Exfolia y renueva la piel en profundidad\n✔ Aceite de Coco + Aceite de Almendras\n✔ Cont. 250 g · Usar 2-3 veces por semana sobre piel húmeda",
  prod6_precio:      280,
  prod6_boton:       "Ver producto",
  prod6_enlace:      "mascarilla/mascarilla.html",


  // ── RUTINA HIDRATACIÓN Y COLÁGENO ────────────────────────────
  brillo_etiqueta: "PHN Cosmetics recomienda",
  brillo_titulo:   "Rutina Hidratación y Colágeno",

  brillo_prod1_nombre: "DB6 – Crema Corporal",
  brillo_prod1_precio: "$300",
  brillo_prod1_enlace: "db6-crema/db6-crema.html",

  brillo_prod2_nombre: "CLGQ10 – De Noche",
  brillo_prod2_precio: "$350",
  brillo_prod2_enlace: "colageno-5050/colageno-5050.html",

  brillo_prod3_nombre: "CLGQ10 – De Día",
  brillo_prod3_precio: "$350",
  brillo_prod3_enlace: "colageno-8020/colageno-8020.html",


  // ── RUTINA PIEL PERFECTA Y TONIFICADA ────────────────────────
  mate_etiqueta: "PHN Cosmetics recomienda",
  mate_titulo:   "Rutina Piel Perfecta y Tonificada",

  mate_prod1_nombre: "PGMT20 – Mascarilla Exfoliante",
  mate_prod1_precio: "$280",
  mate_prod1_enlace: "mascarilla/mascarilla.html",

  mate_prod2_nombre: "VR4 – Gel Tonificante",
  mate_prod2_precio: "$250",
  mate_prod2_enlace: "vr4-gel/vr4-gel.html",

  mate_prod3_nombre: "F.VIT – Gel Reafirmante",
  mate_prod3_precio: "$250",
  mate_prod3_enlace: "fvit-gel/fvit-gel.html",


  // ── NOTAS LEGALES ────────────────────────────────────────────
  notas: "Estos productos son cosméticos de uso externo. No son medicamentos ni sustituyen tratamientos médicos. Realizar prueba de parche antes del primer uso. Evitar contacto con ojos. Mantener fuera del alcance de los niños.",


  // ── FOOTER ───────────────────────────────────────────────────
  footer_marca: "Cosmetics",
  footer_texto:  "© 2026 PHN Cosmetics · Tel. 777 346 0478 · Todos los derechos reservados.",


  // ── CARRITO — número de WhatsApp para enviar el pedido ───────
  carrito_whatsapp: "5217773460478",

};


// ================================================================
//  NO MODIFIQUES NADA DEBAJO DE ESTA LÍNEA
// ================================================================

function set(id, valor) {
  const el = document.getElementById(id);
  if (!el) return;
  if (valor.includes("\n")) {
    el.innerHTML = valor
      .split("\n\n")
      .map(p => "<p>" + p.replace(/\n/g, "<br>") + "</p>")
      .join("");
  } else {
    el.textContent = valor;
  }
}

function setLink(id, href, texto) {
  const el = document.getElementById(id);
  if (!el) return;
  el.href = href;
  el.textContent = texto;
}

document.addEventListener("DOMContentLoaded", function () {
  const T = TEXTO;

  set("nav-marca", T.marca);

  set("hero-etiqueta", T.hero_etiqueta);
  set("hero-titulo",   T.hero_titulo);

  set("descripcion", T.descripcion);

  set("banner-etiqueta", T.banner_etiqueta);
  var bannerTit = document.getElementById("banner-titulo");
  if (bannerTit) bannerTit.innerHTML = T.banner_titulo.replace("\n", "<br>");

  set("stat1-etiqueta",    T.stat1_etiqueta);
  set("stat1-titulo",      T.stat1_titulo);
  set("stat1-numero",      T.stat1_numero);
  set("stat1-unidad",      T.stat1_unidad);
  set("stat1-descripcion", T.stat1_descripcion);

  set("stat2-etiqueta",    T.stat2_etiqueta);
  set("stat2-titulo",      T.stat2_titulo);
  set("stat2-numero",      T.stat2_numero);
  set("stat2-unidad",      T.stat2_unidad);
  set("stat2-descripcion", T.stat2_descripcion);

  [1,2,3,4,5,6].forEach(function(n) {
    set("prod"+n+"-etiqueta",    T["prod"+n+"_etiqueta"]);
    set("prod"+n+"-nombre",      T["prod"+n+"_nombre"]);
    set("prod"+n+"-descripcion", T["prod"+n+"_descripcion"]);
    setLink("prod"+n+"-boton",   T["prod"+n+"_enlace"], T["prod"+n+"_boton"]);
  });

  set("brillo-etiqueta",  T.brillo_etiqueta);
  set("brillo-titulo",    T.brillo_titulo);
  setLink("brillo-p1-btn", T.brillo_prod1_enlace, "Ver producto");
  set("brillo-p1-nom",    T.brillo_prod1_nombre);
  set("brillo-p1-prec",   T.brillo_prod1_precio);
  setLink("brillo-p2-btn", T.brillo_prod2_enlace, "Ver producto");
  set("brillo-p2-nom",    T.brillo_prod2_nombre);
  set("brillo-p2-prec",   T.brillo_prod2_precio);
  setLink("brillo-p3-btn", T.brillo_prod3_enlace, "Ver producto");
  set("brillo-p3-nom",    T.brillo_prod3_nombre);
  set("brillo-p3-prec",   T.brillo_prod3_precio);

  set("mate-etiqueta",    T.mate_etiqueta);
  set("mate-titulo",      T.mate_titulo);
  setLink("mate-p1-btn", T.mate_prod1_enlace, "Ver producto");
  set("mate-p1-nom",      T.mate_prod1_nombre);
  set("mate-p1-prec",     T.mate_prod1_precio);
  setLink("mate-p2-btn", T.mate_prod2_enlace, "Ver producto");
  set("mate-p2-nom",      T.mate_prod2_nombre);
  set("mate-p2-prec",     T.mate_prod2_precio);
  setLink("mate-p3-btn", T.mate_prod3_enlace, "Ver producto");
  set("mate-p3-nom",      T.mate_prod3_nombre);
  set("mate-p3-prec",     T.mate_prod3_precio);

  set("notas",        T.notas);
  set("footer-marca", T.footer_marca);
  set("footer-texto", T.footer_texto);
});

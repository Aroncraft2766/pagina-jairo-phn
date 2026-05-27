/**
 * catalogo-productos.js
 * Fuente única de todos los productos PHN para la sección de recomendaciones.
 * Para cambiar nombre, precio o disponibilidad: editar solo este archivo.
 * Para cambiar eyebrow o título de la sección: editar global.section.
 */
window.catalogoProductos = {

  global: {
    section: {
      eyebrow: "PHN",
      title: "Descubre más productos"
    }
  },

  productos: [
    {
      id: "fvit-gel",
      url: "../fvit-gel/fvit-gel.html",
      imageUrl: "../fvit-gel/assets/galeria-1.webp",
      name: "F.VIT GEL",
      price: "$250",
      available: true
    },
    {
      id: "vr4-gel",
      url: "../vr4-gel/vr4-gel.html",
      imageUrl: "../vr4-gel/assets/galeria-1.webp",
      name: "VR-4 GEL",
      price: "$250",
      available: true
    },
    {
      id: "db6-crema",
      url: "../db6-crema/db6-crema.html",
      imageUrl: "../db6-crema/assets/galeria-1.webp",
      name: "DB-6 CREMA",
      price: "$300",
      available: true
    },
    {
      id: "colageno-8020",
      url: "../colageno-8020/colageno-8020.html",
      imageUrl: "../colageno-8020/assets/galeria-1.webp",
      name: "COLÁGENO 80/20",
      price: "$300",
      available: true
    },
    {
      id: "colageno-5050",
      url: "../colageno-5050/colageno-5050.html",
      imageUrl: "../colageno-5050/assets/galeria-1.webp",
      name: "COLÁGENO 50/50",
      price: "$300",
      available: true
    },
    {
      id: "mascarilla",
      url: "../mascarilla/mascarilla.html",
      imageUrl: "../mascarilla/assets/galeria-1.webp",
      name: "MASCARILLA PHN",
      price: "$300",
      available: true
    }
  ]
};

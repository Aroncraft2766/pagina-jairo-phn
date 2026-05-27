# Mapa de Assets — PHN Cosméticos
## Dónde va cada imagen y video

---

## Convención de nombres (obligatorio)

Todos los HTML buscan los archivos con **estos nombres exactos** en la carpeta `assets/`:

```
assets/
├── galeria-1.webp    ← OBLIGATORIA — imagen principal
├── galeria-2.webp    ← opcional (thumbnail 2)
├── galeria-3.webp    ← opcional (thumbnail 3)
├── galeria-4.webp    ← opcional (thumbnail 4)
├── banner.webp       ← opcional — imagen ancha (lifestyle/modelo)
└── video.mp4         ← opcional — video del producto
```

Si un archivo no existe → **se oculta solo, sin dar error**.

---

## F.VIT GEL → `fvit-gel/assets/`

| Archivo destino | Origen sugerido (ya existe en el proyecto) |
|---|---|
| `galeria-1.webp` | `pagina jairo/productos/banners/banner-FVIT-GEL.webp` |
| `galeria-2.webp` | `pagina jairo/productos/gallery/F.VIT-GEL/PHN_FVIT_041776270760.webp` |
| `galeria-3.webp` | `pagina jairo/productos/gallery/F.VIT-GEL/PHN_FVIT_051776270761.webp` |
| `galeria-4.webp` | `pagina jairo/productos/gallery/F.VIT-GEL/PHN_FVIT_061776270762.webp` |
| `banner.webp` | — (no existe aún, crear nueva imagen) |
| `video.mp4` | — (no existe aún) |

---

## VR-4 GEL → `vr4-gel/assets/`

| Archivo destino | Origen sugerido |
|---|---|
| `galeria-1.webp` | `pagina jairo/productos/banners/banner-VR4-GEL-modelo.webp` |
| `galeria-2.webp` | `pagina jairo/productos/gallery/VR-4/PHN_VR4_011776270754.webp` |
| `galeria-3.webp` | `pagina jairo/productos/gallery/VR-4/PHN_VR4_021776270755.webp` |
| `galeria-4.webp` | `pagina jairo/productos/gallery/VR-4/PHN_VR4_031776270749.webp` |
| `banner.webp` | `pagina jairo/productos/banners/banner-VR4-GEL-modelo.webp` |
| `video.mp4` | — (no existe aún) |

---

## DB-6 CREMA → `db6-crema/assets/`

| Archivo destino | Origen sugerido |
|---|---|
| `galeria-1.webp` | `pagina jairo/productos/banners/banner-DB6-CREMA.webp` |
| `galeria-2.webp` | `pagina jairo/productos/gallery/DB-6 CREMA/ECOMMERCE DB6 CREMA 21776271265.webp` |
| `galeria-3.webp` | `pagina jairo/productos/gallery/DB-6 CREMA/ECOMMERCE DB6 CREMA 31776271266.webp` |
| `galeria-4.webp` | `pagina jairo/productos/gallery/DB-6 CREMA/ECOMMERCE DB6 CREMA 41776271266.webp` |
| `banner.webp` | `pagina jairo/productos/banners/banner-DB6-CREMA-modelo.webp` |
| `video.mp4` | — (no existe aún) |

---

## COLÁGENO 80/20 → `colageno-8020/assets/`

| Archivo destino | Origen sugerido |
|---|---|
| `galeria-1.webp` | `pagina jairo/productos/banners/banner-COLAGENO-8020.webp` |
| `galeria-2.webp` | `pagina jairo/productos/gallery/COLAGENO 80-20/ECOMMERCE CLGQDIA 21776271265.webp` |
| `galeria-3.webp` | `pagina jairo/productos/gallery/COLAGENO 80-20/ECOMMERCE CLGQDIA 31776271265.webp` |
| `galeria-4.webp` | `pagina jairo/productos/gallery/COLAGENO 80-20/ECOMMERCE CLGQDIA 41776271265.webp` |
| `banner.webp` | `pagina jairo/productos/banners/banner-COLAGENO-8020-modelo.webp` |
| `video.mp4` | — (no existe aún) |

---

## COLÁGENO 50/50 → `colageno-5050/assets/`

| Archivo destino | Origen sugerido |
|---|---|
| `galeria-1.webp` | `pagina jairo/productos/banners/banner-COLAGENO-5050.webp` |
| `galeria-2.webp` | `pagina jairo/productos/gallery/COLAGENO 50-50/ECOMMERCE CLGQNOCHE 21776271265.webp` |
| `galeria-3.webp` | `pagina jairo/productos/gallery/COLAGENO 50-50/ECOMMERCE CLGQNOCHE 31776271265.webp` |
| `galeria-4.webp` | `pagina jairo/productos/gallery/COLAGENO 50-50/ECOMMERCE CLGQNOCHE 41776271265.webp` |
| `banner.webp` | `pagina jairo/productos/banners/banner-COLAGENO-5050-modelo.webp` |
| `video.mp4` | — (no existe aún) |

---

## MASCARILLA PHN → `mascarilla/assets/`

| Archivo destino | Origen sugerido |
|---|---|
| `galeria-1.webp` | `pagina jairo/productos/banners/banner-MASCARILLA.webp` |
| `galeria-2.webp` | `pagina jairo/productos/gallery/MASCARILLA/ECOMMERCE PGMT20 21776271269.webp` |
| `galeria-3.webp` | `pagina jairo/productos/gallery/MASCARILLA/ECOMMERCE PGMT20 31776271270.webp` |
| `galeria-4.webp` | `pagina jairo/productos/gallery/MASCARILLA/ECOMMERCE PGMT20 41776271270.webp` |
| `banner.webp` | `pagina jairo/productos/banners/banner-MASCARILLA-modelo.webp` |
| `video.mp4` | — (no existe aún) |

---

## Formatos recomendados

| Tipo | Formato | Tamaño máximo |
|---|---|---|
| Imagen de galería (`galeria-1…4`) | `.webp` | 500 KB c/u |
| Banner lifestyle (`banner`) | `.webp` | 800 KB |
| Video | `.mp4` (H.264) | 80 MB |

> `.webp` carga 2–3× más rápido que `.jpg` del mismo tamaño.

---

## Comportamiento cuando faltan archivos

| Archivo | Si no existe |
|---|---|
| `galeria-1.webp` | Se muestra imagen rota (es **obligatoria**) |
| `galeria-2.webp` | El thumbnail desaparece solo |
| `galeria-3.webp` | El thumbnail desaparece solo |
| `galeria-4.webp` | El thumbnail desaparece solo |
| `banner.webp` | La sección del banner no aparece |
| `video.mp4` | La sección del video no aparece |

---

## Cómo copiar las imágenes existentes

Todas las imágenes fuente están en `pagina jairo/productos/`.  
Copia el archivo y renómbralo al nombre destino. Ejemplo en terminal:

```bash
cp "pagina jairo/productos/banners/banner-FVIT-GEL.webp" "fvit-gel/assets/galeria-1.webp"
cp "pagina jairo/productos/gallery/F.VIT-GEL/PHN_FVIT_041776270760.webp" "fvit-gel/assets/galeria-2.webp"
```

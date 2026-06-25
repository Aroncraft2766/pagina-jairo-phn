// ── Añade al catálogo los 6 cosméticos PHN (línea completa) ──────────────
// Clona la misma tarjeta del catálogo y reusa el enriquecido del render.
(function () {
  var TPL = '<div class="product-tile lg:p-3 w-[48%] lg:w-1/3"><div class="w-full" type="product"><a href="https://wa.me/5217773460478?text=Hola%2C%20quiero%20información%20sobre%3A%20F.VIT-90" target="_blank" rel="noopener" class="block w-full" aria-label="F.VIT-90" title="F.VIT-90" id="product-card-0"><div role="group" class="relative flex items-center justify-center rounded-[0.571rem] bg-ash-400 after:block after:pb-[100%] group overflow-hidden"><img alt="F.VIT-90" loading="lazy" src="productos/imagen1.webp" class="max-h-[17.14rem] transition-transform duration-200 ease-out transform-gpu will-change-transform group-hover:blur-[0.928rem]" style="max-width:100%;object-fit:contain;" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';"><div style="display:none;position:absolute;inset:0;align-items:center;justify-content:center;background:linear-gradient(135deg,#d0eea8,#70B62F);"><span style="font-size:1.1em;font-weight:900;color:#fff;text-transform:uppercase;letter-spacing:0.04em;text-align:center;padding:8px;text-shadow:0 1px 4px rgba(0,0,0,.2);">F.VIT-90</span></div><span class="absolute top-3 left-3 text-sm text-ash-500 group-hover:hidden group-focus:hidden">PHN</span><div class="absolute inset-0 flex flex-col items-center justify-center text-left bg-black/10 transition-[transform,opacity] duration-300 ease-out will-change-transform will-change-opacity transform-gpu -translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100"><div class="px-4 text-gray-700"><p class="text-[0.857rem] mb-[1rem] line-clamp-2">Suplemento natural PHN. Escríbenos para más información.</p></div></div></div><div class="pt-3"><div class="flex items-center space-x-2 text-gray-800"><h5 class="text-[1.428571rem] font-normal leading-[120%] tracking-[-0.035714rem] text-gray-800 text-black">F.VIT-90</h5></div><p class="!text-[0.875rem] font-normal text-gray-700">imagen1.webp</p></div></a><div class="relative"><button type="button" data-product="F.VIT-90" data-id="0" onclick="phnAddToCart(this)" class="font-bold text-[1rem] py-[0.429rem] px-[1.143rem] cursor-pointer focus:outline-none" style="border:none;font-family:\'Montserrat\',sans-serif;" id="add-to-cart-0">🛒 Agregar</button></div></div></div>';

  var CODES = ['F.VIT-GEL', 'VR-4 GEL', 'DB-6 CREMA', 'COLAGENO 80/20', 'COLAGENO 50/50', 'MASCARILLA'];

  // El botón "Agregar" vive dentro del enlace de la tarjeta: evita que al
  // agregar al carrito también navegue a la ficha del producto.
  document.addEventListener('click', function (e) {
    if (e.target.closest('[id^="add-to-cart-"]')) e.preventDefault();
  }, true);

  function build() {
    if (typeof PHN_CATALOG === 'undefined') return;
    var first = document.querySelector('.product-tile');
    if (!first) return;
    var grid = first.parentElement;

    CODES.forEach(function (code, i) {
      var p = PHN_CATALOG[code];
      if (!p) return;
      // evita duplicados si ya existe la tarjeta
      if (document.querySelector('.product-tile [data-product="' + code + '"]')) return;
      var html = TPL
        .split('F.VIT-90').join(code)
        .split('imagen1.webp').join(p.img)
        .split('product-card-0').join('product-card-x' + i)
        .split('add-to-cart-0').join('add-to-cart-x' + i)
        .split('data-id="0"').join('data-id="x' + i + '"');
      var tmp = document.createElement('div');
      tmp.innerHTML = html.trim();
      grid.appendChild(tmp.firstElementChild);
    });

    // Re-ejecuta el enriquecido del render del catálogo sobre las nuevas tarjetas
    try { if (typeof linkTiles === 'function') linkTiles(); } catch (e) {}
    try { if (typeof updateHoverPanels === 'function') updateHoverPanels(); } catch (e) {}
    try { if (typeof updateCardLayouts === 'function') updateCardLayouts(); } catch (e) {}
    try { if (typeof phnUpdateCount === 'function') phnUpdateCount(); } catch (e) {}
    try { if (typeof phnSbFilter === 'function') phnSbFilter(); } catch (e) {}
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();

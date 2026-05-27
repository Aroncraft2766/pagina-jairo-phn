/**
 * recomendaciones.js
 * Módulo de recomendaciones de productos para PHN Cosméticos.
 * Lee window.catalogoProductos y window.PRODUCTO.productId,
 * filtra el producto actual y renderiza el carrusel editorial.
 */
(function () {
  'use strict';

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function debounce(fn, ms) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, ms);
    };
  }

  function init() {
    var catalog = window.catalogoProductos;
    var producto = window.PRODUCTO;
    var mount = document.getElementById('recomendaciones-mount');
    if (!catalog || !producto || !mount) return;

    var currentId = producto.productId;
    var items = catalog.productos.filter(function (p) { return p.id !== currentId; });
    if (items.length === 0) return;

    var eyebrow = catalog.global.section.eyebrow;
    var title   = catalog.global.section.title;

    /* Build card HTML */
    var cardsHTML = items.map(function (p) {
      var priceText = p.available ? 'MXN ' + p.price : 'Consultar disponibilidad';
      return (
        '<a href="' + escHtml(p.url) + '" class="rec__card">' +
          '<div class="rec__card-img-wrap">' +
            '<img class="rec__card-img"' +
              ' src="' + escHtml(p.imageUrl) + '"' +
              ' alt="' + escHtml(p.name) + '"' +
              ' loading="lazy" decoding="async">' +
          '</div>' +
          '<div class="rec__card-info">' +
            '<p class="rec__card-name">' + escHtml(p.name) + '</p>' +
            '<p class="rec__card-price">' + escHtml(priceText) + '</p>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    /* Move mount before the footer so it renders above it */
    var footer = document.querySelector('.r-footer, footer');
    if (footer && footer.parentNode) {
      footer.parentNode.insertBefore(mount, footer);
    }

    /* Inject markup */
    mount.className = 'recomendaciones-section';
    mount.setAttribute('aria-label', escHtml(title));
    mount.innerHTML =
      '<div class="rec__inner">' +
        '<div class="rec__layout">' +
          '<div class="rec__heading">' +
            '<p class="rec__eyebrow">' + escHtml(eyebrow) + '</p>' +
            '<h2 class="rec__title">' + escHtml(title) + '</h2>' +
          '</div>' +
          '<div class="rec__carousel-wrap">' +
            '<div class="rec__track">' +
              cardsHTML +
            '</div>' +
            '<div class="rec__controls">' +
              '<button class="rec__btn rec__btn--prev" aria-label="Producto anterior" disabled>' +
                '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                  '<polyline points="15 18 9 12 15 6"/>' +
                '</svg>' +
              '</button>' +
              '<span class="rec__indicator" aria-live="polite" aria-atomic="true"></span>' +
              '<button class="rec__btn rec__btn--next" aria-label="Producto siguiente">' +
                '<svg viewBox="0 0 24 24" aria-hidden="true">' +
                  '<polyline points="9 18 15 12 9 6"/>' +
                '</svg>' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    /* Carousel logic */
    var track     = mount.querySelector('.rec__track');
    var btnPrev   = mount.querySelector('.rec__btn--prev');
    var btnNext   = mount.querySelector('.rec__btn--next');
    var indicator = mount.querySelector('.rec__indicator');
    var controls  = mount.querySelector('.rec__controls');
    var cards     = mount.querySelectorAll('.rec__card');
    var total     = cards.length;

    function cardWidth() {
      return cards[0] ? cards[0].offsetWidth : 0;
    }

    function gap() {
      /* Read the rendered gap between cards */
      if (total < 2) return 0;
      var a = cards[0].getBoundingClientRect();
      var b = cards[1].getBoundingClientRect();
      return Math.round(b.left - a.right);
    }

    function getVisibleCount() {
      var w = track.clientWidth;
      if (w >= 900) return 3;
      if (w >= 560) return 2;
      return 1;
    }

    function getCurrentIndex() {
      var cw = cardWidth();
      var g  = gap();
      if (!cw) return 0;
      return Math.round(track.scrollLeft / (cw + g));
    }

    function scrollToIndex(idx) {
      var cw = cardWidth();
      var g  = gap();
      track.scrollLeft = idx * (cw + g);
    }

    function refreshControls() {
      var vis    = getVisibleCount();
      var maxIdx = Math.max(0, total - vis);
      var idx    = Math.min(getCurrentIndex(), maxIdx);

      /* If all items fit, make track static and hide controls */
      if (total <= vis) {
        track.classList.add('rec--static');
        controls.classList.add('rec--hidden');
        return;
      }
      track.classList.remove('rec--static');
      controls.classList.remove('rec--hidden');

      btnPrev.disabled = idx <= 0;
      btnNext.disabled = idx >= maxIdx;
      indicator.textContent = (idx + 1) + ' / ' + (maxIdx + 1);
    }

    btnPrev.addEventListener('click', function () {
      scrollToIndex(Math.max(0, getCurrentIndex() - 1));
    });

    btnNext.addEventListener('click', function () {
      var vis    = getVisibleCount();
      var maxIdx = Math.max(0, total - vis);
      scrollToIndex(Math.min(maxIdx, getCurrentIndex() + 1));
    });

    track.addEventListener('scroll', debounce(refreshControls, 60));
    window.addEventListener('resize', debounce(refreshControls, 140));

    /* Keyboard: ← → while focus is inside the track */
    track.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToIndex(Math.max(0, getCurrentIndex() - 1));
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        var vis    = getVisibleCount();
        var maxIdx = Math.max(0, total - vis);
        scrollToIndex(Math.min(maxIdx, getCurrentIndex() + 1));
      }
    });

    /* Entrance animation via IntersectionObserver */
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          mount.classList.add('rec--visible');
          observer.disconnect();
        }
      }, { threshold: 0.08 });
      observer.observe(mount);
    } else {
      mount.classList.add('rec--visible');
    }

    refreshControls();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

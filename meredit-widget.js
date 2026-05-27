/**
 * meredit-widget.js — Chatbot Meredit IA · Proher Natura (Distribuidor Jairo)
 * Agrega al HTML: <script src="meredit-widget.js" defer></script>
 */
(function(){

  // ── CSS ──
  var css = document.createElement('style');
  css.textContent = '#phn-widget{position:fixed;bottom:100px;right:28px;z-index:9100;display:flex;flex-direction:column;align-items:flex-end;gap:8px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",sans-serif}#phn-chat{width:370px;height:540px;background:#fff;border-radius:20px;box-shadow:0 20px 60px rgba(0,0,0,.18),0 4px 16px rgba(0,0,0,.08);display:none;flex-direction:column;overflow:hidden;transform-origin:bottom right;border:1px solid rgba(0,0,0,.06)}#phn-chat.open{display:flex;animation:phn-open .3s cubic-bezier(.34,1.4,.64,1) forwards}@keyframes phn-open{from{opacity:0;transform:scale(.85) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}#phn-header{background:linear-gradient(135deg,#569123 0%,#70B62F 60%,#88cc44 100%);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0}#phn-header-left{display:flex;align-items:center;gap:12px}#phn-hdr-avatar{width:46px;height:46px;background:rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid rgba(255,255,255,.6);flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.2)}#phn-hdr-name{font-size:1em;font-weight:700;color:#fff}#phn-hdr-sub{font-size:.72em;color:rgba(255,255,255,.75);margin-top:1px;letter-spacing:.02em;text-transform:uppercase}#phn-hdr-status{font-size:.74em;color:rgba(255,255,255,.88);margin-top:3px;display:flex;align-items:center;gap:5px}#phn-hdr-status::before{content:"";width:7px;height:7px;background:#5dff8a;border-radius:50%;display:inline-block;box-shadow:0 0 6px rgba(93,255,138,.6)}#phn-hdr-close{background:rgba(255,255,255,.15);border:1px solid rgba(255,255,255,.2);color:rgba(255,255,255,.95);font-size:1em;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:background .2s;flex-shrink:0}#phn-hdr-close:hover{background:rgba(255,255,255,.28)}#phn-messages{flex:1;overflow-y:auto;padding:18px 14px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth;background:#f7f9fc}#phn-messages::-webkit-scrollbar{width:4px}#phn-messages::-webkit-scrollbar-thumb{background:rgba(0,0,0,.12);border-radius:4px}.phn-msg{max-width:80%;padding:10px 14px;border-radius:16px;font-size:.875em;line-height:1.6;word-break:break-word;animation:phn-fade-in .22s ease}@keyframes phn-fade-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.phn-msg.bot{background:#fff;border-bottom-left-radius:4px;align-self:flex-start;box-shadow:0 1px 4px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04);color:#1f2937}.phn-msg.user{background:linear-gradient(135deg,#70B62F,#569123);border-bottom-right-radius:4px;align-self:flex-end;box-shadow:0 2px 8px rgba(112,182,47,.3);color:#fff}.phn-msg a{color:#70B62F;font-weight:500;word-break:break-all}.phn-msg.user a{color:#a8f0c8}#phn-typing{align-self:flex-start;background:#fff;border-radius:16px;border-bottom-left-radius:4px;padding:12px 16px;box-shadow:0 1px 4px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.04);display:none}#phn-typing.show{display:block}.phn-dots{display:flex;gap:5px;align-items:center}.phn-dot{width:8px;height:8px;background:#b0b8c4;border-radius:50%;animation:phn-bounce 1.3s infinite ease-in-out}.phn-dot:nth-child(2){animation-delay:.18s}.phn-dot:nth-child(3){animation-delay:.36s}@keyframes phn-bounce{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-7px);opacity:1}}#phn-chips{padding:8px 14px 6px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;flex-shrink:0;background:#fff;border-top:1px solid rgba(0,0,0,.06)}.phn-chip{background:#f5fae8;border:1.5px solid #70B62F;color:#569123;border-radius:20px;padding:5px 8px;font-size:.75em;font-weight:600;cursor:pointer;transition:all .18s;white-space:nowrap;font-family:inherit;text-align:center;overflow:hidden;text-overflow:ellipsis}.phn-chip:hover{background:#70B62F;color:#fff;border-color:#70B62F}#phn-wa-bar{background:#fff;padding:6px 14px 0;flex-shrink:0;border-top:1px solid rgba(0,0,0,.07)}#phn-wa-btn{width:100%;padding:9px 16px;background:#25d366;color:#fff;border:none;border-radius:10px;font-size:.82em;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;font-family:inherit;transition:background .2s}#phn-wa-btn:hover{background:#128c7e}#phn-input-area{background:#fff;padding:12px 14px;display:flex;gap:10px;align-items:center;flex-shrink:0}#phn-input{flex:1;border:1.5px solid #e5e9ef;outline:none;font-size:.88em;background:#f7f9fc;border-radius:24px;padding:10px 16px;font-family:inherit;color:#1f2937;transition:border-color .2s,box-shadow .2s}#phn-input:focus{border-color:#70B62F;box-shadow:0 0 0 3px rgba(112,182,47,.15);background:#fff}#phn-input::placeholder{color:#b0b8c4}#phn-send{width:42px;height:42px;background:linear-gradient(135deg,#70B62F,hsl(92,61%,35%));border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform .15s;box-shadow:0 3px 10px rgba(112,182,47,.35)}#phn-send:hover{transform:scale(1.08)}#phn-toggle{width:62px;height:62px;background:linear-gradient(135deg,#569123 0%,#70B62F 100%);border:none;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 18px rgba(112,182,47,.5);transition:transform .2s,box-shadow .2s;position:relative;overflow:visible;padding:0}#phn-toggle:hover{transform:scale(1.08);box-shadow:0 6px 24px rgba(112,182,47,.6)}#phn-toggle-icon{color:#fff;display:flex;align-items:center;justify-content:center;transition:opacity .25s,transform .25s}#phn-toggle.open #phn-toggle-icon{opacity:0;transform:scale(.5) rotate(90deg);pointer-events:none;position:absolute}#phn-toggle-close{position:absolute;font-size:1.5em;color:#fff;opacity:0;transform:scale(.6) rotate(-90deg);transition:opacity .25s,transform .25s;line-height:1}#phn-toggle.open #phn-toggle-close{opacity:1;transform:scale(1) rotate(0)}#phn-notif{position:absolute;top:-2px;right:-2px;width:18px;height:18px;background:#ff3b30;border-radius:50%;border:2px solid #fff;font-size:.65em;font-weight:700;color:#fff;display:flex;align-items:center;justify-content:center;animation:phn-pulse-dot 2s infinite}#phn-notif.hidden{display:none}@keyframes phn-pulse-dot{0%,100%{transform:scale(1)}50%{transform:scale(1.2)}}@media(max-width:768px){#phn-widget{bottom:14px;right:4px}#phn-toggle{width:56px;height:56px}#phn-chat{width:calc(100vw - 20px);height:min(520px,78vh)}}';
  document.head.appendChild(css);

  // ── SVG icons ──
  var AVATAR_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>';
  var CHAT_SVG  = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#fff"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>';
  var WA_SVG    = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';
  var SEND_SVG  = '<svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>';

  // ── HTML ──
  var widget = document.createElement('div');
  widget.id = 'phn-widget';
  widget.innerHTML =
    '<div id="phn-chat" role="dialog" aria-label="Chat con Meredit IA">' +
      '<div id="phn-header">' +
        '<div id="phn-header-left">' +
          '<div id="phn-hdr-avatar">' + AVATAR_SVG + '</div>' +
          '<div>' +
            '<div id="phn-hdr-name">Meredit IA 🌿</div>' +
            '<div id="phn-hdr-sub">Asistente de Jairo · PHN</div>' +
            '<div id="phn-hdr-status">En línea ahora</div>' +
          '</div>' +
        '</div>' +
        '<button id="phn-hdr-close" aria-label="Cerrar chat">✕</button>' +
      '</div>' +
      '<div id="phn-messages">' +
        '<div id="phn-typing"><div class="phn-dots"><div class="phn-dot"></div><div class="phn-dot"></div><div class="phn-dot"></div></div></div>' +
      '</div>' +
      '<div id="phn-chips">' +
        '<button class="phn-chip" data-msg="¿Qué productos tienen?">🌿 Productos</button>' +
        '<button class="phn-chip" data-msg="¿Cómo puedo comprar?">🛒 Comprar</button>' +
        '<button class="phn-chip" data-msg="¿Hacen envíos?">📦 Envíos</button>' +
      '</div>' +
      '<div id="phn-wa-bar">' +
        '<button id="phn-wa-btn" aria-label="Continuar en WhatsApp">' + WA_SVG + ' Hablar con Jairo por WhatsApp</button>' +
      '</div>' +
      '<div id="phn-input-area">' +
        '<input type="text" id="phn-input" placeholder="Escríbeme algo... 🌿" autocomplete="off" maxlength="500" />' +
        '<button id="phn-send" aria-label="Enviar">' + SEND_SVG + '</button>' +
      '</div>' +
    '</div>' +
    '<button id="phn-toggle" aria-label="Abrir chat con Meredit IA" aria-expanded="false">' +
      '<div id="phn-notif" aria-hidden="true">1</div>' +
      '<span id="phn-toggle-icon">' + CHAT_SVG + '</span>' +
      '<span id="phn-toggle-close">✕</span>' +
    '</button>';
  document.body.appendChild(widget);

  // ── PROMPT ──
  var OPENROUTER_API_KEY = "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";

  var SYSTEM_PROMPT =
    "Eres Meredit IA 🌿, asistente virtual del distribuidor independiente Jairo de Proher Natura (PHN).\n" +
    "Eres experta en cosméticos naturales PHN y das recomendaciones personalizadas según el tipo de piel y necesidad de cada cliente.\n\n" +

    "SOBRE JAIRO:\n" +
    "- Es distribuidor independiente de PHN, sin tienda física ni centro de distribución.\n" +
    "- Todas las compras y consultas se realizan directamente con Jairo por WhatsApp.\n" +
    "- WhatsApp: +52 1 777 346 0478 (link directo: https://wa.me/5217773460478)\n" +
    "- Coordina entregas personales o envíos según la ubicación del cliente.\n\n" +

    "SOBRE PHN COSMÉTICOS:\n" +
    "- Empresa mexicana con más de 20 años. Certificaciones: COFEPRIS, FDA y HEALTH CANADA.\n" +
    "- Línea 100% natural, sin químicos agresivos ni conservadores artificiales.\n\n" +

    "═══ CATÁLOGO CON PRECIOS ═══\n\n" +
    "1. VR4 – Gel Tonificante — $250\n" +
    "   Reduce la apariencia de varices y tonifica las piernas. Mejora la circulación local.\n" +
    "   Ingredientes: extractos botánicos, mentol, hamamelis. Cont. 250 g.\n\n" +
    "2. DB6 – Crema Corporal — $300\n" +
    "   Ilumina, humecta y regenera la piel seca o agrietada. Dejala suave y renovada.\n" +
    "   Ingredientes: aloe vera, manteca de karíté, aceite de germen de trigo. Cont. 200 g.\n\n" +
    "3. F.VIT – Gel Reafirmante — $250\n" +
    "   Reafirma y define la figura, reduce la apariencia de celulitis.\n" +
    "   Ingredientes: Centella Asiática, colágeno, activos botánicos. Cont. 250 g.\n\n" +
    "4. PGMT20 – Crema Exfoliante Iluminadora — $300\n" +
    "   Aclara manchas, exfolia y unifica el tono de la piel.\n" +
    "   Ingredientes: Aceite de Coco, Aceite de Almendras. Cont. 250 g.\n\n" +
    "5. CLGQ10 De Día – Crema Colágeno Q10 — $300\n" +
    "   Rejuvenece, nutre y protege la piel durante el día. Piel luminosa y firme.\n" +
    "   Ingredientes: Colágeno Hidrolizado Q10, Sábila, Aceite de Jojoba, Vitamina C. Cont. 250 g.\n\n" +
    "6. CLGQ10 De Noche – Crema Colágeno Q10 — $300\n" +
    "   Regeneración intensiva mientras duermes. Combate arrugas y flácidez.\n" +
    "   Ingredientes: Colágeno Hidrolizado Q10, Sábila, Aceite de Jojoba, Vitamina C. Cont. 250 g.\n\n" +

    "═══ INSTRUCCIONES ═══\n" +
    "1. Recomienda según la necesidad de la piel. SIEMPRE incluye precio.\n" +
    "2. Combina productos cuando tiene sentido (ej. CLGQ10 Día + CLGQ10 Noche para máximos resultados).\n" +
    "3. Para comprar: indica al cliente que haga clic en el botón verde 'Hablar con Jairo por WhatsApp'.\n" +
    "4. Jairo no tiene tienda física — coordina entregas por WhatsApp directamente con el cliente.\n" +
    "5. Responde amable, profesional, con emojis 🌿✨💚 moderados. Máx ~200 palabras.\n" +
    "6. No inventes precios ni productos. Si no sabes algo, recomienda preguntar a Jairo.\n" +
    "7. Nunca menciones tiendas en línea, Shopify ni pasarelas de pago.\n" +
    "8. Son cosméticos naturales de uso tópico, no medicamentos ni sustitutos de tratamiento médico.";

  // ── ESTADO ──
  var history = [];
  var busy = false, opened = false;

  var chatEl    = document.getElementById('phn-chat');
  var toggleBtn = document.getElementById('phn-toggle');
  var closeBtn  = document.getElementById('phn-hdr-close');
  var msgsEl    = document.getElementById('phn-messages');
  var typingEl  = document.getElementById('phn-typing');
  var inputEl   = document.getElementById('phn-input');
  var sendBtn   = document.getElementById('phn-send');
  var notifEl   = document.getElementById('phn-notif');

  function openChat()  { opened=true;  chatEl.classList.add('open');    toggleBtn.classList.add('open');    toggleBtn.setAttribute('aria-expanded','true');  notifEl.classList.add('hidden'); setTimeout(function(){ inputEl.focus(); }, 320); }
  function closeChat() { opened=false; chatEl.classList.remove('open'); toggleBtn.classList.remove('open'); toggleBtn.setAttribute('aria-expanded','false'); }

  toggleBtn.addEventListener('click', function(){ opened ? closeChat() : openChat(); });
  closeBtn.addEventListener('click', closeChat);
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && opened) closeChat(); });

  function addMsg(text, role) {
    var div = document.createElement('div');
    div.className = 'phn-msg ' + role;
    div.innerHTML = text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>')
      .replace(/\n/g,'<br>');
    msgsEl.insertBefore(div, typingEl);
    msgsEl.scrollTop = msgsEl.scrollHeight;
  }

  function showTyping() { typingEl.classList.add('show');    msgsEl.scrollTop = msgsEl.scrollHeight; }
  function hideTyping() { typingEl.classList.remove('show'); }

  function callAPI(userMsg) {
    var messages = [{ role:'system', content:SYSTEM_PROMPT }].concat(history).concat([{ role:'user', content:userMsg }]);
    return fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + OPENROUTER_API_KEY,
        'Content-Type': 'application/json',
        'HTTP-Referer': window.location.href,
        'X-Title': 'Meredit IA - Jairo PHN'
      },
      body: JSON.stringify({ model:'deepseek/deepseek-chat:free', messages:messages, max_tokens:600, temperature:0.7 })
    })
    .then(function(res){
      return res.json().then(function(data){
        if(!res.ok) throw new Error('HTTP ' + res.status + ': ' + JSON.stringify(data));
        return data;
      });
    })
    .then(function(data){ return data.choices[0].message.content.trim(); });
  }

  function send(text) {
    text = text.trim();
    if(!text || busy) return;
    inputEl.value = '';
    addMsg(text, 'user');
    busy = true; showTyping();
    history.push({ role:'user', content:text });
    callAPI(text)
      .then(function(reply){
        history.push({ role:'assistant', content:reply });
        hideTyping(); addMsg(reply, 'bot');
      })
      .catch(function(err){
        console.error('[Meredit IA] Error:', err);
        history.pop(); hideTyping();
        addMsg('❌ Error técnico: ' + err.message, 'bot');
      })
      .finally(function(){ busy = false; inputEl.focus(); });
  }

  sendBtn.addEventListener('click', function(){ send(inputEl.value); });
  inputEl.addEventListener('keydown', function(e){ if(e.key==='Enter' && !e.shiftKey){ e.preventDefault(); send(inputEl.value); } });

  document.querySelectorAll('.phn-chip').forEach(function(chip){
    chip.addEventListener('click', function(){
      if(!opened) openChat();
      send(chip.dataset.msg);
    });
  });

  // Botón WhatsApp — envía el resumen de la conversación a Jairo
  document.getElementById('phn-wa-btn').addEventListener('click', function(){
    var lines = ['Hola Jairo, me interesan los productos PHN. Resumen de mi consulta con Meredit IA:\n'];
    history.forEach(function(m){
      if(m.role === 'user') lines.push('Yo: ' + m.content);
      else lines.push('Meredit IA: ' + m.content);
    });
    if(history.length === 0) lines.push('(Quisiera asesoría sobre los cosméticos PHN)');
    lines.push('\n¿Me puedes ayudar?');
    var msg = lines.join('\n');
    if(msg.length > 1800) {
      var short = ['Hola Jairo, vengo del chat con Meredit IA. Lo último que hablamos:\n'];
      history.slice(-6).forEach(function(m){
        if(m.role === 'user') short.push('Yo: ' + m.content);
        else short.push('Meredit: ' + m.content.substring(0,200) + (m.content.length>200?'...':''));
      });
      short.push('\n¿Me puedes ayudar?');
      msg = short.join('\n');
    }
    window.open('https://wa.me/5217773460478?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });

  // Saludo inicial
  setTimeout(function(){
    addMsg(
      '¡Hola! 👋🌿 Soy Meredit IA, la asistente virtual de Jairo de Proher Natura.\n\n' +
      'Puedo asesorarte sobre nuestros cosméticos naturales PHN, ayudarte a elegir el producto ideal para tu piel y resolver todas tus dudas. Para comprar, Jairo te atiende directamente por WhatsApp. ✨💚\n\n' +
      '¿En qué puedo ayudarte hoy?',
      'bot'
    );
  }, 800);

})();

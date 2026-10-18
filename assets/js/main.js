/* SkillRise Academy — geo-localized pricing, forms, accordions */
(function(){
  'use strict';

  /* ---------- Course catalog with localized pricing ---------- */
  var COURSES = {
    web:       { name:'Website Development (HTML/CSS)',      pkr:2500, usd:29, gbp:23, page:'course-web-development.html' },
    seo:       { name:'SEO Mastery',                         pkr:2000, usd:19, gbp:15, page:'course-seo-mastery.html' },
    ai:        { name:'AI Video Creation',                   pkr:2500, usd:29, gbp:23, page:'course-ai-video-creation.html' },
    social:    { name:'Social Media Account Handling',       pkr:1500, usd:15, gbp:12, page:'course-social-media.html' },
    design:    { name:'Graphic Design (Thumbnails & Posts)', pkr:2000, usd:19, gbp:15, page:'course-graphic-design.html' },
    freelance: { name:'Freelancing & Client Hunting',        pkr:1500, usd:15, gbp:12, page:'course-freelancing.html' }
  };
  var ORDER = ['web','seo','ai','social','design','freelance'];

  var locale = { currency:'USD', symbol:'$', country:'your country', code:'' };

  function applyLocale(cur, countryName, code){
    locale.currency = cur; locale.country = countryName || 'your country'; locale.code = code || '';
    locale.symbol = cur === 'PKR' ? 'Rs ' : (cur === 'GBP' ? '\u00A3' : '$');
    // Update every fee element carrying data-fee="courseKey"
    document.querySelectorAll('[data-fee]').forEach(function(el){
      var key = el.getAttribute('data-fee');
      var c = COURSES[key]; if(!c) return;
      var val = cur === 'PKR' ? c.pkr : (cur === 'GBP' ? c.gbp : c.usd);
      var formatted = cur === 'PKR' ? 'Rs ' + val.toLocaleString('en-PK') : (cur === 'GBP' ? '\u00A3' + val : '$' + val);
      if(el.hasAttribute('data-fee-suffix')){
        el.innerHTML = formatted + ' <small>' + el.getAttribute('data-fee-suffix') + '</small>';
      } else {
        el.textContent = formatted;
      }
    });
    // Geo badges
    document.querySelectorAll('[data-geo-badge]').forEach(function(el){
      el.textContent = 'Serving students in ' + locale.country;
    });
    // Payment method blocks
    var isPK = (cur === 'PKR');
    document.querySelectorAll('[data-pay-pk]').forEach(function(el){ el.style.display = isPK ? '' : 'none'; });
    document.querySelectorAll('[data-pay-intl]').forEach(function(el){ el.style.display = isPK ? 'none' : ''; });
    // Admission fee preview refresh
    updateAdmissionFee();
  }

  function detectGeo(){
    // Default: USD
    applyLocale('USD', 'your country', '');
    var ctrl = new AbortController();
    var t = setTimeout(function(){ ctrl.abort(); }, 6000);
    fetch('https://ipapi.co/json/', { signal: ctrl.signal })
      .then(function(r){ clearTimeout(t); if(!r.ok) throw 0; return r.json(); })
      .then(function(d){
        var code = (d.country_code || '').toUpperCase();
        var name = d.country_name || 'your country';
        if(code === 'PK') applyLocale('PKR', name, code);
        else if(code === 'GB') applyLocale('GBP', name, code);
        else if(code === 'US') applyLocale('USD', name, code);
        else applyLocale('USD', name, code);
      })
      .catch(function(){ /* keep USD fallback */ });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector('.menu-toggle');
  if(toggle){
    toggle.addEventListener('click', function(){
      document.querySelector('.nav-links').classList.toggle('open');
    });
  }

  /* ---------- Accordions (FAQ + curriculum modules) ---------- */
  document.querySelectorAll('.faq-q, .module-head').forEach(function(btn){
    btn.addEventListener('click', function(){
      var item = btn.parentElement;
      var body = item.querySelector('.faq-a, .module-body');
      var open = item.classList.toggle('open');
      body.style.maxHeight = open ? body.scrollHeight + 'px' : '0px';
    });
  });

  /* ---------- Admission form ---------- */
  var courseSelect = document.getElementById('courseSelect');
  function updateAdmissionFee(){
    var feeBox = document.getElementById('feePreview');
    if(!courseSelect || !feeBox) return;
    var key = courseSelect.value;
    if(!key || !COURSES[key]){ feeBox.style.display = 'none'; return; }
    var c = COURSES[key];
    var val = locale.currency === 'PKR' ? c.pkr : (locale.currency === 'GBP' ? c.gbp : c.usd);
    var formatted = locale.currency === 'PKR' ? 'Rs ' + val.toLocaleString('en-PK') : (locale.currency === 'GBP' ? '\u00A3' + val : '$' + val);
    feeBox.style.display = 'flex';
    feeBox.querySelector('strong').textContent = formatted + ' ' + locale.currency;
    feeBox.querySelector('span').textContent = c.name;
  }
  if(courseSelect){ courseSelect.addEventListener('change', updateAdmissionFee); }

  function validEmail(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function showErr(id, msg){
    var e = document.getElementById(id);
    if(e){ e.textContent = msg; e.style.display = 'block'; }
  }
  function hideErrs(form){ form.querySelectorAll('.err').forEach(function(e){ e.style.display='none'; }); }

  var admForm = document.getElementById('admissionForm');
  if(admForm){
    admForm.addEventListener('submit', function(ev){
      ev.preventDefault(); hideErrs(admForm);
      var ok = true;
      var name = admForm.fullname.value.trim();
      var email = admForm.email.value.trim();
      var phone = admForm.phone.value.trim();
      var course = admForm.course.value;
      if(name.length < 3){ showErr('e-name','Please enter your full name.'); ok = false; }
      if(!validEmail(email)){ showErr('e-email','Please enter a valid email address.'); ok = false; }
      if(phone.replace(/\D/g,'').length < 7){ showErr('e-phone','Please enter a valid phone number.'); ok = false; }
      if(!course){ showErr('e-course','Please choose a course.'); ok = false; }
      if(!ok) return;
      var c = COURSES[course];
      var val = locale.currency === 'PKR' ? c.pkr : (locale.currency === 'GBP' ? c.gbp : c.usd);
      var formatted = locale.currency === 'PKR' ? 'Rs ' + val.toLocaleString('en-PK') : (locale.currency === 'GBP' ? '\u00A3' + val : '$' + val);
      var msg = document.getElementById('admissionSuccess');
      msg.innerHTML = 'Thank you, <b>' + name.split(' ')[0] + '</b>! Your admission request for <b>' + c.name + '</b> (' + formatted + ' ' + locale.currency + ') has been received. ' +
        'Please complete your manual payment using the instructions above, then confirm it through our <a href="contact.html" style="text-decoration:underline">contact form</a> with your payment reference. We will email your class access within 24 hours.';
      msg.style.display = 'block';
      admForm.reset();
      var fb = document.getElementById('feePreview'); if(fb) fb.style.display = 'none';
      msg.scrollIntoView({behavior:'smooth', block:'center'});
    });
  }

  /* ---------- Contact form ---------- */
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(ev){
      ev.preventDefault(); hideErrs(contactForm);
      var ok = true;
      if(contactForm.cname.value.trim().length < 3){ showErr('e-cname','Please enter your name.'); ok = false; }
      if(!validEmail(contactForm.cemail.value.trim())){ showErr('e-cemail','Please enter a valid email address.'); ok = false; }
      if(contactForm.cmessage.value.trim().length < 10){ showErr('e-cmessage','Please write your message (at least 10 characters).'); ok = false; }
      if(!ok) return;
      var msg = document.getElementById('contactSuccess');
      msg.style.display = 'block';
      contactForm.reset();
      msg.scrollIntoView({behavior:'smooth', block:'center'});
    });
  }

  /* ---------- Ask a question (FAQ) ---------- */
  var qForm = document.getElementById('askForm');
  if(qForm){
    qForm.addEventListener('submit', function(ev){
      ev.preventDefault(); hideErrs(qForm);
      var ok = true;
      if(qForm.qname.value.trim().length < 3){ showErr('e-qname','Please enter your name.'); ok = false; }
      if(!validEmail(qForm.qemail.value.trim())){ showErr('e-qemail','Please enter a valid email address.'); ok = false; }
      if(qForm.qtext.value.trim().length < 10){ showErr('e-qtext','Please write your question (at least 10 characters).'); ok = false; }
      if(!ok) return;
      var list = JSON.parse(localStorage.getItem('sr_questions') || '[]');
      list.push({ name: qForm.qname.value.trim(), q: qForm.qtext.value.trim(), at: Date.now() });
      localStorage.setItem('sr_questions', JSON.stringify(list));
      renderQuestions();
      var msg = document.getElementById('askSuccess');
      msg.style.display = 'block';
      qForm.reset();
    });
  }
  function renderQuestions(){
    var box = document.getElementById('communityQuestions');
    if(!box) return;
    var list = JSON.parse(localStorage.getItem('sr_questions') || '[]');
    if(!list.length){ box.innerHTML = '<p style="color:var(--muted)">No community questions yet — be the first to ask below.</p>'; return; }
    box.innerHTML = list.slice().reverse().map(function(it){
      return '<div class="faq-item open"><div class="faq-q" style="cursor:default">' + escapeHtml(it.name) + ' asks</div>' +
             '<div class="faq-a" style="max-height:none"><div>' + escapeHtml(it.q) + '<br><small style="color:var(--muted)">Our team will reply by email shortly.</small></div></div></div>';
    }).join('');
  }
  function escapeHtml(s){ return s.replace(/[&<>"']/g, function(m){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]; }); }

  /* ---------- Login / Signup demo ---------- */
  var loginForm = document.getElementById('loginForm');
  var signupForm = document.getElementById('signupForm');
  function setSession(name){ localStorage.setItem('sr_user', JSON.stringify({name:name})); renderSession(); }
  function renderSession(){
    var box = document.getElementById('sessionBox');
    if(!box) return;
    var u = JSON.parse(localStorage.getItem('sr_user') || 'null');
    if(u){
      box.innerHTML = '<div class="success" style="display:block">Welcome back, <b>' + escapeHtml(u.name) + '</b>! You are signed in (demo session).<br><br><button class="btn btn-navy btn-sm" id="logoutBtn">Log out</button></div>';
      document.getElementById('authForms').style.display = 'none';
      document.getElementById('logoutBtn').addEventListener('click', function(){
        localStorage.removeItem('sr_user'); location.reload();
      });
    }
  }
  if(loginForm){
    renderSession();
    document.querySelectorAll('.tab-btn').forEach(function(b){
      b.addEventListener('click', function(){
        document.querySelectorAll('.tab-btn').forEach(function(x){ x.classList.remove('active'); });
        b.classList.add('active');
        document.getElementById('tab-login').style.display = b.dataset.tab === 'login' ? '' : 'none';
        document.getElementById('tab-signup').style.display = b.dataset.tab === 'signup' ? '' : 'none';
      });
    });
    loginForm.addEventListener('submit', function(ev){
      ev.preventDefault(); hideErrs(loginForm);
      var em = loginForm.lemail.value.trim(), pw = loginForm.lpass.value;
      var users = JSON.parse(localStorage.getItem('sr_users') || '{}');
      if(!validEmail(em)){ showErr('e-lemail','Enter a valid email.'); return; }
      if(!users[em] || users[em].pass !== pw){ showErr('e-lpass','No matching demo account found. Please sign up first.'); return; }
      setSession(users[em].name);
    });
    signupForm.addEventListener('submit', function(ev){
      ev.preventDefault(); hideErrs(signupForm);
      var nm = signupForm.sname.value.trim(), em = signupForm.semail.value.trim(), pw = signupForm.spass.value;
      if(nm.length < 3){ showErr('e-sname','Enter your full name.'); return; }
      if(!validEmail(em)){ showErr('e-semail','Enter a valid email.'); return; }
      if(pw.length < 6){ showErr('e-spass','Password must be at least 6 characters.'); return; }
      var users = JSON.parse(localStorage.getItem('sr_users') || '{}');
      users[em] = { name: nm, pass: pw };
      localStorage.setItem('sr_users', JSON.stringify(users));
      setSession(nm);
    });
  }

  /* ---------- Go ---------- */
  detectGeo();
  renderQuestions();
})();

/* SkillRise Academy — shared site shell: header, footer, modals, helpers */
const LOGO_IMG = 'assets/img/logo-blue-s.png';
const LOGO_SVG = '<img class="brand-logo" src="'+LOGO_IMG+'" alt="SkillRise">';
const LOGO_INTRO = '<img class="mark" src="'+LOGO_IMG+'" alt="SkillRise">';

function shellHTML(){
return `
<div id="intro"><div class="intro-glow"></div><div class="intro-stars"></div><div class="intro-inner">${LOGO_INTRO}
<div class="intro-name">SkillRise <span>Academy</span></div>
<div class="intro-tag">Learn Skills. Earn Online.</div>
<div class="intro-bar"><i></i></div></div></div>
<div class="topbar">Admissions Open <b>2026</b> — 52 video courses · Learn from anywhere in the world</div>
<nav><div class="wrap nav-in">
<a class="brand" href="index.html">${LOGO_SVG}<span>SkillRise<small>ACADEMY</small></span></a>
<div class="nav-links"><a href="index.html">Home</a><a href="courses.html">Courses</a><a href="index.html#why">Why Us</a><a href="index.html#how">How It Works</a><a href="faq.html">FAQ</a><a href="contact.html">Contact</a></div>
<div><button class="btn btn-ghost" onclick="openModal('loginModal')">Login</button> <button class="btn btn-p" onclick="openModal('admitModal')">Join Now</button></div>
</div></nav>`;
}
function footerHTML(){
return `
<footer><div class="wrap">
<div class="f-grid">
<div><div class="f-brand">${LOGO_SVG}SkillRise Academy</div>
<p style="font-size:14px;opacity:.8">Learn Skills. Earn Online.<br>Serving students in 30+ countries worldwide.</p></div>
<div><h4>Courses</h4><a href="courses.html">All 52 Courses</a><a href="index.html#why">Why SkillRise</a><a href="index.html#how">How It Works</a><a href="index.html#pricing">Pricing</a></div>
<div><h4>Academy</h4><a href="faq.html">FAQ</a><a href="contact.html">Contact</a><a href="privacy.html">Privacy Policy</a><a onclick="openModal('loginModal')">Student Login</a></div>
<div><h4>Get Started</h4><a onclick="openModal('admitModal')">Apply for Admission</a><a href="courses.html">Browse Courses</a></div>
</div>
<div class="copy">© 2026 SkillRise Academy. All rights reserved. Founded by Abdullah.</div>
</div></footer>`;
}
function modalsHTML(){
return `
<div class="modal" id="loginModal"><div class="sheet">
<button class="x" onclick="closeModal('loginModal')">&times;</button>
<div id="loginForm"><h2>Student Login</h2><div class="sub2">Welcome back to SkillRise Academy.</div>
<div class="field"><label>Email</label><input type="email" id="liEmail" placeholder="you@example.com"></div>
<div class="field"><label>Password</label><input type="password" id="liPass" placeholder="••••••••"></div>
<button class="btn btn-p" onclick="doLogin()">Login</button>
<p style="text-align:center;margin-top:14px;font-size:14px;color:#5b6478">New here? <a href="login.html" style="color:var(--p);font-weight:700">Create free account</a></p></div>
<div id="loginOk" class="okmsg" style="display:none"><div class="big-ok">✓</div><h2>Welcome back!</h2><p style="color:#5b6478" id="loginMsg">You are logged in.</p><button class="btn btn-p" style="margin-top:16px" onclick="closeModal('loginModal')">Continue</button></div>
</div></div>
<div class="modal" id="admitModal"><div class="sheet">
<button class="x" onclick="closeModal('admitModal')">&times;</button>
<div id="admitForm"><h2>Apply for Admission</h2><div class="sub2">We confirm your seat within 24 hours.</div>
<div class="field"><label>Full Name</label><input id="adName" placeholder="Your name"></div>
<div class="field"><label>Email</label><input id="adEmail" type="email" placeholder="you@example.com"></div>
<div class="field"><label>Choose Course</label><select id="adCourse"></select></div>
<button class="btn btn-p" onclick="doAdmit()">Submit Application</button></div>
<div id="admitOk" class="okmsg" style="display:none"><div class="big-ok">✓</div><h2>Application Received!</h2><p style="color:#5b6478" id="admitMsg"></p><button class="btn btn-p" style="margin-top:16px" onclick="closeModal('admitModal')">Done</button></div>
</div></div>
<div class="modal" id="videoModal"><div class="sheet wide">
<button class="x" onclick="closeVideo()">&times;</button>
<h2 style="margin-bottom:14px" id="vidTitle">Course Preview</h2>
<video id="introVideo" controls src="assets/video/web-intro.mp4"></video>
</div></div>
<div class="modal" id="checkoutModal"><div class="sheet">
<button class="x" onclick="closeModal('checkoutModal')">&times;</button>
<div style="text-align:center;margin-bottom:18px"><div style="font-size:44px">🎓</div><h2 style="margin-top:8px">Secure Checkout</h2><div class="sub2">One payment · lifetime access</div></div>
<div class="coitem"><div><b id="coTitle">Course</b><div class="muted" id="coDesc" style="font-size:13.5px"></div></div><b id="coPrice" style="font-size:22px;color:var(--ink)">$19</b></div>
<button class="btn btn-p" id="coPay" style="width:100%;padding:16px;font-size:17px">Pay Securely 🔒</button>
<p id="coNote" class="muted" style="display:none;font-size:14px;text-align:center;margin-top:6px">Online card payments are being activated on our secure checkout.<br>Meanwhile, reserve your seat via the <a href="admission.html" style="color:var(--p);font-weight:700">admission form</a> — our team confirms within 24 hours.</p>
<div class="cosecure">🔒 256-bit encrypted payment &nbsp;·&nbsp; 30-day money-back guarantee</div>
<button class="btn btn-g" style="width:100%;margin-top:12px" onclick="closeModal('checkoutModal')">Cancel</button>
</div></div>`;
}
/* ---------- course card ---------- */
function courseCard(c){
  const syl = syllabus(c).map((l,n)=>`<li><b>Lesson ${n+1}</b> ${l.t}<span class="lp">▶ ${l.d}</span></li>`).join('');
  return `<div class="fcard">
  <div class="fthumb" onclick="openVideo('${c.video}','${c.name} — Free Preview')">${c.badge?`<span class="ribbon">${c.badge}</span>`:''}<img loading="lazy" src="${c.img}" alt="${c.name}"><div class="fplay"><span></span></div><div class="fdur">${c.hours}h</div></div>
  <div class="fbody"><div class="fcat">${c.cat}</div><h3><a href="course.html?id=${c.id}" style="color:inherit">${c.name}</a></h3>
  <div class="fmeta"><span><span class="st">★★★★★</span> ${c.rating}</span><span>${c.lessons} video lessons</span><span>${c.level}</span></div>
  <p class="fdesc">${c.desc}</p>
  <span class="syl-toggle" onclick="document.getElementById('syl${c.id}').classList.toggle('open')">▾ View syllabus — ${c.lessons} lessons</span>
  <div class="ffoot"><span class="price">$${c.price} <s>$${c.old}</s><small> / course</small></span><span class="fbtns"><button class="btn-sm line" onclick="openVideo('${c.video}','${c.name} — Free Preview')">▶ Preview</button><button class="btn-sm solid" onclick="enroll('${c.name}')">Enroll</button></span></div></div>
  <div class="syl" id="syl${c.id}"><h4>WHAT YOU'LL LEARN</h4><ul>${syl}</ul><p style="margin-top:10px"><a href="course.html?id=${c.id}" style="color:var(--p);font-weight:700;font-size:14px">Full course details →</a></p></div>
  </div>`;
}
/* ---------- modals / actions ---------- */
function openModal(id){document.getElementById(id).classList.add('show');}
function closeModal(id){document.getElementById(id).classList.remove('show');}
function openVideo(src,title){const v=document.getElementById('introVideo');v.src=src||'assets/video/web-intro.mp4';document.getElementById('vidTitle').textContent=title||'Course Preview';openModal('videoModal');v.play().catch(()=>{});}
function closeVideo(){const v=document.getElementById('introVideo');v.pause();closeModal('videoModal');}
function enroll(name){const sel=document.getElementById('adCourse');if(sel){[...sel.options].forEach(o=>{if(o.text.indexOf(name)===0)sel.value=o.text;});}openModal('admitModal');}
/* ---------- secure checkout (Stripe Payment Links) ---------- */
/* Paste your Stripe Payment Links here when ready — money lands in your Stripe account. */
const PAY={single:'',allaccess:''};
function checkout(kind,name,price){
  const link=kind==='allaccess'?PAY.allaccess:PAY.single;
  document.getElementById('coTitle').textContent=kind==='allaccess'?'All-Access Pass':name;
  document.getElementById('coDesc').textContent=kind==='allaccess'?'All 52 courses · 600+ video lessons · lifetime access':'Full video course · lifetime access · certificate of completion';
  document.getElementById('coPrice').textContent='$'+price;
  const btn=document.getElementById('coPay'),note=document.getElementById('coNote');
  if(link&&link.indexOf('http')===0){btn.style.display='';btn.onclick=()=>window.open(link,'_blank');note.style.display='none';}
  else{btn.style.display='none';note.style.display='';}
  openModal('checkoutModal');
}
function buildCourseSelect(){const sel=document.getElementById('adCourse');if(!sel||sel.options.length)return;const o0=document.createElement('option');o0.textContent='All-Access Pass — all 52 courses ($99)';sel.appendChild(o0);COURSES.forEach(c=>{const o=document.createElement('option');o.textContent=`${c.name} — $${c.price}`;sel.appendChild(o);});}
function doLogin(){
  const e=document.getElementById('liEmail').value.trim(),p=document.getElementById('liPass').value;
  if(!e||!p||e.indexOf('@')<0){alert('Please enter a valid email and password.');return;}
  try{
    const users=JSON.parse(localStorage.getItem('sr_users')||'{}');
    const u=users[e.toLowerCase()];
    if(u&&u.pass===p){document.getElementById('loginMsg').textContent=`Welcome back, ${u.name}! Your courses are ready.`;}
    else if(u){alert('Wrong password for this email.');return;}
    else{document.getElementById('loginMsg').textContent='Logged in! Tip: create a free account on the login page to save your progress.';}
    localStorage.setItem('sr_session',e.toLowerCase());
  }catch(err){}
  document.getElementById('loginForm').style.display='none';document.getElementById('loginOk').style.display='block';
}
function doAdmit(){
  const n=document.getElementById('adName').value.trim(),e=document.getElementById('adEmail').value.trim();
  if(!n||!e||e.indexOf('@')<0){alert('Please fill your name and a valid email.');return;}
  const sel=document.getElementById('adCourse');
  document.getElementById('admitMsg').textContent=`Thanks ${n}! Your seat for "${sel?sel.value:'a course'}" is reserved. Payment instructions were sent to ${e} — we confirm within 24 hours.`;
  document.getElementById('admitForm').style.display='none';document.getElementById('admitOk').style.display='block';
}
/* ---------- effects ---------- */
function initReveal(){
  if(!('IntersectionObserver' in window)){return;}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target);}}),{threshold:.1});
  document.querySelectorAll('.sec-head,.fcard,.step,.test,.plan,.cert,.guarantee,.cat').forEach(el=>{el.classList.add('rv');io.observe(el);});
  setTimeout(()=>document.querySelectorAll('.rv').forEach(el=>el.classList.add('on')),2200);
}
function initCounters(){
  document.querySelectorAll('[data-count]').forEach(b=>{
    const target=parseInt(b.dataset.count,10),suf=b.dataset.suffix||'';
    if(!target)return;const t0=performance.now();
    (function tick(t){const p=Math.min(1,(t-t0)/700),v=Math.round(target*(1-Math.pow(1-p,3)));b.textContent=v+suf;if(p<1)requestAnimationFrame(tick);})(t0);
    setTimeout(()=>{b.textContent=target+suf;},900);
  });
}
function bindFAQ(){
  document.querySelectorAll('.faq-item').forEach(it=>{
    const q=it.querySelector('.faq-q');if(!q||q.dataset.bound)return;q.dataset.bound='1';
    q.onclick=()=>{
      const a=it.querySelector('.faq-a'),open=it.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(x=>{x.classList.remove('open');x.querySelector('.faq-a').style.maxHeight=null;});
      if(!open){it.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
    };
  });
}
document.addEventListener('DOMContentLoaded',()=>{
  /* PWA: manifest + theme + icons */
  const head=document.head;
  if(!head.querySelector('link[rel="manifest"]')){
    head.insertAdjacentHTML('beforeend',
      '<link rel="manifest" href="manifest.json">'+
      '<link rel="icon" type="image/png" href="assets/img/icon-32.png">'+
      '<meta name="theme-color" content="#1e40af">'+
      '<link rel="apple-touch-icon" href="assets/img/icon-180.png">'+
      '<meta name="mobile-web-app-capable" content="yes">'+
      '<meta name="apple-mobile-web-app-capable" content="yes">'+
      '<meta name="apple-mobile-web-app-status-bar-style" content="default">'+
      '<meta name="apple-mobile-web-app-title" content="SkillRise">');
  }
  if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(()=>{});}
  document.body.insertAdjacentHTML('afterbegin',shellHTML());
  document.body.insertAdjacentHTML('beforeend',footerHTML()+modalsHTML());
  buildCourseSelect();bindFAQ();initReveal();initCounters();
  document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m){m.classList.remove('show');const v=m.querySelector('video');if(v)v.pause();}}));
  const intro=document.getElementById('intro');
  if(new URLSearchParams(location.search).get('nointro')==='1'){intro.classList.add('done');}
  else{setTimeout(()=>intro.classList.add("done"),2600);}
  if(typeof pageInit==='function')pageInit();
});

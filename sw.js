/* SkillRise Academy service worker — cache-first for offline use */
const CACHE = 'skillrise-v1';
const CORE = [
  './', './index.html', './courses.html', './course.html',
  './admission.html', './login.html', './faq.html',
  './contact.html', './privacy.html', './manifest.json',
  './assets/css/style.css', './assets/js/data.js', './assets/js/site.js',
  './assets/img/icon-192.png', './assets/img/icon-512.png',
  './assets/img/hero.jpg'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});

const CACHE='totime-v06';
const ASSETS=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest','./assets/totime-logo-full.png','./assets/totime-icon-light.png','./assets/totime-icon-dark.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));

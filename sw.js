// Cold War Origins Exam, service worker.
// Strategy: network-first for HTML/JS/CSS (so code updates land instantly),
// cache-first for images/fonts/manifest (rarely change, big win when offline).
const CACHE = 'cwo-june2025-v8';
const PRECACHE = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './cartoon.png',
  './manifest.webmanifest'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE)).catch(()=>{})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
    // Tell open tabs a new SW is live so they can reload once.
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => c.postMessage({ type: 'SW_UPDATED' }));
  })());
});

function isHtmlOrCode(url) {
  if (url.pathname.endsWith('/') || url.pathname.endsWith('.html')) return true;
  if (url.pathname.endsWith('.js') || url.pathname.endsWith('.css')) return true;
  return false;
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  let url;
  try { url = new URL(e.request.url); } catch (_) { return; }
  if (url.origin !== self.location.origin) return; // let cross-origin (fonts CDN) pass through

  if (isHtmlOrCode(url)) {
    // Network-first: always try to fetch fresh code, fall back to cache when offline.
    e.respondWith((async () => {
      try {
        const res = await fetch(e.request, { cache: 'no-store' });
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        }
        return res;
      } catch (_) {
        const cached = await caches.match(e.request);
        return cached || new Response('Offline', { status: 503 });
      }
    })());
    return;
  }

  // Cache-first for everything else (images, manifest, etc.)
  e.respondWith(
    caches.match(e.request).then(cached =>
      cached || fetch(e.request).then(res => {
        try {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
        } catch (_) {}
        return res;
      }).catch(() => cached)
    )
  );
});

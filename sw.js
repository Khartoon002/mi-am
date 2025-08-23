/* Lightweight PWA service worker: HTML = network-first, static = cache-first */
const VERSION = 'miamor-sw-v1.0.0';
const STATIC_CACHE = `${VERSION}-static`;
const HTML_CACHE = `${VERSION}-html`;

const STATIC_ASSETS = [
  '/', '/styles.css',
  '/img/og-cover.jpg',
  '/img/miamor-logo.png',
  '/downloads.html', '/register.html', '/register2.html',
  '/packages.html', '/faq.html'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(STATIC_CACHE);
    await cache.addAll(STATIC_ASSETS.map(u => new Request(u, { cache: 'reload' })));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.map(k => (k.startsWith('miamor-sw-') && k !== VERSION) ? caches.delete(k) : Promise.resolve()));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;

  // HTML/doc requests: network-first (freshness), fallback to cache/offline
  if (req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html')) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(HTML_CACHE);
        cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        const cache = await caches.open(HTML_CACHE);
        const cached = await cache.match(req);
        if (cached) return cached;
        // Final fallback: cached homepage
        const shell = await caches.open(STATIC_CACHE);
        return (await shell.match('/')) || Response.error();
      }
    })());
    return;
  }

  // Static assets: cache-first, update in background (stale-while-revalidate)
  event.respondWith((async () => {
    const cache = await caches.open(STATIC_CACHE);
    const cached = await cache.match(req);
    const networkFetch = fetch(req).then((res) => {
      cache.put(req, res.clone()).catch(() => {});
      return res;
    }).catch(() => cached);
    return cached || networkFetch;
  })());
});

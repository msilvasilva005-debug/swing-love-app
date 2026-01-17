self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('swing-love-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/vip.html',
        '/regras.html',
        '/eventos.html',
        '/pix.html',
        '/manifest.json',
        '/icone-192.png',
        '/icone-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

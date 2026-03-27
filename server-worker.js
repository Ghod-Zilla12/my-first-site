const cacheName = 'zilla-v1';
const assets = ['index.html', 'style.css', 'todo.html', 'weather.html', 'calc.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});

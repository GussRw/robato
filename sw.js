const CACHE_NAME = 'v1_cache_robato';
const urlsToCache = [
    './robato-icon.png',
    './robato.png',
    './please.mp3',
]

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(urlsToCache).then(() => {
            self.skipWaiting()
        })
    }))
})

self.addEventListener('activate', e => {
    const cacheWhitelist = [CACHE_NAME];
    e.waitUntil(
        caches.keys().then(cachesNames => {
            cachesNames.map(cacheName => (cacheWhitelist.indexOf(cacheName) === -1) ? caches.delete(cacheName) : null)
        }).then(() => self.clients.claim())
    )
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res ? res : fetch(e.request))
    )
});
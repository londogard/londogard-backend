var CACHE_NAME = 'londogard-colorkidz';
var urlsToCache = [
  "/index.html",
  "/NEW.js",
  "/colorkidz-256.png",
  "/colorkidz-512.png"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch',() => console.log("fetch"));
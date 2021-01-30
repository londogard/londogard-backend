var CACHE_NAME = 'londogard-colorkidz';
var urlsToCache = [
  "/index.html",
  "/NEW.js",
  "/android-chrome-192x192.png",
  "/android-chrome-512x512.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/mstile-150x150.png",
  "/safari-pinned-tab.svg"
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
const staticSimpleCounter = "the-simple-counter-3"
const assets = [
    "/",
    "index.html",
    "style.css",
    "index.js",
    "images/icon-512.png",
    "images/icon-192.png",
    "images/icon-144.png",
    "images/icon.png"
]

//install event
self.addEventListener("install", installEvent =>
{
    installEvent.waitUntil
    (
        caches.open(staticSimpleCounter).then(cache=>
            {
                cache.addAll(assets)
                console.log('caching assets')
            })
    );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== staticSimpleCounter)
        .map(key => caches.delete(key))
      );
    })
  );
});

//fetch event

self.addEventListener("fetch", fetchEvent =>
{
    fetchEvent.respondWith
    (
        caches.match(fetchEvent.request).then(res=>
            {
                return res||fetch(fetchEvent.request)
            })
    );
});


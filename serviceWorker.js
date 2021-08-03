const staticSimpleCounter = "the-simple-counter"
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

self.addEventListener("install", installEvent =>
{
    installEvent.waitUntil
    (
        caches.open(staticSimpleCounter).then(cache=>
            {
                cache.addAll(assets)
            })
    )
})

self.addEventListener("fetch", fetchEvent =>
{
    fetchEvent.respondWith
    (
        caches.match(fetchEvent.request).then(res=>
            {
                return res||fetch(fetchEvent.request)
            })
    )
})


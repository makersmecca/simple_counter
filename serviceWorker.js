const staticSimpleCounter = "simple-counter"
const assets = [
    "/",
    "/index.html",
    "/arrangements.css",
    "/index.js",
    "/images/logo.ico",

]

self.addEventListener("install",installEvent =>
{
    installEvent.waitUntil(
        caches.open(staticSimpleCounter).then(cache =>
            {
                cache.addAll(assets)
            })
    )
})

self.addEventListener("fetch", fetchEvent =>
{
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res=>
            {
                return res || fetch(fetchEvent.request)
            })
    )
})

let pressEl = document.getElementById("view")

let count = 0
pressEl.textContent = count

function pressed()
{
    console.log("Button pressed")
    count+=1
    pressEl.textContent = count
}

function resets()
{
    console.log("Counter Reset")
    count=0
    pressEl.textContent = count
}

if("serviceWorker" in navigator)
{
    window.addEventListener("load",function()
    {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res=> console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))

    })
}


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


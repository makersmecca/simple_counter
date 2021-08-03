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
export const pwaTrackingListeners = () => {
  const fireAddToHomeScreenImpression = event => {
    fireTracking("Add to homescreen shown");
    //will not work for chrome, untill fixed
    event.userChoice.then(choiceResult => {
      fireTracking(`User clicked ${choiceResult}`);
    });
    //This is to prevent `beforeinstallprompt` event that triggers again on `Add` or `Cancel` click
    window.removeEventListener(
      "beforeinstallprompt",
      fireAddToHomeScreenImpression
    );
  };
  window.addEventListener("beforeinstallprompt", fireAddToHomeScreenImpression);
  
  //Track web app install by user
  window.addEventListener("appinstalled", event => {
    fireTracking("PWA app installed by user!!! Hurray");
  });

  //Track from where your web app has been opened/browsed
  window.addEventListener("load", () => {
    let trackText;
    if (navigator && navigator.standalone) {
      trackText = "Launched: Installed (iOS)";
    } else if (matchMedia("(display-mode: standalone)").matches) {
      trackText = "Launched: Installed";
    } else {
      trackText = "Launched: Browser Tab";
    }
    fireTracking(track);
  });
};


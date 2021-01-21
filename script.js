button.addEventListener('click', function (e) {
    const el = e.target;
    if (el.getAttribute("data-dblclick") == null) {
        el.setAttribute("data-dblclick", 1);
        setTimeout(function () {
            if (el.getAttribute("data-dblclick") == 1) {
                plase.play();
            }
            el.removeAttribute("data-dblclick");
        }, 300);
    } else {
        el.removeAttribute("data-dblclick");
        thanks.play();
    }
})

button.addEventListener('contextmenu', function (e) {
    e.preventDefault()
    iam.play()
})
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(res => {
        console.log('Service Worker', reg);
    }).catch(err => {
        console.warn('Service Worker', err)
    })
}
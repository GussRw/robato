button.addEventListener('click', function () {
    please.play()
})
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then(res => {
        console.log('Service Worker', reg);
    }).catch(err => {
        console.warn('Service Worker', err)
    })
}
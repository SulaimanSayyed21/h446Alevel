// register-service-worker.js

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                console.log('Verbal Reasoning App has registered its Service worker !:', reg);
            })
            .catch(err => {
                console.error('Service worker registration failed:', err);
            });
    });
}
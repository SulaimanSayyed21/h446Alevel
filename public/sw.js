importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  // Precache manifest
const precacheManifest = [
    '/',
    //'/login',
    //'/guest/login',
    //'/signup',
    //'/dashboard',
    //'/practice',
    //'/test',
    //'/profile',
    '/data/topics.json',
    '/stylesheets/styles.css',
    '/bootstrap-5.0.2/css/bootstrap.min.css',
    '/bootstrap-5.0.2/css/bootstrap.min.css.map',
    '/bootstrap-5.0.2/js/bootstrap.bundle.min.js',
    '/bootstrap-5.0.2/js/bootstrap.bundle.min.js.map',
    '/javascripts/topicScript.js',
    '/javascripts/practiceScript.js',
    '/javascripts/testScript.js',
    '/javascripts/recordtestScript.js',
    '/favicon.ico',
    '/icons/icon-16x16.png',
    '/icons/icon-24x24.png',
    '/icons/icon-48x48.png',
    '/icons/icon-72x72.png',
    '/icons/icon-192x192.png',
    '/icons/icon-144x144.png',
    '/icons/icon-512x512.png',
    '/images/avatar.jpg',
    '/sounds/buzz.wav',
    '/sounds/click.wav',
    '/sounds/success.wav'
  ];
  
  // Set up Workbox to precache assets
  workbox.precaching.precacheAndRoute(precacheManifest);
  
  // Cache icon requests
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image' &&
      request.url.includes('/icons/'),
    new workbox.strategies.CacheFirst()
  );
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'image' &&
      request.url.includes('/images/'),
    new workbox.strategies.CacheFirst()
  );
  
  
  workbox.routing.registerRoute(
    ({ request }) => request.destination === 'script' || request.destination === 'style',
    new workbox.strategies.StaleWhileRevalidate()
  );
  
  workbox.routing.registerRoute(
    ({ request }) => request.mode === 'navigate',
    new workbox.strategies.NetworkFirst()
  );

  //
  workbox.routing.registerRoute(
    ({ url }) => url.pathname === '/',
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/login'),
    new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/signup'),
    new workbox.strategies.NetworkFirst()
);


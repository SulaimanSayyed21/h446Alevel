importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  // Precache manifest
const precacheManifest = [
    //  icon paths to be cached
    //'./',
    // './login',
    // './signup',
    // '/practice',
    // '/test',
    //'/stylesheets/styles.css',
    // '/javascripts/topicScript.js',
    // '/javascripts/practiceScript.js',
    '/favicon.ico',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/icons/icon-72x72.png',
    '/icons/icon-144x144.png'
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
workbox.routing.registerRoute(
    ({ url }) => url.pathname.startsWith('/practice'),
    new workbox.strategies.CacheFirst()
);
workbox.routing.registerRoute(
  ({ url }) => url.pathname.startsWith('/test'),
  new workbox.strategies.CacheFirst()
);
importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  // Precache manifest
const precacheManifest = [
    //  icon paths to be cached
    '/practice',
    '/stylesheets/styles.css',
    '/javascripts/topic.js',
    '/javascripts/practice.js',
    '/app.js',
    '/favicon.ico',
    '/icon/icon-192x192.png',
    '/icon/icon-512x512.png',
    '/icon/icon-72x72.png',
    '/icon/1con-144x144.png'
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
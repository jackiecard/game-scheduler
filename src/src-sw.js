
console.log("Hello");

workbox.routing.registerRoute(
   /https:\/\/cat-fact\.herokuapp\.com\/facts/,
  workbox.strategies.networkFirst()
)

//workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

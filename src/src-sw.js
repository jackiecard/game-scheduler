
console.log("Hello");

workbox.routing.registerRoute(
  /http\:\/\/localhost\:4000\/graphql/,
  workbox.strategies.networkFirst()
)

workbox.skipWaiting();

workbox.precaching.precacheAndRoute(self.__precacheManifest);

self.addEventListener('install', (e) => {
  console.log('Service Worker Installed');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}
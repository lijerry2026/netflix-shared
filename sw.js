// sw.js
self.addEventListener('install', (e) => {
  self.skipWaiting();
  console.log('Service Worker 正在安裝...');
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

// 監聽網頁前台定時發送的 Ping 訊息，盡可能維持 Service Worker 在背景的生存權重
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PING') {
    console.log('SW Background Ping Received');
  }
});

self.addEventListener('fetch', (e) => {
  // 目前讓所有網路請求直接通過，不特別做離線快取
});
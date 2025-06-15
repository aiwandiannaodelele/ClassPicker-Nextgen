const CACHE_NAME = 'classpicker-pwa-cache-v1';
const FILES_TO_CACHE = [
  '/',
  'index.html',
  'tailwindcss.js',
  'font-awesome.min.css',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
  'apple-touch-icon.png',
  'favicon.ico',
  'favicon-16x16.png',
  'favicon-32x32.png',
  'icon.png',
  'InterVariable.woff2' // 新增字体文件缓存
];

// 安装服务工作者并缓存资源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('正在缓存应用资源');
        return cache.addAll(FILES_TO_CACHE);
      })
  );
});

// 拦截请求并返回缓存内容
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 缓存中有请求的资源
        if (response) {
          return response;
        }
        
        // 缓存中没有，从网络获取
        return fetch(event.request);
      })
  );
});

// 处理激活事件
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
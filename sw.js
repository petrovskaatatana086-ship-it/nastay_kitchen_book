
const CACHE='nasti-kitchen-v4-plus';
const CORE=["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./media/posters/IMG_2863.MOV_thumb.jpg", "./media/posters/IMG_9092.MOV_thumb.jpg", "./media/posters/IMG_3100.MOV_thumb.jpg", "./media/posters/IMG_2053.MOV_thumb.jpg", "./media/posters/IMG_9184.MOV_thumb.jpg", "./media/posters/IMG_0994.MOV_thumb.jpg", "./media/posters/IMG_9220.MOV_thumb.jpg", "./media/posters/IMG_0531.MOV_thumb.jpg", "./media/posters/IMG_5283.MOV_thumb.jpg", "./media/posters/IMG_9212.MOV_thumb.jpg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
    const copy=resp.clone();
    caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{});
    return resp;
  }).catch(()=>r)));
});

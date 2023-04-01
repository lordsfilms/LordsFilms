importScripts('/idb.js');
importScripts('/utility.js');

self.addEventListener('install', event => {
  console.log('Installing [Service Worker]', event);

  event.waitUntil(
    caches.open('static')
      .then(cache => {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html',
          '/app.js',
          '/chart.js',
          '/materialize.js',
          '/materialize.min.js',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://code.jquery.com/jquery-2.1.1.min.js',
          'https://cdn.jsdelivr.net/npm/chart.js@2.8.0'
        ]);
      }));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(res => {
              return caches.open('dynamic')
                .then(cache => {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            });
        }
      })
    );
});

self.addEventListener('sync', event => {
  console.log('[Service Worker] Syncing');

  if (event.tag === 'sync-request') {
    event.waitUntil(
      readAllData('sync-requests')
        .then(async data => {
          const requests = [];

          for (const d of data) {
            requests.push(fetch('https://simple-pwa-8a005.firebaseio.com/data.json', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                sunday: d.sunday
              })
            }));
          }

          const results = await Promise.all(requests);

          results.map((response, index) => {
            if (response.ok) {
              deleteItemFromData('sync-requests', data[index].id);
            }
          })
        })
    );
  }
});

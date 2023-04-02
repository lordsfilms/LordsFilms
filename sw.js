‘use strict’;
importScripts(‘sw-toolbox.js’); toolbox.precache([“glavnyy.html”,“music.html”,“Tvonline.html”,“serial.html”,“films.html”,“yumorikanaly.html”,“index.html”,”style/style.css”]); toolbox.router.get(‘/images/*’, toolbox.cacheFirst); toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});

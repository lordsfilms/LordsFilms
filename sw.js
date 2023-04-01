‘use strict’;
importScripts(‘sw-toolbox.js’); toolbox.precache([“https://lordsfilms.github.io/LordsFilms/index.html”]); toolbox.router.get(‘/images/*’, toolbox.cacheFirst); toolbox.router.get(‘/*’, toolbox.networkFirst, { networkTimeoutSeconds: 5});

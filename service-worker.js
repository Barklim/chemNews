"use strict";var precacheConfig=[["/chemNews/index.html","31782b79588b35cd0565eea629ccf2d0"],["/chemNews/static/css/main.dedd4868.css","7d04e673bec467fd74917c0d50abc1ee"],["/chemNews/static/js/main.04648200.js","5428e10c1c493c82d96b0f366a3b38b9"],["/chemNews/static/media/1.b0a8e57d.svg","b0a8e57d43088b90a133da6a5a2fa303"],["/chemNews/static/media/10.c60463ff.svg","c60463ffdfeb68a237a1717aabebd052"],["/chemNews/static/media/11.1376378e.svg","1376378ed1fa0ffaa78a2df08a1d660a"],["/chemNews/static/media/12.c77473d3.svg","c77473d33b7d1c7a0f7ae07e9f0d6d8c"],["/chemNews/static/media/2.b0f0043e.svg","b0f0043e2abcf7b7b8f14307a5f3b7a0"],["/chemNews/static/media/3.c4e1d84a.svg","c4e1d84ab537cdd77be86537b07058a7"],["/chemNews/static/media/4.8143ce38.svg","8143ce3818457c7919a6e19694cfd4d1"],["/chemNews/static/media/5.dd43b861.svg","dd43b861893aed67174740a7939517d4"],["/chemNews/static/media/6.9ba3e2cf.svg","9ba3e2cfddc97c9129b6dcace1c720ee"],["/chemNews/static/media/7.f6db02d0.svg","f6db02d0efb5140cb608998446cb9640"],["/chemNews/static/media/8.8c3c0953.svg","8c3c095319ef7782a368fb03b0e66b91"],["/chemNews/static/media/9.011dd14f.svg","011dd14f2ca10a419cc5477788531cde"],["/chemNews/static/media/bg1.a5a8e301.jpg","a5a8e3010ffe11c39c494405a90b8df1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/chemNews/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
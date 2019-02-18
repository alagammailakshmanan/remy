"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/./docs/favicon.ico","93cd6c79a839b308393896023da5ab48"],["/./docs/iframe.html","aab4f690b3b06ae3065d0025de37f069"],["/./docs/index.html","8b27e6960cf1b5cbe1fd2b20a2d378f6"],["/./docs/static/manager.dd5b0d8ca7b076794298.bundle.js","aa7be972f7d3f7c791a861ee042f41cf"],["/./docs/static/preview.87e0ec8826e28b97de34.bundle.js","bfbf08f28bea6c69dcb306ea53e1f0c3"],["/./index.html","179dcc6fc4469b646fee9843081c6eae"],["/./loader.js","92761fe2b191589ba7f3afb207cbc58e"],["/./static/css/remy.9989d244.css","1ed9305da5ae330adb6702bd54e9bb37"],["/./static/js/polyfills.df9eba53.js","6b8e7e78147c0380dc08a30f84761861"],["/./static/js/remy.1a34cf53.js","40853c85b6323f82cbaef19ce5454416"],["/./static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/./static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/./static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/./static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/./static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/./static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/./static/media/icons.263bfe56.eot","263bfe56755cefdc9e6c3d8070e0868d"],["/./static/media/icons.27c88389.woff2","27c88389f00e0d8bfeebebae81f240b6"],["/./static/media/icons.7bc63d50.woff","7bc63d50d4158c6bfd4b30a99c9f9460"],["/./static/media/icons.b42b4467.svg","b42b446772f84a277ee29a0615b38800"],["/./static/media/icons.d3490a32.ttf","d3490a32350db6c9c41e69cc9ce99cd0"],["/./static/media/slick.b7c9e1e4.woff","b7c9e1e479de3b53f1e4e30ebac2403a"],["/./static/media/slick.ced611da.eot","ced611daf7709cc778da928fec876475"],["/./static/media/slick.d41f55a7.ttf","d41f55a78e6f49a5512878df1737e58a"],["/./static/media/slick.f97e3bbf.svg","f97e3bbf73254b0112091d0192f17aec"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/./index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});
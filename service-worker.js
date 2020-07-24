/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e411aed6567682f219a1bf2797652ff"
  },
  {
    "url": "about.html",
    "revision": "dc90711d030e9d4f4cd6102119e44e41"
  },
  {
    "url": "assets/css/0.styles.08a0540f.css",
    "revision": "3f1cf95f285c5d73fc435b716670412d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.986af9d6.js",
    "revision": "8d07197e0e8ffe74ab8db0680dd8ed31"
  },
  {
    "url": "assets/js/11.d838f98d.js",
    "revision": "07db2f1177aef2fed1a5c511e70adfb5"
  },
  {
    "url": "assets/js/12.5fd97cf6.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.09db7eea.js",
    "revision": "3fe7aad03328d4d7050ea713c24f29e0"
  },
  {
    "url": "assets/js/14.c1170179.js",
    "revision": "98d8b33ae4dd390152c24f39f777563b"
  },
  {
    "url": "assets/js/15.90b1c7fc.js",
    "revision": "ca5eb881ca8271f7fae83f82c7511dda"
  },
  {
    "url": "assets/js/16.3d03c55b.js",
    "revision": "3f4780bc58b8f520e3af021009989d1a"
  },
  {
    "url": "assets/js/17.23774980.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.1a89581b.js",
    "revision": "8ee614d4c81f4cdda1ebecf6b61c7a34"
  },
  {
    "url": "assets/js/19.6247161d.js",
    "revision": "4f1807d0dc6e3c755ff9f9842d1dbc34"
  },
  {
    "url": "assets/js/2.c8e318ee.js",
    "revision": "e1f218e12637a8884888842fc51279d9"
  },
  {
    "url": "assets/js/20.c46fab6a.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.448b4a74.js",
    "revision": "686ccb381160baa066dac700b71ad120"
  },
  {
    "url": "assets/js/22.c0f1cf73.js",
    "revision": "71f397dd56d051e190d501f42e0527e0"
  },
  {
    "url": "assets/js/23.ee93132b.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.485409c5.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.e4ea53f1.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.efbed168.js",
    "revision": "f8297d743b6af929f87707f17e0d01ed"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.636665fe.js",
    "revision": "a4ead256bede2f71f22b73488497aed5"
  },
  {
    "url": "assets/js/4.b3719a29.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.09d06dfa.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.a2b0b332.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.917805ff.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.1b223ebc.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.2c692bd5.js",
    "revision": "cd6cbe6baac87b2ac5f761ae86a56c78"
  },
  {
    "url": "demo.html",
    "revision": "a33aa8cb253c93371db3d004896e1dab"
  },
  {
    "url": "en/about.html",
    "revision": "ad8de1e514a83742582618a11178fb8e"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "9a8e3d79f45e10d04a9965197bf305dc"
  },
  {
    "url": "en/guide/config.html",
    "revision": "794640e56a00ba1325c9432cab7320a5"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "45d23ba7e27f1ed9a09e30d5346bdc9b"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "76beb3cbb4f9abf2190349e4d4f65f56"
  },
  {
    "url": "en/guide/index.html",
    "revision": "78ded6e6af27a88cc1af7a030f612612"
  },
  {
    "url": "en/guide/page.html",
    "revision": "7ef03ae348a31d50998285ad8cd3d071"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "9d69482518603810a09c27faa2a58a2f"
  },
  {
    "url": "en/index.html",
    "revision": "372b37a31cbe28d6e6da37341b93f2c0"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "78997c650761df63010925c68dce04ee"
  },
  {
    "url": "guide/config.html",
    "revision": "07af7ed3d392445e9dbbd9789d5e85f9"
  },
  {
    "url": "guide/faq.html",
    "revision": "609691e15aa5ed75318db47336ee623e"
  },
  {
    "url": "guide/icon.html",
    "revision": "bb50c86d59f4fa196c80a324a958a516"
  },
  {
    "url": "guide/index.html",
    "revision": "2a494e3d9141f0b75868c94165a83e14"
  },
  {
    "url": "guide/migrate.html",
    "revision": "bd615a48c59f54441113787b03608e3c"
  },
  {
    "url": "guide/page.html",
    "revision": "99343a69de343bca1f8029187f4e2899"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "5c869f7619e4018be2d685b1622e5039"
  },
  {
    "url": "index.html",
    "revision": "cf8676c7d70e62207d6c80bf73db864b"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "revision": "fd6500db188ce5cefcae68677b3f15f0"
  },
  {
    "url": "about.html",
    "revision": "8f54737c9250b09e65931aec1d49c8f2"
  },
  {
    "url": "assets/css/0.styles.5fc009a9.css",
    "revision": "cd81486e6ba92a50e4501adf2d88a921"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.01c6f684.js",
    "revision": "fdd75f22342903153965c2314fc348b5"
  },
  {
    "url": "assets/js/11.0d2da6c5.js",
    "revision": "f6a1cc7f7677bc46eafe298f5e771aca"
  },
  {
    "url": "assets/js/12.a893a0f2.js",
    "revision": "1ccece578e159698439614418d4f2259"
  },
  {
    "url": "assets/js/13.a906d41a.js",
    "revision": "af15de238769bbaddcb7d7585eeb7613"
  },
  {
    "url": "assets/js/14.c8b3a313.js",
    "revision": "30bc1855ea95f68a331ebb4adc3cbf34"
  },
  {
    "url": "assets/js/15.f67441b4.js",
    "revision": "4633b85924fec5596fff97f9ed9e0438"
  },
  {
    "url": "assets/js/16.cc8bfe0a.js",
    "revision": "20d39e148c9766fa79f38f46891fe299"
  },
  {
    "url": "assets/js/17.1a1dfa0f.js",
    "revision": "2ca227afab8bb48b513a69a919317609"
  },
  {
    "url": "assets/js/18.d1c10a47.js",
    "revision": "e7da8a8b844da02112b9571065f9236e"
  },
  {
    "url": "assets/js/19.1f1f4435.js",
    "revision": "2d7e2c595413c81835ee2199e2dc3692"
  },
  {
    "url": "assets/js/2.c784421b.js",
    "revision": "751c5e1dc701b6bb6f6fb22306f754c6"
  },
  {
    "url": "assets/js/20.588b4ada.js",
    "revision": "c16c9d5703fb496e3366c0a5bb470658"
  },
  {
    "url": "assets/js/21.025b66f8.js",
    "revision": "6438225116ddd0815addc1234e71bfcb"
  },
  {
    "url": "assets/js/22.51254087.js",
    "revision": "045554e30fda107603a84fa90786e7f4"
  },
  {
    "url": "assets/js/23.74f671e3.js",
    "revision": "fd5b22e71de8869f266dd468add5154e"
  },
  {
    "url": "assets/js/24.fd96ab41.js",
    "revision": "08afbd2d3d52e3c785c7692933c16c6a"
  },
  {
    "url": "assets/js/25.0ddf221a.js",
    "revision": "b6bd289a99fd7aa31bbf012b8c0acd90"
  },
  {
    "url": "assets/js/26.9bc0a295.js",
    "revision": "b5288edfade3dda6f04074b6a7f55f36"
  },
  {
    "url": "assets/js/27.e6181e7e.js",
    "revision": "4d67efab4a04e38f43511ebab00f02ff"
  },
  {
    "url": "assets/js/28.be6f57c0.js",
    "revision": "873bd204282172da915b52f1404c9f53"
  },
  {
    "url": "assets/js/29.41969225.js",
    "revision": "08e1fbe5ac16342b8700b907f74bea4b"
  },
  {
    "url": "assets/js/3.60841b8a.js",
    "revision": "1b5049937faab66a59abb362a297d827"
  },
  {
    "url": "assets/js/4.3a9a364f.js",
    "revision": "28c2b75fea660628269930e6bf783968"
  },
  {
    "url": "assets/js/5.133307b0.js",
    "revision": "eea6c164a268e443928acec056a78397"
  },
  {
    "url": "assets/js/6.0194d88a.js",
    "revision": "09ab631ff2f11bce3b9ba1252ca2db3e"
  },
  {
    "url": "assets/js/7.50a0ed3b.js",
    "revision": "6c9e90948760677250d6d34e17930e18"
  },
  {
    "url": "assets/js/8.c6a3510a.js",
    "revision": "b9ec271afbf0bf92918372f88db08a44"
  },
  {
    "url": "assets/js/9.0aea7bba.js",
    "revision": "14e90d0a2af1efc2c8dd44561a9c4258"
  },
  {
    "url": "assets/js/app.27db1b2d.js",
    "revision": "625e2ce48fc96531d6c3740504634d75"
  },
  {
    "url": "demo.html",
    "revision": "78c9002d3ca6c874d75abd969f61d940"
  },
  {
    "url": "en/about.html",
    "revision": "7320cbe8936ca17ae8df7bd2632d3491"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "777ec761b3f93090bb781d1119b560cd"
  },
  {
    "url": "en/guide/config.html",
    "revision": "7a5f8b458c94023813a429558b87e587"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "1ea7e7ce24ce69af97d320bdb8e72217"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "7ae585cf87c0605a30d9f4111e95b967"
  },
  {
    "url": "en/guide/index.html",
    "revision": "e8fddb188183648d8c78c025d102629c"
  },
  {
    "url": "en/guide/page.html",
    "revision": "235f42b62de06a32c0cc94c103bec4a9"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "00d5b6bf69582a37f362e77f019d9cfd"
  },
  {
    "url": "en/index.html",
    "revision": "6814dd12a2ed4de3cae8286dd15ca055"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "69fe71c6e78caa2f533258e2f9c98b1a"
  },
  {
    "url": "guide/config.html",
    "revision": "2a659ad2f08429375eb13149b4808249"
  },
  {
    "url": "guide/faq.html",
    "revision": "ac758d4f1eaa8f8d4b69b39289cab278"
  },
  {
    "url": "guide/icon.html",
    "revision": "d24c4fec4d3ebd083cd7eeb029807842"
  },
  {
    "url": "guide/index.html",
    "revision": "92012a532557b6c06d7e044977ea07ae"
  },
  {
    "url": "guide/migrate.html",
    "revision": "efc0f04357e8f43d94e36986e8df3590"
  },
  {
    "url": "guide/page.html",
    "revision": "9b84b1a46d9d5486ea122d51c810bfdf"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "ced87334b279e39662cfba3a41b1017d"
  },
  {
    "url": "index.html",
    "revision": "a5c2bee4752af9cfef99db31c863bf89"
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

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/dany/Desktop/ataricoder/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/dany/Desktop/ataricoder/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/dany/Desktop/ataricoder/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/dany/Desktop/ataricoder/src/pages/about.js")),
  "component---src-pages-hello-js": preferDefault(require("/Users/dany/Desktop/ataricoder/src/pages/hello.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dany/Desktop/ataricoder/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/dany/Desktop/ataricoder/src/pages/page-2.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/dany/Desktop/ataricoder/src/pages/work.js"))
}

exports.json = {
  "layout-index.json": require("/Users/dany/Desktop/ataricoder/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/dany/Desktop/ataricoder/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/dany/Desktop/ataricoder/.cache/json/404.json"),
  "about.json": require("/Users/dany/Desktop/ataricoder/.cache/json/about.json"),
  "hello.json": require("/Users/dany/Desktop/ataricoder/.cache/json/hello.json"),
  "index.json": require("/Users/dany/Desktop/ataricoder/.cache/json/index.json"),
  "page-2.json": require("/Users/dany/Desktop/ataricoder/.cache/json/page-2.json"),
  "work.json": require("/Users/dany/Desktop/ataricoder/.cache/json/work.json"),
  "404-html.json": require("/Users/dany/Desktop/ataricoder/.cache/json/404-html.json")
}
```bash
info  - Collecting page data ..PageNotFoundError: Cannot find module for page: /404
    at getPagePath (/Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/server/require.js:47:15)
    at Object.requirePage (/Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/server/require.js:52:22)
    at /Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/server/load-components.js:61:73
    at async Object.loadComponents (/Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/server/load-components.js:61:26)
    at async /Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/build/utils.js:798:32
    at async Span.traceAsyncFn (/Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/trace/trace.js:79:20) {
  code: 'ENOENT'
}

> Build error occurred
Error: Failed to collect page data for /404
    at /Users/danylstchekambou/github/websites/digital.e.V/node_modules/next/dist/build/utils.js:916:15 {
  type: 'Error'
}
```

# Solution

```
NODE_ENV=production yarn build
```

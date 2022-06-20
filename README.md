# next-composed-plugins

```ts
const { withPlugins } = require('next-composed-plugins');

module.exports = withPlugins(
  {
    reactStrictMode: true,
    compiler: {
      styledComponents: true,
    },
  },
  [
    withSvgr,
    withBundleAnalyzer,
    [
      withInterceptStdout,
      (text) => (text.includes('Duplicate atom key') ? '' : text),
    ],
    // Add plugins here
  ],
);
```

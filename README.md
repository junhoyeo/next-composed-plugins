# next-composed-plugins

```ts
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
  ],
);
```

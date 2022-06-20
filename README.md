# next-composed-plugins

[![next-composed-plugins](https://img.shields.io/npm/v/next-composed-plugins?style=for-the-badge)](https://www.npmjs.com/package/next-composed-plugins)

## 📦 Installation

```bash
# Install with Yarn
yarn add -D next-composed-plugins

# Or with NPM
npm install -g next-composed-plugins
```

## 🚀 Usage

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

> Interested in `withInterceptStdout`? **[Click Here](https://github.com/junhoyeo/next-intercept-stdout)**

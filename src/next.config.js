// eslint-disable-next-line import/no-extraneous-dependencies
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  distDir: '../build',

  exportPathMap(defaultPathMap, { dev }) {
    if (dev) {
      return defaultPathMap;
    }

    return {
      '/': { page: '/' },

      // Our static 404's named '_error', because we don't need or want
      // Next JS to export its dynamic one, which it does by default.
      '/404.html': { page: '/_error' },
    };
  },

  // Consume styles from regular CSS files.
  // - https://github.com/zeit/styled-jsx#styles-in-regular-css-files
  webpack: (webpackConfig, { isServer, defaultLoaders }) => {
    webpackConfig.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          // eslint-disable-next-line global-require, import/no-extraneous-dependencies
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
      ],
    });

    // 'eslint-loader'
    // Reference: https://github.com/sayuti-daniel/next-eslint/blob/master/index.js
    if (!isServer) {
      webpackConfig.module.rules.push({
        enforce: 'pre', // https://github.com/webpack-contrib/eslint-loader#usage
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'eslint-loader',
          options: {
            failOnError: true,
          },
        }],
      });
    }

    return webpackConfig;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

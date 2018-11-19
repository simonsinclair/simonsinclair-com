const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

let nextConfig = {
  distDir: '../build',

  async exportPathMap(defaultPathMap, {
    dev, dir, outDir,
  }) {
    if (dev) {
      return defaultPathMap;
    }

    // Production
    // ==========

    [
      'robots.txt',
      'sitemap.xml',
      'favicon.ico',
    ].forEach(async (file) => {
      await copyFile(join(dir, file), join(outDir, file));
    });

    return {
      '/': { page: '/' },
      '/about/': { page: '/about' },

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
        test: /\.jsx$/,
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

if (process.env.BUNDLE_ANALYZE) {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
  nextConfig = withBundleAnalyzer({
    analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html',
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html',
      },
    },
    ...nextConfig,
  });
}

module.exports = nextConfig;

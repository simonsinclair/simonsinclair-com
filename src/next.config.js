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

    await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'));
    await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'));

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
  webpack: (webpackConfig, { defaultLoaders }) => {
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

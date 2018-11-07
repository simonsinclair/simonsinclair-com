const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

let config = {
  distDir: '../build',

  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }


    // Export - !dev.
    //

    await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    await copyFile(join(dir, 'sitemap.xml'), join(outDir, 'sitemap.xml'));
    await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'));

    return {
      '/': { page: '/'},

      // Our static 404's named '_error', because we don't need or want
      // Next JS to export its dynamic one, which it does by default.
      '/404.html': { page: '/_error' }
    };
  },

  // Consume styles from regular CSS files.
  // - https://github.com/zeit/styled-jsx#styles-in-regular-css-files
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.css$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: 'scoped',
          },
        },
      ],
    });

    return config;
  },
};

if (process.env.BUNDLE_ANALYZE) {
  const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
  config = withBundleAnalyzer({
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
      server: {
        analyzerMode: 'static',
        reportFilename: '../bundles/server.html'
      },
      browser: {
        analyzerMode: 'static',
        reportFilename: '../bundles/client.html'
      },
    },
    ...config,
  });
}

module.exports = config;

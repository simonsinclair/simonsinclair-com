/* eslint-disable import/no-extraneous-dependencies */

const fs = require('fs');
const { join, parse } = require('path');
const { promisify } = require('util');

const copyFile = promisify(fs.copyFile);

const { GenerateSW } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  distDir: '../build',

  exportPathMap: async (defaultPathMap, { dev, dir, outDir }) => {
    if (!dev) {
      // Copy files that aren't processed by Next to `outDir`.
      const files = ['favicon.ico', 'robots.txt', 'sitemap.xml', '../build/service-worker.js'];
      const copyQueue = files.map((file) => {
        const { base } = parse(file);
        return copyFile(join(dir, file), join(outDir, base));
      });
      await Promise.all(copyQueue);
    }

    return defaultPathMap;
  },

  webpack: (webpackConfig, { dev, isServer }) => {
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

    if (!isServer && !dev) {
      webpackConfig.plugins.push(
        new CopyPlugin([{
          from: 'static',
          to: 'temp-static',
        }]),
        new GenerateSW({
          inlineWorkboxRuntime: true,
          exclude: [
            'react-loadable-manifest.json',
            'build-manifest.json',
          ],
          modifyURLPrefix: {
            'static/': '_next/static/',
            'temp-static/': 'static/',
          },
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200,
                },
              },
            },
          ],
        }),
      );
    }

    return webpackConfig;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

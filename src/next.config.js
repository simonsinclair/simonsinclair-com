/* eslint-disable import/no-extraneous-dependencies */

const { GenerateSW } = require('workbox-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  experimental: { publicDirectory: true },
  distDir: '../build',

  webpack: (webpackConfig, { isServer }) => {
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
          ignore: ['**/.*'],
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

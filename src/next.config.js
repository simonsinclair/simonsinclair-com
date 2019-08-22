/* eslint-disable import/no-extraneous-dependencies */

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

    if (!isServer) {
      webpackConfig.plugins.push(
        new CopyPlugin([{
          from: 'static',
          to: 'temp-static',
          ignore: ['**/.*'],
        }]),
      );
    }

    return webpackConfig;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

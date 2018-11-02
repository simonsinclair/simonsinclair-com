const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

const withCss = require('@zeit/next-css');

module.exports = withCss({
  distDir: '../build',
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (dev) {
      return defaultPathMap;
    }


    // Export.
    //

    await copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt'));
    await copyFile(join(dir, 'favicon.ico'), join(outDir, 'favicon.ico'));

    return {
      '/': { page: '/'},

      // Our static 404's named '_error', because we don't need or want
      // Next JS to export its dynamic one, which it does by default.
      '/404.html': { page: '/_error' }
    };
  }
});

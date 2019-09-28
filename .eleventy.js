const CleanCSS = require("clean-css");
const Terser = require('terser');

module.exports = function(config) {
  config.addLayoutAlias('base', 'layouts/base.njk');
  config.addLayoutAlias('article', 'layouts/article.njk');

  config.addPassthroughCopy('src/site/assets');
  config.addPassthroughCopy('src/site/favicon.ico');
  config.addPassthroughCopy('src/site/robots.txt');
  config.addPassthroughCopy('src/site/sitemap.xml');

  config.addFilter('cssmin', function(code) {
    return new CleanCSS()
      .minify(code)
      .styles;
  });

  config.addFilter('jsmin', function(code) {
    const minified = Terser.minify(code);
    if (minified.error) {
      console.error('Terser error:', minified.error);
      return code;
    }
    return minified.code;
  });

  config.setBrowserSyncConfig({
    ui: false,
    ghostMode: false,
    online: false,
  });

  return {
    dir: {
      input: 'src/site',
      output: 'public',
    },
  };
};

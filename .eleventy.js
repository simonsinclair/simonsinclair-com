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
    const minified = new CleanCSS().minify(code);
    if (minified.warnings.length >= 1) console.warn('CleanCSS warnings:', minified.warnings);
    if (minified.errors >= 1) {
      console.error('CleanCSS errors:', minified.errors);
      return code;
    }
    return minified.styles;
  });

  config.addFilter('jsmin', function(code) {
    const minified = Terser.minify(code, { warnings: 'verbose' });
    if (minified.warnings) console.warn('Terser warnings:', minified.warnings);
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

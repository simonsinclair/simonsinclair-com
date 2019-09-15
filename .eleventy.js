const CleanCSS = require('clean-css');
const Terser = require('terser');

module.exports = function(config) {
  config.addLayoutAlias('base', 'layout.njk');

  config.addPassthroughCopy('src/assets');
  config.addPassthroughCopy('src/favicon.ico');
  config.addPassthroughCopy('src/robots.txt');
  config.addPassthroughCopy('src/sitemap.xml');

  config.addFilter('cssmin', function(code) {
    return new CleanCSS({})
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

  return {
    dir: {
      input: 'src',
      output: 'public',
    },
  };
};

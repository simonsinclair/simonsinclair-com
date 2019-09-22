const Terser = require('terser');

module.exports = function(config) {
  config.addLayoutAlias('base', 'layout.njk');

  config.addPassthroughCopy('src/site/assets');
  config.addPassthroughCopy('src/site/favicon.ico');
  config.addPassthroughCopy('src/site/robots.txt');
  config.addPassthroughCopy('src/site/sitemap.xml');

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
      input: 'src/site',
      output: 'public',
    },
  };
};

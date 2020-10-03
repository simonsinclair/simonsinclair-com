/* eslint-disable import/no-extraneous-dependencies */
const HtmlMinifier = require('html-minifier');
const CleanCSS = require('clean-css');
const Terser = require('terser');
const postcss = require('postcss');

module.exports = (config) => {
  config.addLayoutAlias('base', 'layouts/base.njk');

  config.addPassthroughCopy('src/site/assets');
  config.addPassthroughCopy('src/site/favicon.ico');
  config.addPassthroughCopy('src/site/robots.txt');
  config.addPassthroughCopy('src/site/sitemap.xml');

  // -------
  // FILTERS
  // -------
  config.addFilter('jsmin', (code) => {
    const minified = Terser.minify(code, { warnings: 'verbose' });
    if (minified.warnings) console.warn('Terser warnings:', minified.warnings);
    if (minified.error) {
      console.error('Terser error:', minified.error);
      return code;
    }
    return minified.code;
  });

  // ----------
  // SHORTCODES
  // ----------
  // - A shortcode returns content that is injected into the template. You can
  //   use these however you’d like—you could even think of them as reusable
  //   components.
  // - Paired Shortcodes have a start and end tag—and allow you to nest other
  //   template content inside.
  // ----------
  config.addPairedNunjucksAsyncShortcode('postcss', async (css) => {
    try {
      const result = await postcss([
        require('tailwindcss'),
        require('autoprefixer'),
      ]).process(css);
      const minified = new CleanCSS().minify(result.css);
      if (minified.warnings.length >= 1)
        console.warn('CleanCSS warnings:', minified.warnings);
      if (minified.errors >= 1) {
        console.error('CleanCSS errors:', minified.errors);
        return result.css;
      }
      return minified.styles;
    } catch (error) {
      console.error(error);
    }
  });

  // ----------
  // TRANSFORMS
  // ----------
  config.addTransform('htmlmin', (code, outputPath) => {
    if (typeof outputPath === 'string' && outputPath.endsWith('.html')) {
      const minified = HtmlMinifier.minify(code, {
        collapseWhitespace: true,
        removeComments: true,
      });
      return minified;
    }

    return code;
  });

  // -------
  // CONFIG.
  // -------
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

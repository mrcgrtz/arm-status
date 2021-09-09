module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    'src/_static': '.'
  });
  return {
    dir: {
      input: 'src',
      output: 'public',
      layouts: '_layouts',
    },
  };
};

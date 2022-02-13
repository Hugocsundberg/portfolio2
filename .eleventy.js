module.exports = function (eleventyConfig) {
  // Return your Object options:
  eleventyConfig.addFilter("dump", (obj) => {
    return util.inspect(obj);
  });

  eleventyConfig.addPassthroughCopy("node_modules/animejs/lib/anime.es.js");
  eleventyConfig.addPassthroughCopy("images");
};

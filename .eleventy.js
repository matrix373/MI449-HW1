module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("screen.css");

  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");

  // Copy any .jpg file to `_site`, via Glob pattern
  // Keeps the same directory structure.
  eleventyConfig.addPassthroughCopy("/Ellipse1.png");
};
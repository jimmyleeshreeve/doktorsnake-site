module.exports = function (eleventyConfig) {

  // Copy entire assets folder (img, audio, etc.)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Copy favicon directly to root
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.ico": "favicon.ico" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

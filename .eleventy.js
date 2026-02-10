module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.ico": "favicon.ico" });


  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};


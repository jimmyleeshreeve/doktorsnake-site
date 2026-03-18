const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  // Copy entire assets folder (img, audio, etc.)
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Copy favicon directly to root
  eleventyConfig.addPassthroughCopy({ "src/assets/img/favicon.ico": "favicon.ico" });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "rss",
    outputPath: "/dispatch/feed.xml",
    collection: {
      name: "dispatch",
      limit: 0
    },
    metadata: {
      language: "en",
      title: "DoktorSnake Dispatch",
      subtitle: "A private running log of transmissions, notes, observations, and field reports.",
      base: "https://www.doktorsnake.com/",
      author: {
        name: "Doktor Snake"
      }
    }
  });

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric"
    }).format(dateObj);
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return dateObj.toISOString().split("T")[0];
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};

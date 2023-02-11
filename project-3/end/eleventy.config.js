const stripWhitespace = (str) => {
  return str.replace(/(\r\n|\n|\r)/gm, "").trim();
};

// Import the Image module
const Image = require("@11ty/eleventy-img");

// An async function to initialize Image and return generated HTML
async function imageShortcode(src, alt = "", sizes, widths = "300,600") {
  // Generate the image and its metadata based on options
  let metadata = await Image("src" + src, {
    widths: widths.split(","),
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img/",
  });
  // Create attributes to use on HTML generation
  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // Generate HTML and return it
  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("post", (collection) => {
    return collection.getFilteredByTag("posts").reverse();
  });
  eleventyConfig.addShortcode("image", imageShortcode);

  // Copy `assets/` to `_site/assets/`
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("src/**/*.{jpg,jpeg,png,gif}");

  // Set the source for 11ty to the /src directory
  // Otherwise, this defaults to the project root
  // This provides a cleaner project structure
  return {
    dir: {
      input: "src",
      output: "_site", // This is the default, but it's included here for clarity.
      includes: "_templates",
    },
  };
};

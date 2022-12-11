const stripWhitespace = (str) => {
    return str.replace(/(\r\n|\n|\r)/gm, "").trim()
}

const Image = require("@11ty/eleventy-img");


async function imageShortcode(src, alt="", sizes, widths="300,600") {
  let metadata = await Image('src' + src, {
    widths: widths.split(","),
    formats: ["avif", "jpeg"],
    outputDir: "./_site/img/"
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };
  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes);
}




module.exports = function(eleventyConfig) {

    // eleventyConfig.addShortcode("gallery", function(images) {
    //     return stripWhitespace(`
    //     <div class="grid grid-cols-3 gap-3">
    //         ${images.map(image => `<img class="m-0" src="${image}" />`).join("")}
    //     </div>`)   
    // })

    eleventyConfig.addShortcode("image", imageShortcode);

    // Copy `assets/` to `_site/assets/`
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy('src/**/*.{jpg,jpeg,png,gif}');


    
    // Set the source for 11ty to the /src directory
    // Otherwise, this defaults to the project root
    // This provides a cleaner project structure
    return {
        dir: {
            input: "src",
            output: "_site", // This is the default, but it's included here for clarity.
            includes: "_templates"
        }
    }
}
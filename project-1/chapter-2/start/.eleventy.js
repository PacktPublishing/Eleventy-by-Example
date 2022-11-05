module.exports = function(eleventyConfig) {

    // Copy `assets/` to `_site/assets/`
    eleventyConfig.addPassthroughCopy("assets");

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
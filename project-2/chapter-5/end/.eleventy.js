const dynamicCategories = require('eleventy-plugin-dynamic-categories');
module.exports = function(eleventyConfig) {
    // Set the collection to reverse chronological order
    eleventyConfig.addCollection("post", (collection) => {
        return collection.getFilteredByTag("post").reverse();
    });
    eleventyConfig.addPlugin(dynamicCategories, {
        categoryVar: "categories", // Name of your category variable from your frontmatter (default: categories)
        itemsCollection: "post", // Name of your collection to use for the items (default: posts)
        perPageCount: 10 // Items per page of your paginated category (default: 5)
    })

    eleventyConfig.addShortcode("youtube", (url, title) => {
        return `<iframe 
            style="aspect-ratio: 16 / 9; width: 100%" 
            src="${url}" 
            title="${title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>`
    })


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
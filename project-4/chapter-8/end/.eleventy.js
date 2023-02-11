const pluginRss = require("@11ty/eleventy-plugin-rss");
const podcastTools = require('eleventy-plugin-podcast-tools');
const algoliasearch = require('algoliasearch');
const algoliasearchlite = require('algoliasearch/lite')
const { EleventyServerlessBundlerPlugin } = require("@11ty/eleventy");  

require('dotenv').config();
module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(podcastTools);

    eleventyConfig.addFilter("jsonify", function(content) {
        return JSON.stringify(content);
    })

    eleventyConfig.addFilter("htmlStrip", (content) => {
        return content.replace(/(<([^>]+)>)/gi, "");
    })

eleventyConfig.addFilter("search", (query) => {
    const client = algoliasearchlite(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
    const index = client.initIndex(process.env.INDEX_NAME);
    return index.search(query, {
        attributesToRetrieve: ["title", "url"],
    
        }).then(res => {
            return res.hits;
        })
})
        
    eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {  
        name: "search", // The serverless function name for the permalink object 
        functionsDir: "./netlify/functions/",  
      });  


eleventyConfig.on('eleventy.after', async () => {
    
    // Short circuit if we're not in production according to Netlify
    if (process.env.CONTEXT !== 'production') return

    const jsonContent = await require('./_site/algoliaIndex.json')

    const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
    const index = client.initIndex(process.env.INDEX_NAME);

    index.saveObjects(jsonContent)        
});
    



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
require("dotenv").config();
const { TemplatePath } = require("@11ty/eleventy-utils");

module.exports = function(eleventyConfig, options) {

    const defaults = {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.INDEX_NAME,
        attributesToRetrieve: ["title", "url"],
        shouldRunIndexing: false,
        indexFile: "_site/index.json",
    }

    const combinedOptions = {
        ...defaults,
        ...options
    }

    eleventyConfig.addFilter("jsDate", function(dateString) {
        return new Date(dateString);
    });

    eleventyConfig.addFilter("jsonify", function(content) {
        return JSON.stringify(content);
    })

    eleventyConfig.addFilter("htmlStrip", (content) => {
        return content.replace(/(<([^>]+)>)/gi, "");
    })


    eleventyConfig.addFilter("search", (query) => {
        const algoliasearchlite = require('algoliasearch/lite')
        const client = algoliasearchlite(combinedOptions.appId, combinedOptions.apiKey);
        const index = client.initIndex(combinedOptions.indexName);
        return index.search(query, {
            attributesToRetrieve: combinedOptions.attributesToRetrieve,
        
            }).then(res => {
                return res.hits;
            })
    })
    eleventyConfig.on('eleventy.after', async () => {
        const algoliasearch = require('algoliasearch')

        console.log("Checking to see if we should run indexing")
        if (!combinedOptions.shouldRunIndexing) {
            console.log("Option shouldRunIndexing is false, so not running indexing")    
            return
        }
        console.log("Running indexing")


        console.log(TemplatePath.getWorkingDir())
        console.log(combinedOptions)
        const jsonContent = await require(TemplatePath.getWorkingDir() + combinedOptions.indexFile)
    
        const client = algoliasearch(combinedOptions.appId, combinedOptions.apiKey);
        const index = client.initIndex(combinedOptions.indexName);
    
        index.saveObjects(jsonContent)  
        console.log("Indexing complete")      
    });
        

}
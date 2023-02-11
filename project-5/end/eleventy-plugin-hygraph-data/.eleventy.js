require('dotenv').config();

module.exports = function(eleventyConfig, options) {

    const defaults = {
        dataKey: "hygraph",
        endpoint: process.env.HYGRAPH_ENDPOINT,
        query: `query HygraphData {
            episodes(orderBy: publishDate_DESC) {
              title 
            }
        }`
    }

    const combinedOptions = {
        ...defaults,
        ...options
    }
    eleventyConfig.addGlobalData(combinedOptions.dataKey, async function(){
        const response = await fetch(combinedOptions.endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query: combinedOptions.query})
            
        })
        const json = await response.json()
        return json.data
    })



}
const markdownIt = require("markdown-it");


module.exports = function(eleventyConfig) {
    eleventyConfig.addShortcode("youtube", (id, title="A YouTube Video") => {
        return `<iframe 
            style="aspect-ratio: 16 / 9; width: 100%" 
            src="https://www.youtube.com/embed/${id}" 
            title="${title}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>`
    })

    eleventyConfig.addPairedShortcode("codepen", ( content, url, tabs="html,result", theme="default", height="300"  ) => {
        // split and name all the parts of the url from codepen
        const [ protocol, , domain, user, pen, hash ] = url.split("/");
        const contentHtml = markdownIt().render(content);
        
        const markup = `<div class="codepen" 
        data-height="${height}" 
        data-theme-id="${theme}" 
        data-default-tab="${tabs}" 
        data-slug-hash="${hash}" 
        data-user="${user}" 
        style="box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
            <h3>Your JS is turned off. Please turn it on to see the codepen. Here's a screenshot from <a href="${url}">the Pen</a></h3>
            <a href="${url}"><img style="max-width: 100%;box-shadow: 1px 1px 5px #999;" src="${url}/image/large.png" /></a>
            ${contentHtml}
        </div>
        <script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
        `;
        return markup
    })

    eleventyConfig.addPairedShortcode("blockquote", (content, author, cite, float=false) => {
        const contentHtml = markdownIt().render(content);
        const markup = `
        <figure class="blockquote ${float ? `float-${float}` : ""}">
            <blockquote>
                ${contentHtml}
            </blockquote>
            <figcaption class="blockquote cite">
                By ${author} in <cite>${cite}</cite>
            </figcaption>
        </figure>`
        return markup
    })
}
const fs = require("fs")


function getPaths(data) {
    const base = "src"
    const cwd = data.page.filePathStem.replace("index", "")
    const files = fs.readdirSync(base + cwd, { withFileTypes: true })
    const images = files.filter(file => file.isFile() && file.name.match(/\.(jpg|jpeg|png|gif|svg)$/i))
    const imagePaths = images.map(image => data.page.url + image.name)
    return imagePaths
}

module.exports = async function() {
    return {
        layout: "layouts/post.html",
        tags: ["posts"],
        eleventyComputed: {
            // Create array of image paths from current working directory of the page
            // get current working directory
            images: async data => {
                return getPaths(data)
            }

        }

    }
}
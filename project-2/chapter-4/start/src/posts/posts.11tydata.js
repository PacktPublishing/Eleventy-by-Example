const { DateTime } = require("luxon")
module.exports = {
    layout: "layouts/post.html",
    tags: ["post"],
    author: "Bryan Robinson",
    eleventyComputed: {
        dateString: ({page}) => DateTime.fromJSDate(page.date, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL)
    }
}
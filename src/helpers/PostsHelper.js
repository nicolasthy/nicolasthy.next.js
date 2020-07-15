import matter from "gray-matter";

function getExcerpt(file, options) {
    file.excerpt = file.data.excerpt ||
        file.content.substr(
            0,
            file.content.lastIndexOf(" ", options.excerptLimit)
        ) + "...";
}

function readingTime(text = "") {
    return Math.ceil(text.split(/s/g).length / 200);
}

function processMarkdown(value) {
    return matter(value.default, {
        excerpt: getExcerpt,
        excerptLimit: 150
    });
}

export { processMarkdown, readingTime };

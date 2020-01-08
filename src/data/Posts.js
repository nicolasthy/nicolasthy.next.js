import { processMarkdown } from "../helpers/PostsHelper";

function getPosts(count = null) {
    const posts = (context => {
        const keys = context.keys();
        const values = keys.map(context);

        const data = keys.map((key, index) => {
            const slug = key
                .replace(/^.*[\\\/]/, "")
                .split(".")
                .slice(0, -1)
                .join(".");
            const value = values[index];
            const post = processMarkdown(value);

            return {
                post,
                slug
            };
        });

        return data;
    })(require.context("../posts", true, /\.md$/));

    return posts.sort(
        (a, b) => new Date(b.post.data.date) - new Date(a.post.data.date)
    ).slice(0, count || posts.length);
}

async function getPostBySlug(slug) {
    const data = await import(`../posts/${slug}.md`);
    const post = processMarkdown(data);

    return post;
}

export { getPosts, getPostBySlug };

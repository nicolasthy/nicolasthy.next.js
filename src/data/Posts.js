import { processMarkdown, readingTime } from "../helpers/PostsHelper";

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
                ...post,
                readingTime: readingTime(post.content),
                slug
            };
        });

        return data;
    })(require.context("../posts", true, /\.md$/));

    console.log(posts);
    return posts
        .sort((a, b) => new Date(b.data.created_at) - new Date(a.data.created_at))
        .slice(0, count || posts.length);
}

async function getPostBySlug(slug) {
    const data = await import(`../posts/${slug}.md`);
    const post = processMarkdown(data);

    return post;
}

export { getPosts, getPostBySlug };

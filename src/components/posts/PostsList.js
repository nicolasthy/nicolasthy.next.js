import Link from "next/link";

const PostsList = ({ posts }) => {
    const renderPosts = () => {
        return posts.map(({ post, slug }, index) => {
            return (
                <li key={index}>
                    <Link href="/posts/[slug]" as={`/posts/${slug}`}>
                        <a>{post.data.title}</a>
                    </Link>
                    <p>{post.excerpt}</p>
                </li>
            );
        });
    };

    return <ul>{renderPosts()}</ul>;
};

export default PostsList;

import Link from "next/link";

import PostsList from "../components/posts/PostsList";

import { getPosts } from "../data/Posts";

const HomePage = props => {
    console.log(props.posts);
    return (
        <>
            <PostsList posts={props.posts} />
            <Link href="/posts" as="posts">
                <a>View all</a>
            </Link>
        </>
    );
};

HomePage.getInitialProps = async function() {
    const posts = getPosts(3);

    return {
        posts
    };
};

export default HomePage;

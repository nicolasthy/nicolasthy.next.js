import Link from "next/link";

import Layout from "../components/Layout";
import PostsList from "../components/posts/PostsList";

import { getPosts } from "../data/Posts";

const HomePage = props => {
    console.log(props.posts);
    return (
        <Layout>
            <PostsList posts={props.posts} />
            <Link href="post" as="posts">
                <a>View all</a>
            </Link>
        </Layout>
    );
};

HomePage.getInitialProps = async function() {
    const posts = getPosts(3);

    return {
        posts
    };
};

export default HomePage;

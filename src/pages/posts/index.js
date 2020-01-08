import Layout from "../../components/Layout";
import PostsList from "../../components/posts/PostsList";

import { getPosts } from "../../data/Posts";

const Posts = props => {
    return (
        <Layout>
            <PostsList posts={props.posts} />
        </Layout>
    );
};

Posts.getInitialProps = async function() {
    const posts = getPosts();

    return {
        posts
    };
};

export default Posts;

import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { siteMetadata } from "../../config/site-config";
import { getPostBySlug } from "../../data/Posts";

import Layout from "../../components/Layout";

const Post = ({ post }) => {
    return (
        <Layout>
            <Head>
                <title>
                    {post.data.title} - {siteMetadata.title}
                </title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <h1>{post.data.title}</h1>
            <ReactMarkdown source={post.content} />
        </Layout>
    );
};

Post.getInitialProps = async function(context) {
    const { slug } = context.query;
    const post = await getPostBySlug(slug);

    return {
        post
    };
};

export default Post;

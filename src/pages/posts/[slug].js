/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";

import ReactMarkdown from "react-markdown";
import Head from "next/head";

import { siteMetadata } from "../../config/site-config";
import { getPostBySlug } from "../../data/Posts";
import Image from "../../components/posts/Image";
import SyntaxHighlight from "../../components/posts/SyntaxHighlight";

const Post = ({ post }) => {
    const theme = useTheme();

    return (
        <>
            <Head>
                <title>
                    {post.data.title} - {siteMetadata.title}
                </title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <h1
                css={css`
                    font-size: 52px;
                    font-weight: 700;
                `}
            >
                {post.data.title}
            </h1>
            <ReactMarkdown
                source={post.content}
                renderers={{
                  code: SyntaxHighlight,
                  image: Image
                }}
                css={css`
                    font-size: 18px;
                    line-height: 2.125;
                    p {
                        color: ${theme.textLight};
                    }
                `}
            />
        </>
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

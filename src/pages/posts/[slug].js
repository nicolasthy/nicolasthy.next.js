/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { useTheme } from "emotion-theming"

import ReactMarkdown from "react-markdown"
import Head from "next/head"

import { siteMetadata } from "../../config/site-config"
import { getPosts, getPostBySlug } from "../../data/Posts"
import Image from "../../components/posts/Image"
import SyntaxHighlight from "../../components/posts/SyntaxHighlight"
import { InlineCode } from "../../components/posts/InlineCode/InlineCode"

const Post = ({ post }) => {
  const theme = useTheme()

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
        escapeHtml={false}
        renderers={{
          code: SyntaxHighlight,
          inlineCode: InlineCode,
          image: Image,
        }}
        css={css`
          font-size: 18px;
          line-height: 2.125;
          p {
            color: ${theme.textLight};
          }
          .alert {
            border-radius: 14px;
            padding: 15px 30px;
            line-height: 1.4;
            margin: 0 25px;
          }
          .alert.alert-warning {
            background: #f4e7be;
            color: #8e3d1a;
          }
        `}
      />
    </>
  )
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const posts = getPosts()

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const { slug } = params
  const post = await getPostBySlug(slug)

  // Pass post data to the page via props
  return { props: { post } }
}

export default Post

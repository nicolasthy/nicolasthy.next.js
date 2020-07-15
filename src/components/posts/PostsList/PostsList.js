import Link from "next/link"
import { useTheme } from "emotion-theming"
import { Container, TagsList, TagsItem } from "./styles"

const PostsList = ({ posts }) => {
  const theme = useTheme()

  const renderPosts = () => {
    return posts.map((post) => {
      return (
        <React.Fragment key={post.slug}>
          <Link href="/posts/[slug]" as={`${process.env.BACKEND_URL}/posts/${post.slug}`}>
            <li>
              <h3>{post.data.title}</h3>
              <p>
                <time>
                  {new Date(post.data.created_at).toLocaleDateString("en", {
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <small> - </small>
                <span>
                  {post.readingTime} min read <small>☕️</small>
                </span>
              </p>
              <p>{post.excerpt}</p>
              <TagsList>
                {post.data.tags &&
                  post.data.tags.map((tag, index) => (
                    <TagsItem key={index} tag={tag}>
                      {tag}
                    </TagsItem>
                  ))}
              </TagsList>
            </li>
          </Link>
        </React.Fragment>
      )
    })
  }

  return <Container theme={theme}>{renderPosts()}</Container>
}

export { PostsList }

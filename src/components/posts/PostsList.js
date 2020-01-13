import Link from "next/link";
import { useTheme } from "emotion-theming";

import { StyledPostsList } from "../../styles/StyledPosts";

const PostsList = ({ posts }) => {
  const theme = useTheme();

  const renderPosts = () => {
    return posts.map(({ post, slug }, index) => {
      return (
        <React.Fragment key={index}>
          <Link href="/posts/[slug]" as={`/posts/${slug}`}>
            <li>
              <h3>{post.data.title}</h3>
              <p>{post.excerpt}</p>
            </li>
          </Link>
        </React.Fragment>
      );
    });
  };

  return <StyledPostsList theme={theme}>{renderPosts()}</StyledPostsList>;
};

export default PostsList;

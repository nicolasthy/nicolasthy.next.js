import Link from "next/link";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";

const PostsList = ({ posts }) => {
    const theme = useTheme();

    const StyledPostsList = styled.ul`
        list-style: none;
        padding: 0;
        cursor: pointer;

        li {
            background: ${theme.posts.item};
            box-shadow: 0 1px 2px 0 rgba(5, 7, 26, 0.1);
            border-radius: 4px;
            margin: 10px 0;
            padding: 2px 25px;
            transition: background 0.2s linear, box-shadow 0.2s linear;

            &:hover {
                background: ${theme.posts.itemHover};
                box-shadow: 0 16px 12px -10px rgba(5, 7, 26, 0.1);
            }
        }
    `;
    
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

    return <StyledPostsList>{renderPosts()}</StyledPostsList>;
};

export default PostsList;

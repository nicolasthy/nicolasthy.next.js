import Link from "next/link";
import { useTheme } from "emotion-theming";
import styled from "@emotion/styled";

const PostsList = ({ posts }) => {
    const theme = useTheme();

    const renderPosts = () => {
        console.log(posts);
        return posts.map((post, index) => {
            return (
                <React.Fragment key={index}>
                    <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                        <li>
                            <h3>{post.data.title}</h3>
                            <p>
                                <time>
                                    {new Date(
                                        post.data.created_at
                                    ).toLocaleDateString("en", {
                                        month: "long",
                                        day: "numeric"
                                    })}
                                </time>
                                <small> - </small>
                                <span>
                                    {post.readingTime} min read{" "}
                                    <small>☕️</small>
                                </span>
                            </p>
                            <p>{post.excerpt}</p>
                        </li>
                    </Link>
                </React.Fragment>
            );
        });
    };

    return <StyledPostsList theme={theme}>{renderPosts()}</StyledPostsList>;
};

const StyledPostsList = styled.ul`
    list-style: none;
    padding: 0;
    cursor: pointer;

    li {
        background: ${({ theme }) => theme.posts.item};
        box-shadow: ${({ theme }) => theme.posts.itemShadow};
        border-radius: 4px;
        margin: 10px 0;
        padding: 25px 25px;
        transition: background 0.2s linear, box-shadow 0.2s linear;

        &:hover {
            background: ${({ theme }) => theme.posts.itemHover};
            box-shadow: ${({ theme }) => theme.posts.itemHoverShadow};
        }

        h3 {
            margin: 0;
        }

        p {
            &:first-of-type {
                margin: 0 0 5px;
                opacity: 0.7;
            }

            color: ${({ theme }) => theme.textLight};
            margin: 0;
        }
    }
`;

export default PostsList;

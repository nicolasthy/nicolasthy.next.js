/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useTheme } from "emotion-theming";
import Link from "next/link";

import PostsList from "../components/posts/PostsList";

import { getPosts } from "../data/Posts";

const HomePage = props => {
    const theme = useTheme();

    return (
        <>
            <div
                css={css`
                    display: flex;
                    align-items: center;

                    h2 {
                      margin-right: 25px;
                    }
                `}
            >
                <h2>Writings</h2>
                <StyledArrowLink theme={theme}>
                    <Link href="/posts" as="posts">
                        <a>
                            <span>View all</span>
                            <svg
                                width="19"
                                height="12"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {" "}
                                <g
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    fill="none"
                                    fillRule="evenodd"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    {" "}
                                    <path d="M1 6h16.429M12.429 1l5 5-5 5" />{" "}
                                </g>{" "}
                            </svg>
                        </a>
                    </Link>
                </StyledArrowLink>
            </div>
            <PostsList posts={props.posts} />
        </>
    );
};

HomePage.getInitialProps = async function() {
    const posts = getPosts(3);

    return {
        posts
    };
};

const StyledArrowLink = styled.div`
    display: flex;
    font-family: "Poppins", sans-serif;

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.textLight};
    }

    svg {
        margin-left: 15px;
        opacity: 0.3;
        transform: translateX(0) scale(0.9);
        transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:hover {
        a {
            color: ${({ theme }) => theme.text};
        }
        svg {
            transform: translateX(10px) scale(1);
        }
    }
`;

export default HomePage;

import Link from "next/link";

import PostsList from "../components/posts/PostsList";

import { getPosts } from "../data/Posts";

const HomePage = props => {
  console.log(props.posts);
  return (
    <>
      <div>
        <h2>Writings</h2>
        <Link href="/posts" as="posts">
          <a>View all</a>
        </Link>
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

export default HomePage;

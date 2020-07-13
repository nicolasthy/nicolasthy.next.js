import { PostsList } from "../../components/posts/PostsList/PostsList"

import { getPosts } from "../../data/Posts"

const Posts = (props) => {
  return (
    <>
      <PostsList posts={props.posts} />
    </>
  )
}

Posts.getInitialProps = async function () {
  const posts = getPosts()

  return {
    posts,
  }
}

export default Posts

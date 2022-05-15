import { Link } from "react-router-dom";
import BackToHome from "../components/BackToHome";
import { useGetPostsQuery } from "../store/apis/postApi";

const Posts = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery({});
  console.log("error", error);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        {error?.status}:{`Message: ${error?.data}`}
      </div>
    );
  }
  return (
    <div>
      <BackToHome />
      {posts ? (
        posts.map((post: any) => (
          <div key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))
      ) : (
        <div>Posts List empty :(</div>
      )}
    </div>
  );
};

export default Posts;

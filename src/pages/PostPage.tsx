import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetPostQuery } from "../store/apis/postApi";

const PostPage = () => {
  const params = useParams();
  const { data: post, isLoading, error } = useGetPostQuery(params.id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        {error.status}:{`Message: ${error.data}`}
      </div>
    );
  }
  return (
    <div>
      <div>
        <Link to='/posts'>Bact to page Posts</Link>
      </div>
      <div>ID: {post.id}</div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;

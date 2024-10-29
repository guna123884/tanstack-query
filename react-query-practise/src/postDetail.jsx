/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { fetchComments } from "./api";
import "./postDetail.css";

export function PostDetail({ post }) {
  // replace with useQuery
  const { data, isFetching, error } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => fetchComments(post.id),
    gcTime: 1000,
    retry: false,
  });

  if (isFetching) return <h3>Loading comments...</h3>;
  if (error) return <h3>Error : {error.message}</h3>;

  return (
    <>
      <h3 style={{ color: "blue" }}>{post.title}</h3>
      <button>Delete</button> <button>Update title</button>
      <p>{post.body}</p>
      <h4>Comments</h4>
      {data?.map((comment) => (
        <li key={comment.id}>
          {comment.email}: {comment.body}
        </li>
      ))}
    </>
  );
}

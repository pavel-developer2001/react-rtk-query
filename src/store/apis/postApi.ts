import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  //@ts-ignore
  entityTypes: ["Posts"],
  endpoints: (build) => ({
    getPosts: build.query({
      query: () => ({ url: "/posts" }),
    }),
    getPost: build.query({
      query: (id) => ({ url: `/posts/${id}` }),
    }),
  }),
});
//@ts-ignore
export const { useGetPostsQuery, useGetPostQuery } = postApi;

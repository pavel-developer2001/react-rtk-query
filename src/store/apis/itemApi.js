import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemApi = createApi({
  reducerPath: "itemApi",
  entityTypes: [],
  tagTypes: ["Item"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/items",
  }),
  endpoints: (build) => ({
    getItems: build.query({
      query: () => ({ url: "" }),
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Item", id })), "Item"]
          : ["Item"],
    }),
    addItem: build.mutation({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
      providesTags: ["Item"],
      invalidatesTags: [{ type: "Item" }],
    }),
    deleteItem: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      providesTags: ["Item"],
      invalidatesTags: [{ type: "Item" }],
    }),
    updateItem: build.mutation({
      query: (data) => {
        const { id, ...body } = data;
        return {
          url: `/${id}`,
          method: "PATCH",
          body,
        };
      },
      providesTags: ["Item"],
      invalidatesTags: [{ type: "Item" }],
    }),
  }),
});
export const {
  useGetItemsQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} = itemApi;

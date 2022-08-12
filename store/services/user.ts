import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/users" }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/",
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: `/`,
        method: "POST",
        body: body,
      }),
    }),
    editUser: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PUT",
        body: body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllUsersQuery,
  useGetUserByIdQuery,
  useDeleteUserMutation,
  useCreateUserMutation,
  useEditUserMutation,
} = userApi;

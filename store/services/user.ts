import {
  createApi,
  fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/users"
  }),
  tagTypes: ["Users"]
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/",
      providesTags: ["Users"]
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
      providesTags: ["Users"]
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      }),
        invalidatesTags: ["Users"]
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: `/`,
        method: "POST",
        body: body,
      }),
        invalidatesTags: ["Users"]
    }),
    editUser: builder.mutation({
      query: ({
        id, ...body
      }) => ({
        url: `/${id}`,
        method: "PUT",
        body: body,
      }),
        invalidatesTags: ["Users"]
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
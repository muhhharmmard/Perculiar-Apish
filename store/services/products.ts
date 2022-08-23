import {
  createApi,
  fetchBaseQuery
} from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/products'
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/",
      providesTags: ["Products"]
    }),
    getProductById: builder.query({
      query: (id) =>`/${id}`,
      invalidatesTags: ["Products"]
    }),
    deleteProduct: builder.mutation({
      query: (id)=>({
        url: `/${id}`,
        method: "DELETE",
        body: id,
      })
        invalidatesTags: ["Products"]
    }),
    createProduct: builder.mutation({
      query: (body)=>({
        url: `/`,
        method: "POST",
        body: body,
      })
        invalidatesTags: ["Products"]
    }),
    editProduct: builder.mutation({
      query: (id, body)=>({
        url: `/${id}`,
        method: "PATCH",
        body: {
          body,
          id
        },
      })
        invalidatesTags: ["Products"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useEditProductMutation,
} = productApi
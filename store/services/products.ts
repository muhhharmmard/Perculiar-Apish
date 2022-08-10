import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/products' }),
  endpoints: (builder) => ({
      getAllProducts: builder.query({
      query: () => "/",
    }),
    getProductById: builder.query({
      query:(id) =>`/${id}`
    }),
    deleteProduct : builder.mutation({
      query:(id)=>({
        url:`/${id}`,
        method:"DELETE",
        body:id
      })
    }),
    createProduct : builder.mutation({
      query:(body)=>({
        url:`/`,
        method:"POST",
        body:body
      })
    }),
    editProduct : builder.mutation({
      query:(id,body)=>({
        url:`/${id}`,
        method:"PATCH",
        body:{
          body,
          id
        }
      })
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetProductByIdQuery,
  useDeleteProductMutation,
  useCreateProductMutation,
  useEditProductMutation,
} = productApi












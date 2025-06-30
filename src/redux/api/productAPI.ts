import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AllProductsResponseType,
  CategoriesResponseType,
  DeleteProductRequestType,
  MessageResponse,
  NewProductRequestType,
  ProductResponseType,
  SearchProductsRequestType,
  SearchProductsResponseType,
  UpdateProductRequestType,
} from "../../types/api-types";

export const productAPI = createApi({
  reducerPath: "productApi", // productAPI.reducerPath = "productApi"
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/product/`,
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    latestProducts: builder.query<AllProductsResponseType, string>({
      query: () => "latest",
      providesTags: ["product"],
    }),

    allProducts: builder.query<AllProductsResponseType, string>({
      query: (id) => `admin-products?id=${id}`,
      providesTags: ["product"],
    }),

    categories: builder.query<CategoriesResponseType, string>({
      query: () => `categories`,
      providesTags: ["product"],
    }),

    searchProducts: builder.query<
      SearchProductsResponseType,
      SearchProductsRequestType
    >({
      query: ({ price, search, sort, category, page }) => {
        let base = `all?search=${search}&page=${page}`;
        if (price) base += `&price=${price}`;
        if (sort) base += `&sort=${sort}`;
        if (category) base += `&category=${category}`;
        return base;
      },
      providesTags: ["product"],
    }),

    productDetails: builder.query<ProductResponseType, string>({
      query: (id) => id,
      //   providesTags: ["product"],
    }),

    newProduct: builder.mutation<MessageResponse, NewProductRequestType>({
      query: ({ formData, id }) => ({
        url: `new?id=${id}`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation<MessageResponse, UpdateProductRequestType>({
      query: ({ formData, userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation<MessageResponse, DeleteProductRequestType>({
      query: ({ userId, productId }) => ({
        url: `${productId}?id=${userId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useLatestProductsQuery,
  useAllProductsQuery,
  useCategoriesQuery,
  useSearchProductsQuery,
  useNewProductMutation,
  useProductDetailsQuery,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productAPI;

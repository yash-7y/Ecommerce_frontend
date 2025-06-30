import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  AllOrdersResponseType,
  MessageResponse,
  NewOrderRequestType,
  OrderDetailsResponseType,
  UpdateOrderRequestType,
} from "../../types/api-types";

export const orderAPI = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/order/`,
  }),
  tagTypes: ["orders"],

  endpoints: (builder) => ({
    newOrder: builder.mutation<MessageResponse, NewOrderRequestType>({
      query: (order) => ({ url: "new", method: "POST", body: order }),
      invalidatesTags: ["orders"],
    }),

    updateOrder: builder.mutation<MessageResponse, UpdateOrderRequestType>({
      query: ({ userId, orderId }) => ({ url: `${orderId}?id=${userId}`,method: "PUT",}),
      invalidatesTags: ["orders"],
    }),

     deleteOrder: builder.mutation<MessageResponse, UpdateOrderRequestType>({
      query: ({ userId, orderId }) => ({ url: `${orderId}?id=${userId}`,method: "DELETE",}),
      invalidatesTags: ["orders"],
    }),

    myOrders: builder.query<AllOrdersResponseType, string>({
      query: (id) => `my?id=${id}`,
      providesTags: ["orders"],
    }),

    allOrders: builder.query<AllOrdersResponseType, string>({
      query: (id) => `all?id=${id}`,
      providesTags: ["orders"],
    }),

    orderDetails: builder.query<OrderDetailsResponseType, string>({
      query: (id) => id,
      providesTags: ["orders"],
    }),
  }),
});

export const {useNewOrderMutation,useUpdateOrderMutation,useDeleteOrderMutation,useMyOrdersQuery,useAllOrdersQuery,useOrderDetailsQuery} = orderAPI

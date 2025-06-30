import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  BarResponseType,
  LineResponseType,
  PieResponseType,
  StatsResponseType,
} from "../../types/api-types";

export const dashboardAPI = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/dashboard/`,
  }),
  endpoints: (builder) => ({
    stats: builder.query<StatsResponseType, string>({
      query: (id) => `stats?id=${id}`,
      keepUnusedDataFor: 0, // for revalidating admin panel when user||order||product or something is manipulated, providing tags doesn't work here
    }),

    pie: builder.query<PieResponseType, string>({
      query: (id) => `pie?id=${id}`,
      keepUnusedDataFor: 0,
    }),

    bar: builder.query<BarResponseType, string>({
      keepUnusedDataFor: 0,
      query: (id) => `bar?id=${id}`,
    }),

    line: builder.query<LineResponseType, string>({
      keepUnusedDataFor: 0,
      query: (id) => `line?id=${id}`,
    }),
  }),
});

export const { useStatsQuery, usePieQuery, useBarQuery, useLineQuery } =
  dashboardAPI;
// when we call these query we automatically get data in them, but if we want to use their lazy version we need a trigger to call these lazy ones

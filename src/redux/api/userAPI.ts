import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import type {
  AllUsersResponseType,
  DeleteUserRequestType,
  MessageResponse,
  UserResponseType,
} from "../../types/api-types";
import type { User } from "../../types/types";

export const userAPI = createApi({
  reducerPath: "userApi", // userAPI.reducerPath = "userApi"
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER}/api/v1/user/`,
  }),
  tagTypes: ["users"],
  endpoints: (builder) => ({
    
    login: builder.mutation<MessageResponse, User>({
      //mutation<datatype of response/output given by backend, datatype of request/input given to backend>
      query: (user) => ({
        url: "new",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["users"],
    }),

    deleteUser: builder.mutation<MessageResponse, DeleteUserRequestType>({
      query: ({ userId, adminUserId }) => ({
        url: `${userId}?id=${adminUserId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["users"],
    }),

    allUsers: builder.query<AllUsersResponseType, string>({
      query: (id) => `all?id=${id}`,
      providesTags: ["users"],
    }),
  }),
});
 
export const getUser = async (id: string) => {
  try {
    // console.log("ID being passed to API from frontend:", id);// Log to console for debugging
    const res = await axios.get(
      `${import.meta.env.VITE_SERVER}/api/v1/user/${id}`
    );
    const data: UserResponseType = res.data;
    // can also write this instead of above 2 lines:- const { data }: { data: UserResponseType } = await axios.get(`${import.meta.env.VITE_SERVER}/api/v1/user/${id}`);
    // console.log("this is get user data: ", data);// Log to console for debugging
    return data;
  } catch (error) {
    throw error;
  }
};

export const { useLoginMutation,useDeleteUserMutation,useAllUsersQuery } = userAPI;

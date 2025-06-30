import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserReducerInitialState } from "../../types/reducer-types";
import type { User } from "../../types/types";

const initialState: UserReducerInitialState = {  //  states
  user: null, 
  loading: true,  
};

export const userReducer = createSlice({
  name: "userReducer",  // name of the slice
  initialState,
  reducers: {
    userExist: (state, action: PayloadAction<User>) => {
      state.loading = false;
      state.user = action.payload;
    },
    userNotExist: (state) => {
      state.loading = false;
      state.user = null;
    },
  },
});

export const { userExist, userNotExist } = userReducer.actions;
// to use above functions, we use "dispatch" hook

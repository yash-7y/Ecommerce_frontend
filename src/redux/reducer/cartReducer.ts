import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartReducerInitialState } from "../../types/reducer-types";
import type { CartItemType, ShippingInfoType } from "../../types/types";

const initialState: CartReducerInitialState = {
  //  states
  loading: false,
  cartItems: [],
  subtotal: 0,
  tax: 0,
  shippingCharges: 0,
  discount: 0,
  total: 0,
  shippingInfo: {
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  },
};

// const calculatePrice = () => {};

export const cartReducer = createSlice({
  name: "cartReducer", // name of the slice
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItemType>) => {
      const item = action.payload;
      const existing = state.cartItems.find(
        (i) => i.productId === item.productId
      );

      if (existing) {
        if (existing.quantity < item.stock) existing.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }

      //   calculatePrice(state);
    },

    increment: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((i) => i.productId === action.payload);
      if (item && item.quantity < item.stock) item.quantity += 1;
      //   calculatePrice(state);
    },

    decrement: (state, action: PayloadAction<string>) => {
      const item = state.cartItems.find((i) => i.productId === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
      //   calculatePrice(state);
    },

    deleteFromCart: (state, action: PayloadAction<string>) => {
      state.cartItems = state.cartItems.filter(
        (i) => i.productId !== action.payload
      );
      //   calculatePrice(state);
    },

    calculatePrice: (state: CartReducerInitialState) => {
      state.subtotal = state.cartItems.reduce(
        (prevTotal, currItem) => prevTotal + currItem.price * currItem.quantity,
        0
      );
      state.tax = Math.round(state.subtotal * 0.18);
      if (state.subtotal > 1000) state.shippingCharges = 0;
      else state.shippingCharges = state.subtotal <= 0 ? 0 : 200;
      state.total =
        state.subtotal + state.tax + state.shippingCharges - state.discount;
    },

    discountApplied: (state, action: PayloadAction<number>) => {
      state.discount = action.payload;
    },
    saveShippingInfo: (state, action: PayloadAction<ShippingInfoType>) => {
      state.shippingInfo = action.payload;
    },
    resetCart: () => initialState,
  },
});

export const {
  addToCart,
  increment,
  decrement,
  deleteFromCart,
  calculatePrice,
  discountApplied,
  saveShippingInfo,
  resetCart,
} = cartReducer.actions;
// to use above actions, we use "dispatch" hook

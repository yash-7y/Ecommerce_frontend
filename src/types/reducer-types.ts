import type { CartItemType, ShippingInfoType, User } from "./types";

export type UserReducerInitialState = {
  user: User | null;
  loading: boolean;
};

export type CartReducerInitialState = {
  loading: boolean;
  cartItems: CartItemType[];
  subtotal: number;
  tax: number;
  shippingCharges: number;
  discount: number;
  total: number;
  shippingInfo: ShippingInfoType;
};
